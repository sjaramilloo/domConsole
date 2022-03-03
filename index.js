// const inquirer = require('inquirer');

// inquirer.prompt([{

//     type: 'password',
//     name: 'secretText',
//     message: 'Escribte tu contraseña',
//     mask: "*"
// //     name: 'color',
// //     message: 'cuál es tu color favorito',
// //     default: 'red'
// // },{
// //     name:'comida',
// //     message: 'cuál es tu comida favorita'
// // },{
// //     name:'pasatiempo',
// //     message: 'cuál es tu pasatiempo favorito'
// // },{ 
// //     // type: 'checkbox','list', 'expand','rawlist', 'listbox'
// //     type: 'checkbox',
// //     name:'Licor',
// //     message: 'Licor que te vuelve mierda',
// //     choices: [
// //          'Whisky','Aguardiente','Brandy','Vino', 'Ron'] 

//     // {
//     //     key: 'a',
//     //     value: 'Ron'
//     // },
//     // {
//     //     key: 'b',
//     //     value: 'vino'
//     // },
//     // {
//     //     key: 'c',
//     //     value: 'aguardiente'
//     // }]

// }])


// // Promesa, funcion flecha  con  callback

// .then(answer => {
//     console.log('answer: ', answer)
// })

//--------------------------------------------------------------
// EJemplo blocking y non blocking creamos un objeto

// const fs = require('fs');
// //blocking
// const teach =fs.readFileSync('teach.txt','utf-8');
// console.log(teach);

// const fs = require('fs');
// //non-blocking
// fs.readFile('teach.txt','utf-8', (err,data)=>{ console.log(data);});
// console.log('Loading...');


const fs = require('fs');
fs.readFile('teach.txt','utf-8', (err,data)=>{ 
    fs.readFile(`${data}.txt`,'utf-8',(err,data2)=>{
        fs.readFile('apenned.txt','utf-8',(err,data3)=>{ 
            fs.writeFile('final.txt',`${data2} ${data3}`,'utf-8',
            (err)=>{
                if(err) throw err;
                Console.log('Tus archivos han sido guardados');
            });   
        });    
    });
});