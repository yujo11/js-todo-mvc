export default function countTodo({ completedCount, totalCount, selectedMenu }) {
    const $count = document.querySelector('.count')

    if(selectedMenu === 'active') {
        $count.textContent = totalCount - completedCount
    } else if (selectedMenu === 'completed') {
        $count.textContent = completedCount
    } else {
        $count.textContent = totalCount
    }
}