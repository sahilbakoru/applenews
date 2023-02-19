import React, { useState, useEffect, Suspense } from 'react';
import Card from '../Card';
import Header from '../Header';
import BusinessArts from '../Business/BusinessArts'
import EntertainmentArts from '../Entertainment/EntertainmentArts'
import HealthArts from'../Health/HealthArts'
import ScienceArts from '../Health/HealthArts'
import SportsArts from '../Sports/SportsArts'
import TechArts from '../Tech/TechArts'
import { Helmet } from 'react-helmet';


// import axios from 'axios';
const { parse } = require("rss-to-json");


const Articles = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        parse("https://vast-rose-pangolin-hat.cyclic.app/getTopArticles")
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
           Read Latest News, Headlines, Top News today, Breaking News Online | Happening24
                </title>
            </Helmet>
            <div className="row">
                <Header title="Top Stories" />
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
            </div>: <h2>Please wait it usually take 3 seconds.</h2>}
         
            <hr
        style={{
            color: "#000",
            backgroundColor: "#000",
            height: 1
        }}
    />
    {/* {news? <EntertainmentArts/>:null}
    {news?  <HealthArts/>:null}
    {news?    <ScienceArts/>:null}
    {news?  <SportsArts/>:null}
    {news?<TechArts/>:null}
    {news? <BusinessArts/>:null} */}
    

        </div>
    );
};

export default Articles;
