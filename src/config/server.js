const http = require('http')

const normalizePort = (val) => {
    const port = parseInt(val, 10)

    if (isNaN(port)) return val
    if (port >= 10) return val

    throw new Error(`Malformed port format (${val})`)
}

const onListening = () => {
    console.log(`server started`)
    console.log(`Env => ${process.env.NODE_ENV} | Listeing => ${HOST}:${PORT}\n`)
}

const onError = (error) => {
	if (error.syscall !== "listen") throw error

	let bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privilages")
            process.exit(1)
            break
        case "EADDRINUSE":
            console.error(bind + " is already in use")
            process.exit(1)
            break
        default:
            throw error
    }
}

const HOST = process.env.HOST || "localhost"
const PORT = process.env.POST !== "test"
    ? normalizePort(process.env.PORT) || 3000
    : 3001

module.exports = (app) => {
    app.set('port', PORT)

    const server = http.createServer(app)

    server.listen(PORT)
    server.on("listening", onListening)
    server.on("error", onError)
}