import listTodos from "../utils/listTodos.js"

export default function TodoMenu({initialState, onSelectMenu}) {
    const $all = document.querySelector('.all')
    const $active = document.querySelector('.active')
    const $completed = document.querySelector('.completed')
   
    this.state = initialState

    this.setState = (newState) => {
        this.state = newState
    }

    const addClickEvent = ($element) => {
        $element.addEventListener('click', (e) => {
            const $filter = e.target.closest('a')

            const $prevMenu = document.querySelector(`a[class*="${this.state}"]`)
            $prevMenu.classList.remove('selected')

            $filter.classList.add('selected')

            onSelectMenu($filter.classList[0])

            listTodos(this.state)
        })
    }

    addClickEvent($all)
    addClickEvent($active)
    addClickEvent($completed)
}