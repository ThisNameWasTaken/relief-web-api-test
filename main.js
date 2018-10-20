import fetchPost from './fetchPost.js';

(async function () {
    const data = await fetchPost('https://api.reliefweb.int/v1/reports?appname=apidoc', {
        "limit": 30,
        "query": {
            "value": "earthquake",
            "fields": ["disaster"]
        },
        "filter": {
            "operator": "OR",
            "conditions": [
                {
                    "field": "disaster",
                    "status": "alert"
                }
            ]
        }
    });

    console.log(data);
})();