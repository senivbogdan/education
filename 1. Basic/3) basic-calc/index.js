function basicCalc(operation, a, b) {
  switch (operation) {
    case "+":
       return a + b
      break;
      case "-":
        return a - b
      break;
      case "*":
        return a * b
      break;
      case "/":
        return a / b
      break;
  default:
      break;
  }
}

window.basicCalc = basicCalc;

export default basicCalc;
