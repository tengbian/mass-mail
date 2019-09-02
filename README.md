# Mass Mail

## Developed a web application to collect feedbacks

- Backend (ExpressJS/NodeJS/MongoDB)
	- Created a server with Express to communicate with the MongoDB database
	- Created schema for user/email for information storage

- Frontend (React/Redux/Axios)
	- Created pages for Login, Email writing and Email review and use react-route-dom for navigation
	- Used redux to manage state and redux-thunk to handle asynchronous request
	- Integrated Google Account authentication, Payment and email sending

- How to run the application
	- Development mode:
		- in mass-mail folder: ```npm install```
		- in client folder: ```npm install```
		- create file ``` config/dev.js ```
		- in mass-mail folder: ```npm run dev```
	- Production mode:
		- try website ```https://fathomless-tor-92083.herokuapp.com/```