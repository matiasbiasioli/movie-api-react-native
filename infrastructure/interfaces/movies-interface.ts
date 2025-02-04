export interface Movies {
    id: number,
    title: string,
    description: string,
    releaseDate: Date,
    poster: string,
    backdrop: string,
    calification: number
}

export interface MovieDetails extends Movies {
    genres: string[]
    duration: number
    originCompanies: string[]
    productionCountry: string[]
    originalTitle: string
}

export interface ActorsDetails {
    id: number
    name: string
    character: string | undefined
    poster: string
}