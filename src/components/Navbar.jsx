import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export default function Navbar() {
  const { pathname } = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/motivation', label: 'Motivation' },
    { to: '/methodology', label: 'Methodology' },
    { to: '/results', label: 'Results' },
    { to: '/discussion', label: 'Discussion' },
    { to: '/conclusion', label: 'Conclusion' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl text-primary">Gen-AI Thesis</h1>
        <ul className="flex gap-4">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={clsx(
                  "px-3 py-1 rounded hover:bg-blue-100 transition",
                  pathname === link.to && "bg-blue-500 text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}