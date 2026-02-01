import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

    const { gifs, previousTerms, handlTermCliked, handleSearch } = useGifs();


    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
            {/*Search */}
            <SearchBar placeholder='Buscar gifs' onQuery={handleSearch} />
            {/*Previous Searches */}
            <PreviousSearches title="Búsquedas previas" searches={previousTerms} onLabelCliked={handlTermCliked} />
            {/* Gifs */}
            {/* Aquí tenemos que leer el arreglo de gifs que recibimos */}
            <GifList gifs={gifs} />
        </>
    );
}; 
