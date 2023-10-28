import React, { Component } from 'react'

export default class MathPuzzle extends Component {
    render() {
        return (
            <div className='container container-fluid'>
                <h3 className='display-4 fw-bold mt-5'>Math Puzzle</h3>
                <hr />

                <div>
                    <h5 className='fw-light mt-5'>
                        Q1. Binary Conversion - Convert a binary number to decimal:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle : Convert "1101" to decimal.
                    </h5>
                    <div className="form">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q2. Complex Algebra: Solve for x in a complex algebraic equation:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Solve for x in the equation: 2x^2 - 5x + 3 = 0.</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q3. Prime Factorization: Find the prime factors of a large number:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Find the prime factors of 168.</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q4. Calculus Challenge: Calculate the derivative of a complex function:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Find the derivative of f(x) = 3x^4 - 6x^3 + 2x^2 - 8x + 1.</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q5. Number Base Conversion: Convert a number from one base to another.
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Convert the number "101011" from binary to its decimal equivalent.</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>



            </div>
        )
    }
}
