export default function Controller({ $target, initialState }) {
  this.state = initialState;

  const $controller = document.createElement("div");
  $controller.className = "count-container";
  $target.appendChild($controller);

  this.setState = (nexState) => {
    this.state = nexState;
    this.render();
  };

  this.render = () => {
    $controller.innerHTML = `
    <span class="todo-count">총 <strong>${this.state}</strong> 개</span>
    <ul class="filters">
      <li>
        <a class="all selected" href="#">전체보기</a>
      </li>
      <li>
        <a class="active" href="#active">해야할 일</a>
      </li>
      <li>
        <a class="completed" href="#completed">완료한 일</a>
      </li>
    </ul>
    `;
  };

  this.render();
}
