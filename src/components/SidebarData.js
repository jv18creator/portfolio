import React from 'react'
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { MdWork } from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiFillHome />
    },
    {
        title: 'Work',
        path: '/work',
        icon: <MdWork />
    },
    {
        title: 'Services',
        path: '/services',
        icon: <AiFillProject />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoMdPeople />
    },
]