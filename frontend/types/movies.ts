export interface IMovie {
    id: string|number,
    title: string,
    cover: string,
    embed_trailer: string,
    release_year: string,
    gender_id: string,
    synopsis: string,
}

export interface IMoviePost {
    title: string,
    cover: string,
    embed_trailer: string,
    release_year: string,
    gender_id: string,
    synopsis: string,
}

export interface IMoviePut {
    id: string|number,
    title: string,
    cover: string,
    embed_trailer: string,
    release_year: string,
    gender_id: string,
    synopsis: string,
}