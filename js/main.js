"use strict";

function paralaxHeader(elem) {
    elem.addEventListener("mousemove", () => {

    let rect = elem.getBoundingClientRect();

    console.log(event.clientX - rect.left);

    if ((event.clientX - rect.left -164)<0) {
    elem.children[0].style.left = event.clientX - rect.left -164 + "px";
    }
    });

    elem.addEventListener('mouseleave', () => {
        if(window.screen.width > 392) {
        elem.children[0].style.left = -164 + "px";
        } 
        if (window.screen.width < 392){
            elem.children[0].style.left = -0.5 + "px";
        }
    })
}

function paralaxSide(elem) {
    elem.addEventListener("mousemove", () => {

    let rect = elem.getBoundingClientRect();

    if ((event.clientX - rect.left -26)<-14) {
    elem.children[0].style.left = event.clientX - rect.left -26 + "px";
    }
    if ((event.clientY - rect.top -30)<-21) {
    elem.children[0].style.top = event.clientY - rect.top -30 + "px";
    }
    });

    elem.addEventListener('mouseleave', () => {
        elem.children[0].style.left = -26 + "px";
        elem.children[0].style.top = -30 + "px";
    })
}

function paralaxMap(elem) {
    elem.addEventListener("mousemove", () => {

    let rect = elem.getBoundingClientRect();

    
    if (window.screen.width > 392) {
        if ((event.clientX - rect.left -206.7)<-199.7) {
    elem.children[0].style.left = event.clientX - rect.left -100.7 + "px";
        }
        if ((event.clientY - rect.top -27)<1) {
    elem.children[0].style.top = event.clientY - rect.top -27 + "px";
        }
    }else{
        if ((event.clientX - rect.left -45)<-199.7) {
    elem.children[0].style.left = -45 + "px";
}
if ((event.clientY - rect.top -14)<4) {
    elem.children[0].style.top = -14 + "px";
}
    }
    });

    elem.addEventListener('mouseleave', () => {
        if (window.screen.width > 392) {
        elem.children[0].style.left = -206.7 + "px";
        elem.children[0].style.top = -27 + "px";
        }else{
            elem.children[0].style.left = -45 + "px";
            elem.children[0].style.top = -14 + "px";
        }
    })
}

function cursorOver() {
    document.addEventListener("mouseover", (elem) => {
        
    if (
    elem.target.classList.contains("banner-header__bg") &&
    (window.screen.width > 392)
    ) {
    paralaxHeader(elem.target);
    }

    if (elem.target.classList.contains("banner-side__bg")) {
    paralaxSide(elem.target);
    }

    if (elem.target.classList.contains("banner-map__bg")) {
    paralaxMap(elem.target);
    }
    });
}

if (window.screen.width > 392) {
    cursorOver();
}