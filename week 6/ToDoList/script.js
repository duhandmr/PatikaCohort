document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const list = document.getElementById("list");
  const successToast = document.querySelector(".toast.success");
  const errorToast = document.querySelector(".toast.error");

  // 1. Sayfa ilk kez açılıyorsa: HTML'deki li'ları localStorage'a yaz
  if (!localStorage.getItem("tasks")) {
    const starterTasks = Array.from(list.children).map((li) => ({
      text: li.childNodes[0].nodeValue.trim(),
      completed: li.classList.contains("checked"),
    }));
    localStorage.setItem("tasks", JSON.stringify(starterTasks));
  }

  // 2. LocalStorage'daki görevlerle listeyi oluştur
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  list.innerHTML = ""; // Listeyi temizle
  tasks.forEach((task) => addTaskToDOM(task.text, task.completed));

  // 3. Ekle butonu ve Enter ile görev ekleme
  document.getElementById("liveToastBtn").addEventListener("click", addTask);
  taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addTask();
  });

  // --- Fonksiyonlar ---

  // Toast göster
  function showToast(toast) {
    $(toast).toast("show");
  }

  // Görev ekle
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      showToast(errorToast);
      return;
    }
    if (tasks.some((task) => task.text === taskText)) {
      // Aynı isimde madde eklenmesini istemiyorsan burayı ekleyebilirsin
      // showToast(errorToast);
      // return;
    }
    addTaskToDOM(taskText, false);
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    showToast(successToast);
  }

  // DOM'a görev ekle ve sil butonu
  function addTaskToDOM(text, completed) {
    const li = document.createElement("li");
    li.textContent = text;
    if (completed) li.classList.add("checked");
    addDeleteButton(li);
    list.appendChild(li);
  }

  // Sil butonu
  function addDeleteButton(li) {
    if (li.querySelector(".close")) return;
    const btn = document.createElement("span");
    btn.textContent = "×";
    btn.className = "close ml-2";
    btn.style.cursor = "pointer";
    btn.onclick = function () {
      removeTaskFromStorage(li.childNodes[0].nodeValue.trim());
      li.remove();
    };
    li.appendChild(btn);
  }

  // Yapıldı toggle
  list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      toggleTaskCompleted(e.target.childNodes[0].nodeValue.trim());
    }
  });

  // Local Storage işlemleri
  function removeTaskFromStorage(text) {
    tasks = tasks.filter((task) => task.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  function toggleTaskCompleted(text) {
    tasks = tasks.map((task) => {
      if (task.text === text) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
