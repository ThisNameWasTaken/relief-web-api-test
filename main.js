import fetchPost from './fetchPost.js';

async function getData() {
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

    console.log(data);
    return data.data;
};

const getLocation = () => getData().then(data => data.map(element => element.fields.primary_country.location));

getLocation().then(locations => console.log(locations));