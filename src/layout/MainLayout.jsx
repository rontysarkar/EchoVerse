import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet/> 
            </div>
            {/* footer   */}
            <Footer/>
            
        </div>
    );
};

export default MainLayout;