import os
from flask_socketio import SocketIO, emit, disconnect
from flask import Flask
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config['SECRET_KEY']='dev'

my_socket = SocketIO(app, async_mode=None, cors_allowed_origins="*")

@my_socket.on('rotation')
def hello(data):
    print('rotation: ' + str(data['msg']))
	

@my_socket.on('on_connect')
def handle_message(data):
    print('received message: ' + str(data['msg']))

if __name__=='__main__':
    my_socket.run(app, debug=True)

