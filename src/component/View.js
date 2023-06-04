import React, { useState } from 'react'
import '../component/css/view.css'
import { useSelector,useDispatch } from 'react-redux'
import ViewDetails from './ViewDetails'
import NavBar from './NavBar'
import { removeHabbit,removeAllHabbit } from '../redux/HabbitSlice'
import { useNavigate } from 'react-router-dom'


const View = () => {
    const dispatch=useDispatch();
    const nevigate=useNavigate();
    const[total,setTotal]=useState(0);
    const[flag,setFlag]=useState(false);
    
    const deleteHabbits=(id)=>{
        
        const object=Habbits.at(id);
        console.log(object)

        dispatch(removeHabbit(id));
       if(object.done===true)
       {
         
         setTotal((total)-1);
       }

    }
    const clearAll=()=>{
        dispatch(removeAllHabbit());
        setTotal(0);

    }
    const edit=(id)=>{
        nevigate('/create');
        deleteHabbits(id);
        

    }
    let count=0;

    

    

    
    const Habbits=useSelector((state)=>state.habbits.habbits)


    
  return (
    
    
   <>
   <NavBar total={total}/>
   <button className='deleteAll' onClick={clearAll}>Delete All</button>

     <div className='view-template'>
        
            
        
        {
           Habbits && Habbits.map((ele,idx)=>{
                let name=ele.name;
                let date=ele.date;
                let done=ele.done;
                let notDone=ele.notDone;
                let none= ele.none
                 count=count+ele.Progress;
                
                
                    
            
                return <>
                    
                    {
                        flag===true?<ViewDetails 
                    key={idx}
                    name={name}
                    date={date}
                    done={done}
                    notDone={notDone}
                    none={none}
                    id={idx}
                     
                    deleteHabbits={deleteHabbits}
                    edit={edit}
    
                    
                    />  :<>{
                        setFlag(true)
                        
                    }
                    {
                        setTotal(count)
                    }
                    <NavBar total={total}/>
                    </>                 
                    
                    
                    }
                
            
                
            
            
                </>
            })
    
        }
        
        </div>
                


   </>
        
    
  )
  
}

export default View