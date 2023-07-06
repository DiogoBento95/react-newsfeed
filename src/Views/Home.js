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
            .catch(() => {
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
            <div className="flex flex-col">
                <React.Fragment>
                {news.data.results.map(item => (
                    <div key={item.id}>
                        <h2 className="font-bold text-xl mb-3">{item.title}</h2>
                        <h3 className="font-bold text-xl mb-3"> From: {item.news_site}</h3>
                        <a className="font-bold" href={item.url}>Read more</a>
                        <img src={item.image_url} alt={item.title} />
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