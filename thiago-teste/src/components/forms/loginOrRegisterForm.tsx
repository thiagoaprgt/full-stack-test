import styles from './loginOrRegisterForm.module.css'




export function LoginOrRegisterForm() {

    

    let loginFormToggleHidden = () => {
        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
        eval(`document.querySelectorAll('#loginFormBackground')[0].style.visibility = "hidden"`);
    }

    let registerAccountFormToggleVisible = () => {
        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
        eval(`document.querySelectorAll('#loginFormBackground')[0].style.visibility = "hidden"`);

        eval(`document.querySelectorAll('#registerAccountFormBackground')[0].style.visibility = "visible"`);
    }

    let registerAccountFormToggleHidden= () => {
        /*
            a função do javascritp eval() valida a string como um comando javascript,
            foi aqui pra que o react não de erro na proprieda .style
        */
        

        eval(`document.querySelectorAll('#registerAccountFormBackground')[0].style.visibility = "hidden"`);
    }

    let registerAccount = async () => {

        let form = new FormData();

        eval(`form.append("user", document.querySelectorAll('#registerUser')[0].value)`);
        eval(`form.append("name", document.querySelectorAll('#registerName')[0].value)`);
        eval(`form.append("email", document.querySelectorAll('#registerEmail')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#registerPassword')[0].value)`);        
        
              
        let response = await fetch('http://127.0.0.1:8001/api/createUser', {
            method: "POST",   
            body: form
        })

        console.log(await response.json());
        
    }

    let doLogin = async () => {
        

        let form = new FormData();

        eval(`form.append("user", document.querySelectorAll('#doLoginUser')[0].value)`);
        eval(`form.append("password", document.querySelectorAll('#doLoginPassword')[0].value)`);  
        
              
        let response = await fetch('http://127.0.0.1:8001/api/doLogin', {
            method: "POST",   
            body: form
        })

        let data = await response.json().then((res) => {
            return res;
        })

        console.log(data[0])

        if(data[0] != undefined) {

            /*
             as informações da session storage ficam armazenadas no
             computador do usuário até ele fechar a aba do navegador ou deslogar no site.
             Não se deve armazenar as senhas nem qualquer outra informação que traga problema ao 
             usuário, pois alguém mal intecionado pode usá-las
            */
            sessionStorage.setItem("userId", data[0].id);
            sessionStorage.setItem("userName", data[0].name);
            sessionStorage.setItem("userEmail", data[0].email);            

        }

        if(sessionStorage.userId != undefined) {
            window.location.replace('http://localhost:5173/AppToDoList')
        }

    }



    return(
        <>  

            
            <div id="loginFormBackground"  className={styles.loginFormBackground}>                                
                

                <div className={styles.loginForm}>

                    <div id="closeLoginForm" className={styles.closeLoginForm} >
                        <span onClick={loginFormToggleHidden}>Close</span>
                    </div>

                    <div>

                        <div className={styles.imagesForm}>

                            <img src="/images/mulhoerLoginForm.png" alt=""  />

                            <svg width="300" height="100" viewBox="0 0 535 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.04 63.96C20.6133 63.96 16.32 63.3733 12.16 62.2C8.05333 60.9733 4.74667 59.4 2.24 57.48L6.64 47.72C9.04 49.48 11.8933 50.8933 15.2 51.96C18.5067 53.0267 21.8133 53.56 25.12 53.56C28.8 53.56 31.52 53.0267 33.28 51.96C35.04 50.84 35.92 49.3733 35.92 47.56C35.92 46.2267 35.3867 45.1333 34.32 44.28C33.3067 43.3733 31.9733 42.6533 30.32 42.12C28.72 41.5867 26.5333 41 23.76 40.36C19.4933 39.3467 16 38.3333 13.28 37.32C10.56 36.3067 8.21333 34.68 6.24 32.44C4.32 30.2 3.36 27.2133 3.36 23.48C3.36 20.2267 4.24 17.2933 6 14.68C7.76 12.0133 10.4 9.90666 13.92 8.36C17.4933 6.81333 21.84 6.04 26.96 6.04C30.5333 6.04 34.0267 6.46666 37.44 7.32C40.8533 8.17333 43.84 9.4 46.4 11L42.4 20.84C37.2267 17.9067 32.0533 16.44 26.88 16.44C23.2533 16.44 20.56 17.0267 18.8 18.2C17.0933 19.3733 16.24 20.92 16.24 22.84C16.24 24.76 17.2267 26.2 19.2 27.16C21.2267 28.0667 24.2933 28.9733 28.4 29.88C32.6667 30.8933 36.16 31.9067 38.88 32.92C41.6 33.9333 43.92 35.5333 45.84 37.72C47.8133 39.9067 48.8 42.8667 48.8 46.6C48.8 49.8 47.8933 52.7333 46.08 55.4C44.32 58.0133 41.6533 60.0933 38.08 61.64C34.5067 63.1867 30.16 63.96 25.04 63.96ZM56.7756 19.96H69.2556V63H56.7756V19.96ZM63.0156 13.96C60.7223 13.96 58.8556 13.2933 57.4156 11.96C55.9756 10.6267 55.2556 8.97333 55.2556 7C55.2556 5.02666 55.9756 3.37333 57.4156 2.04C58.8556 0.706663 60.7223 0.0399952 63.0156 0.0399952C65.309 0.0399952 67.1756 0.679996 68.6156 1.96C70.0556 3.24 70.7756 4.84 70.7756 6.76C70.7756 8.84 70.0556 10.5733 68.6156 11.96C67.1756 13.2933 65.309 13.96 63.0156 13.96ZM125.238 19.96V55.8C125.238 63.6933 123.185 69.56 119.078 73.4C114.971 77.24 108.971 79.16 101.078 79.16C96.9181 79.16 92.9715 78.6533 89.2381 77.64C85.5048 76.6267 82.4115 75.16 79.9581 73.24L84.9181 64.28C86.7315 65.7733 89.0248 66.9467 91.7981 67.8C94.5715 68.7067 97.3448 69.16 100.118 69.16C104.438 69.16 107.611 68.1733 109.638 66.2C111.718 64.28 112.758 61.3467 112.758 57.4V55.56C109.505 59.1333 104.971 60.92 99.1581 60.92C95.2115 60.92 91.5848 60.0667 88.2781 58.36C85.0248 56.6 82.4381 54.1467 80.5181 51C78.5981 47.8533 77.6381 44.2267 77.6381 40.12C77.6381 36.0133 78.5981 32.3867 80.5181 29.24C82.4381 26.0933 85.0248 23.6667 88.2781 21.96C91.5848 20.2 95.2115 19.32 99.1581 19.32C105.398 19.32 110.145 21.3733 113.398 25.48V19.96H125.238ZM101.638 50.68C104.945 50.68 107.638 49.72 109.718 47.8C111.851 45.8267 112.918 43.2667 112.918 40.12C112.918 36.9733 111.851 34.44 109.718 32.52C107.638 30.5467 104.945 29.56 101.638 29.56C98.3315 29.56 95.6115 30.5467 93.4781 32.52C91.3448 34.44 90.2781 36.9733 90.2781 40.12C90.2781 43.2667 91.3448 45.8267 93.4781 47.8C95.6115 49.72 98.3315 50.68 101.638 50.68ZM163.014 19.32C168.347 19.32 172.64 20.92 175.894 24.12C179.2 27.32 180.854 32.0667 180.854 38.36V63H168.374V40.28C168.374 36.8667 167.627 34.3333 166.134 32.68C164.64 30.9733 162.48 30.12 159.654 30.12C156.507 30.12 154 31.1067 152.134 33.08C150.267 35 149.334 37.88 149.334 41.72V63H136.854V19.96H148.774V25C150.427 23.1867 152.48 21.8 154.934 20.84C157.387 19.8267 160.08 19.32 163.014 19.32ZM214.823 19.96H227.303V63H214.823V19.96ZM221.063 13.96C218.769 13.96 216.903 13.2933 215.463 11.96C214.023 10.6267 213.303 8.97333 213.303 7C213.303 5.02666 214.023 3.37333 215.463 2.04C216.903 0.706663 218.769 0.0399952 221.063 0.0399952C223.356 0.0399952 225.223 0.679996 226.663 1.96C228.103 3.24 228.823 4.84 228.823 6.76C228.823 8.84 228.103 10.5733 226.663 11.96C225.223 13.2933 223.356 13.96 221.063 13.96ZM265.045 19.32C270.378 19.32 274.672 20.92 277.925 24.12C281.232 27.32 282.885 32.0667 282.885 38.36V63H270.405V40.28C270.405 36.8667 269.658 34.3333 268.165 32.68C266.672 30.9733 264.512 30.12 261.685 30.12C258.538 30.12 256.032 31.1067 254.165 33.08C252.298 35 251.365 37.88 251.365 41.72V63H238.885V19.96H250.805V25C252.458 23.1867 254.512 21.8 256.965 20.84C259.418 19.8267 262.112 19.32 265.045 19.32Z" fill="black"/>
                                <path d="M18.8 125.4C18.1333 126 17.3 126.467 16.3 126.8C15.3333 127.1 14.3167 127.25 13.25 127.25C10.7833 127.25 8.88333 126.583 7.55 125.25C6.21667 123.917 5.55 122.033 5.55 119.6V103.7H0.85V100.7H5.55V94.95H9.1V100.7H17.1V103.7H9.1V119.4C9.1 120.967 9.48333 122.167 10.25 123C11.05 123.8 12.1833 124.2 13.65 124.2C14.3833 124.2 15.0833 124.083 15.75 123.85C16.45 123.617 17.05 123.283 17.55 122.85L18.8 125.4ZM35.0848 127.25C32.5514 127.25 30.2681 126.683 28.2348 125.55C26.2014 124.383 24.6014 122.783 23.4348 120.75C22.2681 118.717 21.6848 116.417 21.6848 113.85C21.6848 111.283 22.2681 108.983 23.4348 106.95C24.6014 104.917 26.2014 103.333 28.2348 102.2C30.2681 101.067 32.5514 100.5 35.0848 100.5C37.6181 100.5 39.9014 101.067 41.9348 102.2C43.9681 103.333 45.5514 104.917 46.6848 106.95C47.8514 108.983 48.4348 111.283 48.4348 113.85C48.4348 116.417 47.8514 118.717 46.6848 120.75C45.5514 122.783 43.9681 124.383 41.9348 125.55C39.9014 126.683 37.6181 127.25 35.0848 127.25ZM35.0848 124.1C36.9514 124.1 38.6181 123.683 40.0848 122.85C41.5848 121.983 42.7514 120.767 43.5848 119.2C44.4181 117.633 44.8348 115.85 44.8348 113.85C44.8348 111.85 44.4181 110.067 43.5848 108.5C42.7514 106.933 41.5848 105.733 40.0848 104.9C38.6181 104.033 36.9514 103.6 35.0848 103.6C33.2181 103.6 31.5348 104.033 30.0348 104.9C28.5681 105.733 27.4014 106.933 26.5348 108.5C25.7014 110.067 25.2848 111.85 25.2848 113.85C25.2848 115.85 25.7014 117.633 26.5348 119.2C27.4014 120.767 28.5681 121.983 30.0348 122.85C31.5348 123.683 33.2181 124.1 35.0848 124.1ZM77.9684 100.5C81.4017 100.5 84.035 101.367 85.8684 103.1C87.7017 104.8 88.6184 107.333 88.6184 110.7V127H85.2184V122.9C84.4184 124.267 83.235 125.333 81.6684 126.1C80.135 126.867 78.3017 127.25 76.1684 127.25C73.235 127.25 70.9017 126.55 69.1684 125.15C67.435 123.75 66.5684 121.9 66.5684 119.6C66.5684 117.367 67.3684 115.567 68.9684 114.2C70.6017 112.833 73.185 112.15 76.7184 112.15H85.0684V110.55C85.0684 108.283 84.435 106.567 83.1684 105.4C81.9017 104.2 80.0517 103.6 77.6184 103.6C75.9517 103.6 74.3517 103.883 72.8184 104.45C71.285 104.983 69.9684 105.733 68.8684 106.7L67.2684 104.05C68.6017 102.917 70.2017 102.05 72.0684 101.45C73.935 100.817 75.9017 100.5 77.9684 100.5ZM76.7184 124.45C78.7184 124.45 80.435 124 81.8684 123.1C83.3017 122.167 84.3684 120.833 85.0684 119.1V114.8H76.8184C72.3184 114.8 70.0684 116.367 70.0684 119.5C70.0684 121.033 70.6517 122.25 71.8184 123.15C72.985 124.017 74.6184 124.45 76.7184 124.45ZM109.258 127.25C106.658 127.25 104.325 126.683 102.258 125.55C100.225 124.417 98.6249 122.833 97.4582 120.8C96.2915 118.733 95.7082 116.417 95.7082 113.85C95.7082 111.283 96.2915 108.983 97.4582 106.95C98.6249 104.917 100.225 103.333 102.258 102.2C104.325 101.067 106.658 100.5 109.258 100.5C111.525 100.5 113.542 100.95 115.308 101.85C117.108 102.717 118.525 104 119.558 105.7L116.908 107.5C116.042 106.2 114.942 105.233 113.608 104.6C112.275 103.933 110.825 103.6 109.258 103.6C107.358 103.6 105.642 104.033 104.108 104.9C102.608 105.733 101.425 106.933 100.558 108.5C99.7249 110.067 99.3082 111.85 99.3082 113.85C99.3082 115.883 99.7249 117.683 100.558 119.25C101.425 120.783 102.608 121.983 104.108 122.85C105.642 123.683 107.358 124.1 109.258 124.1C110.825 124.1 112.275 123.783 113.608 123.15C114.942 122.517 116.042 121.55 116.908 120.25L119.558 122.05C118.525 123.75 117.108 125.05 115.308 125.95C113.508 126.817 111.492 127.25 109.258 127.25ZM136.993 127.25C134.393 127.25 132.059 126.683 129.993 125.55C127.959 124.417 126.359 122.833 125.193 120.8C124.026 118.733 123.443 116.417 123.443 113.85C123.443 111.283 124.026 108.983 125.193 106.95C126.359 104.917 127.959 103.333 129.993 102.2C132.059 101.067 134.393 100.5 136.993 100.5C139.259 100.5 141.276 100.95 143.043 101.85C144.843 102.717 146.259 104 147.293 105.7L144.643 107.5C143.776 106.2 142.676 105.233 141.343 104.6C140.009 103.933 138.559 103.6 136.993 103.6C135.093 103.6 133.376 104.033 131.843 104.9C130.343 105.733 129.159 106.933 128.293 108.5C127.459 110.067 127.043 111.85 127.043 113.85C127.043 115.883 127.459 117.683 128.293 119.25C129.159 120.783 130.343 121.983 131.843 122.85C133.376 123.683 135.093 124.1 136.993 124.1C138.559 124.1 140.009 123.783 141.343 123.15C142.676 122.517 143.776 121.55 144.643 120.25L147.293 122.05C146.259 123.75 144.843 125.05 143.043 125.95C141.243 126.817 139.226 127.25 136.993 127.25ZM176.727 114.95H154.727C154.927 117.683 155.977 119.9 157.877 121.6C159.777 123.267 162.177 124.1 165.077 124.1C166.71 124.1 168.21 123.817 169.577 123.25C170.944 122.65 172.127 121.783 173.127 120.65L175.127 122.95C173.96 124.35 172.494 125.417 170.727 126.15C168.994 126.883 167.077 127.25 164.977 127.25C162.277 127.25 159.877 126.683 157.777 125.55C155.71 124.383 154.094 122.783 152.927 120.75C151.76 118.717 151.177 116.417 151.177 113.85C151.177 111.283 151.727 108.983 152.827 106.95C153.96 104.917 155.494 103.333 157.427 102.2C159.394 101.067 161.594 100.5 164.027 100.5C166.46 100.5 168.644 101.067 170.577 102.2C172.51 103.333 174.027 104.917 175.127 106.95C176.227 108.95 176.777 111.25 176.777 113.85L176.727 114.95ZM164.027 103.55C161.494 103.55 159.36 104.367 157.627 106C155.927 107.6 154.96 109.7 154.727 112.3H173.377C173.144 109.7 172.16 107.6 170.427 106C168.727 104.367 166.594 103.55 164.027 103.55ZM191.053 127.25C188.919 127.25 186.869 126.95 184.903 126.35C182.969 125.717 181.453 124.933 180.353 124L181.953 121.2C183.053 122.067 184.436 122.783 186.103 123.35C187.769 123.883 189.503 124.15 191.303 124.15C193.703 124.15 195.469 123.783 196.603 123.05C197.769 122.283 198.353 121.217 198.353 119.85C198.353 118.883 198.036 118.133 197.403 117.6C196.769 117.033 195.969 116.617 195.003 116.35C194.036 116.05 192.753 115.767 191.153 115.5C189.019 115.1 187.303 114.7 186.003 114.3C184.703 113.867 183.586 113.15 182.653 112.15C181.753 111.15 181.303 109.767 181.303 108C181.303 105.8 182.219 104 184.053 102.6C185.886 101.2 188.436 100.5 191.703 100.5C193.403 100.5 195.103 100.733 196.803 101.2C198.503 101.633 199.903 102.217 201.003 102.95L199.453 105.8C197.286 104.3 194.703 103.55 191.703 103.55C189.436 103.55 187.719 103.95 186.553 104.75C185.419 105.55 184.853 106.6 184.853 107.9C184.853 108.9 185.169 109.7 185.803 110.3C186.469 110.9 187.286 111.35 188.253 111.65C189.219 111.917 190.553 112.2 192.253 112.5C194.353 112.9 196.036 113.3 197.303 113.7C198.569 114.1 199.653 114.783 200.553 115.75C201.453 116.717 201.903 118.05 201.903 119.75C201.903 122.05 200.936 123.883 199.003 125.25C197.103 126.583 194.453 127.25 191.053 127.25ZM215.516 127.25C213.382 127.25 211.332 126.95 209.366 126.35C207.432 125.717 205.916 124.933 204.816 124L206.416 121.2C207.516 122.067 208.899 122.783 210.566 123.35C212.232 123.883 213.966 124.15 215.766 124.15C218.166 124.15 219.932 123.783 221.066 123.05C222.232 122.283 222.816 121.217 222.816 119.85C222.816 118.883 222.499 118.133 221.866 117.6C221.232 117.033 220.432 116.617 219.466 116.35C218.499 116.05 217.216 115.767 215.616 115.5C213.482 115.1 211.766 114.7 210.466 114.3C209.166 113.867 208.049 113.15 207.116 112.15C206.216 111.15 205.766 109.767 205.766 108C205.766 105.8 206.682 104 208.516 102.6C210.349 101.2 212.899 100.5 216.166 100.5C217.866 100.5 219.566 100.733 221.266 101.2C222.966 101.633 224.366 102.217 225.466 102.95L223.916 105.8C221.749 104.3 219.166 103.55 216.166 103.55C213.899 103.55 212.182 103.95 211.016 104.75C209.882 105.55 209.316 106.6 209.316 107.9C209.316 108.9 209.632 109.7 210.266 110.3C210.932 110.9 211.749 111.35 212.716 111.65C213.682 111.917 215.016 112.2 216.716 112.5C218.816 112.9 220.499 113.3 221.766 113.7C223.032 114.1 224.116 114.783 225.016 115.75C225.916 116.717 226.366 118.05 226.366 119.75C226.366 122.05 225.399 123.883 223.466 125.25C221.566 126.583 218.916 127.25 215.516 127.25ZM268.114 100.7L254.964 130.15C253.898 132.617 252.664 134.367 251.264 135.4C249.864 136.433 248.181 136.95 246.214 136.95C244.948 136.95 243.764 136.75 242.664 136.35C241.564 135.95 240.614 135.35 239.814 134.55L241.464 131.9C242.798 133.233 244.398 133.9 246.264 133.9C247.464 133.9 248.481 133.567 249.314 132.9C250.181 132.233 250.981 131.1 251.714 129.5L252.864 126.95L241.114 100.7H244.814L254.714 123.05L264.614 100.7H268.114ZM283.132 127.25C280.598 127.25 278.315 126.683 276.282 125.55C274.248 124.383 272.648 122.783 271.482 120.75C270.315 118.717 269.732 116.417 269.732 113.85C269.732 111.283 270.315 108.983 271.482 106.95C272.648 104.917 274.248 103.333 276.282 102.2C278.315 101.067 280.598 100.5 283.132 100.5C285.665 100.5 287.948 101.067 289.982 102.2C292.015 103.333 293.598 104.917 294.732 106.95C295.898 108.983 296.482 111.283 296.482 113.85C296.482 116.417 295.898 118.717 294.732 120.75C293.598 122.783 292.015 124.383 289.982 125.55C287.948 126.683 285.665 127.25 283.132 127.25ZM283.132 124.1C284.998 124.1 286.665 123.683 288.132 122.85C289.632 121.983 290.798 120.767 291.632 119.2C292.465 117.633 292.882 115.85 292.882 113.85C292.882 111.85 292.465 110.067 291.632 108.5C290.798 106.933 289.632 105.733 288.132 104.9C286.665 104.033 284.998 103.6 283.132 103.6C281.265 103.6 279.582 104.033 278.082 104.9C276.615 105.733 275.448 106.933 274.582 108.5C273.748 110.067 273.332 111.85 273.332 113.85C273.332 115.85 273.748 117.633 274.582 119.2C275.448 120.767 276.615 121.983 278.082 122.85C279.582 123.683 281.265 124.1 283.132 124.1ZM327.429 100.7V127H324.029V122.2C323.096 123.8 321.813 125.05 320.179 125.95C318.546 126.817 316.679 127.25 314.579 127.25C311.146 127.25 308.429 126.3 306.429 124.4C304.463 122.467 303.479 119.65 303.479 115.95V100.7H307.029V115.6C307.029 118.367 307.713 120.467 309.079 121.9C310.446 123.333 312.396 124.05 314.929 124.05C317.696 124.05 319.879 123.217 321.479 121.55C323.079 119.85 323.879 117.5 323.879 114.5V100.7H327.429ZM340.772 105.85C341.605 104.083 342.839 102.75 344.472 101.85C346.139 100.95 348.189 100.5 350.622 100.5V103.95L349.772 103.9C347.005 103.9 344.839 104.75 343.272 106.45C341.705 108.15 340.922 110.533 340.922 113.6V127H337.372V100.7H340.772V105.85ZM370.526 89.9H374.076V127H370.526V89.9ZM383.954 100.7H387.504V127H383.954V100.7ZM385.754 94.95C385.021 94.95 384.404 94.7 383.904 94.2C383.404 93.7 383.154 93.1 383.154 92.4C383.154 91.7333 383.404 91.15 383.904 90.65C384.404 90.15 385.021 89.9 385.754 89.9C386.487 89.9 387.104 90.15 387.604 90.65C388.104 91.1167 388.354 91.6833 388.354 92.35C388.354 93.0833 388.104 93.7 387.604 94.2C387.104 94.7 386.487 94.95 385.754 94.95ZM404.432 127.25C402.298 127.25 400.248 126.95 398.282 126.35C396.348 125.717 394.832 124.933 393.732 124L395.332 121.2C396.432 122.067 397.815 122.783 399.482 123.35C401.148 123.883 402.882 124.15 404.682 124.15C407.082 124.15 408.848 123.783 409.982 123.05C411.148 122.283 411.732 121.217 411.732 119.85C411.732 118.883 411.415 118.133 410.782 117.6C410.148 117.033 409.348 116.617 408.382 116.35C407.415 116.05 406.132 115.767 404.532 115.5C402.398 115.1 400.682 114.7 399.382 114.3C398.082 113.867 396.965 113.15 396.032 112.15C395.132 111.15 394.682 109.767 394.682 108C394.682 105.8 395.598 104 397.432 102.6C399.265 101.2 401.815 100.5 405.082 100.5C406.782 100.5 408.482 100.733 410.182 101.2C411.882 101.633 413.282 102.217 414.382 102.95L412.832 105.8C410.665 104.3 408.082 103.55 405.082 103.55C402.815 103.55 401.098 103.95 399.932 104.75C398.798 105.55 398.232 106.6 398.232 107.9C398.232 108.9 398.548 109.7 399.182 110.3C399.848 110.9 400.665 111.35 401.632 111.65C402.598 111.917 403.932 112.2 405.632 112.5C407.732 112.9 409.415 113.3 410.682 113.7C411.948 114.1 413.032 114.783 413.932 115.75C414.832 116.717 415.282 118.05 415.282 119.75C415.282 122.05 414.315 123.883 412.382 125.25C410.482 126.583 407.832 127.25 404.432 127.25ZM435.695 125.4C435.028 126 434.195 126.467 433.195 126.8C432.228 127.1 431.211 127.25 430.145 127.25C427.678 127.25 425.778 126.583 424.445 125.25C423.111 123.917 422.445 122.033 422.445 119.6V103.7H417.745V100.7H422.445V94.95H425.995V100.7H433.995V103.7H425.995V119.4C425.995 120.967 426.378 122.167 427.145 123C427.945 123.8 429.078 124.2 430.545 124.2C431.278 124.2 431.978 124.083 432.645 123.85C433.345 123.617 433.945 123.283 434.445 122.85L435.695 125.4Z" fill="#4AC959"/>
                            </svg>

                            
                        </div>
                            
                        <div className={styles.inputsLoginForm}>
                            <div className={styles.formInputs}>
                                <div>User:</div>
                                <input id="doLoginUser" type="text" />
                                
                            </div>

                            <div className={styles.formInputs}>
                                <div>Password:</div>
                                <input id="doLoginPassword"  type="password" />
                            </div>

                            <div onClick={doLogin} id="login" className={styles.loginFormButton}>
                                <div >Sign in</div>
                                
                            </div>

                            <div onClick={registerAccountFormToggleVisible}  className={styles.loginFormButton}>
                                <div id="registerAccount">Register your account</div>
                                
                            </div>

                            

                        </div>
                
                    
                    </div>                   

                </div>

            </div>


            <div id="registerAccountFormBackground"  className={styles.loginFormBackground}>


                <div className={styles.loginForm}>

                    <div id="closeLoginForm" className={styles.closeLoginForm} >
                        <span onClick={registerAccountFormToggleHidden}>Close</span>
                    </div>

                    
                    <div>

                                                    
                        <div className={styles.inputsLoginForm}>
                            <div className={styles.formInputs}>
                                <div  >User:</div>
                                <input id="registerUser" type="text" />
                                
                            </div>

                            <div  className={styles.formInputs}>
                                <div>Nome:</div>
                                <input id="registerName" type="text" />
                                
                            </div>

                            <div  className={styles.formInputs}>
                                <div>Email:</div>
                                <input id="registerEmail" type="text" />
                                
                            </div>

                            <div className={styles.formInputs}>
                                <div>Password:</div>
                                <input id="registerPassword" type="password" />
                            </div>
                            

                            <div  className={styles.loginFormButton}>
                                <div onClick={registerAccount} id="registerAccount">Register your account</div>
                                
                            </div>

                        </div>
                
                    
                    </div>
                    
                        
                        
                    
                        

                        

                </div>

            </div>
             

        </>
    );
}