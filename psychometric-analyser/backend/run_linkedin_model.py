import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sea
import os
from tqdm.notebook import tqdm
import re
import tensorflow as tf
from tensorflow import keras
from keras.preprocessing.text import Tokenizer

from transformers import AutoTokenizer
from transformers import TFAutoModelForSequenceClassification


tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

num_classes = 2

model = TFAutoModelForSequenceClassification.from_pretrained(
    "bert-base-cased", 
    num_labels = num_classes, 
    id2label = {1:'Good', 0:"Bad"}, 
    label2id = {"Good":1, 'Bad':0},
    output_attentions = True)

model.compile(
    loss = keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer = keras.optimizers.Adam(learning_rate = 1e-5),
    metrics = ['accuracy'])

model.load_weights('./models/linkedin_model.h5')

def get_attention_words(input_ids, outputs):
    words = []
    for head in range(0, 12):
        sum_attention_scores = tf.reduce_sum(outputs[1][0][0][head], axis=-1)
        max_attention_token_index = tf.math.argmax(sum_attention_scores)

        # for token in max_attention_token_index[:5]:
        word = tokenizer.convert_ids_to_tokens([input_ids[0][max_attention_token_index]])
        if word[0] in ['[CLS]', '[PAD]', '.']:
            continue
        
        words.append(word[0])
    return np.unique(words)

def run_linkedin_model(input):
    input= ['Highly proficient in tech, I often prefer to work independently. While my expertise shines through in my work, I may not always be the most flexible team player.'] 
    
    # inputs = ["Tech-savvy with a flair for problem-solving. I tend to rely on my own skills to overcome obstacles, which can sometimes create challenges when working with others."]
    
    input_ids = tokenizer.encode(input[0].lower(), add_special_tokens=True, max_length=60, padding='max_length', return_tensors='tf')
    outputs = model(input_ids)
    pred = outputs[0]

    pred = tf.math.exp(pred)/tf.reduce_sum(tf.math.exp(pred))
    
    print(pred)
    
    print(get_attention_words(input_ids, outputs))


if __name__ == "__main__":
    run_linkedin_model(None)