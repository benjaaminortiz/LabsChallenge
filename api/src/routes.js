const {Router} = require ('express')
const router = Router()
const axios = require ('axios')

router.get('/search',  (req, res) => {
	const q = req.query.query
	 axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
	.then(response => {
		res.send(response.data.results)
	})
})

module.exports = router