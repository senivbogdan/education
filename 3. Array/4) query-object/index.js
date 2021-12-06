function queryToObject(query) {
    const str = query.slice(1)
    const arr = str.split("&").map(i => i.split("="))
    const keys = []
    const values = []
    for (let i = 0; i < arr.length; i++) {
        keys.push(arr[i][0])
        values.push(arr[i][1])
    }
    for (let i = 0; i < values.length; i++) {
        if (values[i] === "true") values[i] = true
        else if (values[i] === "false") values[i] = false
        else if (values[i] === "null") values[i] = null
        else if (values[i] === "undefined") values[i] = undefined
        else if (values[i] / 1 === Number(values[i])) values[i] = Number(values[i])
    }
    const obj = {}
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i]
    }
    return obj
}
window.queryToObject = queryToObject;

export default queryToObject;
