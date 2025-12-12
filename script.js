console.log('Before binding event');

// bind
let txtInput = document.querySelector('#txtInput');
let btnReplaceAll = document.querySelector('#btnReplaceAll');
let txtOutput = document.querySelector('#txtOutput');
let txtInput2 = document.querySelector('#txtInput2');
let btnCounter = document.querySelector('#btnCounter');
let txtOutput2 = document.querySelector('#txtOutput2');

btnCounter.addEventListener('click', function () {
    let str = txtInput2.value.trim();  
    let count = str.length;            
    txtOutput2.innerText = count;     
    console.log(count);
});


btnReplaceAll.addEventListener('click',function(){
    let str = txtInput.value;
    let result = str.replaceAll(" ", "");
    txtOutput.innerText = result;
    console.log(result);


});
