import { useOutletContext, useParams } from "react-router-dom";

export function Profile() {
    const { id } = useParams()
    const obj = useOutletContext()
    return(
        <>
            Profile { id } {obj.hello}
        </>
    )
}