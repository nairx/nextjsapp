import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div className="flex justify-between bg-blue-900 text-white">
        <h1>My Application</h1>
        <div>
            <Link href="/">Home</Link>|
            <Link href="/services">Services</Link>|
            <Link href="/about">About</Link>|
            <Link href="/contact">Contact</Link>
        </div>
    </div>
  )
}
