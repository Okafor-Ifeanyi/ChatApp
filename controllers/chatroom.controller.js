const mongoose = require('mongoose')
const Chatroom = mongoose.model('Chatroom')

exports.createChartroom = async (req, res) => {
    const { name } = req.body;

    const nameRegex = /[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) throw "Chatroom name can contain only Alphabets";

    const chatroomExists = await Chatroom.findOne({ name: name});

    if (chatroomExists) throw "Chatroom already exists";

    const chatroom = new Chatroom({name, OwnerID: req.payload.id});

    await chatroom.save();

    // console.log(req.payload.id)
    res.json({
        success: true,
        message: `Chatroom has been created`,
        details: chatroom
    })
}