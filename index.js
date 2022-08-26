const fs = require("fs");
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "Where are you currently based?",
        name: "location"
    },
    {
        type: "input",
        message: "Please enter a short paragraph about what you would like visitors to know about you.",
        name: "bio"
    },
    {
        type: "input",
        message: "Please enter your github Username.",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your LinkedIn.",
        name: "LinkedIn"
    }
])
.then((response) =>
    fs.writeFile('index.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;1,300&family=Rubik+Dirt&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>${response.name}'s Portfolio</title>
    </head>
    <body>
        <h1 id="name">${response.name}</h1>
        <h1 id="location">Based in ${response.location}</h1>
        <br>
        <section>
            <h1 id="about">About Me</h1>
            <h1>${response.bio}</h1>
        </section>
        <footer>
        <h1>You can find me on github as <a href="https://github.com/${response.github}">${response.github}</a></h1>
        <h1>You can also search for my name at LinkedIn.<a href="https://www.linkedin.com">${response.LinkedIn}</a></h1>
        </footer>
    </body>
    </html>`
    , (error) =>
    error ? console.log(error) : console.log("Success")
)
) 

