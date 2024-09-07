from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    data = {
        'name': 'harish',
        'age': 25
    }
    return jsonify(data), 200 

if __name__ == '__main__':
    app.run(debug=True)