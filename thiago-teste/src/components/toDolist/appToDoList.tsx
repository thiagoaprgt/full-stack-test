import styles from './appToDoList.module.css'
import {connection} from '../../database/connection/connection.tsx'

export function AppToDoList() {
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

                    <div className={styles.button}>adicionar a lista</div>
                </form>

            </div>            

        </>
    );
}


export async function addTask() {

    let form = new FormData();
    let title = document.querySelectorAll('#newTitle')[0];
    let description = document.querySelectorAll('#newDescription')[0];

    form.append("title", `${title}` );
    form.append("description", `${description}`);

    let url = '/api';

    let request = null;

    request = await fetch(url, {
        
        method: "POST",
        body: form

    });

}