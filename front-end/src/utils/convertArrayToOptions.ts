const convertArrayToOptions = (
    array: unknown[],
) => {
  return array.map((item: any) => {
    return {
      value: item,
      label: item,
    };
  });
};

export default convertArrayToOptions;
