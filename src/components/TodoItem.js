export default function TodoItem({ $target, title, onDelete, onToggle }) {
  const $item = document.createElement("li");
  $item.id = `todoItem-${Date.now()}`;

  $target.appendChild($item);

  this.id = $item.id;

  this.render = () => {
    $item.innerHTML = `
            <div class="view">
                <input class="toggle" type="checkbox"/>
                <label class="label">${title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value=${title} />
        `;
  };

  this.render();

  const $toggle = $item.querySelector(".toggle");
  $toggle.addEventListener("click", () => {
    $item.classList.toggle("completed");
    $toggle.classList.toggle("checked");

    onToggle(this.id);
  });

  const $delButton = $item.querySelector(".destroy");
  $delButton.addEventListener("click", () => {
    onDelete(this.id);
  });

  $item.addEventListener("dblclick", (e) => {
    e.target.closest("li").classList.add("editing");
  });

  const $input = $item.querySelector(".edit");
  $input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      $item.querySelector(".label").textContent = e.target.value;
      e.target.closest("li").classList.remove("editing");
    } else if (e.key === "Escape") {
      $input.value = $item.querySelector(".label").textContent;
      e.target.closest("li").classList.remove("editing");
    }
  });
}
