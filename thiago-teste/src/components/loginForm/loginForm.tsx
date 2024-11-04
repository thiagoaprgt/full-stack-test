import styles from './loginForm.module.css'

export function LoginForm() {
    return (
        <>
            <div className={styles.loginFormBackground}>

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
        </>
    )
}