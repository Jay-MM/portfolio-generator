import fs from 'fs'
import inquirer from 'inquirer';
import generateHTML from './generateHTML.js'

inquirer.prompt([
    {
    type:"input",
    message: "What's your name?",
    name: "name"
    },
    {
    type:"input",
    message: "What's your location?",
     name: "location"
     },
     {
        type:"input",
        message: "Tell me about yourself?",
        name: "bio"
     },
     {
    type:"input",
    message: "What's your LinkedIn Url?",
    name: "linkedInURL"
    },
    {
    type:"input",
    message: "What's your GitHub URL?",
    name: "gitHubURL"
    },
])
    .then(answers => {
        console.log(answers)

        const html = generateHTML(answers)
        
        fs.writeFile('./portfolio.html',html, error =>{
            if (error) throw error

            console.log('HTML saved!')
        })
        
    })
    .catch(err => console.log(err))