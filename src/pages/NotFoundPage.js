import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function NotFoundPage() {
  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [])
  return (
    <>
    <h1>Error 404: Page not found</h1>
    <h2>Redirecting you back to the Home page.</h2>
    </>
  )
}