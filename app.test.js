// app.test.js
const holaMundo = require('./app');

test('debería devolver "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!");
});
