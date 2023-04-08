import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import mongoose from 'mongoose';

const socket = io('http://localhost:3000');

  async () => mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const messageSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
});

let Message;
try {
  Message = mongoose.model('Message');
} catch (e) {
  Message = mongoose.model('Message', messageSchema);
}

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', async (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);

      const newMessage = new Message({ text: data });
      await newMessage.save();
    });
  }, []);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <style jsx>{`
        .messages {
          height: 200px;
          overflow: scroll;
          border: 1px solid black;
        }
        .message {
          padding: 8px;
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
}

export default Chat;