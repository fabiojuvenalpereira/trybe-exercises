const createEmail = (nome) =>{
  let nomedaPessoa = nome.split(' ').join('_');
  return { nome, email: `${nomedaPessoa} @trybe.com` };
  
}

const newEmployees = () => {
  const employees = {
    id1:  createEmail('Pedro Guerra'),
    id2:  createEmail('Luiza Drumond'),
    id3:  createEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());