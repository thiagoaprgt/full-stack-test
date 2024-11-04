import styles from './appToDoList.module.css'


export function AppToDoList() {

    

    const addTask =  async () => {

        let form = new FormData();
        let title = document.querySelectorAll('#newTitle')[0];
        let description = document.querySelectorAll('#newDescription')[0];
    
        form.append("title", `${title}` );
        form.append("description", `${description}`);
    
        let url = 'http://localhost:8001/';     
    
       
    
        let request = await fetch(url, {
            
            method: "GET"
    
        });

        let json = await request.json();
        
        console.log(json)
    }


    return(
        <>

            <div className={styles.appToDoList}>

                <form>

                  <div className={styles.inputs}>
                        <div>
                            <label>Título da nova tarefa:</label>
                            <input type="text" id="newTitle" />
                        </div>

                        <div>
                            <label>Descrição da nova tarefa:</label>
                            <input type="text" id="newDescription"/>
                        </div>
                  </div>

                    <div id="addTaskButton" onClick={addTask} className={styles.button}>adicionar a lista</div>
                </form>

            </div>            

        </>
    );
}