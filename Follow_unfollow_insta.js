//let len = document.getElementsByClassName('_0mzm- sqdOP L3NKy ').length ;

//for(let i = 0;i<len;i++){ 
//setInterval(function() {
//    document.getElementsByClassName('_0mzm- sqdOP L3NKy ')[i].parentElement.lastChild.click() 
//}, 1000);
//};
// for(var i=0;i<9;i++){
//   document.getElementsByClassName("sqdOP  L3NKy   y3zKF")[i].click()
// }

// var i=0;
// while(i<9){
//   // document.getElementsByClassName("sqdOP  L3NKy   y3zKF")[i].click()
//   console.log(i)
//   setTimeout(()=>{
//     i++
//   },100)
// }

function run(){
  let i = 0; 
  while (i < 10) { 
    task(i); 
    i++;
  } 
  function task(i) { 
    setTimeout(function() { 
        // Add tasks to do 
        console.log(i)
        document.getElementsByClassName("sqdOP  L3NKy   y3zKF")[i].click()
    }, 2000 * i); 
  } 
}
run()