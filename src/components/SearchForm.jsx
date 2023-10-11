import React from "react";
import useForm from "../hooks/useForm";

export default function SearchForm({
  setImg,
  setDataClima,
  setErrorMensaje,
  ciudad,
  setCiudad,
  setFlag,
}) {
  const { onInputChange, handleSubmit } = useForm();

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, setImg, setDataClima, setErrorMensaje, ciudad, setFlag)
      }
    >
      <input
        id="city"
        type="text"
        name="ciudad"
        placeholder="Search a city"
        required
        onChange={(e) => onInputChange(e, setCiudad)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
