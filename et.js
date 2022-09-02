const expense =document.getElementById('typeid');
const description =document.getElementById('browserid');
const category=document.querySelector('#selectid');
const bottonbtn=document.getElementById('submit');
bottonbtn.addEventListener('click',oneSubmit);


function oneSubmit(e){
    e.preventDefault()
    const obj = {
        expense1:expense.value,
        description1:description.value,
        category1:category.value
    }
    localStorage.setItem(obj.expense1, JSON.stringify(obj))
     showNewUserOnScreen(obj)
}
window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
        showListofRegisteredUser(user)
    })
})

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('userlist');
    const childHTML = `<li id=${user.expense1}> ${user.expense1}-${user.description1} - ${user.category1}
                            <button onclick=deleteUser('${user.expense1}')> Delete User </button>
                         <button onclick=editUser('${user.expense1}')> EDIT User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function deleteUser(email) {
    localStorage.removeItem(email)
    removeItemFromScreen(email)
}

function editUser(email) {

    const edit1=localStorage.getItem(email);
    const ed2=JSON.parse(edit1);
    expense.value= ed2.expense1;
    description.value=ed2.description1;
    category.value=ed2.category1;
   // localStorage.removeItem(email)
   // removeItemFromScreen(email)
   deleteUser(email)
    
}

function removeItemFromScreen(email){
    const parentNode = document.getElementById('userlist');
    const elem = document.getElementById(email)
    parentNode.removeChild(elem);
}

