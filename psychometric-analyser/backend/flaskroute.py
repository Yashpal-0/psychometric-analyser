from flask import Flask, request, jsonify
app =  Flask(__name__)

data ={
    "message": "",
    "question": ""
}

@app.route('/')
def hello():
    return "<h1>Hello World!</h1>"

@app.route('/quiz')
def quiz():
    return data