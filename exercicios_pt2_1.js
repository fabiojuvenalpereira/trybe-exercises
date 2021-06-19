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

const changeLessons2 = (lesson2) => {
  const addTurno = lesson2.turno = 'manhã';
  console.log(lesson2);
}

const getKeys = (lesson1) => {
  const keys = Object.keys(lesson1);
  return keys;
}

console.log(changeLessons2(lesson2));
console.log(getKeys(lesson1));