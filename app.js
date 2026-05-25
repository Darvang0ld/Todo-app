
// Lấy các phần tử cần thiết từ file HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Hàm xử lý việc thêm công việc
function addTask() {
	const taskText = taskInput.value.trim();

	if (taskText !== "") {
		const li = document.createElement('li');
		li.textContent = taskText;

		taskList.appendChild(li);

		// Xóa nội dung ở ô input sau khi thêm xong
		taskInput.value = "";
		taskInput.focus();
	} else {
		alert("Vui lòng nhập tên công việc!");
	}
}

// Bắt sự kiện khi người dùng nhấn nút "Thêm"
addBtn.addEventListener('click', addTask);

// Bắt sự kiện khi người dùng nhấn phím Enter để thêm nhanh
taskInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addTask();
	}
});

