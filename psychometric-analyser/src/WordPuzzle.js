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
            </div>
        );
    }
}
