function findPair(array) {
    return  [...array].sort((a, b) => a - b).find((item, index,array)=> item === array[index+1]) || null;
}

window.findPair = findPair;

export default findPair;
