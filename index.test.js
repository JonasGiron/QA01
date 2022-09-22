const test = require('tape')
const index = require('./index')
	
test('teste 1', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5, "Descontou corretamente")
    t.end()  
})

