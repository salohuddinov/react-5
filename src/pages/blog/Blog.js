import React from 'react'
import "./Blog.css"

function Blog() {
    return (
        <div className='blog'>
            <div className="cros">
                <h2>Testing Engineer</h2>
                <div className="cros__bootm">
                    <div className="botm__left">
                        <h3>Job Discription</h3>
                        <p>Remote, India , 4 to 5 Years Of Experience Department: Website Design 5 Positions Available.</p>
                    </div>
                    <div className="botm__right">
                        <h3>Salary</h3>
                        <p>$30000 Pre Anum</p>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="details__left">
                    <h3>Details</h3>
                    <h3>Requirements</h3>
                    <h3>Responsibilities</h3>
                </div>
                <div className="details__right">
                    <p>Design & Create highly engaging industry-related content in both photo, gif & video format
                        Publish Posts on various social media channels
                        Promote content on social networks and monitor engagement (e.g. comments and shares)
                        Research industry-related topics
                        Editing audio and sound design on projects
                        Engage in opportunities to develop original content and concepts for web and mobile
                        Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.

                        Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels

                        Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels
                    </p>
                </div>
            </div>
            <div className="login">
                <h2>Apply Now</h2>
                <div className="noww">
                    <div className="login__left">
                        <input className='input' type="text" placeholder='first name' />
                        <input className='input' type="text" placeholder='Email id' />
                    </div>
                    <div className="login__right">
                        <input className='input' type="text" placeholder='Last name' />
                        <input className='input' type="text" placeholder='Mobile NO' />
                    </div>
                </div>
                <div class="form-group">
                    <textarea className='comment' required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
                </div>
                <button className='submit'>Submit</button>
            </div>
        </div>
    )
}

export default Blog