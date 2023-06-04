import React from 'react'
import './css/create.css'
import { useState } from 'react'
 import {useDispatch} from 'react-redux'
import { addHabbit } from '../redux/HabbitSlice'
import {  useNavigate } from 'react-router-dom'




const Create = () => {
  const dispatch=useDispatch();
  const nevigate=useNavigate();
  
    const [Habbit,setHabbit]=useState({
      name:'',
      date:'',
      done:false,
      notDone:false,
      none:false,
      Progress:0

    });
      
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addHabbit(Habbit))
      nevigate('/view')
      
       

    }
   
    
    const handleChanges=(e)=>{
      setHabbit({...Habbit,[e.target.name]:[e.target.value]})
    
    }
    const[count,setCount]=useState(0);
    const[checked,setChecked]=useState(false);
    const handleRadioChanges=(e,id)=>{
      
      let ele = document.getElementsByName('ma');
      for(let i=0;i<ele.length;i++)
      {
        
        if(e.target.value==='done')
        {
          setCount((count)+1);
          setChecked(true);
          setHabbit({...Habbit,...Habbit.Progress=count+1,...Habbit.done=true})
        }
        else if(e.target.value==='notDone')
        {
          setChecked(true);
          setHabbit({...Habbit,...Habbit.notDone=true})
        }
        else if(e.target.value==='none')
        {
          setChecked(true);
          setHabbit({...Habbit,...Habbit.none=true})
        }
      }
      
    }   


  return (
    <div className='create-habbit'>
        <div className='habbit-input'>
           <form onSubmit={handleSubmit}>
             <label className='header'>Enter your habbit</label><br/>
            <input type='text' placeholder='enter routine' name='name' className='habbit' onChange={handleChanges}/><br/>
            <label className='date-select'>select date</label><br/><input type='date' placeholder='enter planning date' className='date' name='date' onChange={handleChanges}/><br/>
            <label className='marker'>mark the days if routine done</label><br/>
        <input type='radio' value='done' name='ma' checked={checked} onChange={handleRadioChanges}/><label className='done'>done</label> &nbsp;<input type='radio' value='notDone' name='ma' onChange={handleRadioChanges} checked={checked}/><label className='not-done'>not done</label> &nbsp;
        <input type='radio' value='none' name='ma' checked={checked} onChange={handleRadioChanges}/><label className='none'>none</label><br/>
            <button className='btn'>Submit</button>
           </form>
           
        </div>
    </div>
  )
}

export default Create