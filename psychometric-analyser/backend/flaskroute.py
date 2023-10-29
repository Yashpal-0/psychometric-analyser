from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app =  Flask(__name__)
CORS(app)

response ={
    "eligible" : False,
}
# app.run(debug=True)
@app.route('/', methods=['GET','POST'])
def hello():
    # print(request.get_json())
    return response