<p align="middle" >
  <img width="200px;" src="./assets/todo.png"/>
</p>
<h2 align="middle">JS TODO MVC</h2>
<p align="middle">자바스크립트 + MVC 패턴으로 구현하는 Todo List</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <a href="https://github.com/next-step/js-todo-list-step1/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/next-step/js-todo-list-step1.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

<div align="middle">
  <a href="https://yujo11.github.io/js-todo-mvc/" target="_blank"> 🖥 데모 사이트 </a>
</div>

## 🎯 요구사항

- [ ] todo list에 todoItem을 키보드로 입력하여 추가하기
- [ ] todo list의 체크박스를 클릭하여 complete 상태로 변경 (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
- [ ] todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
- [ ] todo list를 더블클릭했을 때 input 모드로 변경 (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
- [ ] todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
- [ ] todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기

<br/>

## 🔔 참고사항

`TodoItem`을 추가할 시 아래 템플릿을 활용하면 됩니다.

```html
<ul id="todo-list" class="todo-list">
	<li>
		<div class="view">
			<input class="toggle" type="checkbox" />
			<label class="label">새로운 타이틀</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="새로운 타이틀" />
	</li>
	<li class="editing">
		<div class="view">
			<input class="toggle" type="checkbox" />
			<label class="label">완료된 타이틀</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="완료된 타이틀" />
	</li>
	<li class="completed">
		<div class="view">
			<input class="toggle" type="checkbox" checked />
			<label class="label">완료된 타이틀</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="완료된 타이틀" />
	</li>
</ul>
```

## 📝 License

This project is [MIT](https://github.com/yujo11/js-todo-mvc/blob/main/LICENSE) licensed.
