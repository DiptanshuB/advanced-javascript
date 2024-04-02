const students = [
    { id : 21, name: 'Antu'},
    {id: 31, name: 'Sraboni'},
    {id: 41, name: 'Diptanshu'}

]
const names = students.map( s=> s.name);
const bigger = students.filter(s => s.id>21);

console.log(bigger);

console.log(names);