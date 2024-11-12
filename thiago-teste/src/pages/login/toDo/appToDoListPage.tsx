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

        eval(`document.querySelectorAll('#createTaskToDoFormBackground')[0].style.visibility = "hidden"`);

        

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

        let svgDelete = document.querySelectorAll('#toDoTasks svg')[1];
        let svgDeleteClone = svgDelete.cloneNode(true);


        divParent.append(divSvg);
        divParent.appendChild(divChildDescription);
        divParent.appendChild(svgDeleteClone);
        

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
            toDo.addEventListener("dragstart", dragStart);


            let description =  toDo.querySelectorAll('.toDoTasks span')[0];
            description.addEventListener("click", updateTaskToDoForm);
            description.addEventListener("click", getTaskIdByEvent);
            
            
            let divCircleSvg =  toDo.querySelectorAll('.toDoTasks svg')[0].parentNode            
            divCircleSvg.addEventListener("click", getTaskIdByEvent);
            divCircleSvg.addEventListener("click", updateFrom_ToDo_to_Done);

            
            let divPathSvgDelete =  toDo.querySelectorAll('.toDoTasks svg')[1]; 
            divPathSvgDelete.addEventListener("click", getTaskIdByEvent);
            divPathSvgDelete.addEventListener("click", deleteTask);
            
            
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
        

        let svgCircle = document.querySelectorAll('#doneTasks svg')[0]
        let svgCircleClone = svgCircle.cloneNode(true); 


        let divChildDescription = document.createElement('div');
        let spanDescription = document.createElement('span');
        spanDescription.innerHTML = data.description;
        divChildDescription.appendChild(spanDescription);


        let svgDelete = document.querySelectorAll('#doneTasks svg')[1];
        let svgDeleteClone = svgDelete.cloneNode(true);


        
        divParent.appendChild(svgCircleClone);
        divParent.appendChild(divChildDescription);
        divParent.appendChild(svgDeleteClone);

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
            Done.addEventListener("dragstart", dragStart);

            let description =  Done.querySelectorAll('.doneTasks span')[0];

            description.addEventListener("click", updateTaskDoneForm);
            description.addEventListener("click", getTaskIdByEvent);
            

            let divPathSvgCircle =  Done.querySelectorAll('.doneTasks svg')[0];    
                 
            divPathSvgCircle.addEventListener("click", getTaskIdByEvent);
            divPathSvgCircle.addEventListener("click", updateFrom_To_Done_ToDo);

            let divPathSvgDelete =  Done.querySelectorAll('.doneTasks svg')[1]; 
            divPathSvgDelete.addEventListener("click", getTaskIdByEvent);
            divPathSvgDelete.addEventListener("click", deleteTask);
            



            
            

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

        closeUpdateToDoTaskForm();
        
    } 

    let updateTaskDoneForm = async () => {

        eval(`document.querySelectorAll('#updateTaskDoneFormBackground')[0].style.visibility = "visible"`);
        
    }

    let updateTaskDone = async () => {

        eval(`document.querySelectorAll('#updateTaskDoneFormBackground')[0].style.visibility = "visible"`);

        let form = new FormData();

        form.append("id", sessionStorage.taskId);
        form.append("user_id", sessionStorage.userId);        
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

        closeUpdateToDoTaskForm();
        
    }

    let updateFrom_ToDo_to_Done = async (event:any) => {

       

        let toDoTask = event.target.parentNode.parentNode.parentNode;
        let description = toDoTask.querySelectorAll('span')[0].innerHTML;

        let form = new FormData();

        form.append("id", sessionStorage.taskId);
        form.append("user_id", sessionStorage.userId);        
        form.append("description", description)
        
              
        await fetch(url + '/api/updateDoneTask', {
            method: "POST",   
            body: form
        })

        let tasksColumnsToDO = document.querySelectorAll('#toDoTasks div[task_id]');
            
            for (let index = 0; index < tasksColumnsToDO.length; index++) {
                tasksColumnsToDO[index].remove(); 
                               
            }

        let tasksColumnsDone = document.querySelectorAll('#doneTasks div[task_id]');
            
            for (let index = 0; index < tasksColumnsDone.length; index++) {
                tasksColumnsDone[index].remove(); 
                               
        }

        
        allTasksToDoColumnOfUser();  
        allTasksDoneColumnOfUser();

    }


    let updateFrom_To_Done_ToDo= async (event:any) => {

       

        let toDoneTask = event.target.parentNode.parentNode.parentNode;
        let description = toDoneTask.querySelectorAll('span')[0].innerHTML;

        let form = new FormData();

        form.append("id", sessionStorage.taskId);
        form.append("user_id", sessionStorage.userId);        
        form.append("description", description)
        
              
        await fetch(url + '/api/updateToDoTask', {
            method: "POST",   
            body: form
        })

        let tasksColumnsToDO = document.querySelectorAll('#toDoTasks div[task_id]');
            
            for (let index = 0; index < tasksColumnsToDO.length; index++) {
                tasksColumnsToDO[index].remove(); 
                               
            }

        let tasksColumnsDone = document.querySelectorAll('#doneTasks div[task_id]');
            
            for (let index = 0; index < tasksColumnsDone.length; index++) {
                tasksColumnsDone[index].remove(); 
                               
        }

        
        allTasksToDoColumnOfUser();  
        allTasksDoneColumnOfUser();

    }


    let eraseAllToDoTasks = async() => {

        await fetch(url + '/api/deleteAllToDoTask', {
            method: "GET"
        });

        let tasksColumns = document.querySelectorAll('#toDoTasks div[task_id]');
            
        for (let index = 0; index < tasksColumns.length; index++) {
            tasksColumns[index].remove(); 
                            
        }

    }

    let eraseAllDoneTasks = async() => {

        await fetch(url + '/api/deleteAllDoneTask', {
            method: "GET"
        })

        let tasksColumns = document.querySelectorAll('#doneTasks div[task_id]');
            
        for (let index = 0; index < tasksColumns.length; index++) {
            tasksColumns[index].remove(); 
                            
        }

    }

    let deleteTask = async(event:any) => {

        await fetch(url + '/api/deleteTask/' + sessionStorage.taskId, {
            method: "GET"
        })

        event.target.parentNode.parentNode.remove();

        

        
        
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

                    Lista de Tarefas, arraste e solte os elementos para 
                    trocá-los de coluna ou clique no símbolos.

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

                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.44 0.0959995V9H5.652V8.256C5.188 8.816 4.516 9.096 3.636 9.096C3.028 9.096 2.476 8.96 1.98 8.688C1.492 8.416 1.108 8.028 0.828 7.524C0.548 7.02 0.408 6.436 0.408 5.772C0.408 5.108 0.548 4.524 0.828 4.02C1.108 3.516 1.492 3.128 1.98 2.856C2.476 2.584 3.028 2.448 3.636 2.448C4.46 2.448 5.104 2.708 5.568 3.228V0.0959995H7.44ZM3.96 7.56C4.432 7.56 4.824 7.4 5.136 7.08C5.448 6.752 5.604 6.316 5.604 5.772C5.604 5.228 5.448 4.796 5.136 4.476C4.824 4.148 4.432 3.984 3.96 3.984C3.48 3.984 3.084 4.148 2.772 4.476C2.46 4.796 2.304 5.228 2.304 5.772C2.304 6.316 2.46 6.752 2.772 7.08C3.084 7.4 3.48 7.56 3.96 7.56ZM15.4966 5.796C15.4966 5.82 15.4846 5.988 15.4606 6.3H10.5766C10.6646 6.7 10.8726 7.016 11.2006 7.248C11.5286 7.48 11.9366 7.596 12.4246 7.596C12.7606 7.596 13.0566 7.548 13.3126 7.452C13.5766 7.348 13.8206 7.188 14.0446 6.972L15.0406 8.052C14.4326 8.748 13.5446 9.096 12.3766 9.096C11.6486 9.096 11.0046 8.956 10.4446 8.676C9.88459 8.388 9.45259 7.992 9.14859 7.488C8.84459 6.984 8.69259 6.412 8.69259 5.772C8.69259 5.14 8.84059 4.572 9.13659 4.068C9.44059 3.556 9.85259 3.16 10.3726 2.88C10.9006 2.592 11.4886 2.448 12.1366 2.448C12.7686 2.448 13.3406 2.584 13.8526 2.856C14.3646 3.128 14.7646 3.52 15.0526 4.032C15.3486 4.536 15.4966 5.124 15.4966 5.796ZM12.1486 3.864C11.7246 3.864 11.3686 3.984 11.0806 4.224C10.7926 4.464 10.6166 4.792 10.5526 5.208H13.7326C13.6686 4.8 13.4926 4.476 13.2046 4.236C12.9166 3.988 12.5646 3.864 12.1486 3.864ZM16.7429 0.0959995H18.6149V9H16.7429V0.0959995ZM26.6763 5.796C26.6763 5.82 26.6643 5.988 26.6403 6.3H21.7563C21.8443 6.7 22.0523 7.016 22.3803 7.248C22.7083 7.48 23.1163 7.596 23.6043 7.596C23.9403 7.596 24.2363 7.548 24.4923 7.452C24.7563 7.348 25.0003 7.188 25.2243 6.972L26.2203 8.052C25.6123 8.748 24.7243 9.096 23.5563 9.096C22.8283 9.096 22.1843 8.956 21.6243 8.676C21.0643 8.388 20.6323 7.992 20.3283 7.488C20.0243 6.984 19.8723 6.412 19.8723 5.772C19.8723 5.14 20.0203 4.572 20.3163 4.068C20.6203 3.556 21.0323 3.16 21.5523 2.88C22.0803 2.592 22.6683 2.448 23.3163 2.448C23.9483 2.448 24.5203 2.584 25.0323 2.856C25.5443 3.128 25.9443 3.52 26.2323 4.032C26.5283 4.536 26.6763 5.124 26.6763 5.796ZM23.3283 3.864C22.9043 3.864 22.5483 3.984 22.2603 4.224C21.9723 4.464 21.7963 4.792 21.7323 5.208H24.9123C24.8483 4.8 24.6723 4.476 24.3843 4.236C24.0963 3.988 23.7443 3.864 23.3283 3.864ZM32.0866 8.688C31.9026 8.824 31.6746 8.928 31.4026 9C31.1386 9.064 30.8586 9.096 30.5626 9.096C29.7946 9.096 29.1986 8.9 28.7746 8.508C28.3586 8.116 28.1506 7.54 28.1506 6.78V4.128H27.1546V2.688H28.1506V1.116H30.0226V2.688H31.6306V4.128H30.0226V6.756C30.0226 7.028 30.0906 7.24 30.2266 7.392C30.3706 7.536 30.5706 7.608 30.8266 7.608C31.1226 7.608 31.3746 7.528 31.5826 7.368L32.0866 8.688ZM39.2622 5.796C39.2622 5.82 39.2502 5.988 39.2262 6.3H34.3422C34.4302 6.7 34.6382 7.016 34.9662 7.248C35.2942 7.48 35.7022 7.596 36.1902 7.596C36.5262 7.596 36.8222 7.548 37.0782 7.452C37.3422 7.348 37.5862 7.188 37.8102 6.972L38.8062 8.052C38.1982 8.748 37.3102 9.096 36.1422 9.096C35.4142 9.096 34.7702 8.956 34.2102 8.676C33.6502 8.388 33.2182 7.992 32.9142 7.488C32.6102 6.984 32.4582 6.412 32.4582 5.772C32.4582 5.14 32.6062 4.572 32.9022 4.068C33.2062 3.556 33.6182 3.16 34.1382 2.88C34.6662 2.592 35.2542 2.448 35.9022 2.448C36.5342 2.448 37.1062 2.584 37.6182 2.856C38.1302 3.128 38.5302 3.52 38.8182 4.032C39.1142 4.536 39.2622 5.124 39.2622 5.796ZM35.9142 3.864C35.4902 3.864 35.1342 3.984 34.8462 4.224C34.5582 4.464 34.3822 4.792 34.3182 5.208H37.4982C37.4342 4.8 37.2582 4.476 36.9702 4.236C36.6822 3.988 36.3302 3.864 35.9142 3.864Z" fill="#999999"/>
                            </svg>


                        </div>

                        <p onClick={eraseAllToDoTasks} className={styles.eraseAll}>erase all</p>

                        

                    </div>

                    

                    
                    <div id="Done" draggable="true"  className={styles.toDo}>

                        <p>
                            Done
                        </p>

                        <div id="doneTasks" className={styles.toDoTasks}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9986 0C5.3778 0 0 5.38059 0 12.0014C0 18.6222 5.3778 24 11.9986 24C18.6194 24 24 18.6222 24 12.0014C24 5.38059 18.6194 0 11.9986 0ZM17.2738 6.5554C17.7138 6.5554 18.1525 6.72088 18.4848 7.05318C19.1494 7.71775 19.1494 8.81388 18.4848 9.47846L11.2123 16.7509C10.5477 17.4155 9.45105 17.4155 8.78648 16.7509L5.55537 13.5176C4.8908 12.853 4.8908 11.7586 5.55537 11.094C6.21995 10.4294 7.31441 10.4294 7.97898 11.094L9.99912 13.1147L16.0612 7.05318C16.3935 6.72088 16.8339 6.5554 17.2738 6.5554Z" fill="#4AC959"/>
                            </svg>

                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.44 0.0959995V9H5.652V8.256C5.188 8.816 4.516 9.096 3.636 9.096C3.028 9.096 2.476 8.96 1.98 8.688C1.492 8.416 1.108 8.028 0.828 7.524C0.548 7.02 0.408 6.436 0.408 5.772C0.408 5.108 0.548 4.524 0.828 4.02C1.108 3.516 1.492 3.128 1.98 2.856C2.476 2.584 3.028 2.448 3.636 2.448C4.46 2.448 5.104 2.708 5.568 3.228V0.0959995H7.44ZM3.96 7.56C4.432 7.56 4.824 7.4 5.136 7.08C5.448 6.752 5.604 6.316 5.604 5.772C5.604 5.228 5.448 4.796 5.136 4.476C4.824 4.148 4.432 3.984 3.96 3.984C3.48 3.984 3.084 4.148 2.772 4.476C2.46 4.796 2.304 5.228 2.304 5.772C2.304 6.316 2.46 6.752 2.772 7.08C3.084 7.4 3.48 7.56 3.96 7.56ZM15.4966 5.796C15.4966 5.82 15.4846 5.988 15.4606 6.3H10.5766C10.6646 6.7 10.8726 7.016 11.2006 7.248C11.5286 7.48 11.9366 7.596 12.4246 7.596C12.7606 7.596 13.0566 7.548 13.3126 7.452C13.5766 7.348 13.8206 7.188 14.0446 6.972L15.0406 8.052C14.4326 8.748 13.5446 9.096 12.3766 9.096C11.6486 9.096 11.0046 8.956 10.4446 8.676C9.88459 8.388 9.45259 7.992 9.14859 7.488C8.84459 6.984 8.69259 6.412 8.69259 5.772C8.69259 5.14 8.84059 4.572 9.13659 4.068C9.44059 3.556 9.85259 3.16 10.3726 2.88C10.9006 2.592 11.4886 2.448 12.1366 2.448C12.7686 2.448 13.3406 2.584 13.8526 2.856C14.3646 3.128 14.7646 3.52 15.0526 4.032C15.3486 4.536 15.4966 5.124 15.4966 5.796ZM12.1486 3.864C11.7246 3.864 11.3686 3.984 11.0806 4.224C10.7926 4.464 10.6166 4.792 10.5526 5.208H13.7326C13.6686 4.8 13.4926 4.476 13.2046 4.236C12.9166 3.988 12.5646 3.864 12.1486 3.864ZM16.7429 0.0959995H18.6149V9H16.7429V0.0959995ZM26.6763 5.796C26.6763 5.82 26.6643 5.988 26.6403 6.3H21.7563C21.8443 6.7 22.0523 7.016 22.3803 7.248C22.7083 7.48 23.1163 7.596 23.6043 7.596C23.9403 7.596 24.2363 7.548 24.4923 7.452C24.7563 7.348 25.0003 7.188 25.2243 6.972L26.2203 8.052C25.6123 8.748 24.7243 9.096 23.5563 9.096C22.8283 9.096 22.1843 8.956 21.6243 8.676C21.0643 8.388 20.6323 7.992 20.3283 7.488C20.0243 6.984 19.8723 6.412 19.8723 5.772C19.8723 5.14 20.0203 4.572 20.3163 4.068C20.6203 3.556 21.0323 3.16 21.5523 2.88C22.0803 2.592 22.6683 2.448 23.3163 2.448C23.9483 2.448 24.5203 2.584 25.0323 2.856C25.5443 3.128 25.9443 3.52 26.2323 4.032C26.5283 4.536 26.6763 5.124 26.6763 5.796ZM23.3283 3.864C22.9043 3.864 22.5483 3.984 22.2603 4.224C21.9723 4.464 21.7963 4.792 21.7323 5.208H24.9123C24.8483 4.8 24.6723 4.476 24.3843 4.236C24.0963 3.988 23.7443 3.864 23.3283 3.864ZM32.0866 8.688C31.9026 8.824 31.6746 8.928 31.4026 9C31.1386 9.064 30.8586 9.096 30.5626 9.096C29.7946 9.096 29.1986 8.9 28.7746 8.508C28.3586 8.116 28.1506 7.54 28.1506 6.78V4.128H27.1546V2.688H28.1506V1.116H30.0226V2.688H31.6306V4.128H30.0226V6.756C30.0226 7.028 30.0906 7.24 30.2266 7.392C30.3706 7.536 30.5706 7.608 30.8266 7.608C31.1226 7.608 31.3746 7.528 31.5826 7.368L32.0866 8.688ZM39.2622 5.796C39.2622 5.82 39.2502 5.988 39.2262 6.3H34.3422C34.4302 6.7 34.6382 7.016 34.9662 7.248C35.2942 7.48 35.7022 7.596 36.1902 7.596C36.5262 7.596 36.8222 7.548 37.0782 7.452C37.3422 7.348 37.5862 7.188 37.8102 6.972L38.8062 8.052C38.1982 8.748 37.3102 9.096 36.1422 9.096C35.4142 9.096 34.7702 8.956 34.2102 8.676C33.6502 8.388 33.2182 7.992 32.9142 7.488C32.6102 6.984 32.4582 6.412 32.4582 5.772C32.4582 5.14 32.6062 4.572 32.9022 4.068C33.2062 3.556 33.6182 3.16 34.1382 2.88C34.6662 2.592 35.2542 2.448 35.9022 2.448C36.5342 2.448 37.1062 2.584 37.6182 2.856C38.1302 3.128 38.5302 3.52 38.8182 4.032C39.1142 4.536 39.2622 5.124 39.2622 5.796ZM35.9142 3.864C35.4902 3.864 35.1342 3.984 34.8462 4.224C34.5582 4.464 34.3822 4.792 34.3182 5.208H37.4982C37.4342 4.8 37.2582 4.476 36.9702 4.236C36.6822 3.988 36.3302 3.864 35.9142 3.864Z" fill="#999999"/>
                            </svg>

                        </div>
                        

                        <p onClick={eraseAllDoneTasks} className={styles.eraseAll}>erase all</p>


                    </div>

                </div>



            </div>

        </>
    );
}