async function bubble(){
    const ele=document.querySelectorAll(".bar");

    for(let i=0; i<ele.length-1; i++)
    {
        for(let j=0; j<ele.length-i-1; ++j)
        {
            ele[j].style.background='lightsalmon';
            ele[j+1].style.background='lightsalmon';
            
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height))
            {
                await wait(delay);
                swap(ele[j],ele[j+1]);
            }

            ele[j].style.background='greenyellow';
            ele[j+1].style.background='greenyellow';
        }
        ele[ele.length-1-i].style.background='blue';
    }
    ele[0].style.background='blue';
}


