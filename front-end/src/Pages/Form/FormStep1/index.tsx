import {Formik, Form} from 'formik';
import {Button, Flex, Grid} from '@chakra-ui/react';
import MyInput from '../../../components/Input';
import MySelect from '../../../components/Select';
import React, {useEffect, useState} from 'react';
import api from '../../../services';
import {convertArrayToOptions} from '../../../utils';
import {formatCPF, numberPhone} from '../../../utils/regexInput';
import {maxInputDate} from '../../../utils/minMaxDate';

interface IOptions{value:string, label:string}

const FormStep1: React.FC = () => {
  const [signos, setSignos] = useState<IOptions[]>([]);
  const [tipoSanguinio, setTipoSanguinio] = useState<IOptions[]>([]);
  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = () => {
    api.get('/signos')
        .then(({data}:any)=>setSignos(convertArrayToOptions(data)))
        .catch((err)=>console.error(err));
    api.get('/tipos-sanguineos')
        .then(({data}:any)=>setTipoSanguinio(convertArrayToOptions(data)))
        .catch((err)=>console.error(err));
  };

  return (
    <Formik
      initialValues={{
        nome: '',
        cpf: '',
        data_nascimento: '',
        signo: '',
        tipo_sanguineo: '',
        email: '',
        telefone: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({handleSubmit, setFieldValue}) => (
        <Form onSubmit={handleSubmit}>
          <Flex flexDirection={'column'} gap={2}>
            <MyInput _label='Nome' nameID='nome'/>
            <Grid templateColumns="1fr 1fr"
              gap={4}
            >
              <MyInput _label='CPF' nameID='cpf'
                onChange={(value:any)=>
                  setFieldValue('cpf', formatCPF(value.target.value))}
                placeholder='000.000.000-00'
              />
              <MyInput _label='Data de Nascimento'
                type={'date'}
                max={maxInputDate}
                nameID='data_nascimento'
              />
              <MySelect _label='Signo'
                nameID="signo"
                options={signos}

              />
              <MySelect _label='Tipo Sanguineo'
                nameID="tipo_sanguineo"
                options={tipoSanguinio}

              />
              <MyInput _label='E-mail'
                nameID='email'
                placeholder='example@example.com'
              />
              <MyInput _label='Telefone'
                nameID='telefone'
                onChange={(value:any)=>
                  setFieldValue('telefone', numberPhone(value.target.value))}
                placeholder='(00) 00000-0000'
              />
            </Grid>
            <Button type="submit"
              colorScheme="purple"
              width="full"
            >
                  Login
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default FormStep1;
