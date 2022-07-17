import Link from "next/link"
import Sidebar from "./Sidebar"
function Layout({children,currentMenu=""}) {
  return (
    <div className='layout'>
      <Sidebar className='layout__left' currentMenu = {currentMenu}/>
      <section className="layout__right">
        {children}
      </section>
    </div>
  )
}

export default Layout