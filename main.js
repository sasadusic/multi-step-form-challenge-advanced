const steps = document.querySelectorAll('.step')
const prevs = document.querySelectorAll('.prev')
const nexts = document.querySelectorAll('.next')

let stepIndex = 1

nexts.forEach(next => {
    next.onclick = () => {
        stepIndex++
        steps.forEach(step => {
            step.style.display = 'none'
        })
        steps[stepIndex - 1].style.display = 'block'
    }
})

prevs.forEach(prev => {
    prev.onclick = () => {
        stepIndex--
        steps.forEach(step => {
            step.style.display = 'none'
        })
        steps[stepIndex - 1].style.display = 'block'
    }
})

const toggle = document.querySelector('.toggle')

let data = {
    name: '',
    email: '',
    phone: '',
    type: 'monthly',
}


toggle.onclick = () => {
    toggle.classList.toggle('yearly')
    data.type = data.type === 'monthly' ? 'yearly' : 'monthly'
    alert(data.type)
}