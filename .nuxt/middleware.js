const middleware = {}

middleware['i18n'] = require('../src/middleware/i18n.ts')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

export default middleware
