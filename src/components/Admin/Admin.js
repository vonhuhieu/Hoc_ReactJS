import SideBar from "./SideBar";
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ManageUser from "./Content/ManageUser";
import DashBoard from "./Content/DashBoard";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => { handleCollapsed() }} />

                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Admin;
