import { Routes, Route } from "react-router-dom"
import { Profile } from '../pages/Profile'
import { NewProfile } from '../components/NewProfile'
import { ProfileLayout } from '../components/ProfileLayout'
import EnhancedTable from '../components/PerformerDirectory'

export function ProfileRoutes() {
    return (
        <Routes>
            <Route element={<ProfileLayout/>}>
                <Route index element = {<EnhancedTable/>} />
                <Route path = ':id' element = {<Profile/>} />
                <Route path = 'new' element = {<NewProfile/>} />
        </Route>
        </Routes>
    )
}