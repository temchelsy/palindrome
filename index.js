// Exercise 1

let box = document.getElementById ("contain-num")

function primeNum(numb){
    if (numb <=1) {
        return false
    }
    for ( let i= 2; i < numb; i++) {
        if (numb % i === 0) {
            return  false
        }
    }
    return true

}

for (let i = 1; i <= 100; i++)  {
    let boxNum = document.createElement('div');
    boxNum.className = 'boxnum';
    boxNum.textContent = i;
    if (i % 2 == 0) {
        boxNum.classList.add('even')
    } else {
        boxNum.classList.add('odd')
    }
    if (primeNum(i)) {
        boxNum.classList.add('prime')
    }
    box.appendChild(boxNum);
}



