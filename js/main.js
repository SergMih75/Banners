"use strict"

function paralax(event) {
    // console.log(event);
// let bgField = 0
    this.querySelectorAll ('.bg').forEach(bg => {
        // console.log('bg: ', bg);
        console.log(event.clientX);

    // bg.style.transform = 'translateX'+ event.clientX +'px'
    bg.style.transform = "translate(",+ event.clientX +"px)"
    bg.style.transformransform = `translateX (${event.clientX}px)`
    });
    // console.log(this.querySelectorAll ('.banners__bg-fild'));
}

document.addEventListener('mousemove',paralax)