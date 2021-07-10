import React, { useEffect } from 'react';
import { useState } from 'react';
import { Jumbotron, Button } from "react-bootstrap";

const TopHeadline = () => {
    const [Article, setArticle] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bangladesh&apiKey=c3075acedb494daa800fb8a91db8ee7e')
            .then(response => response.json())
            .then(res => setArticle(res.articles));
    }, [])

    console.log(Article)

    return (
        <div>
            <h3 className="text-center">Top News Headline In Bangladesh Today</h3>
            {Article.map((article) =>
                <Jumbotron>
                    <h3>{article.title}</h3>
                    <p>
                       {article.description}
                    </p>
                    <p>
                        <Button variant="primary" href= {article.url}>Read Full News Here</Button>
                    </p>
                </Jumbotron>
            )}
        </div>
    );
};

export default TopHeadline;