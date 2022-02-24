const showAlbum = ()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
   .then(res => res.json())
   .then(data => displayAlbum(data))
}
showAlbum();
const displayAlbum = albums =>{
      const divContainer = document.getElementById('div-container');
      // for(const album of albums){
      //       console.log(album);
      //      const div= document.createElement('div');
      //      div.innerHTML=`<h3>Title: ${album.title}</h3><b>Id: ${album.id}</b>`;
      //      divContainer.appendChild(div);
      // }
      albums.forEach(album => {
            console.log(album);
           const div= document.createElement('div');
           div.innerHTML=`<h3>Title: ${album.title}</h3><b>Id: ${album.id}</b>`;
           divContainer.appendChild(div);
      })
}
