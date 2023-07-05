import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const url = `https://api.spaceflightnewsapi.net/v4/articles/4`
    const [results, setResults] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setResults(response.data)
            })
    }, [url])

    if(results) {

        return (
            <div className="flex flex-col">
                <React.Fragment>
                    <h1 className="text-2xl font-bold mb-3"> 
                        {results.title} 
                    </h1>
                    <div>
                        <img className="scale-50"
                            src={results.image_url}
                            alt={results.title}
                        />
                    </div>
                    <div className="font-bold text-xl mb-3">
                        From: {results.news_site}
                    </div>
                    <div className="font-bold text-xl mb-3">
                        
                    </div>
                </React.Fragment>
            </div>
        )

    }

    return (
        <div>
            <React.Fragment>
                <h1> Sorry, we couldn't find what you're looking for. </h1>
            </React.Fragment>
        </div>
    )

}

export default Home