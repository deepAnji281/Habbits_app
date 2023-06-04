import { createSlice } from "@reduxjs/toolkit";
const habbitSlice=createSlice({
    name:'habbit',
    initialState:{
        habbits:[],
    },
    reducers:{
        addHabbit(state,action){
          if(action.payload!==undefined){
             state.habbits.push(action.payload)
            
            console.log(action.payload)
          }

        },

        removeHabbit(state,action){
            state.habbits.splice(action.payload,1);

        },
        removeAllHabbit(state,action){
            while(state.habbits.length){
                state.habbits.pop();
            }

        },
        editHabbit(state,action){
            

        }
        
    }
})
export const{addHabbit,removeHabbit,removeAllHabbit}=habbitSlice.actions
export default habbitSlice.reducer;