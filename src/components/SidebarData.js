import React from 'react'
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
// import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Work',
        path: '/work',
        icon: <MdIcons.MdWork />
    },
    {
        title: 'Services',
        path: '/services',
        icon: <AiIcons.AiFillProject />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdPeople />
    },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <FaIcons.FaEnvelopeOpenText />
    // },
]