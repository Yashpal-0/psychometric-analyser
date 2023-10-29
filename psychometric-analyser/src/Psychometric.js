import React, { Component, useState, PureComponent } from 'react'

export default function Psychometric() {

    const [questions, setQuestions] = useState({
        'Q1': "", "Q2": "", "Q3": "", "Q4": "", "Q5": ""
    })

    const [questions_model_output, setQuestionsModelOutput] = useState()

    const handleQuestionChange = (e) => {
        setQuestions({
            ...questions,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(questions)

        var url = "http://127.0.0.1:5000/about_classification";
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questions),
        }).then(res => res.json()).then(data => setQuestionsModelOutput(data)).catch(err => console.log(err));
    }

    return (

        <div className='container container-fluid'>
            <h3 className='display-4 fw-bold mt-5'>Psychometric Tests</h3>
            <hr />

            <form method="POST" onSubmit={handleSubmit}>

                <div>
                    <h5 className='fw-light mt-5'>Q1. In social situations, do you typically take the lead in initiating conversations or prefer to be approached by others?</h5>
                    <div className="form">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }} onChange={handleQuestionChange} value={questions['Q1']} name='Q1'></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q2. How do you typically respond to rejection or failure in your work? Are you more likely to persist, adapt, and find alternative solutions, or do you tend to reevaluate your strategy and adjust your approach as needed?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }} onChange={handleQuestionChange} value={questions['Q2']} name='Q2'></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q3. How do you stay inspired, organized, and creative in your work, even when faced with tight deadlines?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }} onChange={handleQuestionChange} value={questions['Q3']} name='Q3'></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q4. How did you present a proposal or idea to a group? How did you ensure it was well-received?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }} onChange={handleQuestionChange} value={questions['Q4']} name='Q4'></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q5. How would you work with a cross-functional team to deliver a project or achieve a goal? How will you contribute to the team's success?</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }} onChange={handleQuestionChange} value={questions['Q5']} name='Q5'></textarea>
                    </div>
                </div>


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


                <h3 className='display-4 fw-bold mt-5'>Word Puzzle</h3>
                <hr />

                <div>
                    <h5 className='fw-light mt-5 '>Q1. Word Scramble: Unscramble the letters to find a common English word:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: "SERAILPS"</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_1">AIRLESS</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_2">PARISLES</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_3">PASSILER</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_4">SLIPARES</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q2. Crossword Clue: Solve a crossword clue to find the missing word:
                        <br />
                        &emsp;&ensp;&nbsp;Clue: "A persuasive speech or message that promotes a product."</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_1">Salesman</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_2">Promotion</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_3">Advertisement</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_4">Sales Pitch</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q3. Word Association: Connect two seemingly unrelated words with a third word that forms a logical phrase with both:
                        <br />
                        &emsp;&ensp;&nbsp;Words: "Bread" and "Basket"</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_1">Bread Market</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_2">Bread Case</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_3">Bread Winner</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_4">Bread Basket</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q4. Anagram Challenge: Rearrange the letters to find a word related to sales:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: "MURACE"</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_1">CRUMEA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_2">CAREUM</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_3">RACEMU</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_4">MARCEU</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q5. Word Ladder: Change one word into another, one letter at a time, with each step forming a valid English word.
                        <br />
                        &emsp;&ensp;&nbsp;Change the word "SELL" into "DEAL" one letter at a time, forming valid English words. What is the connecting word?</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_1">TALL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_2">SEAL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_3">TEAM</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_4">DEAL</label>
                    </div>
                </div>


                <button className='btn btn-primary btn-lg my-4'>Submit</button>
            </form>

        </div>
    )
}
