const mongoose = require('mongoose')

const SuggestionSchema = new mongoose.Schema({
    title:{
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    author:{
        type: String,
        lowercase: true
    },
    suggestion:{
        type: String,
        lowercase: true,
        required: true
    },
    likes:{
        Number: 0
    },
    anonymous:{
        type: Boolean
    },
    timeCreated:{
        date: 'Date.now'
    }
})

module.exports = mongoose.model('suggestions', SuggestionSchema)