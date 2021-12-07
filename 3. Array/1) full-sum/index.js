function fullSum(...args) {
    try {
        if (args.length === 0) return 0
        let sum = args.reduce((prev,item)=>{
            return prev + item
        })
        if (args.every(item => typeof item === "number" )) return sum
        else throw new Error(e)
    } catch (e) {
        throw new Error(e)
    }
}

window.fullSum = fullSum;

export default fullSum;
