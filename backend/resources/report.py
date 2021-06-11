from flask import Response, request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, ReportAlreadyExistsError, InternalServerError, UpdatingReportError, DeletingReportError, ReportNotExistsError
from database.models import Report, User

class ReportsApi(Resource):
    def get(self):
        reports = Report.objects().to_json()
        return Response(reports, mimetype="application/json", status=200)

    @jwt_required()
    def post(self):
         try:
             user_id = get_jwt_identity()
             body = request.get_json()
             user = User.objects.get(id=user_id)
             report =  Report(**body, added_by=user)
             report.save()
             user.update(push__reports=report)
             user.save()
             id = report.id
             return {'id': str(id)}, 200
         except (FieldDoesNotExist, ValidationError):
             raise SchemaValidationError
         except NotUniqueError:
             raise ReportAlreadyExistsError
         except Exception as e:
             raise InternalServerError

class ReportsUserApi(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        reports = Report.objects(added_by=user_id).to_json()
        return Response(reports, mimetype="application/json", status=200)

class ReportApi(Resource):
    @jwt_required()
    def put(self, id):
         try:
             user_id = get_jwt_identity()
             report = Report.objects.get(id=id, added_by=user_id)
             body = request.get_json()
             Report.objects.get(id=id).update(**body)
             return '', 200
         except InvalidQueryError:
             raise SchemaValidationError
         except DoesNotExist:
             raise UpdatingReportError
         except Exception:
             raise InternalServerError 

    @jwt_required()
    def delete(self, id):
        # get_jwt_identity() method returns the value encoded by create_access_token() which in our case is user.id.
        # So, we only delete/update the movie which is added_by the user who is sending the request to the application.
         try:
             user_id = get_jwt_identity()
             report = Report.objects.get(id=id, added_by=user_id)
             report.delete()
             return '', 200
         except DoesNotExist:
             raise DeletingReportError
         except Exception:
             raise InternalServerError

    def get(self, id):
         try:
             reports = Report.objects.get(id=id).to_json()
             return Response(reports, mimetype="application/json", status=200)
         except DoesNotExist:
             raise ReportNotExistsError
         except Exception:
             raise InternalServerError
