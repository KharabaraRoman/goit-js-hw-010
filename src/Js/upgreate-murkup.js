import refs from './refs';

export function upgreatMarkup(list, info) {
  if (info) {
    refs.info.innerHTML = '';
  }
  if (list) {
    refs.list.innerHTML = '';
  }
}