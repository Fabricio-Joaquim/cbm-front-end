const removeNotNumber = (myString: string) => {
  return myString.replaceAll('.', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '')
      .replaceAll(' ', '');
};

export default removeNotNumber;
