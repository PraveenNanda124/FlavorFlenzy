import React from 'react'
import ProfilePic from '../../assets/profilepics/Placeholder3.png'
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import Github from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedin.png'


const Kimberly = () => {
  return (
    <div>
      <Card
        style={{
          width: '18rem',
          border:'1rem solid #70BA89'
        }}
      >
          <img
            src={ProfilePic}
            alt="Profile Picture"
          />
        <CardBody>
          <CardTitle 
            style={{
              // fontFamily: 'Vibur, cursive',
            }}
            tag="h3">
            Kimberly Suares
          </CardTitle>
          <CardSubtitle
            style={{
              // fontFamily: 'Vibur, cursive',
            }}
            className="mb-2 text-muted"
            tag="h5"
          >
            Frontend Developer
          </CardSubtitle>
          <CardText 
            style={{
              // fontFamily: 'Vibur, cursive',
            }}
            className="text-white">
            Read More
          </CardText>
          <a href="https://github.com/ksuares1"><img src={Github} alt="Github" 
          className="mx-2"
          style={{
            width: '3rem'
          }} /></a>
          <a href="https://www.linkedin.com/in/kimberlysuares/"><img src={LinkedIn} alt="LinkedIn" 
          style={{
            width: '3rem'
          }} /></a>
        </CardBody>
      </Card >
    </div >
  )
}

export default Kimberly