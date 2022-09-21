import { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const { setAlerta } = useLetras();
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      {
        setAlerta("Coloca nombre de artista y cancion");
      }
      return;
    }
    setAlerta("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
