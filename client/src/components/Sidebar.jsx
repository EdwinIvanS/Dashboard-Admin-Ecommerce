import React from 'react';
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return(
        <div className='SidebarContainer'>
            <div className='sidebarWrapper'>

            {/* DASHBOARD  */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/Home' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Home
                            </li>
                        </Link>   
                        <Link to='/Analitics' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Analitics
                            </li>
                        </Link>       
                        <Link to='/Sales' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Sales
                            </li>
                        </Link>               
                    </ul>
                </div>

            {/* QUICK MENU  */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menú</h3>
                    <ul className='sidebarList'>
                        <Link to='/Users' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Users
                            </li>
                        </Link>   
                        <Link to='/Products' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Products
                            </li>
                        </Link>       
                        <Link to='/AddProducts' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Add Products
                            </li>
                        </Link>               
                    </ul>
                </div>

            {/* NOTIFICATIONS  */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <Link to='/Mail' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Mail
                            </li>
                        </Link>   
                        <Link to='/Feedback' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Feedback
                            </li>
                        </Link>       
                        <Link to='/Messages' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Messages
                            </li>
                        </Link>               
                    </ul>
                </div>
                
            {/* STAFF  */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <Link to='/Manage' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Manage
                            </li>
                        </Link>   
                        <Link to='/AnaliticsManage' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Analitics
                            </li>
                        </Link>       
                        <Link to='/Reports' className='sidebarLink'>
                            <li className='sidebarListItem active'>
                                Reports
                            </li>
                        </Link>               
                    </ul>
                </div>
            </div>
        </div> 
    )
}
