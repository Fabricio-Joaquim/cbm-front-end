const formatDate = (date: any | undefined) => {
  if (date===undefined) {
    return '';
  }
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};

export default formatDate;
