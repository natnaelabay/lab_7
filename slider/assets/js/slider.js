const slideWrapper = document.querySelector(".carousel-inner")
const indicators = document.querySelector(".carousel-indicators")
const spinner = document.querySelector(".my-spinner")
document.addEventListener("DOMContentLoaded", (e) => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    slideWrapper.innerHTML += `
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${data[i].download_url}" alt="First slide">
                    </div>
                    `
                    indicators.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
                }
                else {
                    slideWrapper.innerHTML += `
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${data[i].download_url}" alt="First slide">
                    </div>`
                    indicators.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`
                }
            }
            return 1
        })

})
