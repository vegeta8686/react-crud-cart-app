import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Edit() {
    const location = useLocation();
    const data = location.state;
    return (
        <>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require(`../images/${data.imageUrl}`)} alt={data.imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <Link to='/home' className="btn btn-primary">Go To Home</Link>
                </div>
            </div>
        </>
    );
}