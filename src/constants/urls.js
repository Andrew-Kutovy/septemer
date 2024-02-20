const baseURL = 'https://rickandmortyapi.com/api/episode/';

const urls = {
    baseURL,
    episodeDetail:{
        episodeId:(id)=>`${id}`
    }
}
export {baseURL, urls}