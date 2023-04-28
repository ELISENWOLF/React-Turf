import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from '../assests/dummyData/data'

import '../styles/booknow.css'
import TurfList from './UI/TurfList'

const BookNow = () => {

  const [cityVal, setCityVal] = useState()
  const [details, setDetails] = useState(undefined)
  const town = useRef()

  const handelSubmit = (e) => {
    e.preventDefault();
    setCityVal(town.current.value.toLowerCase())

    if (cityVal === "kochi") {
      const filterValue = data.filter((item) => item.city === "kochi")
      setDetails(filterValue)



    }
    if (cityVal === "kannur") {
      const filterValue = data.filter((item) => item.city === "kannur")
      setDetails(filterValue)

    }
    if (cityVal === "idukki") {
      const filterValue = data.filter((item) => item.city === "idukki")
      setDetails(filterValue)

    }
    if (cityVal === "trivandrum") {
      const filterValue = data.filter((item) => item.city === "trivandrum")
      setDetails(filterValue)

    }
  };

  return (
    <section className='booknow' id='booknow'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={4}>
            <h6>Search Turf Here</h6>
            <form onSubmit={handelSubmit}>
              <Row>
                <Col sm={12} className='px-1'>
                  <input type="text" name="text" ref={town} placeholder='City' required />
                </Col>
                <Col Col xxl={6} xl={12} sm={12} className='px-1 contact-btn'>
                  <button type="submit">search</button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col xs={12} md={6} xl={8}>
            {
              details !== undefined ? <TurfList data={details} /> : (
                <div className='info-container'>
                  <h6>There's is no turf in this region.</h6>
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BookNow