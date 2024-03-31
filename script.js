let monthlySalaryTotal = 0; 

// let annualSalary = document.getElementById('annualSalaryText').value
// let monthlySalary = annualSalary / 12; 

// monthlySalaryTotal += Number(document.getElementById('annualSalaryText').value)

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

    document.getElementById('firstNameText').value='';
    document.getElementById('lastNameText').value='';
    document.getElementById('idText').value='';
    document.getElementById('titleText').value='';
    document.getElementById('annualSalaryText').value='';

    let salaryDividedByTwelve = Number(salaryEntry)/12; 
    monthlySalaryTotal += Math.round(Number(salaryDividedByTwelve)); 

    let updatedMonthlySalaryDisplay = document.getElementById("salaryCount")
    updatedMonthlySalaryDisplay.textContent = (monthlySalaryTotal); 

    let footer = document.getElementById('footer'); 

    if (monthlySalaryTotal > 20000){
        footer.classList.toggle("over-budget");
        }

}


    


function deleteRow(event){
    let buttonClicked = event.target
    let toDelete =buttonClicked.parentElement.parentElement;
    toDelete.remove(); 
}


