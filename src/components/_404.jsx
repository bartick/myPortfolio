import React from 'react'
import { Link } from 'react-router-dom'

export default function _404() {
    return (
        <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16 flex flex-col text-center items-center">
            <svg className="text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
            </svg>
            <div style={{lineHeight: '2rem'}}>&nbsp;</div>
            <h2 className="font-medium text-base text-purple-600 mb-4 uppercase tracking-wide">404 ERROR</h2>
            <h1 className="text-5xl font-medium mb-2"><b>Page Not Found</b></h1>
            <p style={{color: 'gray'}} className="text-base">Sorry, we couldn&apos;t find the page you&apos;re looking for</p>
            <div style={{lineHeight: '0.5rem'}}>&nbsp;</div>
            <Link to="/" className="text-base text-purple-600 hover:underline">
                Go Back Home →
            </Link>
        </div>
    )
}
