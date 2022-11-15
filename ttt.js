const container = document.querySelector('.ttt-container');
const bar = document.querySelector('.bar');
const player = document.querySelector('.player');
let counter = 0;

let player1 = []
let player2 = []

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const boxes = document.querySelectorAll('.box');

function winner(player, array){
  boxes.forEach(box=>{box.removeEventListener('click', ()=>{})})
  console.log(array)
  bar.style.display = 'block'
  if(array.includes(1) && array.includes(2)){
    bar.style.top = '19%'
  }else if(array.includes(4) && array.includes(5)){
    bar.style.top = '50%'
  }else if(array.includes(7) && array.includes(8)){
    bar.style.top = '80%'
  }else if(array.includes(1) && array.includes(4)){
    bar.style.left = '-40%'
    bar.style.bottom = '50%'
    bar.style.transform = 'rotate(90deg)'
  }else if(array.includes(2) && array.includes(5)){
    bar.style.left = '-5%'
    bar.style.bottom = '50%'
    bar.style.transform = 'rotate(90deg)'
  }else if(array.includes(3) && array.includes(6)){
    bar.style.left = '28%'
    bar.style.bottom = '50%'
    bar.style.transform = 'rotate(90deg)'
  }else if(array.includes(1) && array.includes(5)){
    bar.style.bottom = '50%'
    bar.style.left = '-7%'
    bar.style.transform = 'rotate(50deg)'
  }else if(array.includes(3) && array.includes(5)){
    bar.style.bottom = '50%'
    bar.style.left = '-7%'
    bar.style.transform = 'rotate(135deg)'
  }


  setTimeout(()=>{
    alert(`${player} won`)
  },200)
}

boxes.forEach(box => {

    box.addEventListener('click', () => {
        if (box.textContent == '') {
            counter++
            if (counter % 2 === 0) {
                box.textContent = 'X'
                player.textContent = 'Player 1 Now (O)'
                player2.push(parseInt(box.getAttribute('data-num')))
            } else {
                box.textContent = 'O'
                player.textContent = 'Player 2 Now (X)'
                player1.push(parseInt(box.getAttribute('data-num')))
            }
        }
    
          if(
            (player1.includes(player1[0] + 3 ) && player1.includes(player1[0] + 6 )) ||
            (player1.includes(player1[0] - 3 ) && player1.includes(player1[0] - 6 )) ||
            (player1.includes(player1[0] - 3 ) && player1.includes(player1[0] + 3 )) 
            ){
            winner('Player 1', player1)
          }else if(
            (player1.includes(5) && player1.includes(1) && player1.includes(9)) ||
            (player1.includes(5) && player1.includes(3) && player1.includes(7)) 
          ){
            winner('Player 1', player1)
          }else if(
            ((player1[0] + 2) % 3 == 0  && player1.includes(player1[0] + 1) && player1.includes(player1[0] + 2) ) || 
            ((player1[0] + 2) % 3 - 1 == 0  && player1.includes(player1[0] + 1) && player1.includes(player1[0] - 1) ) || 
            ((player1[0] + 2) % 3 - 2 == 0  && player1.includes(player1[0] - 1) && player1.includes(player1[0] - 2) )  
           
          ){
            winner('Player 1', player1)
          }
          else if(
            (player2.includes(player2[0] + 3 ) && player2.includes(player2[0] + 6 )) ||
            (player2.includes(player2[0] - 3 ) && player2.includes(player2[0] - 6 )) ||
            (player2.includes(player2[0] - 3 ) && player2.includes(player2[0] + 3 )) 
            ){
            winner('Player 2')
          }else if(
            (player2.includes(5) && player2.includes(1) && player2.includes(9)) ||
            (player2.includes(5) && player2.includes(3) && player2.includes(7)) 
          ){
            winner('Player 2')
          }else if(
            ((player2[0] + 2) % 3 == 0  && player2.includes(player2[0] + 1) && player2.includes(player2[0] + 2) ) || 
            ((player2[0] + 2) % 3 - 1 == 0  && player2.includes(player2[0] + 1) && player2.includes(player2[0] - 1) ) || 
            ((player2[0] + 2) % 3 - 2 == 0  && player2.includes(player2[0] - 1) && player2.includes(player2[0] - 2) )  
           
          ){
            winner('Player 2')
          }
   
     

    })


})


