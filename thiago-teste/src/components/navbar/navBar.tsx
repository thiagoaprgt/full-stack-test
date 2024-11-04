import styles from './navBar.module.css'


export function NavBar() {   

    const loginFormToggleVisible = () => {
        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
        eval(`document.querySelectorAll('#loginFormBackground')[0].style.visibility = "visible"`);
    }

    const loginFormToggleHidden = () => {
        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
        eval(`document.querySelectorAll('#loginFormBackground')[0].style.visibility = "hidden"`);
    }

    return(
        <>

            <div id="loginFormBackground"  className={styles.loginFormBackground} onClick={loginFormToggleHidden}>

                <div id="loginForm" >

                    <div className={styles.loginForm}>
                        <div>
                            <div>email:</div>
                            <input type="text" />
                        </div>
                    
                    <div>
                        <div>senha:</div>
                        <input type="password" />
                    </div>

                    </div>     

                </div>

            </div>

            

            <nav>

            
               
                <div className={styles.navRight}>
                    
                    <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.4697 0.0321457L0.226516 21.1108C0.0889039 21.171 0 21.3066 0 21.4564V34.5437C0 34.6935 0.0889039 34.8291 0.226516 34.8892L48.4697 55.9679C48.7197 56.0771 49 55.8945 49 55.6223V42.8711C49 42.7213 48.9111 42.5856 48.7735 42.5255L16.3195 28.3455C16.0174 28.2135 16.0174 27.7864 16.3195 27.6544L48.7735 13.4745C48.9111 13.4144 49 13.2788 49 13.1289V0.377691C49 0.105505 48.7197 -0.0771031 48.4697 0.0321457Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.4697 0.0321457L0.226516 21.1108C0.0889039 21.171 0 21.3066 0 21.4564V34.5437C0 34.6935 0.0889039 34.8291 0.226516 34.8892L48.4697 55.9679C48.7197 56.0771 49 55.8945 49 55.6223V42.8711C49 42.7213 48.9111 42.5856 48.7735 42.5255L16.3195 28.3455C16.0174 28.2135 16.0174 27.7864 16.3195 27.6544L48.7735 13.4745C48.9111 13.4144 49 13.2788 49 13.1289V0.377691C49 0.105505 48.7197 -0.0771031 48.4697 0.0321457Z" fill="#4AC959"/>
                    </svg>

                    

                    
                    <div> COOPER</div>
                </div>
                

                <div onClick={loginFormToggleVisible} className={styles.navLeft}>
                    <div>Entrar</div>
                </div>
               
            
            </nav>

            

        </>
    );
}