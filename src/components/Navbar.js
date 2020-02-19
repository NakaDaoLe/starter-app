import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark text-light">
            <a className="navbar-brand" href="https://blockstack.org">
            <img src="white-logo.svg" alt="Logo" />
            </a>
            <div id="Auth" className="ml-auto">
            </div>
      </nav>
    )
}
