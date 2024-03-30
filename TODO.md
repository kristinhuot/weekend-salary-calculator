GOALS 

**use npm test often 
**git commit often

//1. An app that: 
	a. records employee ANNUAL salaries
	b. adds each salary to a total MONTHLY salary count

2. Requirements 
	//a. Include 5 inputs (employee's first name, last name, ID number, job title, annual salary)
	//b. Submit button that: 
		b.1 adds the employee row to the table 
		b.2 updates the footerr's total MONTHLY cost 
		b.3 clears the form inputs 

	//c. Have an over-budget indicator when the total MONTHLY count exceeds $20,000
		c.1 when this occurs, it will apply CSS class to turn the footer text red 

	//d. Delete button that removes an employee row from the DOM 



------MUST HAVES FOR TESTS TO WORK -------

//1. Submit button MUST have an attribute name: data-testid="submitButton"
	ex. <button data-testid="submitButton">
  			Submit
		</button>

//2. Form inputs must have the following attribute names: 
	data-testid="firstNameInput"
	data-testid="lastNameInput"
	data-testid="idInput"
	data-testid="titleInput"
	data-testid="annualSalaryInput"

//3. Use a <table> element. Each employee is represented by a single <tr> 

//4. The TOTAL MONTHLY COST (not yearly) must be rendered INSIDE the <footer> element 

//5. The over-budget CSS class must be applied to the <footer> element when the TOTAL MONTHLY SALARY exceeds $20,000


_______________________________________________________________________