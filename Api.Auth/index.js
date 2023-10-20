const express = require('express')
const mongoose = require('mongoose')
const POST = process.env.PORT || 3000
const app = express()

const start = async () => {
	try {
		await mongoose.connect('mongodb://mongodb:27017/your-database-name')
		app.listen(PORT, () => console.log('Запущен'))
	} catch(e) {
		console.log(e)
	}
}

start()