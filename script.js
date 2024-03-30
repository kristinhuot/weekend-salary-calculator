let salariesAdded = 0; 

function submitText(event){
    event.preventDefault();
    let firstNameEntry = document.getElementById('firstNameText').value;
    let lastNameEntry = document.getElementById('lastNameText').value;
    let idEntry = document.getElementById('idText').value;
    let jobTitleEntry = document.getElementById('titleText').value;
    let salaryEntry = document.getElementById('annualSalaryText').value;

    let newTableRowData = `
    <tr>
        <td>${firstNameEntry}</td>
        <td>${lastNameEntry}</td>
        <td>${idEntry}</td>
        <td>${jobTitleEntry}</td>
        <td>${salaryEntry}</td>
        <td><button onclick="deleteRow(event)">Delete</button></td>
    </tr>
    `
    let tableRowLocation = document.getElementById("salaryTable"); 
    tableRowLocation.innerHTML += newTableRowData; 
    
}

function deleteRow(event){
    let buttonClicked = event.target
    let toDelete =buttonClicked.parentElement.parentElement;
    toDelete.remove(); 
}
