let fetchData = () => {
  fetch("https://restcountries.eu/rest/v2/region/africa")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      let table_data = "";
      for (let i = 0; i < result.length; i++) {
        table_data += `<tr>
        <td>${result[i].name}</td>
        <td>${result[i].capital}</td>
        <td>${result[i].population}</td>
        <td>${result[i].timezones}</td>
        <td><img src="${result[i].flag}"/ width="50"></td>
        </tr>`;
      }
      document.querySelector("#tbody").innerHTML = table_data;
    });
};
fetchData();
