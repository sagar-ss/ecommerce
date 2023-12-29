import { Outlet } from 'react-router-dom'
import {
    Announcement,
    Navbar,
    Newsletter,
    Footer

} from '../components/componentsIndex'
const HomeLayout = () => {
  return (
    <>
        <Announcement/>
        <Navbar/>
        <Outlet/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default HomeLayout
