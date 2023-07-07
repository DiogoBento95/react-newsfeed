import React from "react";

function Header() {
    return(
        <header className="bg-black p-3 border-b-4 border-amber-600">
            <span className="font-bold text-amber-600">
                Space News Express
            </span>

            <p className="ml-4 italic text-amber-600">
                Get your news with
                <code className="text-sm font-bold text-amber-600 italic"> Space News Express</code>
            </p>

        </header>
    )
}

export default Header