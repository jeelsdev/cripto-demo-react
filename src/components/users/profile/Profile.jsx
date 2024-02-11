import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import "./Profile.css";

const Profile = () => {
 
    const user = useContext(UserContext);

    return (
        <div className="profile">
            <div className="profile-info">
                <h2>Hola soy <span>{user.first_name} {user.last_name}</span></h2>
                <p>Email: {user.email}</p>
            </div>
            <div className="profile-photo">
                <img src={user.avatar} alt="profile image" />
            </div>
        </div>
    )   
}

export default Profile;