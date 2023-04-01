let inputs = document.querySelectorAll('.input_item_act input')

let btn = document.querySelector('button')


btn.onclick = () => {

    inputs.forEach((input) => {

        if (input.value === '') {
            input.classList.add('error')
            btn.style.background = 'red'
            btn.style.border = 'red'
        } else {
            input.classList.remove('error')
        }

        let inp = input.parentElement.parentElement
        let inp_p = inp.querySelector('p')
        let inp_span = inp.querySelector('span')
        let inp_img = inp.querySelector('img')
        if (input.classList.contains('error')) {
            inp_p.style.color = 'red'
            inp_span.style.color = 'red'
            inp_img.style.display = 'unset'
        } else {
            inp_p.style.color = '#4200FF'
            inp_span.style.color = '#949494'
            inp_img.style.display = 'none'
        }

    })

}
