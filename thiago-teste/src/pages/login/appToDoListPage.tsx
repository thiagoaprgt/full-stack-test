import styles from './appToDoListPage.module.css'


export function AppToDoListPage() {
    return(
        <>
            <div>
                Funcionando a página App to Do List
            </div>


            <div className={styles.toDoList}>

                <div id="newTaskForm" className={styles.newTask}>



                </div>

                <div id="taskProgress" className={styles.taskProgress}>

                    <div id="toDo" className={styles.toDo}>

                    </div>

                    <div id="inProgress" className={styles.inProgress}>

                    </div>

                </div>



            </div>

        </>
    );
}