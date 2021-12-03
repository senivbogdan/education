function stringToType(str) {
  switch (str) {
    case "null":
      return null
    case "undefined" :
      return undefined
    case "true" :
      return true
    case "false" :
      return false
    case "" :
      return ""
    default : {
      return isNaN(str) ? str : Number(str)
    }
      break
  }
  // let kek = JSON.parse(str)
  // if (typeof kek === "number") return kek
}

window.stringToType = stringToType;

export default stringToType;
