import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

const RootLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />
      <div className="flex-grow w-full max-w-4xl p-2 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout