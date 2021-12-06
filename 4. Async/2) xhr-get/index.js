function xhrGet(url) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.responseType = "json"
    xhr.send()
    return new Promise((resolve, reject) => {
        if (xhr.status >= 400) {
            reject(xhr.response)
        } else resolve(xhr.response)
    })
}

window.xhrGet = xhrGet;

export default xhrGet;
