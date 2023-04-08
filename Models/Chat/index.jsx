const mongoose = require('mongoose');

const SupportChatSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  agentName: {
    type: String,
    required: true
  },
  agentEmail: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SupportChat', SupportChatSchema);