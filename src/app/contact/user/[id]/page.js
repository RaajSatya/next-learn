"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function User({ params }) {
    // const prm = useParams()
    console.log('params', params)
    return (
        <div>User id :{params?.id}</div>
    )
}

export default User