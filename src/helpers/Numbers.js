const Numbers = {
  padToThree: (number) => {
    return number <= 999 ? `00${number}`.slice(-3) : number
  }
}

export default Numbers
