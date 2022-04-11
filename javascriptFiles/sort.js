function swap(ele1,ele2){
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;

}

function disableNewArrayBtn(){
    document.querySelector(".new-array").disabled=true;
}

function enebleNewArrayBtn(){
    document.querySelector(".new-array").disabled=false;
}

function wait(millisec){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, millisec);
    })
}

let delay=200;
let delayElement=document.querySelector(".speed");

delayElement.addEventListener('input',function(){
    delay= 300 -  (parseInt(delayElement.value)*100)
})

let arrSize=document.querySelector("#arraySize");

arrSize.addEventListener('input', function(){
    console.log(arrSize.value, typeof(arrSize.value));
    createArray(parseInt(arrSize.value))
})

let array=[];
createArray();

function createArray(noofBar=50)
{
    deleteChild();
    array=[];
    for(let i=0; i<noofBar; ++i)
    {
        array.push(Math.floor(Math.random()*200+1));
    }   
    console.log(array);
    const bars=document.querySelector("#array-bars");

    for(let i=0; i<noofBar; ++i)
    {
        const bar=document.createElement("div");
        bar.style.height=`${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bars.appendChild(bar);
    }
}

function deleteChild() {
   const bar= document.querySelector("#array-bars");
   bar.innerHTML= '';
}
const newArray=document.querySelector(".new-array");
newArray.addEventListener("click",function(){
    createArray(arrSize.value);
})


let sortbtn=document.querySelector("#sort-algo");

sortbtn.addEventListener('input', async function(){
    console.log(sortbtn.value);

    disableNewArrayBtn();

    if(sortbtn.value === "BubbleSort") 
        await bubble();
    else if(sortbtn.value === "InsertionSort")
        await insertion();
    else if(sortbtn.value === "SelectionSort")
        await selection();
    else if(sortbtn.value === "MergeSort")
        await merge();
    
    enebleNewArrayBtn();

})