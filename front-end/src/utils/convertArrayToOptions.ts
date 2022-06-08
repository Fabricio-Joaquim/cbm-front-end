interface IOutput{
    value: string,
    label: string
}

const convertArrayToOptions = (
    array: unknown[],
):IOutput[] => {
  return array.map((item: any) => {
    return {
      value: item,
      label: item,
    };
  });
};

export default convertArrayToOptions;
