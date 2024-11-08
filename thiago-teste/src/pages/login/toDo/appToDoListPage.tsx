import { createElement } from 'react';
import styles from './appToDoListPage.module.css'



export function AppToDoListPage() {

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

    let addNewTaskToDo = async () => {

    }

    let makeToDoElement = (data:any) => {

        let toDo = document.createElement('div');
        toDo.setAttribute('id', 'toDoTasks');
        toDo.setAttribute('class', 'toDoTasks')
        toDo.setAttribute('draggable', 'true')

        let divParent = document.createElement('div');


        let divId = document.createElement('div');

        let strongTaskId = document.createElement('strong');
        strongTaskId.innerHTML = 'ID:';

        let spanTaskId = document.createElement('span');
        spanTaskId.innerHTML = data.id;

        divId.appendChild(strongTaskId);
        divId.appendChild(spanTaskId);




        let divChildTitle = document.createElement('div');  

        let strongTitle = document.createElement('strong');
        strongTitle.innerHTML = 'Título';

        let spanTitle = document.createElement('span');
        spanTitle.innerHTML = data.title;

        divChildTitle.appendChild(strongTitle);
        divChildTitle.appendChild(spanTitle);




        let divChildDescription = document.createElement('div');

        let strongDescription = document.createElement('strong');
        strongDescription.innerHTML = 'Descrição';

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;

        divChildDescription.appendChild(strongDescription);
        divChildDescription.appendChild(spanDescription);


        divParent.appendChild(divId);
        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);
        

        toDo.appendChild(divParent);

        return toDo;

        

    }

    let allTasksToDoColumnOfUser = async () => {
        
        let response = await fetch('http://127.0.0.1:8001/api/toDo/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let toDo:any = makeToDoElement(task);
            toDo.addEventListener("dblclick", updateTaskToDo)
            toDo.addEventListener("draon", console.log('Dragged'))
            let toDoTasksColumns = document.querySelectorAll('#toDoTasks')[0];            

            toDoTasksColumns.insertAdjacentElement('beforeend', toDo);

        });   

        

    }

    

    let makeInProgressElement = (data:any) => {

        let inProgress = document.createElement('div');
        inProgress.setAttribute('id', 'inProgressTasks');
        inProgress.setAttribute('class', 'inProgressTasks');
        inProgress.setAttribute('draggable', 'true')

        let divParent = document.createElement('div');


        let divId = document.createElement('div');

        let strongTaskId = document.createElement('strong');
        strongTaskId.innerHTML = 'ID:';

        let spanTaskId = document.createElement('span');
        spanTaskId.innerHTML = data.id;

        divId.appendChild(strongTaskId);
        divId.appendChild(spanTaskId);



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
        
        divParent.appendChild(divId);
        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);

        inProgress.appendChild(divParent);
        

        return inProgress;
        

    }

    let allTasksInProgressColumnOfUser = async () => {
        
        let response = await fetch('http://127.0.0.1:8001/api/inProgress/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let InProgress = makeInProgressElement(task);
            InProgress.addEventListener("dblclick", updateTaskInProgress)
            let InProgressTasksColumns = document.querySelectorAll('#inProgressTasks')[0];            

            InProgressTasksColumns.insertAdjacentElement('beforeend', InProgress);

        });   

        

    }


    let makeDoneElement = (data:any) => {

        let done = document.createElement('div');
        done.setAttribute('id', 'doneTasks');
        done.setAttribute('class', 'doneTasks');
        done.setAttribute('draggable', 'true');

        let divParent = document.createElement('div');

        
        let divId = document.createElement('div');

        let strongTaskId = document.createElement('strong');
        strongTaskId.innerHTML = 'ID:';

        let spanTaskId = document.createElement('span');
        spanTaskId.innerHTML = data.id;

        divId.appendChild(strongTaskId);
        divId.appendChild(spanTaskId);



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

        divParent.appendChild(divId);
        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);

        done.appendChild(divParent);
        

        return done;
        

    }

    let allTasksDoneColumnOfUser = async () => {
        
        let response = await fetch('http://127.0.0.1:8001/api/done/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let Done:any = makeDoneElement(task);  
            Done.addEventListener("dblclick", updateTaskDone)          
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
        
              
        let response = await fetch('http://127.0.0.1:8001/api/updateToDoTask', {
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
        
              
        let response = await fetch('http://127.0.0.1:8001/', {
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

        eval(`form.append("taskProgress_id", 3`);
        eval(`form.append("user", document.querySelectorAll('#updateTaskDoneTitle')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#updateTaskDoneDescription')[0].value)`);  
        
              
        let response = await fetch('http://127.0.0.1:8001/', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }


   

    allTasksToDoColumnOfUser();
    allTasksInProgressColumnOfUser();
    allTasksDoneColumnOfUser();

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
                            <input id="taskTitle" type="text" />
                            
                        </div>

                        <div className={styles.formInputs}>
                            <div>Descrição:</div>
                            <textarea id="taskDescription" rows={5} cols={40} />
                        </div>

                        <div onClick={addNewTaskToDo} id="addNewTaskToDo" className={styles.addNewTaskToDoButton}>

                            <div >Adicionar Nova Tarefa</div>
                            
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

                    <div id="toDo" className={styles.toDo}>

                        <p>
                            <span>To Do</span>

                            <span onClick={createNewTaskForm} className={styles.addNewTaskToDoButton}>Criar nova tarefa</span>
                            
                        </p>

                        <div id="toDoTasks" className={styles.toDoTasks}>

                            

                        </div>

                        

                    </div>

                    <div id="inProgress" className={styles.inProgress}>

                        <p>
                            In Progress
                        </p>

                        <div id="inProgressTasks" className={styles.toDoTasks}>

                          

                        </div>

                    </div>

                    
                    <div id="Done" className={styles.inProgress}>

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