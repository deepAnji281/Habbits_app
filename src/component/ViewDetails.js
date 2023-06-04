import React from 'react'
import delImg from '../pictures/delete.png'

import '../component/css/viewDetails.css'
import editImg from '../pictures/edit.jpg'


const ViewDetails = (props) => {
    const week_of_day_arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const done=props.done
    const none=props.none
    const notDone=props.notDone;
    const dateString=props.date;
    const id=props.id
    
     var day = week_of_day_arr[new Date(dateString).getDay()];
     
     
  return (
    
    < div className='view-details'>
    
    <div className='view-thing'>
     <h3 className='header3'>Habbit: {props.name}</h3>
     <h3 className='date'> planning date:{props.date} &nbsp; {day}</h3>
      <div className='marker'>
               {
                (done===true ?<label className='done'>done 👍</label>:<label className='done'> done 🦢</label>)
               }
               <br/>
               {
               (notDone===true?<label className='not-Done'>not-done 👍</label>:<label className='not-Done'>not-done 🦢</label>)
               

               }
               <br/>
               {
                (none===true?<label className='none'>none 👍</label>:<label className='none'>none 🦢</label>)
               

               }

               
        </div> 
        
        <div className='buttons'>
          <button  onClick={()=>props.deleteHabbits(id)}><img src={delImg} alt='delete'/></button>
          <button onClick={()=>props.edit(id)} ><img src={editImg} alt='edit' className='edit'/></button>
         
           
        </div>
    </div>
    
    </div>
  )
}

export default ViewDetails
