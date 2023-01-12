
//Question 1
const tstid = document.getElementById("text");
console.log(tstid);

//Question 2
const tsttag = document.getElementsByTagName("h1");
console.log(tsttag);

//Question 3
const tstclass = document.getElementsByClassName("box");
console.log(tstclass);

//Question 4
document.getElementById("demo").innerHTML = "Hello World";

//Question 5
function myFunction() {
    document.getElementById("main").style.flexDirection = "column-reverse";
  }


//Question 7
const para = document.createElement("h1");
para.innerHTML = "Hello";
document.getElementById("myDIV").appendChild(para);
para.style.color="red";
let heading = document.getElementsByTagName("h1")[0].id;


//Question 9

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();
