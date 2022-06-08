import IPerson from '../types/IPerson';
import api from './';

const getMUltiDataForm =() =>{
  const getSignos = () =>
    api.get('/signos')
        .then(({data})=>data)
        .catch((err:Error)=>console.error(err));

  const getTypeBlood = () =>
    api.get('/tipos-sanguineos')
        .then(({data})=>data)
        .catch((err:Error)=>console.error(err));

  const getCompetencias = () =>
    api.get('/competencias')
        .then(({data})=>data)
        .catch((err:Error)=>console.error(err));

  return Promise.all([getSignos(), getTypeBlood(), getCompetencias()]);
};

const postRequest = (data:any) =>
  api.post<IPerson>('/perfil', data)
      .then(({data})=>data)
      .catch((err:Error)=>(err));


export {getMUltiDataForm, postRequest};
