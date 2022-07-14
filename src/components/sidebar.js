import { useState } from 'react';
import Table from 'react-bootstrap/Table'

import {
    BrowserRouter,
    NavLink,
    Outlet
} from 'react-router-dom'

export default function Sidebar() {

    const [state, setState] = useState("");

    const handleToggle = () => {
        setState(state === "" ? "is-active" : "");
        console.log(state);
    };

    return (
        <BrowserRouter>
            <div className={`sidebar ${state}`}>
                <div className='hamburger-bg'></div>
                <div onClick={handleToggle} className={`hamburger double-v ${state}`}>
                    <div className="double-line-container">
                        <div className="dline-l"></div><div className="dline-r"></div>
                    </div>
                    <div className="line"></div>
                    <div className="double-line-container">
                        <div className="dline-l"></div><div className="dline-r"></div>
                    </div>
                </div>
                <div className='link-table'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>
                                <NavLink to="/user" className='sidebar-link'>Username</NavLink> 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <NavLink to="/user" className='sidebar-link'>Profile</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/" className='sidebar-link'>Home</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/post" className='sidebar-link'>Create Post</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/saved" className='sidebar-link'>Saved Posts</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/settings" className='sidebar-link'>Settings</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Outlet />
                </div>
            </div>
        </BrowserRouter>
    ); 
    
}