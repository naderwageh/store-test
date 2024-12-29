import { Col, Row } from "react-bootstrap"
import storyItimes from "../Data/StoreItimes.json"
import StoryIime from "./StoryItime"

const Story = () => {
  return (
    <>
    <h1>Story</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
    {storyItimes.map((Itimes)=>(
      <Col key={Itimes.id}>
      <StoryIime {...Itimes}/>
      </Col>
    ))}
    </Row>
    </>
  )
}

export default Story
