import {fetchClima} from '../helpers/fetchClima'

export default function useForm(){

    const onInputChange = (e, setCiudad) => {
        setCiudad(e.target.value);
    };
    
    const handleSubmit = (e, setImg, setDataClima, setErrorMensaje, ciudad) => {
        e.preventDefault();
        fetchClima(setImg, setDataClima, setErrorMensaje, ciudad);
    };

    return {
        onInputChange,
        handleSubmit,
    }
};