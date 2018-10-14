const appRoot = require('app-root-path')
const format  = require('date-fns/format')

module.exports = () => {

    global.ROOT = appRoot.path

    global.APP_NAME = "node-boilerplate"

    global.DATE_NOW = (formatDate) => getUTCDate(formatDate)

}

function getUTCDate(formatDate) {
    const dateString = Date.now()
    const date = new Date(dateString)

    const utcFormat = new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    )

    return format(utcFormat, formatDate)
}