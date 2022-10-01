 const numbers = document.querySelectorAll('.numbers');
 const result = document.querySelector('.result span');
 const signs = document.querySelectorAll('.sign');
 const equals = document.querySelector('.equals');
 const clear = document.querySelector('.clear');
 const negative = document.querySelector('.negative');
 const percent = document.querySelector('.percent');

 let firstValue = "";
 let isFirstValue = false;
 let secondValue = "";
 let isSecondValue = false;
 let sign ="";
 let resultValue = 0;

 for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getfirstValue(atr);
        }
        if(isSecondValu == false) {
            getSecondValue(atr);
        }
    })
 }               

function getfirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstvalue = +firstValue;
}

function getSecondValue() {
    if(firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
}
}

function getSign() {
    for(let i = 0; i < signs.lenght; i++) {
        signs [i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }    
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstvalue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue + secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstvalue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

 

})
function checkResultLenght() {
    resultValue = JSON.stringify(resultValue);

    if(resultValve.lenght >=8) {
        resultValue = JSON.parase(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(resultValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
    result.innerHTML = resultValve;
    }   

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(resultValue != "") {
        resultValue = -firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100
    }   

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    
    firstValue = "";
    isFirstValue = false;
    let secondValue = "";
    let isSecondValue = false;
    let sign = "";
    let resultValue = 0;

})