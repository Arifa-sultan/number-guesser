let min = 1,
    max = 10,
    winninNum = 2,
    guessesLeft = 3;

    // ui elements 
    const game = document.getElementById('game');
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessvalue = document.querySelector('.#guess-value'),
          guessinput = document.querySelector('.#guess-input'),
          message = document.querySelector('.message');

        //   assign ui min and max 
        minNum.textContent = min;
        maxNum.textContent = max;

        // listen for guess 
        guessvalue.addEventListener('click',function(){
            let guess = parseInt(guessinput.value);

            // Validite 
            if(isNaN(guess) || guess < min || guess> max){
                setmessage(`please enter a number between ${min} and ${max}`,'red');

            }
            // check if won 
            if(guess === winningNum){
// disable input 
guessinput.disabled = true;
// change border color 
guessinput.style.bordercolor = 'green';
// set message 
setmessage(`${winninNum} is correct , you win!` , 'green');
            }else{

            }
        });
        // set message 
        function setmessage(msg,color){
            message.style.color = color;
            message.textContent = msg;
        }
