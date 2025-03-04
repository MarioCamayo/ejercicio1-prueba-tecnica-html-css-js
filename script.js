window.addEventListener('load', ()=>{
    
    //Seleccionar elementos del Dom
    let number = document.querySelector('.load__number')
    let btn = document.querySelector('.load__btn')
    let complete = document.querySelector('.load__complete')
    let background = document.querySelector('.main__background')

    //Variables contadores

    let blur = 30
    let percent = 1

    btn.addEventListener('click', (event)=>{

        btn.style.display ='none'

        let inter  = setInterval(()=>{
            percent++
            blur -= 30/100

            if(percent > 100){
                clearInterval(inter)
                complete.style.display = 'block'
            }else{
                number.innerHTML = percent+'%'
                background.style.filter = `blur(${blur}px)`
            }

        }, 20)
    })
})
