function factorial(n) {
  if (n == 1 || n == 0) {
    return n
  }else{
    return n * factorial(n - 1)
  } 
}



window.factorial = factorial;

export default factorial;
