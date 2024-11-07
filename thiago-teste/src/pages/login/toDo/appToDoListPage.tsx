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

    let makeToDoElement = async () => {

        let toDo = document.createElement('div');
        toDo.setAttribute('id', 'toDoTasks');
        toDo.setAttribute('class', 'toDoTasks')

        let divParent = document.createElement('div');

        let divChildTitle = document.createElement('div');

        let strongTitle = document.createElement('strong');
        strongTitle.innerHTML = 'Título';

        let spanTitle = document.createElement('span');
        spanTitle.innerHTML = '{{title}}';

        divChildTitle.appendChild(strongTitle);
        divChildTitle.appendChild(spanTitle);


        let divChildDescription = document.createElement('div');

        let strongDescription = document.createElement('strong');
        strongDescription.innerHTML = 'Descrição';

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = '{{Description}}';

        divChildDescription.appendChild(strongDescription);
        divChildDescription.appendChild(spanDescription);

        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);

        toDo.appendChild(divParent);

        let toDoTasks = document.querySelectorAll('#toDoTasks')[0];


        toDoTasks.insertAdjacentElement('beforeend', toDo);

    }

    let makeInProgressElement = async () => {

        let toDo = document.createElement('div');
        toDo.setAttribute('id', 'toDoTasks');
        toDo.setAttribute('class', 'toDoTasks')

        let divParent = document.createElement('div');

        let divChildTitle = document.createElement('div');

        let strongTitle = document.createElement('strong');
        strongTitle.innerHTML = 'Título:';

        let spanTitle = document.createElement('span');
        spanTitle.innerHTML = '{{title}}';

        divChildTitle.appendChild(strongTitle);
        divChildTitle.appendChild(spanTitle);


        let divChildDescription = document.createElement('div');

        let strongDescription = document.createElement('strong');
        strongDescription.innerHTML = 'Descrição:';

        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = '{{Description}}';

        divChildDescription.appendChild(strongDescription);
        divChildDescription.appendChild(spanDescription);

        divParent.appendChild(divChildTitle);
        divParent.appendChild(divChildDescription);

        toDo.appendChild(divParent);

        let toDoTasks = document.querySelectorAll('#inProgressTasks')[0];


        toDoTasks.insertAdjacentElement('beforeend', toDo);

    }

   

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
                            <input id="taskDescription"  type="text" />
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

                            <span onClick={makeToDoElement} className={styles.addNewTaskToDoButton}>Criar nova tarefa</span>
                            
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

                </div>



            </div>

        </>
    );
}