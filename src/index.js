const labs = [...document.querySelector('#all-labs').children]

const hideSolved = () => {
    labs.forEach((el, idx) => {
        if (el.tagName.toLowerCase() == 'h2') {
            let hide = true
            for (let i = idx + 1; i < labs.length; i++) {
                if (labs[i].classList.contains('is-notsolved')) {
                    hide = false
                    break
                } else if (labs[i].tagName.toLowerCase() == 'h2') {
                    break
                }
            }
            if (hide) {
                el.style.display = 'none'
            }
        } else if (el.classList.contains('is-solved')) {
            el.style.display = 'none'
        }
    })
}

const showSolved = () => {
    labs.forEach(e => {
        e.style.display = 'flex'
    })
}

const main = () => {
    const id = Math.random().toString(36).substring(2, 6)

    const section = document.createElement('section')

    const p = document.createElement('p')
    p.textContent = 'Filters'
    p.style.fontSize = '1.25rem'
    p.style.marginBottom = '1rem'
    section.appendChild(p)

    const div = document.createElement('div')
    div.style.display = 'flex'

    const label = document.createElement('label')
    label.htmlFor = id
    label.textContent = 'Hide Solved'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = id
    checkbox.style.marginLeft = checkbox.style.marginRight = '0.7rem'
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            hideSolved()
        } else {
            showSolved()
        }
    })

    div.appendChild(label)
    div.appendChild(checkbox)

    section.appendChild(div)

    const nav = document.querySelector('.nav-lhs-scrollable')
    nav.appendChild(section)
}

main()
