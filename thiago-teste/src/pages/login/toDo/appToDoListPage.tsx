import { createElement, useEffect } from 'react';
import styles from './appToDoListPage.module.css'



export function AppToDoListPage() {

    let url:any = 'http://127.0.0.1:8001';

    let closetoTaskForm = async () => {

         /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
            eval(`document.querySelectorAll('#createTaskToDoFormBackground')[0].style.visibility = "hidden"`);

    }

    let closeUpdateToDoTaskForm = () => {

        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
            eval(`document.querySelectorAll('#updateTaskToDoFormBackground')[0].style.visibility = "hidden"`);
            eval(`document.querySelectorAll('#updateTaskInProgressFormBackground')[0].style.visibility = "hidden"`);
            eval(`document.querySelectorAll('#updateTaskDoneFormBackground')[0].style.visibility = "hidden"`);

    }

    let createNewTaskForm = async () => {

           /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
            eval(`document.querySelectorAll('#createTaskToDoFormBackground')[0].style.visibility = "visible"`);

    }

    
    let getTaskIdByEvent = async (event:any) => {

        if(event.target.getAttribute("task_id") != undefined)  {
            
            // console.log(event.target.getAttribute("task_id"));
            let task_id = event.target.getAttribute("task_id");
            sessionStorage.setItem('taskId', task_id)

        }else if(event.target.parentNode.getAttribute("task_id") != undefined) {
            
            // console.log(event.target.parentNode.getAttribute("task_id"));
            let task_id = event.target.parentNode.getAttribute("task_id");
            sessionStorage.setItem('taskId', task_id)

        } else if(event.target.parentNode.parentNode.getAttribute("task_id") != undefined ) {
            
            // console.log(event.target.parentNode.parentNode.getAttribute("task_id"));
            let task_id = event.target.parentNode.parentNode.getAttribute("task_id");
            sessionStorage.setItem('taskId', task_id)

        } else if(event.target.parentNode.parentNode.parentNode.getAttribute("task_id") != undefined ) {
            
            // console.log(event.target.parentNode.parentNode.parentNode.getAttribute("task_id"));
            let task_id = event.target.parentNode.parentNode.parentNode.getAttribute("task_id");
            sessionStorage.setItem('taskId', task_id)

        }

    }


    let addNewTaskToDo = async () => {

        let form = new FormData();

        eval(`form.append("title", document.querySelectorAll("#newTaskTitle")[0].value)`);
        eval(`form.append("description", document.querySelectorAll("#newTaskDescription")[0].value)`);
        form.append("user_id", sessionStorage.userId);

        

        let response = await fetch (url + "/api/createToDoTask", {
            method: "POST",
            body: form
        });

        let tasksColumns = document.querySelectorAll('#toDoTasks div[task_id]');
            
        for (let index = 0; index < tasksColumns.length; index++) {
            tasksColumns[index].remove(); 
                            
        }

        allTasksToDoColumnOfUser();

        

    }

    let makeToDoElement = (data:any) => {

        let toDo = document.createElement('div');
        toDo.setAttribute('class', 'toDoTasks');
        toDo.setAttribute('draggable', 'true');
        toDo.setAttribute('task_id', data.id);
        toDo.setAttribute('title', data.title);
        toDo.setAttribute('description', data.description);

        let divParent = document.createElement('div');
        


        let divChildTitle = document.createElement('div');  

        let strongTitle = document.createElement('strong');
        strongTitle.innerHTML = 'Título: ';

        let spanTitle = document.createElement('span');
        spanTitle.innerHTML = data.title;

        divChildTitle.appendChild(strongTitle);
        divChildTitle.appendChild(spanTitle);




        let divChildDescription = document.createElement('div');

        let strongDescription = document.createElement('strong');
        strongDescription.innerHTML = 'Descrição: ';

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;

        divChildDescription.appendChild(strongDescription);
        divChildDescription.appendChild(spanDescription);


        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);
        

        toDo.appendChild(divParent);

        return toDo;

        

    }

    let allTasksToDoColumnOfUser = async () => {

        
        let taskProgress = document.querySelectorAll('#toDo')[0];
        taskProgress.addEventListener("dragover", dragOver);
        taskProgress.addEventListener("dragenter", dragEnter);
        taskProgress.addEventListener("drop", dragDrop);  

       
        
        let response = await fetch(url + '/api/toDo/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let toDo:any = makeToDoElement(task);
            toDo.addEventListener("dblclick", updateTaskToDo);
            toDo.addEventListener("dblclick", getTaskIdByEvent);
            toDo.addEventListener("dragstart", dragStart);           
            toDo.addEventListener("dragleave", dragLeave);
            
            let toDoTasksColumns = document.querySelectorAll('#toDoTasks')[0];
            toDoTasksColumns.insertAdjacentElement('beforeend', toDo);

        });   
        

    }

    

    let makeInProgressElement = (data:any) => {

        let inProgress = document.createElement('div');
        inProgress.setAttribute('class', 'inProgressTasks');
        inProgress.setAttribute('draggable', 'true');
        inProgress.setAttribute('task_id', data.id);
        inProgress.setAttribute('title', data.title);
        inProgress.setAttribute('description', data.description);

        let divParent = document.createElement('div');
        


        let divChildTitle = document.createElement('div');

        let strongTitle = document.createElement('strong');
        strongTitle.innerHTML = 'Título:';

        let spanTitle = document.createElement('span');
        spanTitle.innerHTML = data.title;

        divChildTitle.appendChild(strongTitle);
        divChildTitle.appendChild(spanTitle);


        let divChildDescription = document.createElement('div');

        let strongDescription = document.createElement('strong');
        strongDescription.innerHTML = 'Descrição:';

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;

        divChildDescription.appendChild(strongDescription);
        divChildDescription.appendChild(spanDescription);
        
        
        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);

        inProgress.appendChild(divParent);
        

        return inProgress;
        

    }

    let allTasksInProgressColumnOfUser = async () => {

        let taskProgress = document.querySelectorAll('#inProgress')[0];
        taskProgress.addEventListener("dragover", dragOver);
        taskProgress.addEventListener("dragenter", dragEnter);
        taskProgress.addEventListener("drop", dragDrop);  
        
        let response = await fetch(url + '/api/inProgress/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let InProgress = makeInProgressElement(task);
            InProgress.addEventListener("dblclick", updateTaskInProgress);
            InProgress.addEventListener("dblclick", getTaskIdByEvent);
            InProgress.addEventListener("dragstart", dragStart);         
            InProgress.addEventListener("dragleave", dragLeave);            

            let InProgressTasksColumns = document.querySelectorAll('#inProgressTasks')[0]; 
            InProgressTasksColumns.insertAdjacentElement('beforeend', InProgress);

        });   

        

    }


    let makeDoneElement = (data:any) => {

        let done = document.createElement('div');
        done.setAttribute('class', 'doneTasks');
        done.setAttribute('draggable', 'true');
        done.setAttribute('task_id', data.id);
        done.setAttribute('title', data.title);
        done.setAttribute('description', data.description);


        let divParent = document.createElement('div');        
        

        let divChildTitle = document.createElement('div');

        let strongTitle = document.createElement('strong');
        strongTitle.innerHTML = 'Título:';

        let spanTitle = document.createElement('span');
        spanTitle.innerHTML = data.title;

        divChildTitle.appendChild(strongTitle);
        divChildTitle.appendChild(spanTitle);


        let divChildDescription = document.createElement('div');

        let strongDescription = document.createElement('strong');
        strongDescription.innerHTML = 'Descrição:';

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;

        divChildDescription.appendChild(strongDescription);
        divChildDescription.appendChild(spanDescription);

        
        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);

        done.appendChild(divParent);
        

        return done;
        

    }

    let allTasksDoneColumnOfUser = async () => {

        let taskProgress = document.querySelectorAll('#Done')[0];
        taskProgress.addEventListener("dragover", dragOver);
        taskProgress.addEventListener("dragenter", dragEnter);
        taskProgress.addEventListener("drop", dragDrop);
        
        let response = await fetch(url + '/api/done/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let Done:any = makeDoneElement(task);  

            Done.addEventListener("dblclick", updateTaskDone);
            Done.addEventListener("dblclick", getTaskIdByEvent);
            Done.addEventListener("dragstart", dragStart);
            Done.addEventListener("dragleave", dragLeave);    


            let DoneTasksColumns = document.querySelectorAll('#doneTasks')[0];            
            DoneTasksColumns.insertAdjacentElement('beforeend', Done);

        });   

        

    }


    let updateTaskToDo = async () => {

        eval(`document.querySelectorAll('#updateTaskToDoFormBackground')[0].style.visibility = "visible"`);

        let form = new FormData();

        eval(`form.append("id", "?"`);
        eval(`form.append("title", document.querySelectorAll('#updateTaskToDoTitle')[0].value)`);
        eval(`form.append("description", document.querySelectorAll('#updateTaskToDoDescription')[0].value)`); 
        eval(`form.append("taskProgress_id", 1`); 
        eval(`form.append("taskProgress_id", sessionStorage.userId`); 
        
              
        let response = await fetch(url + '/api/updateToDoTask', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }

    let updateTaskInProgress = async () => {

        eval(`document.querySelectorAll('#updateTaskInProgressFormBackground')[0].style.visibility = "visible"`);

        let form = new FormData();

        eval(`form.append("taskProgress_id", 2`);
        eval(`form.append("user", document.querySelectorAll('#updateTaskInProgressTitle')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#updateTaskInProgressDescription')[0].value)`);  
        
              
        let response = await fetch(url + '/', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }

    let updateTaskDone = async () => {

        eval(`document.querySelectorAll('#updateTaskDoneFormBackground')[0].style.visibility = "visible"`);

        let form = new FormData();

        form.append("id", sessionStorage.taskId);
        eval(`form.append("user", document.querySelectorAll('#updateTaskDoneTitle')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#updateTaskDoneDescription')[0].value)`);  
        
              
        let response = await fetch(url + '/api/updateDoneTask', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }


    let draggedElement:any = null

   let dragStart = async (event:any) => {

        draggedElement = event.target;
        event.dataTransfer.effectAllowed = "move";
        console.clear();
        console.log(draggedElement);
    
   }

   let dragOver = async (event:any) => {
        event.preventDefault();
   }

   let dragEnter = async(event:any) => {           
        
        console.log("draggedEnter");
   }

   let dragLeave = async(event:any) => {
        
        // console.log("dragged leave");

   }

    let dragDrop = async(event:any) => {
       
        
        console.log("dragged Drop");

        console.log(event.target.getAttribute('id'));

        

        if(
            event.target.getAttribute('id') == "toDoTasks"
            || event.target.parentNode.parentNode.getAttribute('id') == "toDoTasks"
        ) {

            draggedElement.remove()

            let tasksColumns = document.querySelectorAll('#toDoTasks div[task_id]');
            
            for (let index = 0; index < tasksColumns.length; index++) {
                tasksColumns[index].remove(); 
                               
            }

            let form = new FormData();

            form.append("id", draggedElement.getAttribute('task_id'));
            form.append("title", draggedElement.getAttribute('title'));
            form.append("description", draggedElement.getAttribute('description'));
            form.append("user_id", sessionStorage.userId);
            
                
            let response = await fetch(url + '/api/updateToDoTask', {
                method: "POST",   
                body: form
            })
            

            await allTasksToDoColumnOfUser();

        }


        if(
            event.target.getAttribute('id') == "inProgressTasks"
            || event.target.parentNode.parentNode.getAttribute('id') == "inProgressTasks"
        ) {

            draggedElement.remove()
            
            let tasksColumns = document.querySelectorAll('#inProgressTasks div[task_id]');
            
            for (let index = 0; index < tasksColumns.length; index++) {
                tasksColumns[index].remove(); 
                               
            }

            let form = new FormData();

            form.append("id", draggedElement.getAttribute('task_id'));
            form.append("title", draggedElement.getAttribute('title'));
            form.append("description", draggedElement.getAttribute('description'));
            form.append("user_id", sessionStorage.userId);
            
                
            let response = await fetch(url + '/api/updateInProgressTask', {
                method: "POST",   
                body: form
            })

            allTasksInProgressColumnOfUser();
        }

        if(
            event.target.getAttribute('id') == "doneTasks"
            || event.target.parentNode.parentNode.getAttribute('id') == "doneTasks"
        ) {

            draggedElement.remove()

            let tasksColumns = document.querySelectorAll('#doneTasks div[task_id]');
            
            for (let index = 0; index < tasksColumns.length; index++) {
                tasksColumns[index].remove(); 
                               
            }

            let form = new FormData();

            form.append("id", draggedElement.getAttribute('task_id'));
            form.append("title", draggedElement.getAttribute('title'));
            form.append("description", draggedElement.getAttribute('description'));
            form.append("user_id", sessionStorage.userId);
            
                
            let response = await fetch(url + '/api/updateDoneTask', {
                method: "POST",   
                body: form
            })

            allTasksDoneColumnOfUser();

        }


       

    }




    useEffect(() => {

        /*
            O useEffect serve para usar funções só
            depois que todo o html for renderizado
        */

        allTasksToDoColumnOfUser();
        allTasksInProgressColumnOfUser();
        allTasksDoneColumnOfUser();
    });

    

    return(
        <>


            <div id="createTaskToDoFormBackground" className={styles.createTaskToDoFormBackground}>

                <div className={styles.createTaskToDoForm}>

                    <div id="closetoTaskForm" className={styles.closetoTaskForm} >
                        <span onClick={closetoTaskForm}>Close</span>
                    </div>

                    <div className={styles.inputsCreateTaskToDoForm}>
                        
                        <div className={styles.formInputs}>
                            <div>Título:</div>
                            <input id="newTaskTitle" type="text" />
                            
                        </div>

                        <div className={styles.formInputs}>
                            <div>Descrição:</div>
                            <textarea id="newTaskDescription" rows={5} cols={40} />
                        </div>

                        <div onClick={addNewTaskToDo} id="addNewTaskToDo" className={styles.addNewTaskToDoButton}>

                            Adicionar Nova Tarefa
                            
                        </div> 

                    </div>

                </div>                

            </div>            
            
            <div id="updateTaskToDoFormBackground" className={styles.createTaskToDoFormBackground}>

                <div className={styles.createTaskToDoForm}>

                    <div className={styles.closetoTaskForm} >
                        <span onClick={closeUpdateToDoTaskForm}>Close</span>
                    </div>

                    <div className={styles.inputsCreateTaskToDoForm}>                        
                        
                        <div className={styles.formInputs}>
                            <div>Título:</div>
                            <input id="updateTaskToDoTitle" type="text" />
                            
                        </div>

                        <div className={styles.formInputs}>
                            <div>Descrição:</div>
                            <textarea id="updateTaskToDoDescription" rows={5} cols={40} />
                        </div>

                        <div onClick={updateTaskToDo} id="updateTaskToDo" className={styles.addNewTaskToDoButton}>

                            <div >Atualizar a tarefa</div>
                            
                        </div> 

                    </div>

                </div>                

            </div>

            <div id="updateTaskInProgressFormBackground" className={styles.createTaskToDoFormBackground}>

                <div className={styles.createTaskToDoForm}>

                    <div className={styles.closetoTaskForm} >
                        <span onClick={closeUpdateToDoTaskForm}>Close</span>
                    </div>

                    <div className={styles.inputsCreateTaskToDoForm}>                        
                        
                        <div className={styles.formInputs}>
                            <div>Título:</div>
                            <input id="updateTaskInProgressTitle" type="text" />
                            
                        </div>

                        <div className={styles.formInputs}>
                            <div>Descrição:</div>
                            <textarea id="updateTaskInProgressDescription" rows={5} cols={40} />
                        </div>

                        <div onClick={updateTaskInProgress} id="updateTaskInProgress" className={styles.addNewTaskToDoButton}>

                            <div >Atualizar a tarefa</div>
                            
                        </div> 

                    </div>

                </div>                

            </div>

            <div id="updateTaskDoneFormBackground" className={styles.createTaskToDoFormBackground}>

                <div className={styles.createTaskToDoForm}>

                    <div className={styles.closetoTaskForm} >
                        <span onClick={closeUpdateToDoTaskForm}>Close</span>
                    </div>

                    <div className={styles.inputsCreateTaskToDoForm}>                        
                        
                        <div className={styles.formInputs}>
                            <div>Título:</div>
                            <input id="updateTaskDoneTitle" type="text" />
                            
                        </div>

                        <div className={styles.formInputs}>
                            <div>Descrição:</div>
                            <textarea id="updateTaskDoneDescription" rows={5} cols={40} />
                        </div>

                        <div onClick={updateTaskDone} id="updateTaskDone" className={styles.addNewTaskToDoButton}>

                            <div >Atualizar a tarefa</div>
                            
                        </div> 

                    </div>

                </div>                

            </div>


            <div className={styles.toDoList}>

                <div id="newTaskForm" className={styles.newTask}>

                    Clique na coluna to Do para criar uma nova task

                </div>

                <div id="taskProgress" className={styles.taskProgress}>

                    <div id="toDo" draggable="true"  className={styles.toDo}>

                        <p>
                            <span>To Do</span>

                            <span onClick={createNewTaskForm} className={styles.addNewTaskToDoButton}>Criar nova tarefa</span>
                            
                        </p>

                        <div id="toDoTasks" className={styles.toDoTasks}>

                            

                        </div>

                        

                    </div>

                    <div id="inProgress" draggable="true"  className={styles.inProgress}>

                        <p>
                            In Progress
                        </p>

                        <div id="inProgressTasks" className={styles.toDoTasks}>

                          

                        </div>

                    </div>

                    
                    <div id="Done" draggable="true"  className={styles.inProgress}>

                        <p>
                            Done
                        </p>

                        <div id="doneTasks" className={styles.toDoTasks}>

                          

                        </div>

                    </div>

                </div>



            </div>

        </>
    );
}