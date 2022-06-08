/* eslint-disable semi */
export default interface IPerson{
    cpf: string,
    name: string,
    signo: string,
    email: string,
    telefone: number,
    tipo_sanguineo: string,
    resumo: string,
    competencias: string[],
    data_nascimento: string | Date | undefined,
    experiencia?: IExpirience[],
    formacao: IGraduation[],
};


interface IExpirience{
    empresa: string,
    tempo: string,
    cargo: string,
    sua_empresa_atual: boolean,
}

interface IGraduation{
    instituicao: string,
    curso: string
}
