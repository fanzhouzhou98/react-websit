import "./Louty.css";
import { Link } from "react-router-dom";
import React from "react";

function PageHeader() {
    const headerList = [
        {
            routeName: 'Dashboard',
            path: '/Dashboard'
        },
        {
            routeName: 'Register',
            path: '/register'
        },
        {
            routeName: 'Login',
            path: '/login'
        }
    ]
    return (
        <div className="navContainer">
            <div className="nav">
                {
                    headerList.map(item =>
                        <Link to={item.path} key={item.routeName}>
                            <div className="navItem">{item.routeName}</div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default PageHeader;