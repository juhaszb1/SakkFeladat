import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SakkSinglePage() {

    const params = useParams();
    const id = params.id;
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
            <h1 style={{ textAlign: 'center' }}>Sakk bejegyzések</h1>
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
        </div>
    );
}