export function createListCountries(data) {
  return data
    .map(
      ({ name, flags }) =>
        `<li class="country-item">
     <img src="${flags.png}" alt="flag ${name.official}" width="40">
     <p>${name.official}</p>
   </li>`
    )
    .join('');
}