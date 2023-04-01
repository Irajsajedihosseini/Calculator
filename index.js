var displayContent = document.querySelector(".input");
var btnDelete = $(".del-btn");
var btnAdd = $(".add-btn");
var btnSubtract = $(".subtract-btn");
var btnDivide = $(".divide-btn");
var btnMultiply = $(".multiply-btn");
var btnReset = $(".reset-btn");
var btnEqual = $(".equal-btn");
var btnNumbers = $(".numbers-btn");
var pointBtn = $(".point-btn");
var opBtns = $(".op");
var numbersbtnText = $(".numbersbtn-text");
var firstToggle = $("#first");
var secondToggle = $("#second");
var thirdToggle = $("#third");
var mainContainer = $("#Main-container");
var rows = $("#Theme,#Display,#Numbers");
console.log(rows);
var body = $("body");
displayContent.value = "0.0";
//console.log(btnNumbers);
// displayContent.disabled = true;
var op;
var firstNumber;
var secondNumber;
var result;
/*Numbers Buttons Functionality*/

function numbersClick(number) {
  displayContent.focus();
  if (displayContent.value == "0.0") {
    displayContent.value = number.textContent;
  } else {
    displayContent.value += number.textContent;
  }
}

btnNumbers.click((e) => {
  numbersClick(e.target);
});

/*Point Button Functionality*/

function pointbtnClick(pointbtn) { 
  console.log(pointbtn);
  if (displayContent.value == "0.0" || displayContent.value == "") {
    alert("Sorry, you can't enter ( . ) as first character! ");
  } else if (displayContent.value != "" && displayContent.value.includes(".")) {
    alert("Sorry, you can't enter ( . ) character more than once! ");
  } else {
    displayContent.value += pointbtn.textContent;
  }
}

pointBtn.click(function (e) {
  pointbtnClick(e.target);
});

/*Reset Button Functionality*/

btnReset.click(() => {
  displayContent.value = "0.0";
});

/*Delete Button Functionality*/

btnDelete.click(() => {
  var currentValue = displayContent.value;
  displayContent.value = currentValue.substring(0, currentValue.length - 1);
});

/*Operation Buttons Functionality */

function operation(operator) { 
  if (displayContent.value != "") {
    firstNumber = Number(displayContent.value);
    op = $(operator).attr("value");
    displayContent.value = "";
    console.log(op);
  } else {
    alert("You can't enter operator as first!!");
  }
}

opBtns.click(function () {
  operation(this);
});

/*Equal Button Functionality*/

function equal(firstnumber, operator, secondnumber) {
  switch (operator) {
    case "-":
      result = firstnumber - secondnumber;
      break;
    case "+":
      result = firstnumber + secondnumber;
      break;
    case "/":
      result = firstnumber / secondnumber;
      break;
    case "*":
      result = firstnumber * secondnumber;
      break;
  }
  // console.log(firstNumber);
  // console.log(secondNumber);
  // console.log(op);
  // console.log(result);
  return result;
}

function equalbtnClick() { 
  if (displayContent.value != "") {
    secondNumber = Number(displayContent.value);
    displayContent.value = equal(firstNumber, op, secondNumber);
    op = "";
  }
};

btnEqual.click(function () {
   equalbtnClick();
});

/*Keyboard*/

$(document).keypress(function (e) {

  if (e.key === "Enter") {
    btnEqual.click();
  }

  if (e.key === ".") { 
    pointBtn.click();
  }

  if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  ) {
    Array.from(opBtns);
    for (let i = 0; i < opBtns.length; i++) {
      var item = opBtns[i];

      if (item.value == e.key) {
        // console.log(item);
        item.click();
        // operation(item);
        break;
      }
    }
  }  

    Array.from(btnNumbers);
    for (let i = 0; i < btnNumbers.length; i++) {
      var item = btnNumbers[i];
   
      if (item.textContent == e.key) {
        // console.log(item);
        item.click();
        break;
      }
    }
    e.preventDefault();

});


/* Theme Change*/

function resetequalBtn() { 
    btnEqual
      .removeClass("thrd-equal-btn")
      .removeClass("thrd-equal-btn:hover")
      .addClass("equal-btn")
      .addClass("equal-btn:hover");
    btnReset
      .removeClass("thrd-reset-btn")
      .removeClass("thrd-reset-btn:hover")
      .addClass("reset-btn")
      .addClass("reset-btn:hover");
}

window.onload = function firstthemeOnload() {
  firstToggle.click();
} 

/* First Theme*/

firstToggle.click(function (e) { 
  secondToggle.checked = false;
  thirdToggle.checked = false;
  firstToggle.checked = true;
 
  body
    .addClass("first-theme-body")
    .removeClass("second-theme-body")
    .removeClass("third-theme-body");
    mainContainer
      .addClass("main-container")
      .removeClass("main-container-thrd-theme")
      .removeClass("main-container-sec-theme");
    rows
      .addClass("theme-display-numbers-row-first")
      .removeClass("theme-display-numbers-row-sec")
      .removeClass("theme-display-numbers-row-thrd");
  
    numbersbtnText
      .addClass("numbers-text")
      .removeClass("sec-numbers-text")
      .removeClass("thrd-numbers-text");  
    btnNumbers
      .addClass("btn")
      .addClass("btn:hover")
      .removeClass("sec-theme-btn")
      .removeClass("sec-theme-btn:hover")

      .removeClass("thrd-theme-btn")
      .removeClass("thrd-theme-btn:hover");
    opBtns
      .addClass("btn")
      .addClass("btn:hover")
      .removeClass("sec-theme-opbtns")
      .removeClass("sec-theme-opbtn:hover")
      .removeClass("thrd-theme-opbtns")
      .removeClass("thrd-theme-opbtn:hover");
    pointBtn
      .addClass("btn")
      .addClass("btn:hover")
      .removeClass("sec-theme-opbtns")
      .removeClass("sec-theme-opbtn:hover")
      .removeClass("thrd-theme-opbtns")
      .removeClass("thrd-theme-opbtn:hover");
  
  
  resetequalBtn();
});

/* Second Theme*/

btnNumbers.hover(() => { 
  numbersbtnText.css.color( "#050801");
});

secondToggle.click(function () { 
  secondToggle.checked = true;
  thirdToggle.checked = false;
  firstToggle.checked = false;

  body
    .addClass("second-theme-body")
    .removeClass("first-theme-body")
    .removeClass("third-theme-body");
  mainContainer
    .addClass("main-container-sec-theme")
    .removeClass("main-container")
    .removeClass("main-container-thrd-theme");
  rows
    .addClass("theme-display-numbers-row-sec")
    .removeClass("theme-display-numbers-row-thrd")
    .removeClass("theme-display-numbers-row-first");
  
    numbersbtnText
      .addClass("sec-numbers-text")
      .removeClass("numbers-text")
      .removeClass("thrd-numbers-text");    
  
  btnNumbers
    .addClass("sec-theme-btn")
    .addClass("sec-theme-btn:hover")
    .removeClass("thrd-theme-btn")
    .removeClass("thrd-theme-btn:hover")
    .removeClass("btn")
    .removeClass("btn:hover");
  opBtns
    .addClass("sec-theme-opbtns")
    .addClass("sec-theme-opbtn:hover")
    .removeClass("thrd-theme-opbtns")
    .removeClass("thrd-theme-opbtn:hover")
    .removeClass("btn")
    .removeClass("btn:hover");
  pointBtn
    .addClass("sec-theme-opbtns")
    .addClass("sec-theme-opbtn:hover")
    .removeClass("thrd-theme-opbtns")
    .removeClass("thrd-theme-opbtn:hover")
    .removeClass("btn")
    .removeClass("btn:hover");
  
    resetequalBtn();

});

/* Third Theme*/

thirdToggle.click(function () {
  secondToggle.checked = false;
  thirdToggle.checked = true;
  firstToggle.checked = false;
  body
    .addClass("third-theme-body")
    .removeClass("first-theme-body")
    .removeClass("second-theme-body");
  mainContainer
    .addClass("main-container-thrd-theme")
    .removeClass("main-container-sec-theme")
    .removeClass("main-container"); 
  rows
    .addClass("theme-display-numbers-row-thrd")
    .removeClass("theme-display-numbers-row-sec")
    .removeClass("theme-display-numbers-row-first");
 
    numbersbtnText
      .addClass("thrd-numbers-text")
      .removeClass("numbers-text")
      .removeClass("sec-numbers-text");  
   
  btnNumbers
    .addClass("thrd-theme-btn")
    .addClass("thrd-theme-btn:hover")
    .removeClass("sec-theme-btn")
    .removeClass("sec-theme-btn:hover")
    .removeClass("btn")
    .removeClass("btn:hover");
  opBtns
    .addClass("thrd-theme-opbtns")
    .addClass("thrd-theme-opbtn:hover")
    .removeClass("sec-theme-opbtns")
    .removeClass("sec-theme-opbtn:hover")
    .removeClass("btn")
    .removeClass("btn:hover");
  pointBtn
    .addClass("thrd-theme-opbtns")
    .addClass("thrd-theme-opbtn:hover")
    .removeClass("sec-theme-opbtns")
    .removeClass("sec-theme-opbtn:hover")
    .removeClass("btn")
    .removeClass("btn:hover");
  btnEqual
    .addClass("thrd-equal-btn")
    .addClass("thrd-equal-btn:hover")
    .removeClass("equal-btn")
    .removeClass("equal-btn:hover");
  btnReset
    .addClass("thrd-reset-btn")
    .addClass("thrd-reset-btn:hover")
    .removeClass("reset-btn")
    .removeClass("reset-btn:hover");
});