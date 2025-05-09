const api = "https://crudcrud.com/api/63fb59c1a5c4468f98c4ff42551a30c4";
const pendingTask = document.querySelector("#uncompleteList");
const completeTask = document.querySelector("#completeList");
window.addEventListener("DOMContentLoaded", displayData);
async function handleSubmit(event) {
  event.preventDefault();
  const obj = {
    Item: document.querySelector("#itemName").value.trim(),
    Description: document.querySelector("#desc").value.trim(),
    Complete: false,
  };
  await addData(obj);
  await displayData();
  clearInput();
}

async function addData(obj) {
  try {
    let res = await axios.post(`${api}/data`, obj);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

function clearInput() {
  document.querySelector("#itemName").value = "";
  document.querySelector("#desc").value = "";
}

async function fetchData() {
  try {
    let arr = await axios.get(`${api}/data`);
    console.log(arr);
    return arr.data;
  } catch (err) {
    alert("change api");
    console.log(err);
    return [];
  }
}

async function displayData() {
  const pen = document.createElement("h4");
  pen.textContent = "Pending Task";
  pendingTask.textContent = "";
  pendingTask.appendChild(pen);

  completeTask.textContent = "";
  const un = document.createElement("h4");
  un.textContent = "Completed Task";
  completeTask.appendChild(un);

  let arr = await fetchData();
  console.log(arr);
  arr.forEach((element) => {
    if (element.Complete) {
      let list = createListItem(element);
      completeTask.appendChild(list);
    } else {
      let list = createListItem(element);
      pendingTask.appendChild(list);
    }
  });
}

function createListItem(obj) {
  const item = document.createElement("li");
  item.innerText = `${obj.Item} - ${obj.Description}`;
  item.classList.add("tasks");
  item.id = obj._id;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("doneTaskBtn");
  completeBtn.innerHTML = "&#10003";

  const uncompleteBtn = document.createElement("button");
  uncompleteBtn.classList.add("undoneTaskBtn");
  uncompleteBtn.innerHTML = "X";

  item.append(completeBtn, uncompleteBtn);
  return item;
}

completeTask.addEventListener("click", async (event) => {
  if (event.target.classList.contains("undoneTaskBtn")) {
    buttonClick(event.target.parentElement.id, false);
  }
});

pendingTask.addEventListener("click", async (event) => {
  if (event.target.classList.contains("doneTaskBtn")) {
    buttonClick(event.target.parentElement.id, true);
  }
});

async function buttonClick(id, change) {
  let obj = await fetchById(id);
  obj.Complete = change;
  delete obj._id;
  try {
    let res = await axios.put(`${api}/data/${id}`, obj);
    await displayData();
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

async function fetchById(id) {
  try {
    let obj = await axios.get(`${api}/data/${id}`);
    console.log(obj.data);
    return obj.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}
