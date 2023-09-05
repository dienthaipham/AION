import React, { useState, useEffect } from 'react';

const WordPressSinglePage = () => {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        fetch('http://172.104.167.168:32768/wp-json/wp/v2/pages/18')
            .then((response) => response.json())
            .then((data) => {
                setPageContent(data.content.rendered);
            })
            .catch((error) => console.log('Error fetching page:', error));
    }, []);

    return (
        <div>
            {pageContent ? (
                <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WordPressSinglePage;
