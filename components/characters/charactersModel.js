const mongoose  = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    player: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    system: {
        type: String
    },
    systemName: {
        type: String
    },
    charData: {
        type: mongoose.SchemaTypes.Mixed
    }
});

module.exports = mongoose.model('Character', CharacterSchema);