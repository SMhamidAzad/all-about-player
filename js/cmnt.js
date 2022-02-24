const loadComment = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
loadComment()
const displayComment = cmnts =>{
    const divContainer = document.getElementById('div-container');
    for(const cmnt of cmnts){
        const div = document.createElement('div');
        div.innerHTML =`<p onclick="showEmail('${cmnt.email}')">${cmnt.body}</p><br>`;
        divContainer.appendChild(div);
    }
}
const showEmail = email =>{
    const b = document.createElement('b');
    b.innerHTML= `${email}`
}