export default function TodoItem({$target, title, onDelete, onToggle}) {
    const $item = document.createElement('li')
    $item.id = `todoItem-${Date.now()}`

    $target.appendChild($item)

    this.state = {
        isEditing: false,
        isCompleted: false,
    }

    this.setState = (newState) => {
        this.state = newState
    }

    this.render = () => {
        $item.innerHTML = `
            <div class="view">
                <input class="toggle" type="checkbox"/>
                <label class="label">${title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value=${title} />
        `
    }

    this.render()

    const $toggle = $item.querySelector('.toggle')
    $toggle.addEventListener('click', () => {

        $item.classList.toggle('completed')
        $toggle.classList.toggle('checked')

        const { isCompleted } = this.state
        this.setState({
            ...this.state,
            isCompleted: isCompleted ? false : true
        })

        onToggle(this.state.isCompleted)
    })

    const $delButton = $item.querySelector('.destroy')
    $delButton.addEventListener('click', () => {
        onDelete($item.id, this.state.isCompleted)
    })

    $item.addEventListener('dblclick', (e) => {
        e.target.closest('li').classList.add('editing')
    })

    const $input = $item.querySelector('.edit')
    $input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            $item.querySelector('.label').textContent = e.target.value
            e.target.closest('li').classList.remove('editing')
        } else if (e.key === 'Escape') {
            $input.value =  $item.querySelector('.label').textContent
            e.target.closest('li').classList.remove('editing')
        }
    })
}