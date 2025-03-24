const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
  const res = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=aae791a7"
  );
  const data = await res.json();
  console.log(data);
});
