let styleRow = () => {
  let table = document.querySelector("#table");

  for (var i = 0, row; (row = table.rows[i]); i++) {
    for (var j = 0, col; (col = row.cells[j]); j++) {
      if (col.innerHTML === "UTC+01:00" || col.innerHTML === "UTC-01:00") {
        document.querySelector(".tz").parentElement.style.backgroundColor =
          "lightgreen";
      }
    }
  }
};

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
        <td class='tz'>${result[i].timezones}</td>
        <td><img src="${result[i].flag}"/ width="50"></td>
        </tr>`;
      }
      document.querySelector("#tbody").innerHTML = table_data;
      styleRow();
    });
};
fetchData();
