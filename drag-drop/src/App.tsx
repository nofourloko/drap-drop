import { Container, Row, Col} from "react-bootstrap"
import FormCompontent from "./formCompontent"
import ActivitySection from "./ActivitySections/activitySection"
import { useEffect, useState } from "react"
import Hold, {initialHold} from "./Models/activityToggle"
import { useAppDispatch,  } from "./redux/store/store"
import { changeActivityStatus } from "./redux/features/activitySlice"


function App() {
  const [hold, setHold] = useState<Hold>(initialHold)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const mouseUpHandler = () => {
      if(hold.right_postion){
        dispatch(changeActivityStatus(hold.selectedActivity!))
      }

      setHold(initialHold)
    }
    if(hold.holded){
      window.addEventListener('mouseup', mouseUpHandler);
      return () => {
          window.removeEventListener('mouseup', mouseUpHandler);
      }
    }
    
  })

  function pauseEvent(e: Event) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT';
            if (!isInput) {
                pauseEvent(e);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Allow normal behavior for input, textarea, and select elements
            const target = e.target as HTMLElement;
            const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT';
            if (!isInput) {
                pauseEvent(e);
            }
        };

        // Add event listeners to document
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <FormCompontent />
        </Col>
        <Col lg={9}>
          <ActivitySection finished={false} hold = {hold} setHold = {setHold}/>
          <ActivitySection finished={true} hold = {hold} setHold = {setHold} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
