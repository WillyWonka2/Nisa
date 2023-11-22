'use client'
import { usePathname } from "next/navigation";
import React from "react";
import styles from '@/styles/header.module.css'
import { NavigationInterface } from "@/interfaces/interfaces";

const navLinks: NavigationInterface[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Blog',
        path: '/blog'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className = {styles.navigation}>
        {navLinks.map((item, i)=> (<li key={i}><a href={`${item.path}`} className = {item.path == pathname ? `${styles.active}` : ``}>{item.name}</a></li>))}
      </ul>
    </nav>
  );
}
