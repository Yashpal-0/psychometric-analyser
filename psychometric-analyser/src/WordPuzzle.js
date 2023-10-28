import React, { Component } from 'react'

export default class WordPuzzle extends Component {
    render() {
        return (
            <div className='container container-fluid'>
                <h3 className='display-4 fw-bold mt-5'>Word Puzzle</h3>
                <hr />

                <div>
                    <h5 className='fw-light mt-5 '>Q1. Word Scramble: Unscramble the letters to find a common English word:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: "SERAILPS"</h5>
                    <div className="form">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q2. Crossword Clue: Solve a crossword clue to find the missing word:
                        <br />
                        &emsp;&ensp;&nbsp;Clue: "A persuasive speech or message that promotes a product."</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q3. Word Association: Connect two seemingly unrelated words with a third word that forms a logical phrase with both:
                        <br />
                        &emsp;&ensp;&nbsp;Words: "Bread" and "Basket"</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q4. Anagram Challenge: Rearrange the letters to find a word related to sales:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: "MURACE"</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>


                <div>
                    <h5 className='fw-light mt-5'>Q5. Word Ladder: Change one word into another, one letter at a time, with each step forming a valid English word.                    <br />
                        &emsp;&ensp;&nbsp;Find the word that connects "SELL" to "DEAL."</h5>
                    <div className="form mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" style={{ "resize": "None" }}></textarea>
                    </div>
                </div>



            </div>
        )
    }
}
