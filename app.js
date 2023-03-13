// function getTime(){
//     document.getElementById('time').innerHTML=Date();

// }
let counter = 3;
function countDown(){
    console.log(counter);
    counter = counter - 1;
    if(counter === 0) return;
    countDown();
}
countDown();