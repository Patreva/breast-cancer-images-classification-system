class InternalServerError(Exception):
    pass

class SchemaValidationError(Exception):
    pass

class ReportAlreadyExistsError(Exception):
    pass

class UpdatingReportError(Exception):
    pass

class DeletingReportError(Exception):
    pass

class ReportNotExistsError(Exception):
    pass

class EmailAlreadyExistsError(Exception):
    pass

class UnauthorizedError(Exception):
    pass
class EmailDoesnotExistsError(Exception):
    pass

class BadTokenError(Exception):
    pass

errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
     "EmailDoesnotExistsError": {
          "message": "Couldn't find the user with given email address",
          "status": 400
      },
     "BadTokenError": {
          "message": "Invalid token",
          "status": 403
      },
     "SchemaValidationError": {
         "message": "Request is missing required fields",
         "status": 400
     },
     "ReportAlreadyExistsError": {
         "message": "Report with given name already exists",
         "status": 400
     },
     "UpdatingReportError": {
         "message": "Updating report added by other is forbidden",
         "status": 403
     },
     "DeletingReportError": {
         "message": "Deleting report added by other is forbidden",
         "status": 403
     },
     "ReportNotExistsError": {
         "message": "Report with given id doesn't exists",
         "status": 400
     },
     "EmailAlreadyExistsError": {
         "message": "User with given email address already exists",
         "status": 400
     },
     "UnauthorizedError": {
         "message": "Invalid username or password",
         "status": 401
     }
}