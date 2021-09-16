
const rdy = function() {
    const pic = document.querySelector('.energonomics__picture_move_up')
    const upBtn = document.querySelector('.energonomics__button_dir_up')
    const downBtn = document.querySelector('.energonomics__button_dir_down')
    const mediaWrapper = document.querySelector('.energonomics__media')
    const firstEnrgText = document.querySelector('.energonomics__text')
    const slogan = document.querySelector('.voice-control__slogan')
    const voiceControl = document.querySelector('.voice-control')
    let wWidth = window.innerWidth
    let moveCounter = 0

    const upButtonHandler = function() {
        TweenLite.to(pic, 0.5, {top:"-=20px"})
        downBtn.disabled = false
        moveCounter++
        console.log(moveCounter)
        if(moveCounter > 2 && wWidth > 767){
            this.disabled = true
        }
        else if (moveCounter >= 1 && wWidth <= 767){
            this.disabled = true
        }
    } 

    const downButtonHandler = function() {
        gsap.to(pic, 0.5, {top:"+=20px"});
        upBtn.disabled = false
        moveCounter--
        if(moveCounter === -5 && wWidth > 767){
            this.disabled = true
        }
        else if (moveCounter === -3 && wWidth <= 767){
            this.disabled = true
        }
    } 

    upBtn.addEventListener('click', upButtonHandler);
    downBtn.addEventListener('click', downButtonHandler);

    if (wWidth < 767){
        firstEnrgText.insertAdjacentElement('afterend', mediaWrapper);
        voiceControl.insertAdjacentElement('beforeend', slogan);
    }

    // holo
    const eclipse = document.querySelector('.voice-control__eclipse')
    const holo = document.querySelector('.voice-control__girl-image')
    tl =  gsap.timeline()
    gsap.to(eclipse, 2, {scale:1.2, repeat:1, yoyo:true})
    tl.from(holo, 1.5, {transform: "translate(0px, 855px)", opacity: "0" }, 1)
        .to(holo, 1, {transform: "translate(0px, 5px)", repeat: -1,  yoyo:true})



  }

  document.addEventListener("DOMContentLoaded", rdy)