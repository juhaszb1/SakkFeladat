import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SakkUpdatePage() {

    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const [, setData] = useState([]);
    const [updateName, setUpdateName] = useState("");
    const [updateBirthDate, setUpdateBirthDate] = useState("");
    const [updateProfileUrl, setUpdateProfileUrl] = useState("");
    const [updateWorldChWon, setUpdateWorldChWon] = useState("");
    const [updateImageUrl, setUpdateImageUrl] = useState("");

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
    }, [id, updateName, updateBirthDate, updateProfileUrl, updateWorldChWon, updateImageUrl]);

    const handleUpdateNameChange = (e) => {
        setUpdateName(e.target.value);
    };
    const handleUpdateBirthDateChange = (e) => {
        setUpdateBirthDate(e.target.value);
    };
    const handleUpdateProfileUrlChange = (e) => {
        setUpdateProfileUrl(e.target.value);
    };
    const handleUpdateWorldChWonChange = (e) => {
        setUpdateWorldChWon(e.target.value);
    };
    const handleUpdateImageUrlChange = (e) => {
        setUpdateImageUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            url: `http://localhost:3001/chess/${id}`,
            data: {
                name: e.target.elements.name.value,
                birth_date: e.target.elements.birth_date.value,
                profile_url: e.target.elements.profile_url.value,
                world_ch_won: e.target.elements.world_ch_won.value,
                image_url: e.target.elements.image_url.value
            }
        })
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Sakk bejegyzések módosítása</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Név:</label>
                    <div>
                        <input type="text" name="name" className="form-control" defaultValue={updateName} onChange={handleUpdateNameChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Születési dátum:</label>
                    <div>
                        <input type="date" name="birth_date" className="form-control" defaultValue={updateBirthDate} onChange={handleUpdateBirthDateChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Világbajnokság nyereségek száma:</label>
                    <div>
                        <input type="number" name="world_ch_won" className="form-control" defaultValue={updateWorldChWon} onChange={handleUpdateWorldChWonChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Profil:</label>
                    <div>
                        <input type="text" name="profile_url" className="form-control" defaultValue={updateProfileUrl} onChange={handleUpdateProfileUrlChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div>
                        <input type="text" name="image_url" className="form-control" defaultValue={updateImageUrl} onChange={handleUpdateImageUrlChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Mentés</button>
            </form>
        </div>
    )
}