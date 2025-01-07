import { users } from '../json/static.json';

export default function UserList() {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}



        </ul>
    )
}