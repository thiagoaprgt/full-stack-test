import { useEffect } from 'react';
import styles from './post.module.css'

export function Post() {  
    
    
    let makePost = async (postDescription:any) => {

        let postsList = document.createElement('div');
        postsList.setAttribute('class', 'postsList');

        let img = document.createElement('img');
        img.setAttribute('src', '/images/mulhoerLoginForm.png');

        let description = document.createElement('p');
        description.innerHTML = postDescription;        

        postsList.appendChild(img);
        postsList.appendChild(description);


        // let previousArrow = document.querySelectorAll('previousPost')[0];

        let mainPosts = document.querySelectorAll('#mainPosts')[0];
        mainPosts.appendChild(postsList);
        

        

    }


    let previousArrow = () => {

        let previousPost:any = document.querySelectorAll('#mainPosts > div')[0];

        let centerPost:any = document.querySelectorAll('#mainPosts > div')[1];

        let nexPost:any = document.querySelectorAll('#mainPosts > div')[2];


        let posts = document.querySelectorAll('#mainPosts > div');

        for (let index = 0; index < posts.length; index++) {
            posts[index].remove();
            
        }

        let main = document.querySelectorAll("#mainPosts")[0];

        main.insertAdjacentElement('beforeend', centerPost);
        main.insertAdjacentElement('beforeend', nexPost);
        main.insertAdjacentElement('beforeend', previousPost);


       

    }


    let nextArrow = () => {

        let previousPost:any = document.querySelectorAll('#mainPosts > div')[0];

        let centerPost:any = document.querySelectorAll('#mainPosts > div')[1];

        let nexPost:any = document.querySelectorAll('#mainPosts > div')[2];


        let posts = document.querySelectorAll('#mainPosts > div');

        for (let index = 0; index < posts.length; index++) {
            posts[index].remove();
            
        }

        let main = document.querySelectorAll("#mainPosts")[0];               
        

        main.insertAdjacentElement('afterbegin', centerPost);
        main.insertAdjacentElement('afterbegin', previousPost);
        main.insertAdjacentElement('afterbegin', nexPost);



        
        
        
        


       

    }


    useEffect(() => {

        // makePost("Esse é o Primeiro post.");
        // makePost("Esse é o Segundo post.");
        // makePost("Esse é o Terceiro post.");

        /*
            O useEffect serve para usar funções só
            depois que todo o html for renderizado
        */

       
    });


    return(
        <>

            <div className={styles.post}>

                <div className={styles.previousPost} onClick={previousArrow}>
                    <img src="/images/setinha.png" alt="" />
                </div>


                <div id="mainPosts" className={styles.mainPosts} >

                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o primeiro post !!!</p>

                    </div>


                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o segundo post !!!</p>

                    </div>

                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o terceiro post !!!</p>

                    </div>
                   

                </div>

                <div className={styles.nextPost} onClick={nextArrow}>
                    <img src="/images/setinha.png" alt="" />
                </div>

                

            </div>

          

        </>
    );
}