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


tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

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

model.load_weights('./models/psychometric_model.h5')

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

def run_questions_model(input):
    # input= ['I excel in technology but am reluctant to seek help or collaborate. My ego is my guiding force, overshadowing any potential for growth through collective efforts.'] 
    for i, answer in enumerate(input):
        answer = f"start {i} {answer.lower()} end {i}"
        input_ids = tokenizer.encode(answer, max_length=40, padding='max_length', return_tensors='tf')
        input_ids = tf.stop_gradient(input_ids)
        outputs = model(input_ids)
        pred = outputs[0]

        pred = tf.math.exp(pred)/tf.reduce_sum(tf.math.exp(pred))
        
        print(pred.numpy())
        
    # print(get_attention_words(input_ids, outputs))


# if __name__ == "__main__":
#     main()