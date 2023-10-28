import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Home from './Home';
import Psychometric from './Psychometric';
import WordPuzzle from './WordPuzzle';
import MathPuzzle from './MathPuzzle';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [questions] = useState([
    {
      id: 'q1',
      text: 'Paste your linkedin profile link here',
    },
    
    // Add more questions here
  ]);
const [answers, setAnswers] = useState(Array(questions.length).fill(''));
const handleAnswerChange = (index, event) => {
  const updatedAnswers = [...answers];
  updatedAnswers[index] = event.target.value;
  setAnswers(updatedAnswers);
};

const [responses, setResponses] = useState({});
const handleResponseChange = (questionId, response) => {
  setResponses({ ...responses, [questionId]: response });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Perform your psychometric analysis on 'responses' here
  // This is where you would analyze the user's responses and provide feedback or scores.
  console.log('User Responses:', responses);
};

  return (
    <>

      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {/* <div className='p-5 text-left bg-light'>
        <h1 className='mb-0'>Psychometric Test</h1>
      </div> */}
      <MDBContainer>
      {/* <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <label>{question.text}</label>
            <br></br>
          
            <input
              type="text"
              value={responses[question.id] || ''}
              onChange={(e) => handleResponseChange(question.id, e.target.value)}
            />
        
            
          </div>
        ))}
        <button type="submit">Submit</button>
      </form> */}

      
      <Home/>
      <Psychometric/>
      <WordPuzzle/>
      <MathPuzzle/>
      </MDBContainer>

  </>
      
  );
      
}