import "./userList.css";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../redux/usersSlice";
import { Link } from "react-router-dom";

const UserList = () => {
    const users = useSelector(selectAllUsers);

    return (
        <div className="userListContainer">
            <div className="userListWrapper">
                <h2 className="userListTitle">Users</h2>
                <ul className="userList">
                    {users.map((user)=>(
                        <Link to={`/user/${user.id}`} key={user.id}>
                            <li className="userListItem">
                                {user.name} 
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UserList