import { Outlet } from "react-router"
import "../layout/Layout.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import "./Layout.css"

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
