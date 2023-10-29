import React, { PureComponent , useState } from 'react'
import home2 from './home2.gif'

export default function Home() {

    const [formData, setFormData] = useState({ linkedin : '', twitter : '' });
    const [finalData, setFinalData] = useState({});
    const [response, setResponse] = useState({});

  const handleChangeLinkedIn = async (e) => {
    setFormData({ ...formData, linkedin: e.target.value });
  };

    const handleChangeTwitter = async (e) => {
     setFormData({ ...formData, twitter: e.target.value });
    };

    // var isUrlValid = (e) => {
    //     return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(e);
    // }
    const handleChange= async (e)

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleChangeTwitter()
    setFinalData(formData);
    
    if(isUrlValid(finalData.linkedin) && isUrlValid(formData.twitter)){
        // console.log("Valid link");
        //send data to backend
        var url = "http://127.0.0.1:5000/";
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalData),
        }).then(res =>  res.json()).then(data => setResponse(data)).catch(err => console.log(err))    ;
    }
    else{
        console.log(finalData)
        console.log("Invalid link");
    }
    //if form data is validd
    //send data to backend
    //else
    //show error message

    
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

                <p>
                    What We Offer:
                    <ul>
                        <li>🧠 Deep Personality Insights: Explore the dimensions of personality and behavior with precision, thanks to cutting-edge psychometric analysis.</li>

                        <li>🔍 Social Media Compatibility: Gauge a candidate's alignment with your company culture through insightful social media analysis.</li>

                        <li>🧩 Challenging Puzzles: Identify problem-solving abilities and adaptability through thought-provoking puzzles.</li>

                        <li>📊 Data-Driven Decisions: Powered by the latest in machine learning, our platform provides you with data-driven insights that will change the way you recruit.</li>
                    </ul>
                </p>


                <div className='mt-5'>
                    <h2>Try it for yourself</h2>

                    <form method="POST" onSubmit={handleSubmit}>
                        <div className='row'>

                            <div className='col-6'>
                                <input type="url" id="typeURL" className="form-control" placeholder='LinkedIn profile link' name="linkedin" onChange={handleChangeLinkedIn}/>
                            </div>

                            <div className='col-6'>
                                <input type="url" id="typeURL" className="form-control" placeholder='Twitter profile link' name = "twitter" onChange={handleChangeTwitter}/>
                            </div>

                        </div>

                        <button className='btn btn-primary btn-rounded mt-3' type="submit">Check</button>
                    </form>


                </div>
            </div>
        )
    }

