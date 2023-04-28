import { Col, Row } from 'react-bootstrap'
import '../../styles/booknow.css'
import { useState } from 'react'

const TurfCard = ({ item }) => {

  let [rate, setRate] = useState('')
  const [rating, setRating] = useState(5)

  const handleFilter = (e) => {
    e.preventDefault()
    const filterValue = e.target.value
    if (filterValue === "5") {
      let len = item.range
      for (let i = 0; i < len.length; i++) {
        if (item.range[i].rated === "5") {
          setRate(i)
          setRating(5)
        }
      }
    }
    if (filterValue === "4") {
      let len = item.range
      for (let i = 0; i < len.length; i++) {
        if (item.range[i].rated === "4") {
          setRate(i)
          setRating(4)
        }
      }
    }
    if (filterValue === "3") {
      let len = item.range
      for (let i = 0; i < len.length; i++) {
        if (item.range[i].rated === "3") {
          setRate(i)
          setRating(3)
        }
      }
    }
  }

  return (
    <>
      <form>
        <Row>
          <Col sm={12} className='px-1'>
            <h6>Select Provider Rating</h6>
            <select onChange={handleFilter}>
              <option>Not Selected</option>
              <option value="5">5 Star Rated</option>
              <option value="4">4 Star Rated</option>
              <option value="3">3 Star Rated</option>
            </select>
          </Col>
        </Row>
      </form>

      {
        rate === '' ? (
          <div className='info-container'>
            <h6 className='info-header'>Choose Provider Rating</h6>
          </div>
        ) : (
          <div className='info-container'>
            <h6 className='info-header'>{item.range[rate].name}</h6>
            <div className='sub-info'>
              <img src={item.range[rate].imgUrl} alt="turfimage" className='info-image' />
              <span className='info-star'>
                {[...Array(rating)].map(() => {
                  return (
                    <span className="star">&#9733;</span>
                  );
                })}
                <span className='info-rating'>Rating</span></span>
              <p className='info-description'>{item.range[rate].description}</p>
            </div>
            <div className='info-contact'>
              <h6>Contact Info</h6>
              <span>{item.range[rate].add}&nbsp;{item.range[rate].city}</span><br />
              <span>{item.range[rate].email}</span><br />
              <span>{item.range[rate].ph}</span><br />
            </div>
          </div>
        )
      }
    </>
  )
}

export default TurfCard