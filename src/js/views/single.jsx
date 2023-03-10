import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Profile from "../component/profile.jsx"

export const Single = (props) => {
  const { store, actions } = useContext(Context); //nos hace disponible todo lo que está en store y en actions
  const params = useParams();
  // const [personajesInfo, setPersonajesInfo] = useState({})

  // console.log(useParams());

  // function obtenerCadaPersonaje (){
  //   fetch("https://www.swapi.tech/api/people/"+params.theid)
  //   .then(res=> res.json())
  //   .then((data) => setPersonajesInfo(data.result))
  // }

  useEffect (() => {
    actions.obtenerCadaPersonaje(params.theid);

  },[])
  
  

  return (
    <div className="jumbotron text-light">



      
    <img src={"https://starwars-visualguide.com/assets/img/characters/"+(params.theid)+".jpg"}alt="" />
      <p className="display-5">Name: {store.personajesInfo.properties?.name}</p>
      <p className="display-5">Birth Date: {store.personajesInfo.properties?.birth_year}</p>
      <p className="display-5">Gender: {store.personajesInfo.properties?.gender}</p>
      <p className="display-5">Height: {store.personajesInfo.properties?.height}</p>
      <p className="display-5">Mass: {store.personajesInfo.properties?.mass}</p>
      <p className="display-5">Skin-Color: {store.personajesInfo.properties?.skin_color}</p>
      <p className="display-5">Eye-Color: {store.personajesInfo.properties?.eye_color}</p>
      <p className="display-5">Hair-Color: {store.personajesInfo.properties?.hair_color}</p>


      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-light" href="#" role="button">
          Back home</span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};


