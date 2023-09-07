import React, { useState, useEffect } from 'react';

const TOKEN =
    'b6d5cd12b8166f9e185ac0336b7da30f10299db766ba24869a00f2012d4367a0830d9682f4e7c71ca098bdac2b496376b0e57b8a7074ad29abf448a9e11d38ec74b6d40cf1d02ad2d0c951858d6e82b7a531b8fc7056596e98e12a346e9c1466e9e906d030eea05dae4dbf9b1f2da7f4aa442e97f4436d74957ddcaac193826d';

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

    // /wp-json/custom/v1/get_css_for_page/YOUR_PAGE_ID
    useEffect(() => {
        fetch('http://172.104.167.168:32768/wp-json/custom/v1/get_css/18')
            .then((response) => response.json())
            .then((data) => {
                console.log({ data });
            })
            .catch((error) => console.log('Error fetching page:', error));
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:1337/api/Articles?populate=*', {
    //         headers: {
    //             'Authorization': `Bearer ${TOKEN}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log('Error:', error));
    // }, []);

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
