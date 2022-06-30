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
   
let options;
    items.map((item)=>{
        options +=`<option value=${item[0]}>${item[1]}</option>`
    })
  
    ListOne.innerHTML=options;
    ListTwo.innerHTML=options;
})
// ------------------------------------------


// calculate

calculate.addEventListener("click",function(){

    const currencyOne=curOne.value;
  
    const currencyTwo=curTwo.value;

    const currenyAmount=amount.value;
    
    const newUrl=url+"/latest/"+currencyOne;
    console.log(newUrl)
    fetch(url+"/latest/"+currencyOne)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const calc=data.conversion_rates[currencyTwo]*amount;
        result.innerHTML=`
        <div class="card border-primary">
                    <div class="card-body text-center">
                       ${calc}
                    </div>
                </div> -->
        
        `
       
    })
})

