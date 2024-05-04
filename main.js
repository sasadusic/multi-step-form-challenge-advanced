const steps = document.querySelectorAll('.step')
const prevs = document.querySelectorAll('.prev')
const nexts = document.querySelectorAll('.next')
const sideSteps = document.querySelectorAll('.side-step')
const inputs = document.querySelectorAll('.input')
const names = document.querySelector('.name')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')

let stepIndex = 1
let sideStepIndex = 1

nexts.forEach(next => {
    next.onclick = () => {
        if(next.classList.contains('btn-step-1')){
            inputs.forEach(input => {
                if(input.value == ''){
                    input.parentElement.classList.add('input-error')
                }else{
                    input.parentElement.classList.remove('input-error')
                }
            })
        }
        if(names.value == '' || email.value == '' || phone.value == ''){
            console.log('error')
        }
        else{

            if(next.classList.contains('btn-step-3')){
                document.querySelector('.choose-left').innerHTML = `${data.chooseName}(${data.type})`
                document.querySelector('.choose-right').innerHTML = `$${data.choose}/${data.typName}`
                document.querySelector('.total-type').innerHTML = data.type
                document.querySelector('.total-num').innerHTML = `+$${data.choose}/${data.typName}`
        }
        stepIndex++
        sideStepIndex++
        sideStepIndex = sideStepIndex > 4 ? 4 : sideStepIndex
        steps.forEach(step => {
            step.style.display = 'none'
        })
        steps[stepIndex - 1].style.display = 'block'

        sideSteps.forEach(sideStep => {
            if(sideStep.classList.contains('side-step-active')){
                sideStep.classList.remove('side-step-active')
            }
        })
        document.querySelector(`.side-step-${sideStepIndex}`).classList.add('side-step-active')
    }
}
})

prevs.forEach(prev => {
    prev.onclick = () => {
        stepIndex--
        sideStepIndex--
        steps.forEach(step => {
            step.style.display = 'none'
        })
        steps[stepIndex - 1].style.display = 'block'

        sideSteps.forEach(sideStep => {
            if(sideStep.classList.contains('side-step-active')){
                sideStep.classList.remove('side-step-active')
            }
        })
        document.querySelector(`.side-step-${sideStepIndex}`).classList.add('side-step-active')
    }
})

const toggle = document.querySelector('.toggle')

let data = {
    name: '',
    email: '',
    phone: '',
    type: 'monthly',
    arcade: 9,
    advance: 12,
    pro: 15,
    typName: 'mo',
    service: 1,
    storage: 2,
    profile: 2,
    choose: 0,
    chooseName: 'Arcade'
}

const chooseTypes = document.querySelectorAll('.choose-type')
const arcade = document.querySelector('.arcade-num')
const advance = document.querySelector('.advance-num')
const pro = document.querySelector('.pro-num')

const addType = document.querySelectorAll('.add-type')
const service = document.querySelector('.service-num')
const storage = document.querySelector('.storage-num')
const provile = document.querySelector('.provile-num')


toggle.onclick = () => {
    toggle.classList.toggle('yearly')
    data.type = data.type === 'monthly' ? 'yearly' : 'monthly'
    if(data.type === 'yearly'){
        data.typName = 'yr'
        data.arcade = 90
        data.advance = 120
        data.pro = 150

        data.service = 10
        data.storage = 20
        data.profile = 20
    }else{
        data.typName ='mo'
        data.arcade = 9
        data.advance = 12
        data.pro = 15

        data.service = 1
        data.storage = 2
        data.profile = 2
    }
    chooseTypes.forEach(chooseType => chooseType.innerText = data.typName)
    arcade.innerText = data.arcade
    advance.innerText = data.advance
    pro.innerText = data.pro

    addType.forEach(addType => addType.innerText = data.typName)
    service.innerText = data.service
    storage.innerText = data.storage
    provile.innerText = data.profile
}

// Choose
const cards = document.querySelectorAll('.choose-card')
const arcadeCard = document.querySelector('.arcade')
const advanceCard = document.querySelector('.advance')
const proCard = document.querySelector('.pro')

cards.forEach(card => {
    card.onclick = () => {
        cards.forEach(card => {
            card.classList.remove('choose-card-active')
        })
        card.classList.add('choose-card-active')
        const curChoose = card.dataset.choose
        data.choose = data[curChoose]
        data.chooseName = curChoose
        // alert(data.choose)
    }
})

// Summary
const btnStep3 = document.querySelector('.btn-step-3')
