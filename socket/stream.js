module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('socket đã chạy')
        socket.on('refresh', (data) => {
            console.log(data)
            io.emit('refreshPage')
        })
    })
}