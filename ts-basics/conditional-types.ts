import fetch from 'node-fetch';
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

/** Pokemon example */
interface PokemonResults {
  count: number;
  next?: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then(cb);
    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((resp) => resp.json()) as FetchPokemonResult<T>;
  }
}
