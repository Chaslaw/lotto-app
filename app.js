audioObj = new Audio('success-sound-effect.mp3')
const generate = document.querySelector('#generate');

generate.addEventListener('click', sortNumbers);
let drum = document.querySelector('.numbers');

function giveMeNumbers (numOne, numTwo) {

    while(drum.firstChild){
        drum.removeChild(drum.firstChild);
    }
    
    const arrNum = [];
  
    do{
        const x = Math.ceil(Math.random()*numTwo);
        
        if(!arrNum.includes(x)){
            arrNum.push(x);
        } else if (numTwo === ''){
            break;
        }
    
}while (arrNum.length < numOne);

  for(let i = 0; i < numOne; i++){
      let ball = document.createElement('div');
      ball.className = 'number';
      drum.appendChild(ball);
  }

return arrNum.sort(function(a, b)
        {return a - b;});
}

function sortNumbers (){

    let num1 = document.querySelector('#numberOne').value;
    let num2 = document.querySelector('#range').value;

    let sort = giveMeNumbers(num1, num2);

    let number = document.querySelectorAll('.number');
    
    for(let i = 0; i< sort.length; i++){
        if(num1 === '' || num2 === ''){
            alert('Please enter numbers')
              break;
        }else{
            audioObj.play();
            number[i].innerHTML = sort[i];
        }
     
    };
    
};