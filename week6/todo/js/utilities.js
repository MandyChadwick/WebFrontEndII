
export function getNewTodo(form) {
    var newTask = form.newTaskInput.value;
    return newTask;
}
export function getForm(formId){
    let thisForm = document.getElementById(formId);
    return thisForm;
}