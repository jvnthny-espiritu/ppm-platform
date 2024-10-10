import { Outlet } from "react-router-dom";

export function ProfileList() {
  return (
    <>
      <h1>Profile List</h1>
      <Outlet context={{hello: 'List of Profiles'}}/>
    </>
  )
}