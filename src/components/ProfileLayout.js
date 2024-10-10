import { Link, Outlet } from "react-router-dom";

export function ProfileLayout() {
    return (
        <>
            <Link to='/profile/1'>Profile 1</Link>
            <br/>
            <Link to='/profile/2'>Profile 2</Link>
            <br/>
            <Link to='/profile/new'>New Profile</Link>
            <Outlet/>
        </>
    )
}