
class Player(object):
    def __init__(self, tag, team=None, name=None):
        self.tag = tag
        self.name = name
        self.team = team
        print('name: {}'.format(self.name))

    def getjson(self):
        json_dict = {}

        json_dict['name'] = self.name
        json_dict['tag'] = self.tag
        json_dict['team'] = self.team
        
        return json_dict
