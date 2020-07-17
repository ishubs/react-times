import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './../css/components.css'
// understanding the data:
// res.data.results[1].title --> gives title 
// res.data.results[1].published_date --> published_date


// https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=FdYwTNEiYnub1p4Tulg2nw6MNrLb5h0J
export default function (props) {
    
 const [articles, setarticles] = useState([])


    var section = props.section.toString();
  
    console.log(section)

    
  useEffect(() => {
    // code to run on component mount
    console.log("use Effect running ...");
    getArticles();
  }, [section]);
    
    async function getArticles() {
       
       axios

         .get(
           "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=FdYwTNEiYnub1p4Tulg2nw6MNrLb5h0J"
         )
         .then((data1) => setarticles(data1.data.results));
       
       console.log(articles)
  }

    return (
        <div className="articlecontainer">
            {
                articles.map(art => { 
                    return (
                      <a className="anchorarticle" href={art.url}>
                        <div className="articlecontent">
                          <div className="articletitle">{art.title}</div>
                         {art.multimedia && <img
                            style={{ height: "100px", width: "100px" }}
                            src={art.multimedia[0].url}
                          />}
                                <div>{art.abstract}</div>
                        </div>
                      </a>
                    );
                })    
                
            }
        </div>
    );
}


