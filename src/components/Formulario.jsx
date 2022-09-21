import { useState } from "react";
const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  return (
    <form action="">
      <legend>BUscar por artista y cancion</legend>
      <div className="form-grid">
        <div className="">
          <label htmlFor="">Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="">
          <label htmlFor="">Cancion</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre Cancion"
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value={"Buscar"} />
      </div>
    </form>
  );
};

export default Formulario;
