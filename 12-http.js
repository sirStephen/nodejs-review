const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to our home page')
    }
    if (request.url === '/about') {
        response.end('Here is our short history')
    }
    response.end(`
        <h1>Oops!</h1>
        <p>Unavailable Page</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000)