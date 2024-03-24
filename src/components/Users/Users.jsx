import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {

     const users = useLoaderData();
     console.log(users);
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <p>Fantastic and fine users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;