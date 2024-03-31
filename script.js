let monthlySalaryTotal = 0; 
//created variable to hold the updated monthly salary total 


function submitText(event){ // function to use the Submit button 
    event.preventDefault(); // prevents default clearing of data within form element 
    let firstNameEntry = document.getElementById('firstNameText').value; 
    let lastNameEntry = document.getElementById('lastNameText').value;
    let idEntry = document.getElementById('idText').value;
    let jobTitleEntry = document.getElementById('titleText').value;
    let salaryEntry = document.getElementById('annualSalaryText').value;
//defined the location on the DOM for the different inputs 
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
    //set up variable to hold the table row of inputted data 
    let tableRowLocation = document.getElementById("salaryTable");  // defined variable to hold the location of the new row inside the table
    tableRowLocation.innerHTML += newTableRowData; // adds a table row of data from the input to the table 

    document.getElementById('firstNameText').value='';
    document.getElementById('lastNameText').value='';
    document.getElementById('idText').value='';
    document.getElementById('titleText').value='';
    document.getElementById('annualSalaryText').value='';

    //clears the inputs

    let salaryDividedByTwelve = Number(salaryEntry)/12; // divides the annual salary totals to get the monthly total
    monthlySalaryTotal += Math.round(Number(salaryDividedByTwelve)); // resets the global variable for the monthly salary total to be that variable plus any additions in the monthly cost to a rounded number

    

    let updatedMonthlySalaryDisplay = document.getElementById("salaryCount") // creates a variable with the DOM location of where the monthly salary total is being stored
    updatedMonthlySalaryDisplay.textContent = (monthlySalaryTotal); // updates the display of the monthly total

    let footer = document.getElementById('footer'); // defines the DOM location for the footer

    if (monthlySalaryTotal > 20000){ // if statement to change the CSS styling if the monthly total exceeds $20k
        footer.classList.toggle("over-budget");
        }

}



function deleteRow(event){ // function to delete a row and remove it from the table 
    let buttonClicked = event.target
    let toDelete =buttonClicked.parentElement.parentElement;
    toDelete.remove(); 
}


