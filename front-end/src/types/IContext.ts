import Person from './IPerson';
export interface IGlobalContext{
    state: any;
    setState: any;
    PersonDescription?: Person;
    setPersonDescription?: any;
}

export interface IFormContext{
    form?: Person | undefined;
    setForm: (form: any) => void;
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    dataForm: any;
    setDataFormStep?: any;
    dataFormStep?: any;
}
