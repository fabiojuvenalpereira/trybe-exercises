function techList(arr,name) {
  if (arr.length === 0 | !name)  return 'Vazio!'
    const listT = arr.sort().map((item) => {
      return  {
        tech: item,
        name: name,
      }
    });
  return listT;
}

module.exports = techList;