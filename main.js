import fetchPost from './fetchPost.js';

(async function () {
    const data = await fetchPost('https://api.reliefweb.int/v1/reports?appname=apidoc', {
        "limit": 20,
        // "profile": "list",
        "profile": "full",
        // "preset": "analysis",
        "query": {
            "value": "disaster"
        },
        // "fields": {
        //     "include": [
        //         "primary_country",
        //         "status",
        //         "theme",
        //         "url",
        //         "origin",
        //         "body-html",
        //         "body",
        //         "file",
        //         "disaster_type"
        //     ]
        // },
        // "verbose": 1,
        // "fields": {
        //     "include": ["disaster.name"]
        // },
        // related_glide
        "filter":
        {
            "operator": "AND",
            "conditions": [{
                "field": "primary_country",
                "value": "France"
            }, {
                "field": "language.name",
                "value": "english"
            }]
        }
    });

    data.data.forEach(article => {
        // console.log();
        document.body.innerHTML += (article.fields['body-html'] + '<hr/>');
    });

    console.log(data);
})();