

const taskForm = document.querySelector('#create-task-form')
const taskUl = document.querySelector('#tasks')

taskForm.addEventListener('submit', grabTaskFromForm)
  
function grabTaskFromForm(e) {
  e.preventDefault()
  let inputValue = e.target["new-task-description"].value
  createAndAppendLi(inputValue)
  e.target.reset()
}

function createAndAppendLi(inputValue) {
  let li = document.createElement('li')
  li.textContent = inputValue
  taskUl.append(li)

  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = " X"
  li.append(btn)
} 

function handleDelete(e) {
  e.target.parentNode.remove()
}
