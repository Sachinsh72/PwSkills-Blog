const createBlog = document.getElementById('create-blog');
const overlay = document.querySelector(".overlay");
const createPage = document.querySelector('.createPage')
const removeCreatePage = document.querySelector('.removecreatepage')

createBlog.addEventListener("click", showoverlay)

removeCreatePage.addEventListener("click", removeoverlay)

// .onclick = function() {
//     document.getElementById('createPage').style.display = "block"
// };

// console.log(overlay);

// function showcreatepage(){
    
// }



function showoverlay(){
    overlay.classList.add('showoverlay')
    createPage.classList.add('showCreatePage')
}

function removeoverlay(){
    overlay.classList.remove('showoverlay')
    createPage.classList.remove('showCreatePage')
}