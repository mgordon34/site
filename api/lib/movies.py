from os import listdir
from os.path import isfile, join
import json

def list_movies(path):
    movies = []
    for f in listdir(path):
        if isfile(join(path, f)):
          movies.append(f.split('.')[0])
    return movies
