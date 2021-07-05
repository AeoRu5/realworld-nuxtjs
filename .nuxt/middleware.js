const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['noslug'] = require('..\\middleware\\noslug.js')
middleware['noslug'] = middleware['noslug'].default || middleware['noslug']

middleware['notAuthenticated'] = require('..\\middleware\\notAuthenticated.js')
middleware['notAuthenticated'] = middleware['notAuthenticated'].default || middleware['notAuthenticated']

export default middleware
