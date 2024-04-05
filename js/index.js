// let h = document.querySelector('.hh')

// let i = document.querySelector('.inp')

// let b = document.querySelector('.but')

// let bo = document.querySelector('body')

// let h2 = document.createElement("h2")



// function Add(){
// h2.innerText=i.value
// }

// b.addEventListener('click', Add)
// bo.appendChild(h2)

//-----------------------

// let arr =[2,35,213]

// arr.forEach(function(value, index, arr){
    // console.log(value);
    // console.log(index);
    // console.log(arr);
// });

// let araMap = arr.map((value) => value + `popopo`)

// console.log(araMap);

// let arr1 = [12,13,14,15]

// let arr2 = arr1.map((num) => num + `pppp`)

// console.log(arr2);

//----------------

// let arr = ['bir', 'iki', 'uc', 'dord', 'bes','alti','yeddi','sesiz','doqquz','on']


// let random = Math.floor(Math.random() * arr.length);

// let ran = arr[random]



// console.log(arr);

// console.log(random);

// console.log(ran);

//------------------------

// let input = document.querySelector('.guess')

// let choose = document.querySelector('.choose')

// let result = document.querySelector('.result')

// let random = Math.floor(Math.random() * 100 + 1)
    
// console.log(random);


// choose.addEventListener('click', function () {

//     let inp = input.value
//     if (inp == random) {
//         result.innerHTML = `Congrutelation`
//     }else if (random > inp) {
//         result.innerHTML = `Kicikdir`
//     }else if (random < inp){
//         result.innerHTML = `Yuksekdir`
//     }

//     inp.value = ''
// })

//---------------------------------

// let worlds = ['apple', 'lemon', 'grape', 'peach', 'melon'];

// let random = Math.floor(Math.random() * worlds.length);

// let ran = worlds[random];

// let answer = [];

// console.log(random);

// for (let i = 0; i < worlds.length; i++) {
//     answer[i] = '_';
// }

// var letters = worlds[random].length;

// while ( letters > 0 ) {
//     alert(answer.join(' '));

//     let guess = prompt('Write Letters');

//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert('Write 1 letter');
//     } else {
//         for (let j = 0; j < worlds.length; j++) {
//             if (worlds[j].includes(guess)) {
//                 answer[j] = guess;
//                 letters--;
//             }
//         }
//     }
// }

// alert(answer.join(" "));
// alert("answer is " + ran.join(' '));

//--------------------------------------

let input = document.querySelector('.guess')

let choose = document.querySelector('.choose')

let result = document.querySelector('.result')


let arr = ['one', 'two', 'three', 'four', 'five','six','seven','eight','nine','ten']


let random = arr[Math.floor(Math.random() * arr.length)];


console.log(random);

choose.addEventListener('click', function () {
    if (input.value.toLowerCase().trim() === random.toLowerCase().trim()) {
        result.innerHTML = "win"
    } else{
        result.innerHTML = "Lose"
    }
})
