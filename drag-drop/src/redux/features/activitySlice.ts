import Activity from "../../Models/Activity";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Activities {
    all_activities : Activity[] 
}

const initialState : Activities = {
    all_activities: []
}

const ActivitiesSlice = createSlice({
    name : "Activities",
    initialState ,
    reducers : {
        addActivity : (state, action : PayloadAction<Activity>) => {
            state.all_activities.push(action.payload)
        },
        changeActivityStatus : (state, action : PayloadAction<Activity>) => {
            const activity = action.payload
            const index = state.all_activities.findIndex(item => item.title === activity.title)

            if(index !== -1){
                state.all_activities[index].finished = !state.all_activities[index].finished
            }
        },
    }
})


export default ActivitiesSlice
export const {addActivity, changeActivityStatus} = ActivitiesSlice.actions