const FoxAPI = "https://randomfox.ca/floof"
const h6 = document.createElement("h6");
h6.textContent = "copyrightsreserved@mildred.koskei";
document.querySelector("body").appendChild(h6);
let likes;git 

fetch(FoxAPI)
.then(resp => resp.json())
.then(data=> console.log(data))

const likesbutton = document.querySelector('#like-button').addEventListener('click', ()=>{
    likes += 1;
    displayLikes();
});


const form = document.querySelector('#comment-form').addEventListener('submit', (e)=>{
    e.preventDefault()
    showComment(e.target.comment.value)
})
function showComment(comment) {
    console.log(comment);
    const li = document.createElement("li");
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteHandle)
    btn.textContent = 'delete'
    li.textContent = comment.content;
    li.appendChild(btn)
    commentsList.append(li);
  }
  
  function deleteHandle(e){
      e.target.parentNode.remove()
  }
  function displayLikes() {
    likeCount.textContent = `${likes} likes`;
  }

