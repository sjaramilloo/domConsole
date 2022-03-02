const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'color',
    message: 'cuál es tu color favorito',
    default: 'red'
},{
    name:'comida',
    message: 'cuál es tu comida favorita'
},{
    name:'pasatiempo',
    message: 'cuál es tu pasatiempo favorito'
},{ 
    type: 'list',
    name:'Licor',
    message: 'Licor que te vuelve mierda',
    choices: ['Whisky','Aguardiente','Brandy','Vino', 'Ron']
}])


// Promesa, funcion flecha  con  callback

.then(answer => {
    console.log('answer: ', answer)
})