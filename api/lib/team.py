
class Team(object):
  def __init__(self, name, players = [], rating = None):
    self.name = name
    self.players = players
    self.rating = rating

  def getjson(self):
    json_dict = {}

    json_dict['name'] = self.name
    json_dict['players'] = [player.getjson() for player in self.players]
    json_dict['rating'] = self.rating
    return json_dict
