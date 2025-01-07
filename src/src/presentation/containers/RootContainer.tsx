import { Outlet } from "react-router-dom";

const RootContainer: React.FC = () => {
    return (
        <div className="container">
            <h1>
                SN
            </h1>
            <Outlet />
            <footer>
                sn
            </footer>
        </div>
    )
}

export default RootContainer;
