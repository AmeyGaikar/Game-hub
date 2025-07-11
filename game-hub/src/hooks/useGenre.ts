import genre from "@/data/genre";

 export interface Genre {
    id: number,
    name: string
    image_background: string 
}

const useGenre = () =>  ({data: genre, errors: null, isLoading: false});

export default useGenre