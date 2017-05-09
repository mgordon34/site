#!/usr/bin/env/python

from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from pymongo import MongoClient
from mongo_dao import Dao

app = Flask(__name__)
api = Api(app)
client = MongoClient('localhost', 27017)
dao = Dao(client, 'test_database')

class HelloWorld(Resource):
    def get(self):
        return {'name': 'Hello, World!'}

class Player(Resource):
    def get(self):
        return dao.getplayer()

class Clear(Resource):
    def get(self):
        return dao.clear()

api.add_resource(HelloWorld, '/')
api.add_resource(Player, '/player')
api.add_resource(Clear, '/clear')

if __name__ == '__main__':
    app.run(host='192.168.56.101')
