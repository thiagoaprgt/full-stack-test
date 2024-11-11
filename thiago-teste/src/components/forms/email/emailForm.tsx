import { useEffect } from 'react';
import styles from './emailForm.module.css'

export function EmailForm() {


    let sendFormEmail = async () => {

        let url = 'http://localhost:8001';

        let form = new FormData();

        form.append("name", eval(`document.querySelectorAll('#emailName')[0].value`));
        form.append("email", eval(`document.querySelectorAll('#emailAddress')[0].value`));
        form.append("telephone", eval(`document.querySelectorAll('#emailTelephone')[0].value`));
        form.append("message", eval(`document.querySelectorAll('#emailMessage')[0].value`));


        let response = await fetch(url + '/api/sendEmail', {
            method: "POST",
            body: form
        });

        console.log(response.json());
        

    }


    useEffect(() => {

        /*
            O useEffect serve para usar funções só
            depois que todo o html for renderizado
        */

       
    });


    return(
        <>

            <div id="emailForm" className={styles.emailForm}>

                <div className={styles.emailName}>
                    <label>Your name</label>
                    <input required type='text' id="emailName" />
                </div>
                

                <div className={styles.emailContact}>

                    <div>
                        <label >Email*</label>
                        <input type='text' id="emailAddress" />
                    </div>

                    <div>
                        <label >Telephone</label>
                        <input type='number' id="emailTelephone"  />
                    </div>

                </div>

                
                <div className={styles.emailMessage}>
                    <label >Message</label>
                    <textarea id="emailMessage"  />
                </div>


                <div className={styles.emailButton} onClick={sendFormEmail} > send now </div>


            </div>

        </>
    );
}