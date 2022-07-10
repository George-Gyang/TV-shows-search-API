const resetbtn = document.querySelector('#reset')
const jokesDiv = document.querySelector('#jokesbg')
const form = document.querySelector("#searchForm")


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchValue = form.elements.search.value;
    const showLink = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    multiShow(showLink.data)
    form.elements.search.value = "";
})

const multiShow = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const tvImage = document.createElement('img');
            tvImage.src = result.show.image.medium
            tvImage.style.margin = "10px";
            jokesDiv.parentNode.insertBefore(tvImage, jokesDiv)
        }
    }
}
function clearImages() {
    imgs = document.querySelectorAll('img');
    for (let eachImg of imgs) {
        eachImg.remove();
    }
}
resetbtn.addEventListener('click', clearImages)