from pymongo import MongoClient
from test import Test
from player import Player
from team import Team

class Dao(object):
    def __init__(self, client, db_name='test_database'):
        self.db = client.test_database

    def getplayer(self):

        matt = Player('Poujakar', 'GT Overwatch', 'Matt Gordon')
        gt = Team('GT Overwatch', [matt])
        result = self.db.players.insert_one(matt.getjson())
        print('result: {}'.format(result))
        result = self.db.teams.insert_one(gt.getjson())
        print('result: {}'.format(result))

        return {'tag': self.db.teams.find_one(
            {'name': 'GT Overwatch'})['players'][0]['tag']}

    def clear(self):
        print(self.db.players.delete_many({}))
        print(self.db.teams.delete_many({}))
        return 'done'
