// Defining Dom elements
const curOne=document.getElementById("curency1")
const curTwo=document.getElementById("curency2")
const ListOne=document.getElementById("list_one")
const ListTwo=document.getElementById("list_two")
const amount=document.querySelector("#amount")
const calculate=document.querySelector(".calculate")
const result=document.querySelector(".result")


// Taking the symbols
const  api_key="1640e83dff4e23c77d1bc634";
const url="https://v6.exchangerate-api.com/v6/"+api_key;

fetch(url+"/codes")
.then(res=>res.json())
.then(data=>{
    const items=data.supported_codes;
    console.log(items)
let options;
    items.map((item)=>{
        options +=`<option value=${item[0]}>${item[1]}</option>`
    })
  
    ListOne.innerHTML=options;
    ListTwo.innerHTML=options;
})
// ------------------------------------------