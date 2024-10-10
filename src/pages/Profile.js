import { useParams } from "react-router-dom";

export function Profile() {
    const { id } = useParams()
    return <h1>Profile { id }</h1>
}