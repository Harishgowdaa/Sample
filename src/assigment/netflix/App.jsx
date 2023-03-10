import React from 'react';
import Net from "./Net.css"

const App = () => {
    return (
        <>
            <nav id='main'>
                <img id='netimg' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
                <div id='next'>
                    <select id='size'>
                        <option>English</option>
                        <option>Kannada</option>
                        <option>Hindi</option>
                    </select>
                    <button id='btn'>Sign in</button>
                </div>
            </nav>

            <div id='midcontent'>
            <h1>Unlimited movies, TV shows <br/> and more.</h1>
            <h1>Watch anywhere. Cancel anytime.</h1>
            Ready to watch? Enter your email to create or restart your membership. <br /> <br />
            <input id='em' type="text" placeholder='Email address' />
            <button id='gs'>Get Started</button>
            </div>
        </>
    )
}
export default App;
