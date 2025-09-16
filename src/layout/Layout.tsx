import { Outlet } from "react-router"
import "../layout/Layout.css"

export default function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}
