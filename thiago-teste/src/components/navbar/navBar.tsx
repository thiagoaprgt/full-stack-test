import styles from './navBar.module.css'

export function NavBar() {
    return(
        <>

            <nav>

            
               
                <div className={styles.navRight}>
                    <span className={styles.logo}>V</span>
                    
                    <div> COOPER</div>
                </div>
                

                <div className={styles.navLeft}>
                    <div>Entrar</div>
                </div>
               
            
            </nav>

        </>
    );
}