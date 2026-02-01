import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

//constante en la que se va a almacenar la caché de búsqueda
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  {
    /*El useState recibe en la primera variable una constante que es la que se usa para mostrar en pantalla
            la información, como segunda variable la función para actualizar la variable y el estado inicial 
            en el parámetro del useState */
  }
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handlTermCliked = async (term: string) => {
    if (gifsCache.current[term]) {
      //Debemos de usar el current para apuntar al objeto actual
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);

    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string = "") => {
    const catchQuery: string = query.trim().toLowerCase();
    if (catchQuery === "") {
      console.log("EL query está vacío, no se agrega la etiqueta");
      return;
    }

    if (previousTerms.includes(catchQuery)) {
      console.log("Si ya está almacenado en la lista no lo incluimos");
      return;
    }

    //Se agrega a la lista de búsquedas previas, limitándolo a 8 elementos
    const currentTerms = previousTerms.slice(0, 8);
    currentTerms.unshift(catchQuery);
    console.log(
      "Aquí necesitamos actualizar la lista que se va a ver en la página",
    );
    setPreviousTerms(currentTerms);

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
    gifsCache.current[query] = gifs;
    console.log(gifsCache); //Para verificar que se están almacenando los objetos y no se lanza la petición http si ya se ha hecho antes
  };

  //Se devuelven los valores que necesitamos para el funcionamiento de la app
  return {
    //Propiedades
    gifs,

    //Métodos
    previousTerms,
    handlTermCliked,
    handleSearch,
  };
};
