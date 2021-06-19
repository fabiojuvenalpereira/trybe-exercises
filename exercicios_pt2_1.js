const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeLessons2 = (lesson2) => lesson2.turno = 'manhã';
const getKeys = (lesson1) => Object.keys(lesson1);
const sizeObject = (lesson3) => Object.keys(lesson3).length;

console.log(changeLessons2(lesson2));
console.log(lesson2);
console.log(getKeys(lesson1));
console.log(sizeObject(lesson3));