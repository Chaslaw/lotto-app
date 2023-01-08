const eachNumber = document.querySelectorAll('.number');
const generate = document.querySelector('#generate');

generate.addEventListener('click', sortNumbers);

function giveMeNumbers (numOne, numTwo) {

    const arrNum = [];
  
    do{
        const x = Math.ceil(Math.random()*numTwo);
        
        if(!arrNum.includes(x)){
            arrNum.push(x);
        } else if (numTwo === ''){
            break;
        }
    
}while (arrNum.length < numOne);

return arrNum.sort(function(a, b)
        {return a - b;});
}

function sortNumbers (){

    let num1 = document.querySelector('#numberOne').value;
    let num2 = document.querySelector('#range').value;

    let sort = giveMeNumbers(num1, num2);
    
    for(let i = 0; i< sort.length; i++){
        if(num1 === '' || num2 === ''){
            alert('Please enter numbers')
              break;
        }else{
            eachNumber[i].innerHTML = sort[i];
        }
     
    };

};