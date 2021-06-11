from flask_jwt_extended import jwt_required
from flask_restful import Resource
from flask import Response
from database.models import User

class UsersApi(Resource):
    @jwt_required()
    def get(self):
        users = User.objects(isAdmin=False).to_json()
        return Response(users, mimetype="application/json", status=200)