import { Link } from "react-router-dom";

function Card({ data }) {
    const imgPath = "http://localhost:3000/img/" + data.image;
    const { title, director, abstract, id } = data;
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={imgPath} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">{director}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
                </div>
            </div>
        </>
    );
}

export default Card;    