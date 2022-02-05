import './HomePage.css'

function HomePage() {
    return (
        <>
            <div id="div1">
                <h1 class="header">Anthony (Tony) Rafael Alas</h1>
            </div>

            <div class="picture">
                <img src="/images/portrait.png" class="portrait" alt="" />
            </div>

            <div id="div2alt">
                <h1>Connections</h1>
                <hr></hr>
                <a href="https://www.linkedin.com/in/tony-alas/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.png" class="connection_pic" alt="" /></a>
                <a href="https://github.com/tonyalas" target="_blank" rel="noopener noreferrer"><img src="/images/github.png" class="connection_pic_github" alt="" /></a>
                <a href="/images/alas_resume.pdf" target="_blank" rel="noopener noreferrer"><img src="/images/resume.png" class="connection_pic_resume" alt="" /></a>
                <a href="mailto:alas11@uwindsor.ca"><img src="/images/email.png" class="connection_pic_email" alt="" /></a>
                <hr></hr>
                <h1>Past Studies</h1>
                <hr></hr>
                <br></br>
                <img src="/images/uwinlogo.png" class="uwinlogo" alt="" />
                <div id="text_div">
                    <h3>University of Windsor Alum </h3>
                    <h3>BScH Computer Science w/ Software Engineering Specialization</h3>
                    <h4>Graduated June 2021 with 88% Major Average.</h4>
                </div>
                <br></br>
                <hr></hr>
                <h1>My Projects</h1>
                <hr></hr>
                <br></br>
                <a href="https://www.wertigo.ca" target="_blank" rel="noopener noreferrer"><img src="/images/WertigoCircle2.jpg" class="AIC_button" alt="" /></a>
                <div>
                    <p>Wertigo's mission is to provide new or existing, small to medium-sized, local businesses a chance to be discovered.<br></br> We believe the first thought on your mind when trying to find a place to eat, shop, or have fun, should be to check local. </p>
                </div>
                <br></br>
                <a href="https://am-i-cancelled.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src="/images/AIC_button.png" class="AIC_button" alt="" /></a>
                <div id="text_div">
                    <p>Am I Cancelled? is a Twitter web app that allows the user to login to their Twitter account to search through a bank of words that may be cancel-worthy. This web app utilizes Python 3 and the Flask framework.</p>
                </div>
                <br></br>
                <a href="https://react-tictactoe-fun.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src="/images/tic-tac-toe.png" class="ttt_button" alt="" /></a>
                <div id="text_div">
                    <p>React TicTacToe is a simple take on a classic game made using the React framework with Javascript.</p>
                </div>
                <br></br>
            </div>
        </>
    )
}

export default HomePage;