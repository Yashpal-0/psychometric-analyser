import React, { Component } from 'react';

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
                        &emsp;&ensp;&nbsp;Puzzle: Convert "1101" to decimal.
                    </h5>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault1" id="flexRadioDefault1_1" />
                        <label className="form-check-label" for="flexRadioDefault1_1">5</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault1" id="flexRadioDefault1_2" />
                        <label className="form-check-label" for="flexRadioDefault1_2">7</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault1" id="flexRadioDefault1_3" />
                        <label className="form-check-label" for="flexRadioDefault1_3">9</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault1" id="flexRadioDefault1_4" />
                        <label className="form-check-label" for="flexRadioDefault1_4">13</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>
                        Q2. Complex Algebra: Solve for x in a complex algebraic equation:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Solve for x in the equation: 2x^2 - 5x + 3 = 0.
                    </h5>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault2" id="flexRadioDefault2_1" />
                        <label className="form-check-label" for="flexRadioDefault2_1">x=2 or x=1.5</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault2" id="flexRadioDefault2_2" />
                        <label className="form-check-label" for="flexRadioDefault2_2">x=1 or x=1.5</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault2" id="flexRadioDefault2_3" />
                        <label className="form-check-label" for="flexRadioDefault2_3">x=3 or x=0.5</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault2" id="flexRadioDefault2_4" />
                        <label className="form-check-label" for="flexRadioDefault2_4">x=0 or x=1</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>
                        Q3. Prime Factorization: Find the prime factors of a large number:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Find the prime factors of 168.
                    </h5>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault3" id="flexRadioDefault3_1" />
                        <label className="form-check-label" for="flexRadioDefault3_1">2, 2, 2, 3, 7</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault3" id="flexRadioDefault3_2" />
                        <label className="form-check-label" for="flexRadioDefault3_2">2, 2, 2, 2, 7</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault3" id="flexRadioDefault3_3" />
                        <label className="form-check-label" for="flexRadioDefault3_3">2, 3, 5, 7</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault3" id="flexRadioDefault3_4" />
                        <label className="form-check-label" for="flexRadioDefault3_4">3, 3, 3, 7</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>
                        Q4. Calculus Challenge: Calculate the derivative of a complex function:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Find the derivative of f(x) = 3x^4 - 6x^3 + 2x^2 - 8x + 1.
                    </h5>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault4" id="flexRadioDefault4_1" />
                        <label className="form-check-label" for="flexRadioDefault4_1">f'(x) = 12x^3 - 18x^2 + 4x</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault4" id="flexRadioDefault4_2" />
                        <label className="form-check-label" for="flexRadioDefault4_2">f'(x) = 12x^3 - 18x^2 + 4x - 8</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault4" id="flexRadioDefault4_3" />
                        <label className="form-check-label" for="flexRadioDefault4_3">f'(x) = 12x^3 - 18x^2 + 2x - 8</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault4" id="flexRadioDefault4_4" />
                        <label className="form-check-label" for="flexRadioDefault4_4">f'(x) = 12x^4 - 18x^3 + 2x^2 - 8x</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>
                        Q5. Number Base Conversion: Convert a number from one base to another.
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: Convert the number "101011" from binary to its decimal equivalent.
                    </h5>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault5" id="flexRadioDefault5_1" />
                        <label className="form-check-label" for="flexRadioDefault5_1">15</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault5" id="flexRadioDefault5_2" />
                        <label className="form-check-label" for="flexRadioDefault5_2">23</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault5" id="flexRadioDefault5_3" />
                        <label className="form-check-label" for="flexRadioDefault5_3">43</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="flexRadioDefault5" id="flexRadioDefault5_4" />
                        <label className="form-check-label" for="flexRadioDefault5_4">51</label>
                    </div>
                </div>
            </div>
        );
    }
}
