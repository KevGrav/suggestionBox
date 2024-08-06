const Suggestion = require('../model/Suggestion') //pulls in schema

// - `getAllSuggestions`
async function getAllSuggestions(req, res){
    try {
        const foundSuggestions = await Suggestion.find()
        res.json({message: "Suggestions Found", payload: foundSuggestions})   
    } catch (error) {
        return error
    }
}

// - `getSingleSuggestion` - get one suggestion based on id using parameters
async function getSingleSuggestion(req, res){
    try {
        const foundSuggestion = await Suggestion.find(req.params.id)
        res.json({message: "Suggestion Found", payload: foundSuggestion})   
    } catch (error) {
        return error
    }
}

// - `createSuggestion` - does not need id or time from the user
async function createSuggestion(req, res){
    try {
        const newSuggestion = await new Suggestion({...req.body}) //short cut, instead of using the user object
        res.json({message: "Suggestion Created", payload: newSuggestion})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

// - `updateSuggestion` - the user can only update title and suggestion
async function updateSuggestion(req, res){
    try {
        const updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
        res.json({message: "Suggestion Updated", payload: updatedSuggestion})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

// - `deleteSuggestion` - suggestion deletes based on id

async function deleteSuggestion(req, res){
    try {
       const deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id)
       res.json({message: "Suggestion Deleted", payload: deletedSuggestion})  
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

// **Stretch Goal:**
// - getSuggestionsByAuthor - req.query.author
async function getSuggestionsByAuthor(req, res){
    try {
        const foundSuggestions = await Suggestion.find(req.query.author)
        res.json({message: "Suggestions Found", payload: foundSuggestions})   
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    getSuggestionsByAuthor,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion
}