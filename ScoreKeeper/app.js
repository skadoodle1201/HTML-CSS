const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const p1Display = document.querySelector('#p1Dis');
const p2Display = document.querySelector('#p2Dis');
const resetBtn = document.querySelector('#rst')
const playTo = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;
let winnningScore = 3;
let isGame = false;


playTo.addEventListener('change',function(){
    winnningScore = parseInt(this.value);
    reset();
})

function reset (){
    isGame =false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Btn.disabled =false;
    p2Btn.disabled =false;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
}


p1Btn.addEventListener('click', function(){
    if(!isGame)
    {
        p1Score += 1 ;
        if(p1Score === winnningScore){
            isGame = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Btn.disabled =true;
            p2Btn.disabled =true;
        }
        p1Display.textContent = p1Score;
    } 
})
p2Btn.addEventListener('click', function(){
    if(!isGame)
    {
        p2Score += 1 ;
        if(p2Score === winnningScore){
            isGame = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Btn.disabled =true;
            p2Btn.disabled =true;
        }
        p2Display.textContent = p2Score;
    }    
})

resetBtn.addEventListener('click',reset)