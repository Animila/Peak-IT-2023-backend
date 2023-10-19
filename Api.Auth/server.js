const { PrismaClient } = require('@prisma/client')

// Require the framework and instantiate it
const fastify = require('fastify')({
	logger: true,
})

fastify.register(require('./src/routes/usersRoutes'))
fastify.register(require('./src/routes/authRoutes'))

// Run the server!
fastify.listen(3000, '0.0.0.0', (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	// Server is now listening on ${address}
	console.log(`Server listening at ${address}`)
})
