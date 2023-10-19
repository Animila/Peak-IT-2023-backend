const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')

async function authRoutes(server, options) {
	// Declare a route
	server.post('/register', async (request, reply) => {
		const data = request.body
		console.log(data.username)
		if (typeof data.username !== 'string' || data.username.trim() === '') {
			reply.code(400).send({ type: 'username', error: 'не найден логин' })
			return
		}
		if (typeof data.password !== 'string' || data.password.trim() === '') {
			reply.code(400).send({ type: 'password', error: 'не найден пароль' })
			return
		}
		if (typeof data.first_name !== 'string' || data.first_name.trim() === '') {
			reply.code(400).send({ type: 'first_name', error: 'не найден имя' })
			return
		}
		if (typeof data.last_name !== 'string' || data.last_name.trim() === '') {
			reply.code(400).send({ type: 'last_name', error: 'Не найден фамилия' })
			return
		}

		// Check if the username is already in use
		console.log(data)
		const existingUser = await prisma.user.fin({
			where: { login: data.username },
		})
		console.log(existingUser)
		if (existingUser) {
			reply.code(400).send({ error: 'Username is already taken' })
			return
		}

		// Create a new user
		const newUser = await prisma.user.create({
			data: {
				login: data.username,
				password: data.password,
				first_name: data.first_name,
				last_name: data.last_name,
				birthday: new Date(data.birthday),
				country: data.country,
				email: data.email,
				tel: data.tel,
			},
		})

		// Generate an access token for the newly registered user
		const accessToken = jwt.sign(
			{ userId: newUser.id },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: '4d',
			}
		)
		const refreshToken = jwt.sign(
			{ userId: newUser.id },
			process.env.REFRESH_TOKEN_SECRET
		)

		const data_expires = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)

		await prisma.session.create({
			data: {
				accessToken,
				refreshToken,
				expires: data_expires,
				user: {
					connect: {
						id: newUser.id,
					},
				},
			},
		})
		reply.send({
			accessToken: accessToken,
			refreshToken: refreshToken,
			expires: data_expires,
		})
	})
}

module.exports = authRoutes
