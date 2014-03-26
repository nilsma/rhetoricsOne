<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style/main.css">
    <script src="js/main.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
<div id="wrapper">
    <header>
        <div id="header_center">
            <img id="logo" src="images/election2014.png"/>
            <div id="hseparator">
                <h1>Tom Steyer</h1>
                <section id="social_networks">
                    <img id="facebook" src="images/facebook_gray.png"/>
                    <img id="twitter" src="images/twitter_alt_gray.png"/>
                    <img id="linkedin" src="images/linkedin_gray.png"/>
                    <img id="google" src="images/google_gray.png"/>
                </section>
            </div>
            <nav>
                <ul>
                    <li id="home" class="selected">Home</li>
                    <li id="campaign">Campaign</li>
                    <li id="contact">Contact</li>
                    <li id="about">About</li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div id="main_center">
            <div id="left_container">
                <img id="profile_pic" src="images/steyerheadshot.jpeg"/>
            </div>
            <article id="text">
                <h2>One hundred million reasons to support a good cause</h2>
                <p>In a joint effort to protect the world's beautiful and precious environment for the good of all
                    of mankind, we would like to invite you to support us by signing up for our email list.
                    <a href="#" id="showDetails" onclick="showDetails()">Learn more ...</a>
                    <a href="#" id="hideDetails" onclick="hideDetails()">Hide details ...</a>
                </p>
                <p><span class="hidden">To get us underway, I have pledged to give $50 million to make the environment a top-tier political
                issue when our proud nation enter the 2014 electoral voting and proceedings. The other $50 million
                is to be donated by other contributors, yet to be found. To attract more contributors to our good cause, I
                will need your support and help!</span></p>
                <p><span class="hidden">By signing up you will demonstrate good will towards the environment and the people of the future,
                you will also help us all by stating that you support our cause, and thereby making us more attractive
                for other contributors.</span></p>
                <p><span class="hidden">We would be thankful if you could find the time to sign up for our email list, and the men, women and
                children of the future will thank you as well!</span></p>
            </article>
            <section id="showcase">
                <div id="img_wrapper">
                    <img id="first" src="images/props/1b.jpeg">
                    <img id="second" src="images/props/2b.jpeg">
                    <div id="top_overlay">
                        <h3 id="top">Help me save ...</h3>
                    </div>
                    <div id="bottom_overlay">
                        <h3 id="bottom">... the beauty of the world!</h3>
                        <h4 id="punch">Lend a hand!</h4>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <footer>
        <div id="footer_center">
            <section id="footer_about">
                <h5>About</h5>
                <p>Tom Steyer</p>
                <p>Steyer Inc.</p>
                <p>VAT no.</p>
                <p>913 120 925</p>
            </section>
            <section id="footer_contact">
                <h5>Contact</h5>
                <p>Steyer Corporation</p>
                <p>6213 Marble Ave.</p>
                <p>NYA-523, Maryland</p>
                <p>United States</p>
            </section>
        </div>
        <h6><span id="copyright">Copyright &copy; 2014</span></h6>
        <h6><span id="author">Nils Martinussen</span></h6>
    </footer>
</div>
</body>
</html>
