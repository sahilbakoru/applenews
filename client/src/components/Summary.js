import React,{useEffect} from "react";
import news from "../img/news.jpeg";
import { useLocation, Link } from "react-router-dom";
import Card from "./Card";
const Summary = () => {
useEffect(()=>{
  window.scrollTo(0,0)
},[])
  const location = useLocation();
  const data = location.state;
console.log(data)
  return (
    <div>
      <div className="card">
        <img
          src={!data.img ? news : data.img}
          className="card-img-top card-img"
          alt="..."
        />
        <div className="card-body">
          <h1 >{data.title}</h1>
          <hr/>
          <h2 style={{margin:"5%"}}> {data.desc}</h2>
          <hr/>

          {/* <a href={data.link} target="_blank" rel="noreferrer noopener"> */}
            <center>
              <div
              onClick={()=>{window.open(data.link, "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=700",)}}
                style={{
                  background: "#32a852",
                  width: "50%",
                  fontSize: "20px",
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "1%",
                  color: "white",
                  cursor:"pointer"
                }}
                c
              >
                Read Full Article
              </div>{" "}
            </center>
          {/* </a> */}

          <Link
            to={{
              pathname: "/",
            }}
          >
            {" "}
            <center>
            <div style={{ 
              background: "#fff",
              width: "20%",
              fontSize: "10px",
              textAlign: "center",
              borderRadius: "8px",
              padding: "1%",
              color: "black",
             }}>
              Go To Home
            </div>
            </center>
          </Link>
          <p className="source">Published: {data.date}</p>
        </div>
      </div>

<h1 style={{color:"#AD2622", margin:"2%"}}>You might like.</h1>
<hr/>

<div className="card-columns"   onClick={()=>window.scrollTo(0,0)}>
    { data?.all_news?.map((e, index) => 
                            <Card
                          
                      all_news={data?.all_news}
                                    key={index}
                                    title={e.title}
                                    link={e.link}
                                    img={e.enclosures[0]?.url}
                                    desc={e.description}
                                    date={new Date(e.published).toISOString().slice(0, 10)}
                                    buttonText="Read More"
                     />
                      )}
            </div>
    </div>
  );
};

export default Summary;
