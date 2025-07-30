const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// eur.json



const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("#btn");

const fromCurrElement=document.querySelector(".from select");
const toCurrElement=document.querySelector(".to select");

const result=document.querySelector(".msg");



for(let select of dropdowns){

    for(currCode in countryList){
         
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;

        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }


        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}


const updateFlag=(element)=>{

    let currCode=element.value;
    let countryCode=countryList[currCode];

    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;

};


btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    let amount=document.querySelector(".amount input");

    // console.log(amount);
    let amtVal=amount.value;

    // console.log(amtVal);


    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }


    let fromCurrValue=fromCurrElement.value.toLowerCase();
    let toCurrValue=toCurrElement.value.toLowerCase();

    console.log(fromCurrValue,toCurrValue);


    const URL=`${BASE_URL}/${fromCurrValue}.json`;


    let response=await fetch(URL);

    console.log(response);


    let data=await response.json();

    console.log(data);
    
    let rate=data[fromCurrValue][toCurrValue];
    console.log(rate);

    
    // console.log(data[fromCurrValue][toCurrValue]);

    
    let finalAmount=amtVal*rate;

    result.innerText=`${amtVal} ${fromCurrElement.value} = ${finalAmount} ${toCurrElement.value} `;

});
 




