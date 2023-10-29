import { MDBInput } from 'mdb-react-ui-kit';
import React, { Component } from 'react';

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
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_1">Option 1</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_2">Option 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_3">Option 3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1_4">Option 4</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q2. Crossword Clue: Solve a crossword clue to find the missing word:
                        <br />
                        &emsp;&ensp;&nbsp;Clue: "A persuasive speech or message that promotes a product."</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_1">Option 1</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_2">Option 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_3">Option 3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2_4">Option 4</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q3. Word Association: Connect two seemingly unrelated words with a third word that forms a logical phrase with both:
                        <br />
                        &emsp;&ensp;&nbsp;Words: "Bread" and "Basket"</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_1">Option 1</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_2">Option 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_3">Option 3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3_4">Option 4</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q4. Anagram Challenge: Rearrange the letters to find a word related to sales:
                        <br />
                        &emsp;&ensp;&nbsp;Puzzle: "MURACE"</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_1">Option 1</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_2">Option 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_3">Option 3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4_4">Option 4</label>
                    </div>
                </div>

                <div>
                    <h5 className='fw-light mt-5'>Q5. Word Ladder: Change one word into another, one letter at a time, with each step forming a valid English word.
                        <br />
                        &emsp;&ensp;&nbsp;Find the word that connects "SELL" to "DEAL."</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_1">Option 1</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_2">Option 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_3">Option 3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5_4">Option 4</label>
                    </div>
                </div>
            </div>
        );
    }
}
