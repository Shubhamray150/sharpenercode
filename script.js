const api = "https://crudcrud.com/api/2c59990447e7480d96fcc0807896a4db";
window.addEventListener("DOMContentLoaded", displayData);
const pendingTask = document.querySelector("#uncompleteList");
const completeTask = document.querySelector("#completeList");
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
    // console.log(res);
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
    return arr.data;
  } catch (err) {
    alert("change api");
    console.log(err);
    return [];
  }
}

async function displayData() {
  const pendingHeading = document.createElement("h4");
  pendingHeading.textContent = "Pending Task";
  pendingTask.textContent = "";
  pendingTask.append(pendingHeading);

  const completeHeading = document.createElement("h4");
  completeHeading.textContent = "Completed Task";
  completeTask.textContent = "";
  completeTask.append(completeHeading);

  let arr = await fetchData();
  console.log(arr);
  arr.forEach((element) => {
    if (element.Complete) {
      let list = createListItem(element, element.Complete);
      completeTask.append(list);
    } else {
      let list = createListItem(element);
      pendingTask.append(list);
    }
  });
}

function createListItem(obj, tag) {
  if (tag) {
    const item = document.createElement("li");
    item.textContent = `${obj.Item} - ${obj.Description}`;
    item.classList.add("tasks");
    item.id = obj._id;
    return item;
  } else {
    const item = document.createElement("li");
    item.textContent = `${obj.Item} - ${obj.Description}`;
    item.classList.add("tasks");
    item.id = obj._id;

    const compBtn = document.createElement("button");
    compBtn.classList.add("completeTaskBtn");
    compBtn.innerHTML = "&#10003";

    const uncompBtn = document.createElement("button");
    uncompBtn.classList.add("DeleteTaskBtn");
    uncompBtn.innerHTML = "X";

    item.append(compBtn, uncompBtn);
    return item;
  }
}

pendingTask.addEventListener("click", async (event) => {
  if (event.target.classList.contains("completeTaskBtn")) {
    buttonClick(event.target.parentElement.id, "completeTaskBtn");
  }
  if (event.target.classList.contains("DeleteTaskBtn")) {
    buttonClick(event.target.parentElement.id, "DeleteTaskBtn");
  }
});

async function buttonClick(id, val) {
  if (val == "completeTaskBtn") {
    let data = await fetchById(id);
    data.Complete = true;
    delete data._id;
    try {
      let res = await axios.put(`${api}/data/${id}`, data);
      await displayData();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  if (val == "DeleteTaskBtn") {
    try {
      let res = await axios.delete(`${api}/data/${id}`);
      await displayData();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
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
