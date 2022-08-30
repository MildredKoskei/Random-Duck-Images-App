document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://randomfox.ca/floof")
    .then(resp => resp.json())
    .then(data =>displayFoxImage(data))
       
    

function displayFoxImage(data){
    console.log(data)
    let cardImage = document.querySelector('#card-image')
    cardImage.src = data.image

}
})














// const FoxAPI = "https://randomfox.ca/floof"
// const h6 = document.createElement("h6");
// h6.textContent = "copyrightsreserved@mildred.koskei";
// document.querySelector("body").appendChild(h6);
//  const cardImage = document.querySelector('#card-image')
// const likeCount = document.querySelector("#like-count");
// let likes;

// fetch(FoxAPI)
// .then(resp => resp.json())
// .then(data => displayFoxImage(data));

// function displayFoxImage(data){
//     data.forEach(showFoxImage)
// }
// function showFoxImage(fox){
//     let foxImage = document.createElement('img')
//     foxImage.src = FoxAPI;
//     cardImage.appendChild(foxImage)


// }

// const likesbutton = document.querySelector('#like-button').addEventListener('click', ()=>{
//     likes += 1;
//     addLikes()
// })


// const form = document.querySelector('#comment-form').addEventListener('submit', (e)=>{
//     e.preventDefault()
//     showComment(e.target.comment.value)
//     e.reset()
// })
// function showComment(comment) {
//     console.log(comment);
//     const li = document.createElement("li");
//     let btn = document.createElement('button')
//     btn.addEventListener('click', deleteHandle)
//     btn.textContent = 'delete'
//     li.textContent = comment.content;
//     li.appendChild(btn)
//     commentsList.append(li);
//   }
  
//   function deleteHandle(e){
//       e.target.parentNode.remove()
//   }
//   function addLikes() {
//     likeCount.textContent = `${likes} likes`;
//   }

