function asyncSum(a, b) {
    return new Promise(((resolve, reject) => {
        setTimeout(()=> resolve(a + b),1000)
        if (typeof a !== "number" || typeof b !== 'number'){
            reject(new Error())
        }
    }))
}

window.asyncSum = asyncSum;

export default asyncSum;
