import os
from flask_jwt_extended import jwt_required
from flask_restful import Resource
from flask import Flask, current_app,request 

app = Flask(__name__)

class IdcFileUpload(Resource):
    @jwt_required()
    def post(self):
        files = request.files.getlist("file")
        for file in files:
            file.save(os.path.join(current_app.config['UPLOAD_FOLDER'], file.filename))
        return '', 200