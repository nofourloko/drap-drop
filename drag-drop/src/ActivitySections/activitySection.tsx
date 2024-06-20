import React, { Dispatch, SetStateAction } from 'react'
import "./style.css"
import { Row, Col } from 'react-bootstrap'
import { useAppSelector } from '../redux/store/store'
import Activity from '../Models/Activity'
import Hold from '../Models/activityToggle'

type Props = {
    finished : boolean
    hold : Hold
    setHold: Dispatch<SetStateAction<Hold>>
}

export default function ActivitySection({finished, hold, setHold}: Props) {
  const activites = useAppSelector((state) => state.activites.all_activities.filter(item => item.finished === finished))
  
  const ActivitySelection = (activity : Activity) => {
    setHold({
    selectedActivity : activity,
    finished: finished,
    holded : true ,
    right_postion: false
  })}

  const ActivityToggle = () => {
    if(hold.holded && hold.selectedActivity?.finished !== finished){
      setHold({
        ...hold,
        right_postion : true
      })
    }
  }


  return (
    <Row className='mb-3'>
      <Col lg={12} > 
        <div 
          className={finished? 'finished_section_container' : 'active_section_container'} 
          onMouseEnter={() => ActivityToggle()} 
          onMouseLeave={() => setHold({
          ...hold,
          right_postion : false
        })}>
          <span>{finished ? "Finished activites" : "Active activites"}</span>
          {
            activites.map(activity => {
              return (
                <div className={finished? 'activity_finished' : 'activity_active'}  onMouseDown={() => ActivitySelection(activity)}>
                  <h3 className='text-start'>{activity.title}</h3>
                  <span>{activity.description}</span>
                  <div>
                    <span>{activity.date}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </Col>
    </Row>
  )
}