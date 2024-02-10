import React from 'react';

export const getPopularMovies = async() => {
    const url = "https://api.themoviedb.org/3/movie/popular";
    try{
        let response = await fetch (url, {
            method: "GET",
            headers:{
                "api_key": "a9749a239aa3646bb66d1d29b463cf3c",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTc0OWEyMzlhYTM2NDZiYjY2ZDFkMjliNDYzY2YzYyIsInN1YiI6IjY1YzdhMDhiYjZjZmYxMDE4NWE1OTJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YC2YJdACq_pOxvK1sScSRK1O30-CB-nx3ltSiYswUz0",
                "accept": "application/json"
            }
        });
        const data = await response.text();
        let responseJson = JSON.parse(data);
        return responseJson    
    } 
    catch(error){
        console.log(error);
    }
}