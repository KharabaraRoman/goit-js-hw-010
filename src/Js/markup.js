import Notiflix from 'notiflix';
import refs from './refs';
import { createListCountries } from './create-list';
import { createInfoCountry } from './create-info';
import { upgreatMarkup } from './upgreate-murkup';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  opacity: 1,
  timeout: 1500,
});

export function markup(data) {ыы
  if (data.length === 1) {
    upgreatMarkup(refs.list.innerHTML, refs.info.innerHTML);
    refs.info.insertAdjacentHTML('beforeend', createInfoCountry(data));
  } else if (data.length >= 2 && data.length <= 10) {
    upgreatMarkup(refs.list.innerHTML, refs.info.innerHTML);
    refs.list.insertAdjacentHTML('beforeend', createListCountries(data));
  } else {
    upgreatMarkup(true, true);
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}