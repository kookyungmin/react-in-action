import UserList from "./UserList.jsx";
import UserPicker from "./UserPicker.jsx";

export default function UsersPage() {
    return (
        <main>
            <p>Users!</p>
            <UserList />
            <UserPicker />
        </main>
    )
}