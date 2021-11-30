function searchString(obj) {
  if (Object.keys(obj).length == 0) {
    return ""
}else {
    
  } 
  for (const value in obj) {
    if (obj[value] === undefined || obj[value] === null || obj[value] === "")  {
    delete obj[value]
  }
  }
  let arr = []
  
  for (const value in obj) {
    let str = `${value}=${obj[value]}&`
      arr.push(str)
     
  }

  let str = arr.join("").slice(0, -1)
   let sre = `?${str}` 
  
  return sre
}

window.searchString = searchString;

export default searchString;
