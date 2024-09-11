import React, { useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function TopNavigation() {

  let hideContainerRef=useRef();
  let myProjectsArrowKeysRef=useRef();
  let navigate=useNavigate();

  return (
    <div className='topNavigation'>

        <div style={{textAlign:"center"}}>
        <NavLink to='/dashboard' 
        style={(obj)=>{
          console.log(obj);

          if(obj.isActive===true)
          {
            return{fontSize:"1.2rem", color:"red", textDecoration:"none"}
          }
        }}>Dashboard</NavLink>
        </div>



    <div style={{position:"relative", backgroundColor:"lightpink"}} className='myProjectMainDiv'>
      <div style={{display:"flex",alignItems:"center"}}>
              <p>My Projects</p>

            <div>
          <img src='./images/downArrow.png' alt='downKey' ref={myProjectsArrowKeysRef} style={{height:"10px", position:"absolute", right:"0px"}}
        onClick={()=>{
          if(hideContainerRef.current.style.display==="none")
            {
              hideContainerRef.current.style.display="block";
              myProjectsArrowKeysRef.current.src='./images/upArrow.png';
            }
            else 
            {
              hideContainerRef.current.style.display="none";
              myProjectsArrowKeysRef.current.src='./images/downArrow.png';
            }
          }}
          ></img>
          </div>
          </div>

        <div style={{display:"none", width:"100%", position:"absolute", textAlign:"center"}} ref={hideContainerRef}>
          <div className='hidden'><Link>Dummy Link</Link></div>
            <div className='myProjectsLinksDiv' style={{width:"100%"}}>
          <div><Link to='/interForm'>Inter Form</Link></div>
          <div><Link to='/tablesMultiples'>Tables Multiples</Link></div>
          <div><Link to='/stuDetails'>Personal Details</Link></div>
          </div>
        </div>

    </div>
        


        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <img src='./images/logoutIcon.png' alt='' style={{width:"20px",margin:"10px"}}
        onClick={()=>{
          navigate('/');
        }}
        ></img>
        <p>LogOut</p>
        </div>

    </div>


  )
}

export default TopNavigation
