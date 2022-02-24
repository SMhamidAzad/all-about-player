const userInfo = () =>{
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}
userInfo();
const displayUser = users =>{
    // console.log(users);
    const divContainer = document.getElementById('div-container');
    for(const user of users){
        const div = document.createElement('div');
        console.log(user);
        div.innerHTML=`<img src="${user.picture.large}">
                       <h4>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4>
                       <h4>Date: ${user.dob.date}                  City: ${user.location.city}</h4>`;
        divContainer.appendChild(div);
    }
}