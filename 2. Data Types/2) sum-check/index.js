function sumCheck(a, b) {
  let num = 2
  try {
      if (typeof a === typeof num && typeof b === typeof num) {
          return a + b
      }
      throw new Error("Wrong arguments type!")
  } catch (error) {
      throw new Error(error)
  }
}
window.sumCheck = sumCheck;

export default sumCheck;
