const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    chat_id: int, 
    group_id: int,
    user_id: String
},{
    timestamps: true
});


module.exports = mongoose.model('Chats', ChatSchema);
