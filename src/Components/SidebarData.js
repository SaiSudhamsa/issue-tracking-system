import React from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import ViewListIcon from '@mui/icons-material/ViewList';
import TocIcon from '@mui/icons-material/Toc';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

 export const SidebarData =  [
    {
        title: "Overview",
        icon: <SummarizeIcon />,
        link: "/home"
    },
    {    
        title: "My Tickets",
        icon: <ViewListIcon />,
        link: "/ticket_list"
    },
    {
        title: "Projects",
        icon: <TocIcon />,
        link: "/projects"
    },
    {
        title: "Users and Permissions",
        icon: <PeopleIcon />,
        link: "/users"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        link: "/profile"
    }
 ]
 