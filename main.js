const steps = document.querySelectorAll('.step')
const prevs = document.querySelectorAll('.prev')
const nexts = document.querySelectorAll('.next')
const sideSteps = document.querySelectorAll('.side-step')
const inputs = document.querySelectorAll('.input')
const names = document.querySelector('.name')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const addCont = document.querySelector('.adds-cont')

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
        if(next.classList.contains('btn-step-3')){
            addCont.innerHTML = ''
            for (const key in data.adds) {
                if (data.adds.hasOwnProperty(key)) {
                    const add = data.adds[key];
                    if (add.added) {
                        const p = document.createElement('p');
                        p.innerHTML = `${add.text}<span class='add-span'>+$${add.value}/${data.typName}</span>`
                        p.className = 'phar';
                        p.classList.add('add-phar')
                        addCont.append(p);
                    }
                }
            }
            console.log('test')
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
    adds:{
        service: {value: 1, added: false, text: 'Online services'},
        storage: {value: 2, added: false, text: 'Larger storage'},
        profile: {value: 2, added: false, text: 'Customizable profile'},
    },
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
const profile = document.querySelector('.profile-num')


toggle.onclick = () => {
    toggle.classList.toggle('yearly')
    data.type = data.type === 'monthly' ? 'yearly' : 'monthly'
    if(data.type === 'yearly'){
        data.typName = 'yr'
        data.arcade = 90
        data.advance = 120
        data.pro = 150

        data.adds.service.value = 10
        data.adds.storage.value = 20
        data.adds.profile.value = 20
    }else{
        data.typName ='mo'
        data.arcade = 9
        data.advance = 12
        data.pro = 15

        data.adds.service.value = 1
        data.adds.storage.value = 2
        data.adds.profile.value = 2
    }
    chooseTypes.forEach(chooseType => chooseType.innerText = data.typName)
    arcade.innerText = data.arcade
    advance.innerText = data.advance
    pro.innerText = data.pro

    addType.forEach(addType => addType.innerText = data.typName)
    service.innerText = data.adds.service.value
    storage.innerText = data.adds.storage.value
    profile.innerText = data.adds.profile.value
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

// Adds
const adds = document.querySelectorAll('.add-card')

adds.forEach(add => {
    add.onclick = () => {
        const addType = add.dataset.add

        data.adds[addType].added = !data.adds[addType].added
        // alert(`${data.adds[addType].added}, ${data.adds[addType].value}`)

        if(add.classList.contains('add-added')){
            add.classList.remove('add-added')
        }else{add.classList.add('add-added')}
    }
})