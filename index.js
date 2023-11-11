let registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const name =  document.getElementById("name").value;
    const email =  document.getElementById("email").value;
    const password =  document.getElementById("password").value;
    const dob =  document.getElementById("dob").value;
    const acceptTerms =  document.getElementById("acceptTerms").checked;
    const entry = {name,email,password,dob,acceptTerms};

    let today = new Date()
    let age = today.getFullYear() - new Date(dob).getFullYear();
    console.log(age)
    if (!(age >= 18 && age<= 55)){
        alert("Age should be between 18 to 55");
        return;
    }
    console.table(entry)
    entries.push(entry);
    registrationForm.reset();
    storeInLocal();
});

let storeInLocal = () => {
    let data = JSON.stringify(entries);
    localStorage.setItem("data",data)
    populateTable();
}

let retrieveFromLocal = () =>{
    let data =  localStorage.getItem("data");
    if(data){
        entities = JSON.parse(data);
        return entities;
    }else{
        return [];
    }
}

let tableEntry = "";
let populateTable = ()=>{
    entries = retrieveFromLocal();
    let entryString = entries.map( (item) =>{
        
        return `<tr> 
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.dob}</td>
            <td>${item.acceptTerms}</td>
            </tr>`
    }).join('\n')

    console.log(entryString)
    document.getElementById("tablebody").innerHTML = entryString;
}

let entries = [];
populateTable();

