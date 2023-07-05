import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const url = `https://api.spaceflightnewsapi.net/v4/articles`
    const [news, setNews] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setNews(response.data)
            })
    }, [url])

    if(news) {

        return (
            <div className="flex flex-col">
                <React.Fragment>
                {news.results.map(item => (
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