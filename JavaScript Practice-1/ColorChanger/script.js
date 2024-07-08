let button=document.getElementById("btn");
let wrap=document.getElementById("wrap");
let cname=document.getElementById("cname");
let arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
   
button.addEventListener('click',change)


function change()
{
    let c='#';
    for(let i=0;i<6;i++)
        {
          c+=color();
        }
        //console.log(c);
        wrap.style.backgroundColor=c;
        cname.innerHTML=c;
}

function color(){
    let ind=Math.floor(Math.random()*16);
    return arr[ind];
}