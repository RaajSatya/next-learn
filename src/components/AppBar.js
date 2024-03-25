"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '../css/MyCss.module.css'
function AppBar() {
    const navigation = useRouter()
    const id = 23
    return (
        <div style={{ display: "flex", flexDirection: "row", columnGap: 15 }}>
            <Link href={'/admin/dashboard'}>Go to dashboard</Link>
            <Link href={`/contact/user/${id}`}>Go to Specfic User's Contact</Link>
            <button onClick={() => navigation.push('aboutus')}>aboutus</button>
            <button onClick={() => navigation.push('contact')}>contact</button>
            <button onClick={() => navigation.push('blog/post')}>blog</button>

        </div>
    )
}

export default AppBar