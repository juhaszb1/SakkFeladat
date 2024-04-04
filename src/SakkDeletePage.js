import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, NavLink } from "react-router-dom";

export default function SakkDeletePage() {

    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            },
            url: `http://localhost:3001/chess/${id}`
        })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Sakk bejegyzés törlése</h1>
            <div className="row" style={{ marginLeft: '470px' }}>
                <div key={data.id} className="card" style={{ width: '18rem', marginBottom: '20px', marginLeft: '20px' }}>
                    <div className="card-body">
                        <h3 className="card-title">{data.name}</h3>
                        <b className="card-title">Születési dátum: <p>{data.birth_date}</p></b>
                        <b className="card-title">Világbajnokság nyereségek száma: {data.world_ch_won}</b>
                        <br />
                        <br />
                        <b className="card-title">Profil: <a href={data.profile_url} target="_blank">{data.profile_url}</a></b>
                        <br />
                        <br />
                        <NavLink to={`/`}>
                            <img src={data.image_url} className="card-img-top" alt="..." />
                        </NavLink>
                    </div>
                </div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios({
                    method: 'delete',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: `http://localhost:3001/chess/${id}`
                })
                    .then(() => {
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }}>
                <div style={{ marginLeft: '530px' }}>
                    <NavLink to={`/`}>
                        <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                    </NavLink>
                    <button className="bi bi-trash btn btn-danger rounded">Törlés</button>
                </div>
            </form>
        </div>
    );
}