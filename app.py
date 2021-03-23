from flask_cors import CORS
from flask import Flask, request, render_template, jsonify
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

# General Flask variables 

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['GET', 'POST'])
def index(): 
    return render_template('index.html')

@app.route("/get_prices/", methods=['GET', 'POST'])
def get_crypto_prices():
    session = Session()
    session.headers.update(headers)
    try:
      response = session.get(url, params=parameters)
      # data = json.loads(response.text)
    except (ConnectionError, Timeout, TooManyRedirects) as e:
      print(e)
    return jsonify(response.text)


# @app.errorhandler(500)
# def server_error(e):
#     return render_template('error.html'), 500

if __name__ == '__main__':
  app.run(debug=False, port="8000")
   
   


