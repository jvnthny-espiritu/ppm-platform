import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <>
    <h1>Error 404: Page not found</h1>
    <h2>
    Back to {' '}
    <Link to={`/`}>
    Home
    </Link>
    </h2>
    </>
  )
}