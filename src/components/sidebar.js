import { useState } from 'react';
import Table from 'react-bootstrap/Table'

import {
    BrowserRouter,
    Link
} from 'react-router-dom'

export default function Sidebar() {

    const [state, setState] = useState("");

    const handleToggle = () => {
        setState(state === "" ? "is-active" : "");
        console.log(state);
    };

    return (
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
                            <Link to="/user" className='sidebar-link'>Username</Link> 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/user" className='sidebar-link'>Profile</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/" className='sidebar-link'>Home</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/post" className='sidebar-link'>Create Post</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/saved" className='sidebar-link'>Saved Posts</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/settings" className='sidebar-link'>Settings</Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    ); 
    
}