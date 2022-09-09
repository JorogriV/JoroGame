
var block_a = document.getElementById('block_a');
var block_b = document.getElementById('block_b');
var character = document.getElementById('character');
var jumping = 0;
var counter = 0;
var track = document.getElementById('track');
const main = document.querySelector('.main');
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block33 = document.getElementById('block33');



block_a.addEventListener('animationiteration', () =>{
    let random = ((Math.random()*300)-100);
    block_a.style.top = random + 'px';
    counter++
});
block_b.addEventListener('animationiteration', () =>{
    let random = ((Math.random()*300)-200);
    block_b.style.top = random + 'px';
    counter++
});
/*______________________гравитация+ условия проигрыша_______________________*/
setInterval(function (){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (jumping ==0) {
    character.style.top = (characterTop + 3) + 'px'}

    var block_aLeft =
    parseInt(window.getComputedStyle(block_a).getPropertyValue('Left'));
    var block_aTop =
    parseInt(window.getComputedStyle(block_a).getPropertyValue('top'));

    var block_bLeft =
    parseInt(window.getComputedStyle(block_b).getPropertyValue('Left'));
    var block_bTop =
    parseInt(window.getComputedStyle(block_b).getPropertyValue('top'));


    if (block_aLeft<410 && block_aLeft>405 || block_bLeft<410 && block_bLeft>405){
           sound ()
        }
    if (characterTop > 670 || block_aLeft<400 && block_aLeft>300 && 
       characterTop-500>block_aTop || block_aLeft<400 && block_aLeft>300 && 
       characterTop-300<block_aTop ||

       block_bLeft<400 && block_bLeft>300 && 
       characterTop-500>block_bTop || block_bLeft<400 && block_bLeft>300 && 
       characterTop-300<block_bTop){
        alert('Ты проебался! Твои очки: '+ counter);
        character.style.top = 200 + 'px';
        counter = 0;
    };
    if (characterTop > 660 && characterTop < 665) {
        sound2 ()
    }
},10)
    
/*______________________гравитация+ условия проигрыша_______________________*/


function jump () {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if ((characterTop>6) && (jumpCount<15))
        {character.style.top = (characterTop - 4.5) + 'px'}
        if (jumpCount>20) {
          clearInterval(jumpInterval);
          jumping = 0;
          jumpCount = 1;
        }
        jumpCount++;
    },10)
}

function sound(){
    const audio = new Audio();
    audio.src = 'foto/ha.mp3';
    audio.play()
}

function sound1(){
    const audio = new Audio();
    audio.src = 'foto/track1.mp3';
    audio.play()
};

function sound2(){
    const audio = new Audio();
    audio.src = 'foto/track2.mp3';
    audio.play()
};


main.onclick = sound1;

