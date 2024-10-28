document.addEventListener('DOMContentLoaded',()=>{
    const inp=document.getElementById('inp');
    const ab=document.getElementById('ab');
    const list=document.getElementById('list');
    const ptag=document.getElementById('en')

    ab.addEventListener('click',()=>{
        if(inp.value===""){
            ptag.textContent="Enter some task...";
        }
        else{
            ptag.textContent="";
            const li=document.createElement('li');
        li.innerHTML=`<button class='com'>Done</button><p>${inp.value}</p><button class='Del'>Delete</button>`;
        list.appendChild(li);
        inp.value="";
        }
        const Del=document.querySelectorAll('button.Del');
        Del.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode;
                parent.remove();
            });
        });
        const com=document.querySelectorAll('button.com');
        com.forEach((item)=>{
            item.addEventListener('click',()=>{
                item.classList.remove('com');
                item.classList.add('hide');
                const parent=item.parentNode;
                console.log(parent);
                const ptag=parent.querySelector('p');
                console.log(ptag);
                ptag.classList.add('co')
            });
        });
    });
});