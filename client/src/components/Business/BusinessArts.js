import React, { useState, useEffect, Suspense } from 'react';
import Card from '../Card';
import Header from '../Header';
import { Helmet } from 'react-helmet';

const { parse } = require("rss-to-json");

const BusinessArts = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        parse("https://vast-rose-pangolin-hat.cyclic.app/getBusinessArts")
            .then((res) => {
                console.log(res.items)
                setNews(res.items)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
                <Helmet>
                <title>
           Read Latest Business News , Headlines, Top News today, Breaking News Online | Happening24
                </title>
            </Helmet>
            <div className="row">
                <Header title="Business" />
                
            </div>
            {news?
            <div className="card-columns">
                {
                    news?.map((e, index) => {
                        return (
                            <Suspense
                                key={index}
                                fallback={
                                    <h1 style={{ color: '#fff' }}>
                                        Loading news...
                                    </h1>
                                }
                            >
                                <Card
                                all_news={news}
                                    key={index}
                                    title={e.title}
                                    link={e.link}
                                    img={e.enclosures[0]?.url}
                                    desc={e.description}
                                    date={new Date(e.published).toISOString().slice(0, 10)}
                                    buttonText="Read More"
                                />
                            </Suspense>
                        );
                    })}
            </div>: <h2>loading...</h2>}
    
            <hr
        style={{
            color: "#000",
            backgroundColor: "#000",
            height: 1
        }}
    />
        </div>
    );
};

export default BusinessArts;
