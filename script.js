const inputText = document.getElementById("inputText");
const Sembuh = document.getElementById("Sembuh");
const Lokasi = document.getElementById("Lokasi");
const Meninggal = document.getElementById("Meninggal");
const Confirmed = document.getElementById("Confirmed");

// const submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener('click', function(e)
// {
//     e.preventDefault();

//     const url ="https://covid19.mathdro.id/api";

//     fetch(url)
//     .then((res) => res.json())
//     .then(data => {
//         Confirmed.innerHTML = `Confirmed : ${data.confirmed.value}`
//     })
// })


$("#submitBtn").click(function(e)
{
    e.preventDefault();
    const url ="https://covid19.mathdro.id/api";

    fetch(url)
    .then((res) => res.json())
    .then(data => {
        Confirmed.innerHTML = `Confirmed : ${data.confirmed.value}`
        Meninggal.innerHTML = `Deaths : ${data.deaths.value}`
    })

})

// $("submitBtn").click(function(e){
//     e.preventDefault();

//     const url ="https://data.covid19.go.id/public/api/prov_time.json";

//     fetch(url)
//     .then((res) => res.json())
//     .then((res) => console.log(res))

//   })
  