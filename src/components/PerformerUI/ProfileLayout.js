import { Link, Outlet } from "react-router-dom";

export function ProfileLayout() {
    return (
        <>
            <Link to='/profile/'>Home</Link>
            <br/>
            <Link to='/profile/view'>View Profile</Link>
            <br/>
            <Link to='/profile/edit'>Edit Profile</Link>
            <br/>
            <Link to='/profile/create'>Create Profile</Link>
            <Outlet context={{hello: 'Wassup'}}/>
        </>
    )
}