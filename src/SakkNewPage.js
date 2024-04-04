import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SakkNewPage() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Új sakk</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios({
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: 'http://localhost:3001/chess',
                    data: {
                        name: e.target.elements.name.value,
                        birth_date: e.target.elements.birth_date.value,
                        world_ch_won: e.target.elements.world_ch_won.value,
                        profile_url: e.target.elements.profile_url.value,
                        image_url: e.target.elements.image_url.value
                    }
                })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Név:</label>
                    <div>
                        <input type="text" name="name" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Születési dátum:</label>
                    <div>
                        <input type="date" name="birth_date" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Világbajnokság nyereségek száma:</label>
                    <div>
                        <input type="number" name="world_ch_won" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Profil:</label>
                    <div>
                        <input type="text" name="profile_url" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div>
                        <input type="text" name="image_url" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Mentés</button>
            </form>
        </div>
    )
}