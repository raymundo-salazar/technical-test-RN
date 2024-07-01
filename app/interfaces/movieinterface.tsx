export type MovieDBResponse = MovieDBPopular[];

export interface MovieDBPopular {
  id: number;
  overview: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
}
