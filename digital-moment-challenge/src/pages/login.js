import React from 'react';
import { useRef, useState, useEffect} from 'react';
import {Navigate}  from 'react-router-dom';



var server = 'http://localhost:5001'
const Login = () => {

    
    const userRef = useRef(); 
    const errRef = useRef() ;
    
    const [id, setID] = useState(0);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); 

    useEffect(() => {
        userRef.current.focus() ; 
    }, []);

    useEffect(() => {
      setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault() ; 
        try {
            var currentitem = {"username " : user, "password" : pwd}
            
            fetch(server+'/Login/${currentitem["username"]}`', {           
                method: "GET" }).then(res => res.json())
                
                .then( (result) =>{
                    
                    
                    if(result["password"]===currentitem["password"] ){
                        setSuccess(true)
                        setID(result["id"])
     
                    }
                    else{
                        // to do : set error message
                    }                  

                })               
         
        } catch (err) {
            console.log(err.message)
        }
        
    }
    


  return (
      <>
        {success? (

        <Navigate to={``} replace={true} /> //to do : fill the navigate to url
        ) : (
           
                   
  
            <section>
            <br></br>
            
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                
                <form onSubmit={handleSubmit}>
                
                    <br></br>
                    <label htmlFor="email"> Username: </label><br></br>
                    <input type="text"
                    id='email'
                    ref={userRef}
                    autoComplete ='off'
                    onChange={(e) => setUser(e.target.value)}
                    value = {user}
                    required  
                    />
                    <br></br>
                    <br></br>
                    <label htmlFor="password"> Password: </label><br></br>
                    <input type="password"
                    id='password'
                    ref={userRef}
                    onChange={(e) => setPwd(e.target.value)}
                    value = {pwd}
                    required  
                    />
                    <label>
                    </label>
                    <br></br><br></br>
                    <button className='padding : 15px'>
                        Sign In
                    </button>
                        
                        <br />

                    <p>
                                Need an Account?<br />
                                <span className="line">
                                    {/*put router link here*/}
                                    <a href="/signup">Sign Up</a>
                                </span>
                    </p>
                    
                </form>
                
            
            <br />
                
            </section>
            
        )}
      
      </>
  )
}

export default Login


