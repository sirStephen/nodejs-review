// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require('./4-names')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi(john)
sayHi(peter)