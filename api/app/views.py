from app import app
from lib.movies import list_movies
from flask import jsonify

@app.route('/')
@app.route('/index')
def index():
    return "Hello from the api!"

@app.route('/movies', methods=['GET'])
def movies():
  return jsonify({'movies': list_movies('/home/matt/vods/')})
