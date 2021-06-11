from flask import Response
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
from database.models import Report
from mongoengine.queryset.visitor import Q

class CountHasIdc(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        reports_count = Report.objects(Q(breastcancer="idc") & Q(systemprediction="has_idc")).count()
        return reports_count, 200