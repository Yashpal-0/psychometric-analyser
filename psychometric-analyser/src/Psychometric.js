import React, { Component } from 'react'

export default class Psychometric extends Component {
    render() {
        return (
            <div>
            <div className='container container-fluid'>
                <h3 className='display-4 fw-bold mt-5'>Psychometric Tests</h3>
                <hr />
                
                <div>
                    <h5 className='fw-light mt-5 '>Q1. In social situations, do you typically take the lead in initiating conversations or prefer to be approached by others?</h5>
                    <div className="form">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q2. How do you typically respond to rejection or failure in your work? Are you more likely to persist, adapt, and find alternative solutions, or do you tend to reevaluate your strategy and adjust your approach as needed?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q3. How do you stay inspired, organized, and creative in your work, even when faced with tight deadlines?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q4. How did you present a proposal or idea to a group? How did you ensure it was well-received?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q5. How would you work with a cross-functional team to deliver a project or achieve a goal? How will you contribute to the team's success?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>



            </div>
        </div>
        )
    }
}
