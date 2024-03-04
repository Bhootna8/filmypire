import axios from "axios";

const url = "https://movies-api14.p.rapidapi.com/movies";

export default axios.create({
    baseURL: url,
    headers: {
        'X-RapidAPI-Key': 'ec8b683c04msh103c228f5ccfaf7p1bdcd5jsn73195b24e0e5',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
})