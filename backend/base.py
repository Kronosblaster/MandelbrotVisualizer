# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
import cv2
from flask import send_file
from flask import request
import image_gen
x = datetime.datetime.now()

img = cv2.imread('mandelbrot.jpg')

# Initializing flask app
app = Flask(__name__) 

@app.route('/data', methods=['GET'])

def home():
    data=(request.url.split("?")[1].split('px'))
    transform=[float(data[0]),float(data[1]),float(data[2])]
    scale=float(data[2])
    print(transform,scale)
    image_gen.main(transform,scale,'output.png')
    return send_file('output.png', mimetype='image/gif')

      
# Running app
if __name__ == '__main__':
    app.run(debug=True)