import Activity from "./Activity";

interface Hold{
    selectedActivity : Activity | null,
    finished : boolean | null,
    holded: boolean
    right_postion: boolean
}

export const initialHold : Hold = {
    selectedActivity : null,
    finished : null,
    holded : false,
    right_postion: false
}

export default Hold