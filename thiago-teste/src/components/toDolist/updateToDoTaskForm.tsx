import styles from '../../pages/login/toDo/appToDoListPage.module.css'


export function UpdateToDoTaskForm() {

    let closeUpdateToDoTaskForm = () => {

        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
            eval(`document.querySelectorAll('#updateTaskToDoFormBackground')[0].style.visibility = "hidden"`);

    }

    let updateTaskToDo = async () => {

        eval(`document.querySelectorAll('#updateTaskToDoFormBackground')[0].style.visibility = "visible"`);

        let form = new FormData();

        eval(`form.append("taskProgress_id", 1`);
        eval(`form.append("user", document.querySelectorAll('#updateTaskToDoTitle')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#updateTaskToDoDescription')[0].value)`);  
        
              
        let response = await fetch('http://127.0.0.1:8001/', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }

    let updateTaskInProgress = async () => {

        let form = new FormData();

        eval(`form.append("taskProgress_id", 2`);
        eval(`form.append("user", document.querySelectorAll('#updateTaskToDoTitle')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#updateTaskToDoDescription')[0].value)`);  
        
              
        let response = await fetch('http://127.0.0.1:8001/', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }


    let updateTaskDone = async () => {

        let form = new FormData();

        eval(`form.append("taskProgress_id", 3`);
        eval(`form.append("user", document.querySelectorAll('#updateTaskToDoTitle')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#updateTaskToDoDescription')[0].value)`);  
        
              
        let response = await fetch('http://127.0.0.1:8001/', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })
        
    }

   

    return(
        <>   

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

        </>
    );
}