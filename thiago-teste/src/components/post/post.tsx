import { useEffect} from 'react';
import styles from './post.module.css'

export function Post() {      
    
    
    let previousArrow = () => {
       
        let count:any = Number.parseInt(eval(`sessionStorage.getItem("countPost")`));
        count--;

        if(count < 0) {
            count = 2;
            
        }else if(count > 2) {
            count = 0;
            
        }

        sessionStorage.setItem("countPost", `${count}`);

        let mainPost = document.querySelectorAll('#mainPostsCenter > div')[0]
        mainPost.remove();
       

        mainPostCenter(count);

    }


    let nextArrow = () => {

        let count:any = Number.parseInt(eval(`sessionStorage.getItem("countPost")`));
        count++;

        if(count < 0) {
            count = 2;
            
        }else if(count > 2) {
            count = 0;
            
        }

        sessionStorage.setItem("countPost", `${count}`);

        let mainPost = document.querySelectorAll('#mainPostsCenter > div')[0]
        mainPost.remove();    

        mainPostCenter(count);
       

    }

    

    let mainPostCenter = async (count:any) => {

        let countPost = Number.parseInt(count)

        if(countPost > 2 || countPost < 0) {
            countPost = 0;
        }

        let main = document.querySelectorAll('#mainPostsCenter')[0]

        let posts = document.querySelectorAll(`#mainPosts${countPost}`)[0];

        let clonePost:any = posts.cloneNode(true);        

        main.insertAdjacentElement("beforeend", clonePost);

    }

    sessionStorage.setItem("countPost", "0");


    useEffect(() => {

        

        mainPostCenter(sessionStorage.getItem("countPost"));

       
    });


    return(
        <>

            <div className={styles.post}>

                <div className={styles.previousPost} onClick={previousArrow}>
                    <img src="/images/setinha.png" alt="" />
                </div>

                <div id="mainPosts0" className={styles.mainPosts} >

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

                <div id="mainPosts1"  className={styles.mainPosts} >

                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o Post 4 !!!</p>

                    </div>


                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o Post 5 !!!</p>

                    </div>

                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o Post 6 !!!</p>

                    </div>
                   

                </div>                


                <div id="mainPosts2" className={styles.mainPosts} >

                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o Post 7 !!!</p>

                    </div>


                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o Post 8 !!!</p>

                    </div>

                    <div className={styles.postsList}>

                        <img src="/images/mulhoerLoginForm.png" alt="" />

                        <p>Esse é o Post 9 !!!</p>

                    </div>
                   

                </div>


                <div>
                        <div className={styles.backgroundPost}></div>
                        <div id="mainPostsCenter" className={styles.mainPostsCenter} > </div>
                </div>

                
                



                

                

                <div className={styles.nextPost} onClick={nextArrow}>
                    <img src="/images/setinha.png" alt="" />
                </div>

                

            </div>

          

        </>
    );
}