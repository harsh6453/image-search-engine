let accessKey = "bKoU3gOk6n3O6EcWH-C3P6YLX7NMmr8Bjr6P2MG3snI";
let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showmore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=20`;
    let response = await fetch(url);
    let data = await response.json();


    let results = data.results;

    if(page==1){
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        let image = document.createElement("img");
        image.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showmore.style.display= "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
showmore.addEventListener("click",()=>{
    page++;
    searchImages();
})

