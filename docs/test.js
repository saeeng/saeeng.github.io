function getPoints(n) {
  let sum = 0
  for (let i = 1; i < n; i++) {
    sum = sum + (n - i) * (n - i)
    if (i % 2 == 0) {
      sum = sum + (n - i) * (n - i)
    }
  }
  return sum
}

console.log(getPoints(4))
