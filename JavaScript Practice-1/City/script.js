let input=document.querySelector("button");//select a button
input.addEventListener("click",run);//add event listener click
function run()
{
    // console.log("Hi deepika");
    const value=document.getElementById("choice");//select options
   let selected=value.options[value.selectedIndex].value;//select a value fdrom selected index of options
   let result=document.getElementById("result");//select a result 
   let a=0;
   console.log(selected);
   switch(selected)
   {
    case 'Coimbatore':
       a=10000
        break
    case 'Chennai':
            a=15000
            break
    case 'Madurai':
                a=20000
                break
    case 'Karur':
                    a=25000
                    break

   }
   result.innerHTML=a;//set value to the result
}