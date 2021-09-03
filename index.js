function onLoad() {
   
    //menuclick
    const menuBtn = document.getElementById("menuBtn")
    const menuLinks = document.getElementsByClassName("menu-links")[0]
    const bodyE = document.getElementById("body")

     menuBtn.addEventListener('click', () => {
        console.log("helloka")
        menuLinks.classList.toggle('active')
        menuBtn.classList.toggle('open')
        bodyE.classList.toggle("noScroll")
        
    })  
    
    
    // SVG logo insert
    const logoSVG = `
        <svg width="173.6" height="118.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.6 118.1">
            <g>
                <path class="a" d="M67.7,25.9c-46.8,27-76.1,63.7-65.5,82s57,11.3,103.7-15.7,76.1-63.7,65.6-82S114.4-1.1,67.7,25.9ZM62.6,79.1a22.4,22.4,0,0,1,1.5,4.6,12.7,12.7,0,0,1,.5,4.2,7.7,7.7,0,0,1-.8,3.4A6,6,0,0,1,56,94a14.2,14.2,0,0,1-5.6-4.1,38.4,38.4,0,0,1-5-6.9,41.6,41.6,0,0,1-3.6-7.9,16.3,16.3,0,0,1-.7-6.8,6,6,0,0,1,6.3-5.5,8.8,8.8,0,0,1,3.4,1,18.7,18.7,0,0,1,3.3,2.6A18.7,18.7,0,0,1,57.3,70a37.3,37.3,0,0,1,2.9,4.4A29.9,29.9,0,0,1,62.6,79.1Zm10.3-9a2.1,2.1,0,0,1-1,1.9,2.2,2.2,0,0,1-2.1,0,5.5,5.5,0,0,1-2-2,5.4,5.4,0,0,1-.7-2.6,2.4,2.4,0,0,1,1-1.9,2.5,2.5,0,0,1,2.2.1,3.9,3.9,0,0,1,1.9,1.9A3.6,3.6,0,0,1,72.9,70.1Zm26.5-1.4a6.3,6.3,0,0,1-3.2,5,6.5,6.5,0,0,1-5.5.4,13,13,0,0,1-5.8-3.9L87,66.8a9.1,9.1,0,0,0,3.6,2.3,3.9,3.9,0,0,0,3.2-.2,3.2,3.2,0,0,0,1.5-2.2,5.5,5.5,0,0,0-.9-3.3,4.6,4.6,0,0,0-2.7-2.2,16.5,16.5,0,0,0-4.4-.8l-2.7-.2L82,59.5a9.1,9.1,0,0,1-2.8-1.7A9.6,9.6,0,0,1,77,54.9a9.5,9.5,0,0,1-1.5-6.4,6.1,6.1,0,0,1,3.1-4.8,5.9,5.9,0,0,1,4.7-.4,10.7,10.7,0,0,1,4.8,3.2l-2.2,3.3c-1.8-1.7-3.4-2.1-4.8-1.3a2.3,2.3,0,0,0-1.3,1.9,3.6,3.6,0,0,0,.6,2.7,2.1,2.1,0,0,0,.4.6l.5.4.6.4.7.3h.7l.8.2h2.5a21.6,21.6,0,0,1,2.9.3,24.6,24.6,0,0,1,2.7.8,9.2,9.2,0,0,1,3,1.8,12.6,12.6,0,0,1,2.5,3.1C99.2,64,99.8,66.4,99.4,68.7Zm8-18.5a2.2,2.2,0,0,1-3.2,1.9,5.3,5.3,0,0,1-1.9-2,4.5,4.5,0,0,1-.7-2.6,2.1,2.1,0,0,1,1-1.9,2.3,2.3,0,0,1,2.1.1,4.1,4.1,0,0,1,2,1.9A5.1,5.1,0,0,1,107.4,50.2Zm23.3,3.1a7,7,0,0,1-3.5.9,8.9,8.9,0,0,1-3.5-1.1,18.4,18.4,0,0,1-3.4-2.5,21.7,21.7,0,0,1-3.2-3.6,43.8,43.8,0,0,1-2.8-4.2,46.7,46.7,0,0,1-2.6-5.6,23.4,23.4,0,0,1-1.4-5.5,10.3,10.3,0,0,1,.3-5,6.3,6.3,0,0,1,2.8-3.4,5.8,5.8,0,0,1,4.8-.5,12.7,12.7,0,0,1,4.8,3.1l-1.8,3.8a11.5,11.5,0,0,0-2.8-1.9,2.6,2.6,0,0,0-2.3.2,3.3,3.3,0,0,0-1.5,3.1,11.4,11.4,0,0,0,.8,4.7,32.3,32.3,0,0,0,2.4,5,25.3,25.3,0,0,0,5.2,6.6c2,1.6,3.6,2,5,1.2s1.6-2.6,1-5.5h4C134.4,48.2,133.6,51.6,130.7,53.3ZM103.3,87.7c-44.7,25.8-87,33.5-96.2,17.4S25.5,56.2,70.3,30.4s87-33.5,96.3-17.4c4.5,7.8.3,19.9-11.9,34.1S124.5,75.5,103.3,87.7Zm-32-55.6c-21,12.2-39.1,26.4-50.9,40.2S4.8,97.2,8.8,104.1s16.2,9,33.4,5.8S81.4,98.1,102.3,86s39.1-26.4,50.9-40.2S168.8,20.9,164.8,14s-16.1-9-33.4-5.8S92.2,20,71.3,32.1Z"/>
                <path class="a" d="M46.8,68.3q-1.9,1.2-1.2,4.8A29.1,29.1,0,0,0,48.8,81a28.2,28.2,0,0,0,5.3,6.8c1.8,1.6,3.4,2,4.7,1.2a2.9,2.9,0,0,0,1.3-2.8,11.5,11.5,0,0,0-.8-4.6,40.5,40.5,0,0,0-2.5-5.2,29.5,29.5,0,0,0-5.3-6.9C49.7,68,48.2,67.6,46.8,68.3Z"/>
            </g>
        </svg>
    `;

    const logoSVGHolder = document.querySelector(".svg_holder.logo.top");

    logoSVGHolder.insertAdjacentHTML("afterbegin", logoSVG);


    // cover video + overlay div insert
    const video = `
        <video src="odyssey.mp4" autoplay loop muted></video>
    `;

    const videoHolder = document.querySelector("main #welcome");

    const welcome = document.querySelector("#welcome");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    videoHolder.insertAdjacentHTML("beforeend", video);

    videoHolder.appendChild(overlay);


    // know more circle icon insert
    const circleIcon = `
        <svg class="pgActive" width="31" height="31" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
            <g>
                <circle id="normal" cx="15.5" cy="15.5" r="10"/>
                <circle id="dotted" cx="15.5" cy="15.5" r="14.5"/>
            </g>
        </svg>
    `;

    const circleIconHolder = document.querySelector("#welcome a");

    circleIconHolder.insertAdjacentHTML("afterbegin", circleIcon);

    // map insert
    const map = document.querySelector("main #map .svg_holder.wave");
    const about = document.querySelector("main #about .svg_holder.wave");


    const mapTop = `<img src="map_section/just_top.png" alt="">`
    const mapImg = `<img id="mappng" src="map_section/just_map.png" alt="">`;
    const mapRoute = `<img id="route" src="map_section/route.svg" alt="">`;
    const mapPattern = `<img id="pattern" src="map_section/pattern.png" alt="">`;

    const mapWave = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 300.7">
            <defs>
            <linearGradient id="wave" x1="800" y1="307.71" x2="800" gradientUnits="userSpaceOnUse">
                <stop offset="0.86" stop-color="#00263d"/>
                <stop offset="0.91" stop-color="#00263d" stop-opacity="0.94"/>
                <stop offset="0.95" stop-color="#00263d" stop-opacity="0.74"/>
                <stop offset="1" stop-color="#00263d" stop-opacity="0.43"/>
                <stop offset="1" stop-color="#00263d" stop-opacity="0.4"/>
            </linearGradient>
            </defs>
            <path class="wave" d="M1600,307.7V15c-53.3-52-106.6,52-159.9,0s-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0S53.3,67,0,15V307.7Z"/>
        </svg>
    `;


    map.insertAdjacentHTML("afterbegin", mapTop);
    map.insertAdjacentHTML("afterbegin", mapImg);
    map.insertAdjacentHTML("afterbegin", mapRoute);
    map.insertAdjacentHTML("afterbegin", mapPattern);
    about.insertAdjacentHTML("beforeend", mapWave);
    map.insertAdjacentHTML("beforeend", mapWave);


    // arrows insert
    // const arrow = `•->•`;

    // const arrowHolder = document.createElement("span");

    // for


    // gallery swiper
    const swiperWrapper = document.querySelector(" #gallery .swiper-wrapper");

    const images = ["food", "surf", "car"];

    for (const image of images) {
        const slide = `<img src="gallery/pictures/${image}.png" class="swiper-slide" />`;
        swiperWrapper.insertAdjacentHTML("afterbegin", slide)
    }

    // pagination svg circles
    //MARCI: megpróbáltam a pagination-t, töröld ki ha sikerül!
    const blueCircle = `
        <svg class="notActive" width="31" height="31" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
            <g>
                <circle id="normal" cx="15.5" cy="15.5" r="8"/>
            </g>
        </svg>
    `;

    const gallery = document.querySelector("main #gallery");
    const activeCircle = `
        <svg class="active" xmlns="http://www.w3.org/2000/svg" width=30 height=30 viewBox="0 0 30 30">
            <g>
                <circle class="a" cx="15" cy="15" r="10"/>
                <circle class="b" cx="15" cy="15" r="14"/>
            </g>
        </svg>
    `;

    //gallery.insertAdjacentHTML("afterbegin", activeCircle);

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',

            renderBullet: function (index, active) {
                return `<span class="${active}">${activeCircle}</span>`
            },
        },

        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      
    });

    


    


    
    






    // footer logo insert
    const footerLogoHolder = document.querySelector("footer .svg_holder.logo.bottom");

    footerLogoHolder.insertAdjacentHTML("afterbegin", logoSVG);

    // footer wave insert
    const footerWave = `
        <svg width="1600" height="50.3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 50.3">
            <defs>
                <linearGradient id="footer_gradient" x1="800" y1="50.35" x2="800" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#1e95a9"/>
                <stop offset="0.28" stop-color="#1e95a9" stop-opacity="0.93"/>
                <stop offset="0.57" stop-color="#1e95a9" stop-opacity="0.73"/>
                <stop offset="0.87" stop-color="#1e95a9" stop-opacity="0.39"/>
                <stop offset="1" stop-color="#1e95a9" stop-opacity="0.2"/>
                </linearGradient>
            </defs>
            <path d="M1600,50.3V15c-53.3-52-106.6,52-159.9,0s-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0-106.7,52-160,0S53.3,67,0,15V50.3Z"/>
        </svg>
    `;

    const footerWaveHolder = document.querySelector("footer .svg_holder.wave.bottom");

    footerWaveHolder.insertAdjacentHTML("afterbegin", footerWave)









}
window.addEventListener("load", onLoad)