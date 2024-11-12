import {NavBar} from '../components/navbar/navBar.tsx';
import {Section} from '../components/section/section.tsx';

import {ToDoList} from '../components/toDolist/toDoList.tsx';
import { Post } from '../components/post/post.tsx';
import { EmailForm } from '../components/forms/email/emailForm.tsx';
import {Footer} from '../components/footer/footer.tsx';



function Home() {

  let userLogged = async () => {

    if(sessionStorage.userId != undefined) {
      window.location.replace('http://localhost:5173/AppToDoList')
    }
    
  }

  return (
    <>

        
          
        

        <div onLoad={userLogged}>

          

          <NavBar />
          <Section />

        </div>

        <ToDoList />

        <Post />      

        <EmailForm />


      
      <Footer />
        
        
      
      

    </>
  )
}

export default Home
