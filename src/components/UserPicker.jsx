import { users } from '../json/static.json';
export default function UserPicker() {
    return (
        <select>
            {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>
    )
}