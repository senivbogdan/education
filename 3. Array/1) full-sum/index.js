function fullSum(...args) {
    try {
        console.log(args)
        if (args.length === 0) return 0
        if (args.includes(undefined) || args.includes(false) ||
            args.includes([]) || args.includes("1")) {
            throw new Error("Wrong Argument Type")
        }
        let flag = 0
        for (let i = 0; i < args.length; i++) {
            if (args[i].length === 0) {
                flag = flag + 1
            }
        }
        if (flag != 0) {
            throw new Error("Wrong Argument Type")
        }
        let array = args
        let sum = 0
        array.forEach((item) => {
            sum += item
        })
        // if (typeof arr != "number") throw new Error("Wrong Argument Type")
        return sum
    } catch (e) {
        throw new Error(e)
    }
}

window.fullSum = fullSum;

export default fullSum;
