"use client"

import { useState } from "react"

export const ClientComponentTwo = () =>{
    const [name,setName] = useState('superman')
    return <h1>Client component two</h1>
}