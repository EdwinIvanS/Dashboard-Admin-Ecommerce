import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';


export const Topbar = () => {
    return(
        <div className='topbarContainer'>
            <div className='topbarWrapper'>
                <div className='topbarLeft'>
                    <h3 className='topbarLogo'>PANEL ADMON</h3>
                </div>
                <div className='topbarRight'>
                    <div className='topbarIcon'>
                        <NotificationsOutlinedIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIcon'>
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIcon'>
                        <SettingsIcon/>
                    </div>
                </div>
            </div>

        </div>
    )
}
