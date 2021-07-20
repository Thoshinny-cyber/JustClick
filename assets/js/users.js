const userList=document.querySelector('#user-list');

function renderUser(doc){
    let table=document.createElement('tbody');
    let UserName=document.createElement('th');
    let emailID=document.createElement('th');
    let AccountBalance=document.createElement('th');
    

    table.setAttribute('data-id', doc.id);
    UserName.textContent = doc.data().UserName;
    emailID.textContent = doc.data().emailID;
    AccountBalance.textContent=doc.data().AccountBalance;
    


    table.appendChild(UserName);
    table.appendChild(emailID);
    table.appendChild(AccountBalance);
    

    userList.appendChild(table);
}


db.collection('users').get().then(snapshot => {
    snapshot.docs.forEach(doc=>{
        renderUser(doc);
    })
})