import os
import numpy as np
from flask_jwt_extended import jwt_required
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Conv2D, MaxPooling2D, Flatten
from flask_restful import Resource
from flask import Flask, current_app

from keras.preprocessing import image
from PIL import Image

app = Flask(__name__)

class MetastaticModelApi(Resource):
    @jwt_required()
    def post(self):
        # unique_filename = str(uuid.uuid4())
        # path = os.path.join(current_app.config['UPLOAD_FOLDER'], unique_filename)
        # os.mkdir(path)

        kernel_size = (3,3)
        pool_size= (2,2)
        first_filters = 32
        second_filters = 64
        third_filters = 128

        dropout_conv = 0.3
        dropout_dense = 0.3


        model = Sequential()
        model.add(Conv2D(first_filters, kernel_size, activation = 'relu', input_shape = (96, 96, 3)))
        model.add(Conv2D(first_filters, kernel_size, activation = 'relu'))
        model.add(Conv2D(first_filters, kernel_size, activation = 'relu'))
        model.add(MaxPooling2D(pool_size = pool_size)) 
        model.add(Dropout(dropout_conv))

        model.add(Conv2D(second_filters, kernel_size, activation ='relu'))
        model.add(Conv2D(second_filters, kernel_size, activation ='relu'))
        model.add(Conv2D(second_filters, kernel_size, activation ='relu'))
        model.add(MaxPooling2D(pool_size = pool_size))
        model.add(Dropout(dropout_conv))

        model.add(Conv2D(third_filters, kernel_size, activation ='relu'))
        model.add(Conv2D(third_filters, kernel_size, activation ='relu'))
        model.add(Conv2D(third_filters, kernel_size, activation ='relu'))
        model.add(MaxPooling2D(pool_size = pool_size))
        model.add(Dropout(dropout_conv))

        model.add(Flatten())
        model.add(Dense(256, activation = "relu"))
        model.add(Dropout(dropout_dense))
        model.add(Dense(2, activation = "softmax"))
        model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

        # load weights into new model
        model.load_weights(current_app.config['METASTATICMODELPATH'])
        # with app.app_context():
        res = dict()
        respredictions = dict()
        classes = ['no_met_tissue', 'has_met_tissue']
        for filename in os.listdir(current_app.config['UPLOAD_FOLDER']):
            #Image Preprocesing
            has_idc_file = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
            has_idc_img = image.load_img(has_idc_file, target_size=(96, 96))
            has_idc_img = image.img_to_array(has_idc_img)
            has_idc_img = np.expand_dims(has_idc_img, axis=0)
            has_idc_img = has_idc_img/255
            #Perform predictions with pre-trained model
            # {"object_identified":classes[np.argmax(prediction[0])]}
            # {"predictiondetails":res, "predictions":respredictions}
            prediction = model.predict(has_idc_img)

            respredictions[filename] = classes[np.argmax(prediction[0])]
            
            res[filename] = prediction.tolist()

        # os.chmod(os.path.join(current_app.config['UPLOAD_FOLDER'], unique_filename), 0o777)

        # os.remove(os.path.join(current_app.config['UPLOAD_FOLDER']))
        return {'predictiondetail': res, 'systemprediction': respredictions}, 200


