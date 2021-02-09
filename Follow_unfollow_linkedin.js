// var obj = document.querySelectorAll(".search-result__action-button")
// for (const property in obj) {
// 	obj[property].innerText === "Connect"?
//   obj[property].click()
//   document.querySelector(".ml1").click():""
// }

// for(var i =0;i<=9;i++){
//   setTimeout(()=>{
//     obj[i].click()
//   },2000)
// 	console.log(i)
// }

var obj = document.querySelectorAll(".search-result__action-button")
for(var i =0;i<9;i++){
  function clickOnConnect(){
      obj[i].click()
  }
  const secondFunction = async () => {
    const result = await clickOnConnect()
    console.log(result)
    console.log(i)
  }
  secondFunction()
}