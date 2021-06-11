from .admins import AdminsApi
from .users import UsersApi
from .auth import SignupApi, LoginApi
from .reset_password import ForgotPassword, ResetPassword
from .report import ReportsApi, ReportsUserApi , ReportApi
from .idcmodel import IdcModelApi
from .metastaticmodel import MetastaticModelApi
from .idcupload import IdcFileUpload
from .metastaticupload import MetastaticFileUpload
from .usercounthasmetastatic import CountUserHasMetastatic
from .usercountnormalmetastatic import CountUserNormalMetastatic
from .usercounthasidc import CountUserHasIdc
from .usercountnormalidc import CountUserNormalIdc
from .counthasmetastatic import CountHasMetastatic
from .countnormalmetastatic import CountNormalMetastatic
from .counthasidc import CountHasIdc
from .countnormalidc import CountNormalIdc
def initialize_routes(api):
    api.add_resource(ReportsApi, '/api/reports')
    api.add_resource(ReportApi, '/api/reports/<id>')

    api.add_resource(ReportsUserApi, '/api/userreports')

    api.add_resource(UsersApi, '/api/users')
    api.add_resource(AdminsApi, '/api/admins')

    api.add_resource(CountUserHasMetastatic, '/api/usercounthasmetastatic')
    api.add_resource(CountUserNormalMetastatic, '/api/usercountnormalmetastatic')
    api.add_resource(CountUserHasIdc, '/api/usercounthasidc')
    api.add_resource(CountUserNormalIdc, '/api/usercountnormalidc')

    api.add_resource(CountHasMetastatic, '/api/counthasmetastatic')
    api.add_resource(CountNormalMetastatic, '/api/countnormalmetastatic')
    api.add_resource(CountHasIdc, '/api/counthasidc')
    api.add_resource(CountNormalIdc, '/api/countnormalidc')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')
    
    api.add_resource(ForgotPassword, '/api/auth/forgot')
    api.add_resource(ResetPassword, '/api/auth/reset')

    api.add_resource(IdcModelApi, '/api/classifyidcimages')
    api.add_resource(MetastaticModelApi, '/api/classifymetastaticimages')
    
    api.add_resource(IdcFileUpload, '/api/uploadmetastaticimages')
    api.add_resource(MetastaticFileUpload, '/api/uploadidcimages')

