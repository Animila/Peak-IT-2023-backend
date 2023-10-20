const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function usersRoutes(fastify, options) {
	// Declare a route
	fastify.get('/user/:id', async (request, reply) => {
		const userId = parseInt(request.params.id)
		if (isNaN(userId)) {
			reply.code(400).send({ error: 'Invalid user ID' })
			return
		}
		const user = await prisma.user.findUnique({ where: { id: userId } })
		if (!user) {
			reply.code(404).send({ error: 'User not found' })
			return
		}
		reply.send(user)
	})
}

module.exports = usersRoutes
