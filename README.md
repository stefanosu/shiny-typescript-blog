Onramp Fullstack Take Home Project
Overview 🤖

The Onramp blog is a Fullstack application that allows users to login, logout, CRUD blog posts, favorite posts and search for posts.

This was my first big attempt working with TypeScript and Node.js/Express.js and sequelize for the ORM. 
Table of Contents

    Techstack
    Local Setup
    Project Retro
    UI Design
    DB Design
    Architecture Pattern
    Version Control / Project Management
    Unit Testing
    Web Development Best Practices
    Feature Completion

Techstack

    Frontend: TypeScript, React Hooks
    Backend: TypeScript, Node.js, Express.js and Sequelize 
    Other: PostgreSQL database and JWT JavaScript Web Token for Auth

Local setup

    Clone this repo
    Run npm install

    Run npm start to run server

    Visit the site here


Project Retro

Achievements:

With the time constraints and working with a tech stack that I was unfamiliar with I am glad to have completed user sign up, login and create post features. The other crud actions are working on my backend but had issues with react router and didn't implement the favorite, search show all posts functionality unfortunately. 

Challenges:

Within the time alloted and working with express server with sequelize and TypeScript presented some difficult challenges. It was a good learning experience I learned a lot about TypeScript. In hindsight it might've been better and saved me more time to complete the frontend in react first then convert it to TypeScript. 

Issues:
I came across some issues with my babel configuration that messed up my server for quite some time and had bugs pertaining to some old npm packages that were deprecated. 

Room for Improvements:

  Add unit testing shallow / snapshot for the UI 
  Improve react router to show all posts and single post
  Improve the UI design and user flow of the app

UI Design

The UI Design was created to be able to redirect the user to different screen depending on user action. For instance upon user creating a post they get redirected to see all the posts view.

DB Design

My database design includes two tables, USERS and POSTS. Where USERS has many relationship with posts and a Post belongs to a User. I made a type boolean of favorite attribute on the Post model where the User can click on a post and favorite a post which gets persisted to the db.

Initial

As I started on the project I tried to implement a custom useFetch hook in react TypeScript but realized that although abstracting fetching logic into a hook would make my code more modular and easier to test. I was adding complexity given my time constraint because each component did different tasks to the response. I added JWT token for authentication, after I was able to login before hand.

Final

In hindsight I hope that I could get all the major features of the app working. I could've done so if I spent more time building in react first then converting to TypeScrip this would've also gave me more time to spend on my backend as well. Its a tradeoff software engineers have to make between a working project or being done. I would like to add more unit tests complete those missing features and improve the UI. 

Architecture Pattern

The architecture pattern that I am familiar most with is MVC Model View Controller. I've built rails apps using the MVC pattern. The Model-View-Controler design pattern in Node Express server is used to separate the applications' concerns the Model represents an object that carries data and can have logic to update the controller if its data has been changed. The View represents the visual representation of the data that the model contains and the Controller is intermediary between the Model and the View. It controls the data flow into the Model and updates the view when data has been changed. It helps keep the View and Model separate making an application modular, easier to test and less error prone.  

Version Control / Project Management

I used GitHub repo for the version control for this project. I made a new branch called dev and worked on new features on it and merged those to my master branch and kept good succient commit messages. 

Unit Testing

I did not have time to add unit testing to this application. I set up one unit test in Jest but had issues with it. I think testing is very important and as a junior engineer I have tried to be more proactive about implementing tests in my projects and using Test Drive Development.


Web Development Best Practices

    I started my project by drafting a user story to have a workflow of the application. I then sketched out what it would look like via user actions. This was helpful because once this was done some basic wireframing helped flush some ideas out and made it easier to approach building out the app.
    
    I created a restful API for my endpoints to follow standard convention and ease to understand and consume. 
    I think following web development best practices are important because its standards that helps streamline the development process.
    
    I tried to be clear with my naming conventions of variables and functions so its clear and easy for other developers to understand which is important when working on a dev team. I put in some comments at certain places if things weren't clear enough. I kept my code DRY by trying to abstract out code and functionality that can be reusable. them. 

Feature Completion

At a minimum, your app should allow for users to be able to:

    Create an account, login, and log out.
    CRUD functionality:
        Create a new blog post
        Read a blog post
        Update a post
        Delete a post
    Search for blog posts based on at least 2 factors (date, title, etc.)
    Favorite one or more blog posts at the same time.
    View all of their favorites.

Submission Deadline + Process

You must submit your project by 9:00am PST/12:00pm EST on Wednesday, January 13 using this form. Be sure that your project is viewable by the Onramp team as a public repository. You can make it private after 1/28/21.

Once you’ve submitted your project, you are expected to stop working on it. Any commits that occur after submission or the deadline will not be reviewed.
About
No description, website, or topics provided.
Resources
Readme
Releases
No releases published
Packages
No packages published
Languages
