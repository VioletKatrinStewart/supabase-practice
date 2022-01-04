import { checkError, client } from './client.js';

export async function getMovies() {
  const resp = await client.from('movies').select('*');
  return checkError(resp);
  // return the list of all movies
}

export async function getMoviesWithDirector() {
  const resp = await client.from('movies').select('director_id,directors (name)');
  return checkError(resp);
}

export async function getDirectorNames() {
  // return the list of the director's names
  const resp = await client.from('directors').select('name');
  return checkError(resp);
}

export async function getMovieById(id) {
  // return the movie with the given id
  const resp = await client.from('movies').select('title').match({ id: id }).single();
  return checkError(resp);
}

export async function getMovieByTitle(title) {
  const resp = await client.from('movies').select('id').match({ title: title }).single();
  return checkError(resp);
  // return the movie with the given title
}

export async function getOldestMovie() {
  const resp = await client.from('movies').select('*').lt('year', '1978').single();
  return checkError(resp);
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
