from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json

from run_questions_model import run_questions_model
from run_linkedin_about import run_linkedin_about
from run_linkedin_model import run_linkedin_model

app =  Flask(__name__)
CORS(app)

response ={
    "eligible" : False,
}
# app.run(debug=True)
@app.route('/', methods=['GET','POST'])
def hello():
    return request.get_json()

@app.route('/get_linkedin_about', methods=['GET','POST'])
def get_linkedin_about():
    inputs = list(request.get_json().values())
    # about = run_linkedin_about(inputs[0])
    about = "I'm a passionate tech enthusiast who values sticking to my own path and principles, believing that they lead to genuine success in the world of technology. My approach is deeply rooted in my strong convictions, and I find that unwavering commitment to my own beliefs has consistently delivered results in my professional endeavors."
    print(inputs)
    run_linkedin_model(about)
    return request.get_json()

@app.route('/about_classification', methods=['POST'])
def about_classification():
    inputs = request.get_json()
    inputs = list(inputs.values())
    print(inputs)
    run_questions_model(inputs)
    return request.get_json()
