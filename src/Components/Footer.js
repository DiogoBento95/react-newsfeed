import React from "react";

function Footer() {
    return(
        <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
                <code className="italic">News Express </code> &copy; Copyright 2023

            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
        </footer>
    )
}

export default Footer