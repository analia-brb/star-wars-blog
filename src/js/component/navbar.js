import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import {useNavigate, Navigate} from "react-router-dom"

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const [favoritos, setFavoritos] = useState([]); //Borrar si no funciona

  const navigate = useNavigate()


function handleLogout() {
	actions.logout()
	navigate("/login")
}

  return (
    <>
    <nav className="navbar navbar-light bg-black mb-3">
      <Link to="/">
      {/* <div> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVTTo9JHVC4UBRz51V2RotMqaQNEl4eS-4A&usqp=CAU"
          alt=""
          className="m-4"
        />
      {/* </div> */}
      </Link>

      <div className="row-col-2 d-grid gap-2 d-md-flex right-content-md-end">

          {/* <Link to= "/card"><h4>Characters</h4></Link> */}
          {/* <Link to= "/cardplanet"><h3>Vehicles</h3></Link> */}
          {/* <Link to= "/cardvehicle"><h4>Vehicles</h4></Link> */}

          
        
          <Link to= "/login"><button className={"btn btn-info "+ store.view}><b>Login</b></button></Link>

          <button className={"btn btn-info "+ store.hidden} onClick={handleLogout}><b>Logout</b></button> 

          <button
            type="button"
            className="btn btn-info dropdown-toggle m-6"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <b>Favorites</b>
          </button>
      
        
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favoritos?.map((item, index) => (
              <li key={index}>{item}<button className="fas fa-trash-alt align-items-end "
              onClick={() =>
                actions.eliminarFavorito(item)
              }
            ></button></li>
            ))}{" "}
            
          </ul>
        </div>
    </nav>
    <div className="local-nav-bar- display-burguer secondary-nav"><button>Navigation</button><ul className="local-nav-items" role="menubar"><li className="local-nav-items" role="none"><a href="" data-title="Characters"></a></li></ul></div>
    </>
  );
};
