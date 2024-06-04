export const dynamic = 'force-dynamic' // defaults to auto
const axios = require('axios');

const colors = [
    "808080", // gray
    "804000", // brown
    "008000", // green
    "00C0C0", // cyan
    "0000FF", // blue
    "C0C000", // yellow
    "FF8000", // orange
    "FF0000", // red
];

export async function GET(req) {
    const params = req.nextUrl.searchParams;
    const query = params.get('type');
    const atcoderId = params.get('username') ?? "kokastar";

    const res = {
        "schemaVersion": 1,
        "label": "",
        "message": "",
        "color": "",
        "cacheSeconds": 1800
    };


    if(query==="h" || query==="heuristic" || query==="H" || query==="Heuristic"){
        res.label = "AtCoder(Heuristic)";
        try{
            const rating = (
                await axios.get(
                    `https://atcoder.jp/users/${atcoderId}/history/json?contestType=heuristic`,
                )
            ).data.slice(-1)[0].NewRating;

            res.message = rating;
            res.color = colors[Number(rating)>=2400 ? 7 : Math.floor(Number(rating)/400)];
        }
        catch{
            res.message = "IE";
            res.color = "F0AD4E";
        }
    }
    else{
        res.label = "AtCoder";
        try{
            const rating = (
                await axios.get(
                    `https://atcoder.jp/users/${atcoderId}/history/json?contestType=algo`,
                )
            ).data.slice(-1)[0].NewRating;

            res.message = rating;
            res.color = colors[Number(rating)>=2400 ? 7 : Math.floor(Number(rating)/400)];
        }
        catch{
            res.message = "IE";
            res.color = "F0AD4E";
        }
    }

    return Response.json(res)
}