import styles from './appToDoList.module.css'
// className={styles.sectionLeft}

export function AppToDoList() {
    return(
        <>

            <div className={styles.appToDoList}>

                <form>

                  <div className={styles.inputs}>
                        <div>
                            <label>Título da nova tarefa:</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Descrição da nova tarefa:</label>
                            <input type="text" />
                        </div>
                  </div>

                    <button>adicionar a lista</button>
                </form>

            </div>

        </>
    );
}