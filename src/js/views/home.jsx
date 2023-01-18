import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import Card from "../component/card.jsx";
import {Context} from "../store/appContext.js"

export const Home = () => {
  const [personajes, setPersonajes] = useState([]);

  // function obtenerInfoPersonajes() {
  //   fetch(" https://www.swapi.tech/api/people")
  //     .then((res) => res.json())
  //     .then((data) => setPersonajes(data.results))
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   obtenerInfoPersonajes();
  // }, []);
  // console.log(personajes);

  return (
    <>
      <div className="text-center mt-5">
        {store.personajes.map((item) => (
          <Card nombre={item.name} key={item.uid} id={item.uid} />
          // Le mando nombre y uid y lo coloca en el componente Card
        ))}
      </div>
    </>
  );
};