------------------------------GOALS------------------------------

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


------------------------------MUST HAVES FOR TESTS TO WORK------------------------------

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


------------------------------TASKS------------------------------


//~ Set up and link base files 
	HTML 
	JSS
	CSS

//~Set up the headers: 
	-Salary Calculator (H1 - page header)
	-Add Employee (h2 - subheader)
	-Employees (h2 - subheader)
	-Total Monthly Cost: (h2 - subheader)

//~ Set up 5 Inputs (HTML)
	-Create a <form> within the body and after the header
		~Within each form, create an <input> with an ID, placeholder, and type
		~Input names: employee's first name, last name, ID number, job title, annual salary
	*The inputs MUST have the following id attribute names: 
		data-testid="firstNameInput"
		data-testid="lastNameInput"
		data-testid="idInput"
		data-testid="titleInput"
		data-testid="annualSalaryInput"

//~ Set up <Table> Element (HTML)
	-Inside table, note that each employee will be represented by a single <tr> 
	-Set up Table Headers: First Name, Last Name, ID, Title, Annual Salary, Delete 

//~ Set up Submit & Delete Buttons (HTML)
	-Submit button must have id attribute name: data-testid="submitButton"
		ex. <button data-testid="submitButton">Submit</button>
	-Submit button must do the following: 
		~adds the employee row to the table 
		~updates the footer's total MONTHLY cost 
		~clears the form inputs
	//-Delete button must do the following: 
		~removes the entire employee row from the DOM 

~Set up the Footer
	-Include Total Monthly Cost header with a field for the calculation to go 
	-Add a CSS class attribute to the total monthly cost, so that the rendered amount can turn a different color when over $20k
	-Link CSS class to the total monthly cost class.

//~Set up add functionality 
	-Create a space for the data to be stored 
	-Create function to add data to the table 
	-Create a function to clear the input from the input areas 
	-Create function to add the salary input information to the footer total (divided by 12 for the monthly cost)

//~Set up delete functionality 
	-Create function and add to the Delete button 

//~Set up the over-budget indicator CSS functionality 
	-Set up an if statement to edit the text red if the total is over $20k 



