import * as yup from 'yup';

const stepOneValidate = yup.object().shape({
  name: yup.string().required('Name  é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório')
      .max(14, 'CPF inválido')
      .min(14, 'CPF inválido'),
  data_nascimento: yup.date().required('Data de nascimento é obrigatória').max(
      new Date(2004, 0, 1), 'Data de nascimento inválida'),
  signo: yup.string().required('Signo é obrigatório'),
  tipo_sanguineo: yup.string().required('Tipo sanguíneo é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório').min(
      15, 'Telefone inválido').max(15, 'Telefone inválido'),
});

const stepTwoValidate = yup.object().shape({
  formacao: yup.array().of(
      yup.object().shape({
        instituicao: yup.string().required('Instituição é obrigatória'),
        curso: yup.string().required('Curso é obrigatório'),
      })).required('Formação é obrigatória'),
/*      experiencia: yup.array().of(
      yup.object().shape({
        nome: yup.string().required('Nome é obrigatório'),
        instituicao: yup.string().required('Instituição é obrigatória'),
      })).required('Experiência é obrigatória'),
  competencias: yup.array().of(
      yup.string().required('Competências é obrigatória'),
  ).required('Competências é obrigatória'), */
});

const stepThreeValidate = yup.object().shape({
  resumo: yup.string().required('Resumo é obrigatório'),
});

export {stepOneValidate, stepTwoValidate, stepThreeValidate};


/*
{
      "name": "Aurora Tereza Regina Jesus",
      "cpf": "79349886057",
      "data_nascimento": "1983-04-12",
      "signo": "Áries",
      "tipo_sanguineo": "B+",
      "email": "aurora-jesus94@moyageorges.com.br",
      "telefone": "91988285303",


      "formacao": [
        {
          "instituicao": "FANESE",
          "curso": "Faz tudo"
        },
        {
          "instituicao": "Pio Decimo",
          "curso": "Faz tudo II"
        }
      ]
      "competencias": [
        "react",
        "php"
      ],
      "experiencia": [
        {
          "empresa": "Maratar",
          "tempo": "10 anos",
          "cargo": "Entregador de Café",
          "sua_empresa_atual": false
        },
        {
          "empresa": "Maratar",
          "tempo": "10 anos",
          "cargo": "Entregador de Café nivel 2",
          "sua_empresa_atual": true
        }
      ],


            "resumo": "Eu gosto de mim porque sou bom mesmo",

    },
*/
