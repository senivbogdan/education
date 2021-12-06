function arraysSort(arr) {
    function findMax(arr) {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max
    }

    arr.sort((a, b) => {
        if (findMax(a) > findMax(b)) {
            return 1
        } else if (findMax(a) < findMax(b)) {
            return -1
        } else return 0
    })
    return [...arr]
}
window.arraysSort = arraysSort;

export default arraysSort;
