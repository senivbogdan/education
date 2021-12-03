function isEqual(a, b) {
    if  (!a || !b) return false
    let kek
    for (kek in a) {
        if (a.hasOwnProperty(kek) ){
            if (a[kek] !== b[kek] || !b.hasOwnProperty(kek)){
                return false
            }
        }
    }
    for (kek in b){
        if (b.hasOwnProperty(kek)){
            if (a[kek] !== b[kek] || !a.hasOwnProperty(kek)){
                return false
            }
        }
    }
    return true
}

window.isEqual = isEqual;

export default isEqual;
