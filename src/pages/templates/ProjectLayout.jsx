import { Outlet } from "react-router-dom";

export default function ProjectLayout(props){
    return(
        <div>
            <h1>Author</h1>
            <h3>Jess</h3>
            
            {/* Allows to render nested routers */}
            <Outlet />
            
            <h6>Copyright {new Date(Date.now()).getFullYear() }</h6>
        </div>
    )
}