import mongoengine_goodjson as gj
from flask_bcrypt import generate_password_hash, check_password_hash
import datetime

from .db import db

#IntField
# strftime("%Y-%m-%d %H:%M")

class Report(gj.Document):
    breastcancer = db.StringField(required=True)
    name = db.StringField(required=True, unique=True)
    systemprediction = db.StringField(required=True)
    normalprobablity = db.FloatField(required=True)
    hasprobablity = db.FloatField(required=True)
    publish_date = db.DateTimeField(default=datetime.datetime.utcnow)
    added_by = db.ReferenceField('User')

class User(gj.Document):
    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    organization = db.StringField(required=True)
    isAdmin = db.BooleanField(required=True)
    country = db.StringField(required=True)
    county = db.StringField(required=True)
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    reports = db.ListField(db.ReferenceField('Report', reverse_delete_rule=db.PULL))

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')
    def check_password(self, password):
        return check_password_hash(self.password, password)

User.register_delete_rule(Report, 'added_by', db.CASCADE)