const express = require('express')
const router = express.Router()

const {getAllSuggestions, getSingleSuggestion, getSuggestionsByAuthor,createSuggestion, updateSuggestion, deleteSuggestion } = require('./controller/suggestionController')

router.get('/get-all-suggestions', getAllSuggestions)
router.get('/get-single-suggestion/:id', getSingleSuggestion)
router.get('/get-suggestions-by-author/:author', getSuggestionsByAuthor)
router.post('/create-suggestion', createSuggestion)
router.put('/update-suggestion/:id', updateSuggestion)
router.delete('/find-and-delete/:id', deleteSuggestion)

module.exports = router
//     - `GET /all-suggestions`
//    - `GET /single-suggestion`
//    - `POST /create-suggestion`
//    - `UPDATE /update-suggestion`

