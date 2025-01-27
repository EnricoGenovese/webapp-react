import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

import Star from "./Star";
import Loader from "./Loader";

export default function MovieDetails({ dataMovies }) {
    const { id } = useParams();
    const imgPath = "http://localhost:3000/img/";

    return (
        <>
            {dataMovies ?
                <>
                    <div className="col-12 col-md-6 col-lg-4" key={id}>
                        <div className="card">
                            <img className="card-img-top" src={imgPath + dataMovies.image} alt={dataMovies.title} />
                            <div className="card-body">
                                <h5 className="card-title">{dataMovies.title}</h5>
                                <h5 className="card-title">{dataMovies.director}</h5>
                                <p className="card-text">{dataMovies.abstract}</p>
                                <Link to='/movies/' className="btn btn-primary">Torna alla lista dei film</Link>
                            </div>
                        </div>
                    </div>
                    <section className="py-4">
                        <div className="py-4 d-flex justify-content-between "><h3 >Recensioni:</h3><h3 >Media voto: {<Star num={dataMovies.vote_average} />}</h3></div>


                        {dataMovies.reviews.map((review) => (
                            <div key={review.id}>
                                <div className={"card d-flex flex-column mb-3"}>
                                    <div className="card-body">
                                        <p className="card-text">{review.text}</p>
                                        <h5 className="card-title">Vote: {<Star num={review.vote} />}</h5>
                                        <p className="card-text">By {review.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </>
                : <Loader />
            }
        </>
    )
}