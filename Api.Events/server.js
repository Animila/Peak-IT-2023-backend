const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const server = async (fastify, options) => {
	fastify.post('/events', async (request, reply) => {
		try {
			const event = await prisma.event.create({
				data: request.body,
			})
			reply.send(event)
		} catch (error) {
			reply.status(500).send({ error: 'Ошибка при создании мероприятия' })
		}
	})

	// Получить список мероприятий
	fastify.get('/events', async (request, reply) => {
		const events = await prisma.event.findMany()
		reply.send(events)
	})
}
