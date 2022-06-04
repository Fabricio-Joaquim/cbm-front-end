const headerName = (name:string | undefined) => {
  if (name===undefined) {
    return 'Nome';
  }
  const newName = name.split(' ');
  const lastName = newName.length-1;
  name = newName[0].charAt(0).toUpperCase() + newName[0].slice(1) + ' ' +
    newName[lastName].charAt(0).toUpperCase() + newName[lastName].slice(1);

  return name;
};

export default headerName;
