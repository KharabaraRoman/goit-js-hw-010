import Notiflix from 'notiflix';
import { markup } from './markup';
import refs from './refs';
import { upgreatMarkup } from './upgreate-murkup';

export function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        upgreatMarkup(refs.list.innerHTML, refs.info.innerHTML);
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      markup(data);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}