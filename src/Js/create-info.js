export function createInfoCountry(data) {
  return data
    .map(
      ({ name, flags, capital, population, languages }) =>
        `<p class="country-name"><img src="${
          flags.png
        }" alt="country ${name}" width="60"/> ${name.official}</p>
        <p style="font-weight: bold">Capital: <span style="font-weight: normal">${capital}</span></p>
        <p style="font-weight: bold">Population: <span style="font-weight: normal">${population}</span></p>
        <p style="font-weight: bold">Languages: <span style="font-weight: normal">${Object.values(
          languages
        )}</span></p>`
    )
    .join('');
}