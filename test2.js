
const container = document.querySelector('#container') 
const GetRes = async(url) => { 
    const res  = await fetch(url); 
    if(!res.ok){ 
        throw new Error(`status: ${res.status}`); 
    } 
    return await res.json() 
} 
 
GetRes('user.json') 
    .then(data=> { 
        console.log(data); 
        for(let key in data) { 
            const test = document.createElement("div"); 
            const name = data[key].zagolovok; 
            const age = data[key].opisanie; 
    
 
            test.innerHTML = `<div class="test"> 
                <h2>Название: ${name}</h2> 
                <p>Описание: ${age}</p> 
            </div>` 
            container.append(test) 
         
        } 
    })