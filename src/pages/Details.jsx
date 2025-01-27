import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import MovieDetail from "../components/MovieDetail.jsx";

import { useParams } from "react-router-dom"
import { useEffect } from "react";

export default function Details() {
    const { singleMovie, getSingleMovie } = useGlobalContext();
    const { id } = useParams();

    useEffect(() => {
        getSingleMovie(id);
    }, [id]);


    return (
        <section className="container py-4">
            <div className="row g-3">
                <MovieDetail dataMovies={singleMovie} />
            </div>
        </section>
    )
}