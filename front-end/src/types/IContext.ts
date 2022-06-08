import Person from './IPerson';
export interface IGlobalContext{
    PersonDescription?: Person;
    setPersonDescription?: any;
    handlerCPF?: any;
    cpf?: string;
}

export interface ArrayInput{
    value: string,
    label: string
}

export interface IFormContext{
    nextStep: () => void;
    prevStep: () => void;
    step: number;
    dataForm: any;
    loadingForm?: boolean;
    setDataFormStep?: any;
    dataFormStep?: any;
    sign: ArrayInput[];
    bloodType: ArrayInput[];
    competence: ArrayInput[];
    setSign?: (sign: ArrayInput[]) => void;
}
