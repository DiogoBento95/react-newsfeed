import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const url = `https://api.spaceflightnewsapi.net/v4/articles`
    const [news, setNews] = useState({
        data: null,
        error: false
    })

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setNews({
                    data: response.data,
                    error: false
                })
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
                setNews({
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(news.error) {
        return (
            <div>
                <React.Fragment>
                    <p> There seems to have been an error. </p>
                </React.Fragment>
            </div>
        )
    }

    if(news.data) {
        return (
            <div className="flex flex-col bg-gray-200">
                <React.Fragment>
                {news.data.results.map(item => (
                    <div key={item.id} className="mb-6 border-b-2 border-black last:border-b-0 flex flex-col items-center">
                        <h3 className="m-2 font-bold text-2xl mb-3"> From: {item.news_site}</h3>
                        <h2 className="m-2 font-bold text-xl mb-3">{item.title}</h2>
                        <img src={item.image_url} alt={item.title} className="w-1/2 mt-2 border-4 border-black shadow-lg rounded-md"/>
                        <a className="m-2 my-6 font-bold text-amber-600 border-4 rounded-md px-3 py-1 border-amber-600 bg-gray-950" href={item.url}>Read more</a>
                    </div>
                ))}
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