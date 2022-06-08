import {useNavigate} from 'react-router-dom';


const navigate = useNavigate();
const handlerBack = () => navigate(-1);

const handlerGoTo = () => {
  const navigateTo = (path:string) =>
    navigate(path);


  return {navigateTo};
};


export {handlerBack, handlerGoTo};
