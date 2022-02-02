# user-system-main
This is a user system that is implemented using javascript and SQL. 
The front-end is made using react js while the back-end has node js.

The backend has microservices for the main functionalities of the system: 
manage users' access. 
manage projects. 
manage tasks on all projects. 
send emails on project/task assignment.
send text messages on registration.

# INSTRUCTIONS
To run this application, you have to run the front-end and each microservice simultaneously.
The first step is to clone this repository.

# Run front-end
Navigate to where you have the front-end on the terminal.
Enter npm i so that you install all the dependencies being used in the user system's front-end.
Enter npm start command and press enter.
Create an account, if you don't have one.
Log into your account. Since you are a normal user, you will view all the tasks assigned to you.

To log in as an admin, use the following credentials:
email: joymumbi97@gmail.com
password: Joan#1234567
After logging in as an admin, you can create, delete or assign tasks, projects and users.

# Run microservices
Navigate to each microservice on different terminal instances.
Enter nodemon command and press enter.
The user microservice is used to manage users' operations such as sign up, log in and deleting user.
The project microservice is used to manage tasks and projects' operations.
The background microservice is used to manage sending emails and messages to new users and users that are assigned.

# Contribute 
