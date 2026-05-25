
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
	const taskText = taskInput.value.trim();

	if (taskText !== "") {
		const li = document.createElement('li');
		// Thêm nội dung công việc kèm theo nút Xóa
		li.innerHTML = `${taskText} <button class="delete-btn">Xóa</button>`;

		taskList.appendChild(li);
		taskInput.value = "";
		taskInput.focus();

		// Chức năng: Dùng JavaScript để xóa task
		const deleteBtn = li.querySelector('.delete-btn');
		deleteBtn.addEventListener('click', function () {
			li.remove();
		});
	} else {
		alert("Vui lòng nhập tên công việc!");
	}
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addTask();
	}
});

