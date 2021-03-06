export default function project(title, toDoList = [], toDoListDone = []){
    let _title, _toDoList, _toDoListDone;

    const createProject = function(){
        _title = title;
        _toDoList = toDoList;
        _toDoListDone = toDoListDone ? toDoListDone : _toDoList.map(v => false);
    }();

    const getTitle = function(){
        return _title;
    };

    const getToDoList = function(){
        return _toDoList;
    };

    const setTitle = function(newTitle){
        _title = newTitle;
    };

    const addToDo = function(newToDo){
        _toDoList.push(newToDo);
        _toDoListDone.push(false);
    };

    const removeToDo = function(index){
        _toDoList.splice(index, 1);
        _toDoListDone.splice(index, 1);
    };

    const getToDoDoneStatus = function(index){
        return _toDoListDone[index];
    };

    const changeToDoDoneStatus = function(index){
        _toDoListDone[index] = !_toDoListDone[index];
    };

    const stringableObject = function(){
        return {
            Otitle: getTitle(),
            OtoDoList: getToDoList().map(v => v.stringableObject()),
            OtoDoDoneStatus: getToDoList().map((v, i) => getToDoDoneStatus(i)),
        };
    };

    return {
        getTitle,
        getToDoList,
        setTitle,
        addToDo,
        removeToDo,
        getToDoDoneStatus,
        changeToDoDoneStatus,
        stringableObject,
    };
};