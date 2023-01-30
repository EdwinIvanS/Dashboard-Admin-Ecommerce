import React from 'react';
import { Link } from "react-router-dom";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LoopIcon from '@mui/icons-material/Loop';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ReportIcon from '@mui/icons-material/Report';
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const Sidebar = () => {
    return (
      <div className="SidebarContainer">
        <div className="sidebarWrapper">
          {/* DASHBOARD  */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/Home" className="sidebarLink">
                <li className="sidebarListItem active">
                  <AddHomeWorkIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/Analitics" className="sidebarLink">
                <li className="sidebarListItem active">
                  <TrendingUpIcon className="sidebarIcon" />
                  Analitics
                </li>
              </Link>
              <Link to="/Sales" className="sidebarLink">
                <li className="sidebarListItem active">
                  <AttachMoneyIcon className="sidebarIcon" />
                  Sales
                </li>
              </Link>
            </ul>
          </div>

          {/* QUICK MENU  */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menú</h3>
            <ul className="sidebarList">
              <Link to="/allUsers" className="sidebarLink">
                <li className="sidebarListItem active">
                  <ManageAccountsIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/addUser" className="sidebarLink">
                <li className="sidebarListItem active">
                  <PersonAddIcon className="sidebarIcon" />
                  Add Users
                </li>
              </Link>
              <Link to="/products" className="sidebarLink">
                <li className="sidebarListItem active">
                  <LoopIcon className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link to="/addProducts" className="sidebarLink">
                <li className="sidebarListItem active">
                  <AddTaskIcon className="sidebarIcon" />
                  Add Products
                </li>
              </Link>
            </ul>
          </div>

          {/* NOTIFICATIONS  */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <Link to="/mail" className="sidebarLink">
                <li className="sidebarListItem active">
                  <MailOutlineIcon className="sidebarIcon" />
                  Mail
                </li>
              </Link>
              <Link to="/messages" className="sidebarLink">
                <li className="sidebarListItem active">
                  <ChatBubbleOutlineIcon className="sidebarIcon" />
                  Messages
                </li>
              </Link>
            </ul>
          </div>

          {/* STAFF  */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <Link to="/manage" className="sidebarLink">
                <li className="sidebarListItem active">
                  <AdminPanelSettingsIcon className="sidebarIcon" />
                  Manage
                </li>
              </Link>
              <Link to="/analiticsManage" className="sidebarLink">
                <li className="sidebarListItem active">
                  <TrendingUpIcon className="sidebarIcon" />
                  Analitics
                </li>
              </Link>
              <Link to="/reports" className="sidebarLink">
                <li className="sidebarListItem active">
                  <ReportIcon className="sidebarIcon" />
                  Reports
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
}
