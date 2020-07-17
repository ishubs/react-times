import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './../css/components.css'
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";
// understanding the data:
// res.data.results[1].title --> gives title 
// res.data.results[1].published_date --> published_date


// https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=FdYwTNEiYnub1p4Tulg2nw6MNrLb5h0J
export default function (props) {
    
 const [articles, setarticles] = useState([])
 const [loading, setloading] = useState(true)
    
    var section = props.section.toString();
  
    console.log(section)

    
  useEffect(() => {
    // code to run on component mount
      console.log("use Effect running ...");
      setloading(true)
      
    getArticles();
  }, [section]);
    
    async function getArticles() {
       
       axios

         .get(
           "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=FdYwTNEiYnub1p4Tulg2nw6MNrLb5h0J"
         )
         .then((data1) => setarticles(data1.data.results)).then(setloading(false));
       
       console.log(articles)
  }

    return (
      <div className="articlecontainer">
        <div>{loading && <h1>Loading</h1>}</div>
        {articles.map((art) => {
          return (
            <a className="anchorarticle" href={art.url}>
              <div className="articlecontent">
                {art.multimedia && (
                  <img
                    style={{ height: "300px", width: "300px" }}
                    src={art.multimedia[0].url}
                  />
                )}
                <div className="articletext">
                  <div className="articletitle">{art.title}</div>
                  <div className="abstract">{art.abstract}</div>
                  <div>
                    Published on : {art.published_date.substring(0, 10)}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
}


