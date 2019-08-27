# Plexxis Interview Exercise
## Requirements
Create a simple but __impressive__ (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API  
2) Display the employees in a React application  
3) Has UI mechanisms for creating and deleting employees  
4) Has API endpoints for creating and deleting employees  
5) Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

## Implementation
* Backend
    * Added EntityFrameworkCore + SQlite packages
    * Created SQlite database with EFCore migrations based on App's data model
    * Added all endpoints:
        * Fetch all employees ==> GET: api/Employee
        * Fetch an employee   ==> GET: api/Employee/{id}
        * Add a new employee  ==> POST: api/Employee  (We should pass a body with parameters)
        * Update an employee  ==> PUT: api/Employee/{id}  (We should pass a body with parameters)
        * Delete an employee  ==> DELETE: api/Employee/{id}
    * Update Cors to anable all methods for different origins
* Frontend
    * Using react-bootstrap + styled-components libraries for layout and components
    * Using react-table to show all information to the user
    * Added alerts in case of bad-requests, errors or sucessful requests
    * All application's state is being passed via props from parent to children components (No Redux)
    * Change button's state to "loading" whenever waiting for an API response

If you are running the backend project on VSCode, probably it should be run on "localhost:5001" instead of "localhost:44368" (Visual Studio). The front end Url call is defined on App.js line 7.
