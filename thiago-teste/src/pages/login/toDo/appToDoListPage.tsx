import {useEffect } from 'react';
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

        

        await fetch (url + "/api/createToDoTask", {
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

        let divSvg = document.createElement('div');
        let svg = document.querySelectorAll('#toDoTasks svg')[0]
        let svgClone = svg.cloneNode(true); 
        divSvg.appendChild(svgClone);

        let divChildDescription = document.createElement('div');

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;

        
        divChildDescription.appendChild(spanDescription);


        divParent.append(divSvg);
        divParent.appendChild(divChildDescription);
        

        toDo.appendChild(divParent);

        return toDo;

        

    }

    let allTasksToDoColumnOfUser = async () => {

        
        let taskProgress = document.querySelectorAll('#toDo')[0];
        taskProgress.addEventListener("dragover", dragOver);
        
        taskProgress.addEventListener("drop", dragDrop);  

       
        
        let response = await fetch(url + '/api/toDo/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let toDo:any = makeToDoElement(task);
            toDo.addEventListener("dblclick", updateTaskToDoForm);
            toDo.addEventListener("dblclick", getTaskIdByEvent);
            toDo.addEventListener("dragstart", dragStart);
            
            let divCircleSvg =  toDo.querySelectorAll('.toDoTasks svg')[0].parentNode            
            divCircleSvg.addEventListener("click", getTaskIdByEvent);
            divCircleSvg.addEventListener("click", updateFrom_ToDo_to_Done);
            
            
            let toDoTasksColumns = document.querySelectorAll('#toDoTasks')[0];
            toDoTasksColumns.insertAdjacentElement('beforeend', toDo);

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
        

        let svg = document.querySelectorAll('#doneTasks svg')[0]
        let svgClone = svg.cloneNode(true); 

       


        let divChildDescription = document.createElement('div');

        

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;
        divChildDescription.appendChild(spanDescription);

        
        divParent.appendChild(svgClone);
        divParent.appendChild(divChildDescription);

        done.appendChild(divParent);
        

        return done;
        

    }

    let allTasksDoneColumnOfUser = async () => {

        let taskProgress = document.querySelectorAll('#Done')[0];
        taskProgress.addEventListener("dragover", dragOver);
        
        taskProgress.addEventListener("drop", dragDrop);
        
        let response = await fetch(url + '/api/done/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        console.log(db.body)

        await db.map(async (task:any) => {
            
            let Done:any = makeDoneElement(task);  

            Done.addEventListener("dblclick", updateTaskDoneForm);
            Done.addEventListener("dblclick", getTaskIdByEvent);
            Done.addEventListener("dragstart", dragStart);
            

            let DoneTasksColumns = document.querySelectorAll('#doneTasks')[0];            
            DoneTasksColumns.insertAdjacentElement('beforeend', Done);

        });   

        

    }

    let updateTaskToDoForm = async () => {

        eval(`document.querySelectorAll('#updateTaskToDoFormBackground')[0].style.visibility = "visible"`);

    }

    let updateTaskToDo = async () => {

        
        let form = new FormData();

        form.append("id", sessionStorage.taskId);
        form.append("user_id", sessionStorage.userId);
        eval(`form.append("title", document.querySelectorAll('#updateTaskToDoTitle')[0].value)`);
        eval(`form.append("description", document.querySelectorAll('#updateTaskToDoDescription')[0].value)`); 
        
        
              
        await fetch(url + '/api/updateToDoTask', {
            method: "POST",   
            body: form
        })

        let tasksColumns = document.querySelectorAll('#toDoTasks div[task_id]');
            
            for (let index = 0; index < tasksColumns.length; index++) {
                tasksColumns[index].remove(); 
                               
        }

        allTasksToDoColumnOfUser();
        
    } 

    let updateTaskDoneForm = async () => {

        eval(`document.querySelectorAll('#updateTaskDoneFormBackground')[0].style.visibility = "visible"`);
        
    }

    let updateTaskDone = async () => {

        eval(`document.querySelectorAll('#updateTaskDoneFormBackground')[0].style.visibility = "visible"`);

        let form = new FormData();

        form.append("id", sessionStorage.taskId);
        form.append("user_id", sessionStorage.userId);
        eval(`form.append("title", document.querySelectorAll('#updateTaskDoneTitle')[0].value)`);
        eval(`form.append("description", document.querySelectorAll('#updateTaskDoneDescription')[0].value)`);  
        
              
        await fetch(url + '/api/updateDoneTask', {
            method: "POST",   
            body: form
        })

        let tasksColumns = document.querySelectorAll('#doneTasks div[task_id]');
            
            for (let index = 0; index < tasksColumns.length; index++) {
                tasksColumns[index].remove(); 
                               
        }

        allTasksDoneColumnOfUser();
        
    }

    let updateFrom_ToDo_to_Done = async (event:any) => {

       

        // let toDoTask = event.target.parentNode.parentNode.parentNode;
        // let description = toDoTask.querySelectorAll('span')[0].value;

        // let form = new FormData();

        // form.append("id", sessionStorage.taskId);
        // form.append("user_id", sessionStorage.userId);        
        // form.append("description", description)
        
              
        // await fetch(url + '/api/updateDoneTask', {
        //     method: "POST",   
        //     body: form
        // })

        // let tasksColumns = document.querySelectorAll('#doneTasks div[task_id]');
            
        //     for (let index = 0; index < tasksColumns.length; index++) {
        //         tasksColumns[index].remove(); 
                               
        // }

        // allTasksDoneColumnOfUser();

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
            
            form.append("description", draggedElement.getAttribute('description'));
            form.append("user_id", sessionStorage.userId);
            
                
            await fetch(url + '/api/updateToDoTask', {
                method: "POST",   
                body: form
            })
            

            await allTasksToDoColumnOfUser();

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
            
            form.append("description", draggedElement.getAttribute('description'));
            form.append("user_id", sessionStorage.userId);
            
                
            await fetch(url + '/api/updateDoneTask', {
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

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="11" stroke="#E88D39" strokeWidth="2"/>
                            </svg> 

                        </div>

                        

                    </div>

                    

                    
                    <div id="Done" draggable="true"  className={styles.toDo}>

                        <p>
                            Done
                        </p>

                        <div id="doneTasks" className={styles.toDoTasks}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9986 0C5.3778 0 0 5.38059 0 12.0014C0 18.6222 5.3778 24 11.9986 24C18.6194 24 24 18.6222 24 12.0014C24 5.38059 18.6194 0 11.9986 0ZM17.2738 6.5554C17.7138 6.5554 18.1525 6.72088 18.4848 7.05318C19.1494 7.71775 19.1494 8.81388 18.4848 9.47846L11.2123 16.7509C10.5477 17.4155 9.45105 17.4155 8.78648 16.7509L5.55537 13.5176C4.8908 12.853 4.8908 11.7586 5.55537 11.094C6.21995 10.4294 7.31441 10.4294 7.97898 11.094L9.99912 13.1147L16.0612 7.05318C16.3935 6.72088 16.8339 6.5554 17.2738 6.5554Z" fill="#4AC959"/>
                            </svg>


                          

                        </div>

                    </div>

                </div>



            </div>

        </>
    );
}