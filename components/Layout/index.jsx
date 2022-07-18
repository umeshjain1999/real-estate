import Link from "next/link"
import Sidebar from "./Sidebar"
function Layout({children}) {
  return (
    <div className='layout'>
      <Sidebar className='layout__left'/>
      <section className="layout__right">
        {children}
      </section>
    </div>
  )
}

export default Layout