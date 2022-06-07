import {useNavigate} from 'react-router-dom';


const navigate = useNavigate();
const handlerBack = () => navigate(-1);
const handlerGoTo = (page:string) => navigate('/'+page);
export {handlerBack, handlerGoTo};
