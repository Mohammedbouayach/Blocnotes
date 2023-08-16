let ajout = document.getElementById("ajout");

let inputs = document.getElementById("inputs");

let btnprimary = document.querySelector(".btn-primary");

let titel = document.getElementById("titel");

let content = document.getElementById("content");
let moon  = document.getElementById("moon");

let body = document.body;
let box = document.querySelector(".box")
let mood = "creat"
let temp ;


content.oninput=function(){
 
 if (content.value.trim()!== '') {
  btnprimary.style.display="inline"
 }
 else{
btnprimary.style.display="none"
 }
 
}
function add(){
 
 inputs.style.display="flex"
}

function cross(){
 inputs.style.display="none"
}

let data;
if (localStorage.notte != null) {
 data= JSON.parse(localStorage.notte);
}
else{ data=[]}

btnprimary.addEventListener("click",function(){
let newnote ={
 titel:titel.value,
 content:content.value,
 body:body.style.backgroundColor,
}

if(mood==="creat"){
  data.push(newnote);
  
}
else{
 data[temp]=newnote;
 mood="creat";
 btnprimary.innerHTML="Ajouter";
 clear()
}
 localStorage.setItem('notte', JSON.stringify(data));
 
 showdata();
 clear();
})


function showdata(){
 let card="";
  
 for (let i = 0; i < data.length; i++) {
card += `  <div class="content">
   <h1 id="titre">${data[i].titel}</h1>
   
  <p>
${data[i].content}
  </p>
  
  <button onclick="delet(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> </button>

      <button onclick="updet(${i})" class="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
 </div>


 `;
 }
 document.getElementById("info").innerHTML=card
}
showdata()

btnprimary.addEventListener('click',function(){
 inputs.style.display ="none"
})

function clear(){
 titel.value="";
 content.value="";
 
}




function delet(i){
 data.splice(i,1)
 localStorage.notte = JSON.stringify(data)
 showdata()
}


function updet(i){
 inputs.style.display="flex";
 titel.value=data[i].titel;
 content.value=data[i].content;
 btnprimary.style.display="inline";
 btnprimary.innerHTML="édite";
 mood="update"
 temp=i;
}

moon.addEventListener("click",function(){
 document.body.classList.toggle("dark")
 
 if(document.body.classList.contains("dark")){
  moon.src="sunrise.png"
 }
 else{
moon.src="last-quarte-phase-of-moon.png"

 }
})

function search(value){

 let card ='';
 for (let i = 0; i < data.length; i++) {
  if (data[i].titel.includes(value)){
   
   card += `  <div class="content">
      <h1 id="titre">${data[i].titel}</h1>
      
     <p>
   ${data[i].content}
     </p>
     
     <button onclick="delet(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> </button>
   
         <button onclick="updet(${i})" class="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>
   
   
    `;
  }
  }
  document.getElementById("info").innerHTML=card
  
}



box.onscroll = function(){
let head = document.querySelector(".head");
if (scrollY <= 10) {
  head.style.display="inline"
 }
 else{head.style.display="none"}
 
}