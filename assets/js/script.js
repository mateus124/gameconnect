const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.add('disable')
        })
        target.classList.remove('disable')

        tabs.forEach(t =>{
            t.classList.remove('active-button')
        })
        tab.classList.add('active-button')
    })
})