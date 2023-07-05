import React from "react";

function Header() {
    return(
        <header className="bg-gray-200 border-b p-3">
            <span className="font-bold">
                Space News Express
            </span>

            <p className="ml-4 italic">
                Get your news with
                <code className="text-sm font-bold text-gray-900 italic"> Space News Express</code>
            </p>

        </header>
    )
}

export default Header