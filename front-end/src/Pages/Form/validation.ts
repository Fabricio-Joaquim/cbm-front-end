import * as yup from 'yup';
import {validateInput, minInputDate} from '../../utils/minMaxDate';
import {validateCPF} from '../../utils/ValidateCPF';


const stepOneValidate = yup.object().shape({
  name: yup.string()
      .required('Nome  é obrigatório')
      .max(100, 'Nome deve ter no máximo 100 caracteres'),
  cpf: yup.string()
      .required('CPF é obrigatório')
      .max(14, 'CPF inválido')
      .min(14, 'CPF inválido')
      .test('cpf', 'CPF inválido', (value) => validateCPF(value)),
  data_nascimento: yup.date()
      .required('Data de nascimento é obrigatória')
      .min(new Date(minInputDate), 'Voce tem mais de 110 anos?')
      .max(new Date(validateInput), 'Você deve ser maior de 18 anos'),
  signo: yup.string()
      .required('Signo é obrigatório'),
  tipo_sanguineo: yup.string()
      .required('Tipo sanguíneo é obrigatório'),
  email: yup.string()
      .email('Email inválido')
      .required('Email é obrigatório'),
  telefone: yup.string()
      .required('Telefone é obrigatório')
      .min(15, 'Telefone inválido')
      .max(15, 'Telefone inválido'),
});

const stepTwoValidate = yup.object().shape({
  formacao: yup.array().of(
      yup.object().shape({
        instituicao: yup.string()
            .required('Instituição é obrigatória'),
        curso: yup.string()
            .required('Curso é obrigatório'),
      })).required('Formação é obrigatória'),
  experiencia: yup.array().of(
      yup.object().shape({
        empresa: yup.string()
            .required('Empresa é obrigatório'),
        tempo: yup.string()
            .required('Tempo  de Serviço é obrigatória'),
        cargo: yup.string()
            .required('Cargo é obrigatório'),
        sua_empresa_atual: yup.boolean()
            .required('Seu emprego atual é obrigatória'),
      })).required('Experiência é obrigatória'),
  competencias: yup.array()
      .of( yup.string().required('Competências é obrigatória')
          .test('competencia',
              'Edite ou remova o campo', (value) => value !=='editar'),
      ).required('Competências é obrigatória'),
});

const stepThreeValidate = yup.object().shape({
  resumo: yup.string().required('Resumo é obrigatório'),
});

export {stepOneValidate, stepTwoValidate, stepThreeValidate};
