import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export function ProfileLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3})
    const number = searchParams.get('n')
    return (
        <>
            <Link to='/profile/1'>Profile 1</Link>
            <br/>
            <Link to='/profile/2'>Profile 2</Link>
            <br/>
            <Link to={`/profile/${number}`}>Profile {number}</Link>
            <br/>
            <Link to='/profile/new'>New Profile</Link>
            <Outlet context={{hello: 'Wassup'}}/>
            <input type='number'
            value={number}
            onChange={e => setSearchParams({n: e.target.value})}
            />
        </>
    )
}