//gets the reference of the reply buttons for all the comments
var a = document.getElementsByTagName("paper-button")
var found = []
for (var i=0, j=0; i < a.length; i++) {
    if (a[i].textContent == "Reply") {
      found[j] = a[i];
      j++
    }
}
console.log(found)


// getting the comments section area 
var a = document.getElementsByClassName("ytd-item-section-renderer")
var found = []
for (var i=0, j=0; i < a.length; i++) {
    if(a[i].$!==undefined){
        if (a[i].$.comment !== undefined) {
          found[j] = a[i];
          j++
        }
    }
}

for (let i = 0; i < found.length; i++) {
  var delay;
  //providing toggle for delays
  if(i % 2 === 0){
    delay = 5000
  }else{
    delay = 3000
  }
    setTimeout(function timer() {
        found[i].children[0].children[0].children[1].children[3].children[0].children[7].children[0].children[0].children[0].click()
        found[i].children[0].children[0].children[1].children[3].children[1].children[0].children[0].children[1].children[1].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].innerHTML = `Learn Hacking from basics to advance, grab your copy now - "https://book.iaminnovativecoder.com/"`
        found[i].children[0].children[0].children[1].children[3].children[1].children[0].children[0].children[1].children[4].children[6].children[1].removeAttribute("disabled")
        found[i].children[0].children[0].children[1].children[3].children[1].children[0].children[0].children[1].children[4].children[6].children[1].children[0].children[0].click()
    }, i * delay);
  }

//Youtube doesn't allow links to be posted in the comments section.
//TODO - 
//1. make 3-4 messages and post them randomly.