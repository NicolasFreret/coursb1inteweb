
let string = 'Une chaine de caractère' //Texte
let number = 2
let array = [] //Tableau
const object = {},
boolean = true

let num = 2,
num2 = 5,
num3 = 6,
num4 = 7,
num5 = 7,
t = "Emile",
y = "Bonjour "+t,
x = 'tu vas bien ?'

//console.log( y +', '+ x) 
//console.log(`Bonjour ${t}, ${x} ${num + num2}`) 


const myArray = [1,2,3,4,5,'chips',[1,8,[10,12]], 'coucou', 'b1'];
const dix = myArray[6][2][0];
//console.log(dix, myArray[myArray.length - 1])


const eleves = [
    'Justine', 
    'Franck',
    'Baptiste',
    'Clément',
    'Manon',
    'Maïwenn',
    'Mathis',
    'Vladislav',
    'Timéo',
    'Jérôme',
    'Tom',
    'Gabriel'
];


const students = [
    {prenom:'Jane', nom:'Doe', email:'sddf@df.fr', age:18,notes:[10,15,18,17, 'abs', 'abs', 'abs', 'abs', 'abs']},
    {prenom:'Jeanne', nom:'Doh', email: 'test@gmail.fr', age:17,notes:[10,11,'abs',9,7]},
    {prenom:'Jean', nom:'Dae', email:'testy@crousty.fr', age:19,notes:[8,1,2,18]},
    {prenom:'John', nom:'Doha', email:'tes52@67.fr', age:52,notes:[15,13,4,7]}
];

const k = 'nom';
//console.log(students[2][k])

students.forEach( student => {
    
    const notes = student.notes
    let total = 0,
    nbNotes = 0
    
    for (let i = 0; i < notes.length; i++) {
       if( typeof(notes[i]) == 'number' ){
            total = total + notes[i]
            nbNotes++
       }
        // total += notes[i]
    }

    const avg = total / nbNotes
    let isMoreThan10 = ''

    if(avg >= 10 ){
        isMoreThan10 = 'Super, tu as la moyenne !'
    }

  
    console.log(`Bonjour ${student.prenom} ${avg.toFixed(2)} ${isMoreThan10}`)
});

















const test = function(nom = 'John'){
    console.log('bonjour '+nom)
}

const test2 = (_nom = 'Nicolas') => `Bonjour Jean`




function isPair(_num){
    if(typeof(_num) != 'number' ) return 'pas un nombre'
    return _num % 2 == 0
}

console.log( isPair(2) )
console.log( isPair(21) )
console.log( isPair('joie') )



async function getUsers(){
    try{
        let res = await fetch('https://api.escuelajs.co/api/v1/users')
        if(res.status !== 200) return
        res = await res.json()

        res.forEach(user =>{
            console.log( `Bonjour ${user.name} ${user.email}` )
        })
    }catch(e){
        console.warn(e)
    }
}


getUsers()
console.log('jkjkjkj')

//console.log(typeof(true))

// eleves.forEach( (eleve, i) => {
//     console.log(`Ligne ${i + 1} : Salut ${eleve}`)
//     console.log(`Ligne ${i} : Salut ${eleves[i]}`)

    
// });

// for (let i = 0; i < eleves.length; i++) {
//     const eleve = eleves[i];
//     console.log('Ligne '+(i+1)+':  Bonjour '+eleves[i])
//     console.log('Ligne '+(i+1)+':  Bonjour '+eleve)
// }