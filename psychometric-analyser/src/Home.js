import React, { PureComponent, useState } from 'react'
import home2 from './home2.gif'

export default function Home() {

    const [formData, setFormData] = useState({ linkedin: '', twitter: '' });
    const [finalData, setFinalData] = useState({});
    const [response, setResponse] = useState({});

    const handleChangeLinkedIn = (e) => {
        setFormData({ ...formData, linkedin: e.target.value });
    };

    const handleChangeTwitter = (e) => {
        setFormData({ ...formData, twitter: e.target.value });
    };

    var isUrlValid = (e) => {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(e);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        if (isUrlValid(formData.linkedin) && isUrlValid(formData.twitter)) {
            // console.log("Valid link");
            //send data to backend
            var url = "http://127.0.0.1:5000/get_linkedin_about";
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            }).then(res => res.json()).then(data => setResponse(data)).catch(err => console.log(err));
        }
        else {
            console.log()
            console.log("Invalid link");
        }



    };


    return (
        <div className='container container-fluid mb-5'>
            <h3 className='display-3 fw-bold mt-5'>Talent Insight Accelerator</h3>
            <hr />

            <h3 className='display-4 my-4'>Welcome to the Talent Insight Accelerator</h3>

            <h4 className='my-3'>Unlock the Power of Personality Analysis</h4>

            <p>At the Talent Insight Accelerator, we believe in the potential of every individual. We're here to revolutionize the way you find and nurture talent, making your hiring decisions more informed, efficient, and effective.</p>

            <div className='text-center my-5'>
                <img className='rounded-5 shadow-4' src={home2} style={{ "width": "50%", "height": "400px" }}></img>
            </div>

            <h2 className='my-4'>What We Offer</h2>
            <p className="row">
                <p className='col-md'><img src='https://www.training.com.au/wp-content/uploads/TR_BigFive_Feature.png' style={{ "width": "70%", "borderRadius": "10px" }}></img></p>

                <p className='col-md fs-5' style={{"font-family": "'Inter', sans-serif"}}><b>Deep Personality Insights</b>: Explore the dimensions of personality and behavior with precision, thanks to cutting-edge psychometric analysis. Uncover the intricacies of an individual's character, from their emotional intelligence to their leadership potential, with in-depth psychometric analysis, providing valuable insights for hiring, team-building, and personal development.</p>
            </p>

            <p className="row my-5">
                <p className='col-md fs-5' style={{"font-family": "'Inter', sans-serif"}}><b>Social Media Compatibility</b>: Gauge a candidate's alignment with your company culture through insightful social media analysis. Leverage social media analysis to gain a holistic understanding of a candidate's online presence, helping you ensure a seamless cultural fit within your organization, fostering a harmonious and productive work environment.</p>
                <p className='col-md'><img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/99871876.jpg?auto=format&q=60&fit=max&w=930' style={{ "width": "70%", "borderRadius": "10px" }}></img></p>
            </p>

            <p className="row my-5">
                <p className='col-md'><img src='https://lovepaper.org/wp-content/uploads/2023/01/benefits-of-puzzles-1024x604.jpeg' style={{ "width": "70%", "borderRadius": "10px" }}></img></p>
                <p className='col-md fs-5' style={{"font-family": "'Inter', sans-serif"}}><b>Challenging Puzzles</b>: Identify problem-solving abilities and adaptability through thought-provoking puzzles. Assess candidates' agility in overcoming complex challenges and their ability to pivot strategies in dynamic environments, ultimately helping you identify individuals with the problem-solving prowess your team needs.</p>
            </p>
            <p className="row">
                <p className='col-md fs-5' style={{"font-family": "'Inter', sans-serif"}}><b>Data-Driven Decisions</b>:  Powered by the latest in machine learning, our platform provides you with data-driven insights that will change the way. Harness the potential of cutting-edge machine learning to revolutionize decision-making, offering actionable insights derived from data analysis, empowering you to make more informed and impactful choices across diverse domains.</p>
                <p className='col-md'><img src='https://www.midas-pr.com/wp-content/uploads/2022/02/data-driven-PR-strategy.png' style={{ "width": "70%", "borderRadius": "10px" }}></img></p>
            </p>

            <center>

                <div className='mt-5' style={{ "backgroundColor": "lavender", "width": "50%", "borderRadius": "10px" }}>
                    <br></br>
                    <center><h2>Try it for yourself</h2></center>
                    <br></br>

                    <form method="POST" onSubmit={handleSubmit}>
                        <div className='col'>

                            <div className='row-3' style={{ "width": "60%" }}>
                                <input type="url" id="typeURL" className="form-control" placeholder='LinkedIn profile link' name="linkedin" onChange={handleChangeLinkedIn} value={formData.linkedin} />
                            </div>
                            <br></br>
                            <div className='row-3' style={{ "width": "60%" }}>
                                <input type="url" id="typeURL" className="form-control" placeholder='Twitter profile link' name="twitter" onChange={handleChangeTwitter} value={formData.twitter} />
                            </div>

                        </div>

                        <center><button className='btn btn-dark btn-rounded mt-3' type="submit">Check</button></center>
                        <br></br>
                    </form>


                </div>
            </center>

            <div className='my-5 rounded-4' style={{ "backgroundColor": "#FFEBEE" }}>
                <p className='p-3 fs-5'>
                    We appreciate your interest in our company. After careful consideration, we've determined that your values and work style may not align with our company culture. <br />
                    We wish you the best in your job search and future endeavors. 😕😕😕
                </p>

            </div>

        </div>
    )

    // return (
    //     <div className='container container-fluid mb-5'>
    //         <h3 className='display-3 fw-bold mt-5'>Talent Insight Accelerator</h3>
    //         <hr />

    //         <h3 className='display-4 my-4'>Welcome to the Talent Insight Accelerator</h3>

    //         <h4 className='my-3'>Unlock the Power of Personality Analysis</h4>

    //         <p>At the Talent Insight Accelerator, we believe in the potential of every individual. We're here to revolutionize the way you find and nurture talent, making your hiring decisions more informed, efficient, and effective.</p>

    //         <div className='text-center my-5'>
    //             <img className='rounded-5 shadow-4' src={home2} style={{ "width": "50%", "height": "400px" }}></img>
    //         </div>

    //         <p>
    //             What We Offer:
    //             <ul>
    //                 <li>🧠 Deep Personality Insights: Explore the dimensions of personality and behavior with precision, thanks to cutting-edge psychometric analysis.</li>

    //                 <li>🔍 Social Media Compatibility: Gauge a candidate's alignment with your company culture through insightful social media analysis.</li>

    //                 <li>🧩 Challenging Puzzles: Identify problem-solving abilities and adaptability through thought-provoking puzzles.</li>

    //                 <li>📊 Data-Driven Decisions: Powered by the latest in machine learning, our platform provides you with data-driven insights that will change the way you recruit.</li>
    //             </ul>
    //         </p>


    //         <div className='mt-5'>
    //             <h2>Try it for yourself</h2>

    //             <form method="POST" onSubmit={handleSubmit}>
    //                 <div className='row'>

    //                     <div className='col-6'>
    //                         <input type="url" id="typeURL" className="form-control" placeholder='LinkedIn profile link' name="linkedin" onChange={handleChangeLinkedIn} value={formData.linkedin} />
    //                     </div>

    //                     <div className='col-6'>
    //                         <input type="url" id="typeURL" className="form-control" placeholder='Twitter profile link' name="twitter" onChange={handleChangeTwitter} value={formData.twitter} />
    //                     </div>

    //                 </div>

    //                 <button className='btn btn-primary btn-rounded mt-3' type="submit">Check</button>
    //             </form>


    //         </div>
    //     </div>
    // )
}

