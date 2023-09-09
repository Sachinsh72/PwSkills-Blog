const createBlog = document.getElementById('create-blog');
const overlay = document.querySelector(".overlay");
const createPage = document.querySelector('.createPage');
const removeCreatePage = document.querySelector('.removecreatepage');
const createBtn = document.querySelector('.create-btn');

createBlog.addEventListener("click", showoverlay)

removeCreatePage.addEventListener("click", removeoverlay)

createBtn.addEventListener("click", removeoverlay)

function showoverlay(){
    overlay.classList.add('showoverlay')
    createPage.classList.add('showCreatePage')
}

function removeoverlay(){
    overlay.classList.remove('showoverlay')
    createPage.classList.remove('showCreatePage')
}

function addTask() {
    if(inputBox.value ===''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
