function palindromeTest (str) {
  let len = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[len]) {
      return false
    }
    len--
  }
  return true
}
console.log(palindromeTest('babb'))

function checkPalindrome () {
  const pali = document.getElementById('text-area').value
  const isPalindrome = palindromeTest(pali)
  const ema = document.getElementById('result')
  if (isPalindrome) {
    ema.innerHTML = 'the text entered is a palinndrome'
  } else {
    ema.innerHTML = 'sorry,it is not a palindrome'
  }
}
checkPalindrome()
