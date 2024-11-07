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

        let divParent = document.createElement('div');

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
            let toDoTasksColumns = document.querySelectorAll('#toDoTasks')[0];            

            toDoTasksColumns.insertAdjacentElement('beforeend', toDo);

        });   

        

    }

    

    let makeInProgressElement = (data:any) => {

        let inProgress = document.createElement('div');
        inProgress.setAttribute('id', 'inProgressTasks');
        inProgress.setAttribute('class', 'inProgressTasks')

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
        
        let response = await fetch('http://127.0.0.1:8001/api/inProgress/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let InProgress:any = makeInProgressElement(task);
            let InProgressTasksColumns = document.querySelectorAll('#inProgressTasks')[0];            

            InProgressTasksColumns.insertAdjacentElement('beforeend', InProgress);

        });   

        

    }


    let makeDoneElement = (data:any) => {

        let Done = document.createElement('div');
        Done.setAttribute('id', 'DoneTasks');
        Done.setAttribute('class', 'DoneTasks')

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

        Done.appendChild(divParent);
        

        return Done;
        

    }

    let allTasksDoneColumnOfUser = async () => {
        
        let response = await fetch('http://127.0.0.1:8001/api/Done/' + sessionStorage.userId, {
            method : "GET"
        });

        let db = await response.json();

        await db.map(async (task:any) => {
            
            let Done:any = makeInProgressElement(task);
            let DoneTasksColumns = document.querySelectorAll('#DoneTasks')[0];            

            DoneTasksColumns.insertAdjacentElement('beforeend', Done);

        });   

        

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

                        <div id="DoneTasks" className={styles.toDoTasks}>

                          

                        </div>

                    </div>

                </div>



            </div>

        </>
    );
}