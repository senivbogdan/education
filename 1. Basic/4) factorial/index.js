function factorial(n) {
  let result = 1
  
  for (let i = 1; i <= n;i++) {
    
    result = result * i
    
  }
  return result

}
window.factorial = factorial;

export default factorial;
