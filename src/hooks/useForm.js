import {fetchClima} from '../helpers/fetchClima'

export default function useForm(){

    const onInputChange = (e, setCiudad) => {
        setCiudad(e.target.value);
    };
    
    const handleSubmit = (e, setImg, setDataClima, setErrorMensaje, ciudad, setFlag) => {
        e.preventDefault();
        fetchClima(setImg, setDataClima, setErrorMensaje, ciudad, setFlag);
    };

    return {
        onInputChange,
        handleSubmit,
    }
};