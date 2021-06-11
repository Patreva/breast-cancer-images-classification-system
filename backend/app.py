import os
from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin
from resources.errors import errors
from flask_mail import Mail
from database.db import initialize_db
# from os import environ
# from scipy.misc import imread, imsave
from flask import Flask, request, jsonify


app = Flask(__name__)

cors = CORS(app,resources={r'/*': {'origins': '*'}})
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['JWT_SECRET_KEY'] = 't1NP63m4wnBg6nyHYKfmc2TpCOGI4nss'

path = os.getcwd()
UPLOAD_FOLDER = os.path.join(path, 'uploads')

IDC_PATH = os.path.join(path, 'idcbreastcancermodel.h5')
METASTATIC_PATH = os.path.join(path, 'metastaticbreastcancermodel.h5')

if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['IDCMODELPATH'] = IDC_PATH
app.config['METASTATICMODELPATH'] = METASTATIC_PATH

# print(app.config['ROOT_DIR']) os.path.abspath(os.curdir)
app.config['MAIL_SERVER'] = "localhost"
app.config['MAIL_PORT'] = "1025"
app.config['MAIL_USERNAME'] = "support@movie-bag.com"
api = Api(app)

api = Api(app, errors=errors)

bcrypt = Bcrypt(app)

jwt = JWTManager(app)

mail = Mail(app)

from resources.routes import initialize_routes
 
app.config['MONGODB_SETTINGS'] = {
    'db': 'breastcancer',
    'username':'',
    'host': '',
    'password':''
}

initialize_db(app)

initialize_routes(api)