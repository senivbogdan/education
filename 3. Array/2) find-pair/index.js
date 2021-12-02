function findPair(array) {
    const arr = array
    const sorted = arr.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) return (sorted[i])
    }
    return null
}

window.findPair = findPair;

export default findPair;
