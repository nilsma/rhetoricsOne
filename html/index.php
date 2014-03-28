<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style/main.css">
    <link href='http://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'>
    <script src="js/main.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
<div id="wrapper">
    <header>
        <div id="header_center">
            <div id="hseparator">
                <!--                <h1>Tom Steyer</h1> -->
                <h1>NextGen Climate Action</h1>
            </div>
            <nav>
                <ul>
                    <li id="home" class="selected">Home</li>
                    <li id="campaign">Campaign</li>
                    <li id="contact">Contact</li>
                    <li id="about">About</li>
                </ul>
            </nav>
            <img id="logo" src="images/election2014.png"/>
        </div>
    </header>
    <main>
        <div id="main_center">
            <section id="showcase">
                <div id="img_wrapper">
                    <img id="first" src="images/props/1a.jpeg">
                    <img id="second" src="images/props/1b.jpeg">
                    <div id="top_overlay">
                        <h3 id="top">Help me save ...</h3>
                    </div>
                    <div id="bottom_overlay">
                        <h3 id="bottom">... the colors of the world!</h3>
                        <h4 id="punch">Lend a hand!</h4>
                    </div>
                </div>
            </section>
            <article id="text">
                <h2>One hundred million reasons to help out!</h2>
                <p>Some say everything is just fine and that we should just keep going, while others say that we
                    already have one foot in the grave. I think that there is a middle-way where we can have both
                    a prosperous community and a future world for our children!
                </p>
                <p>To get us underway, I have pledged to give $50 million to make the environment a top-
                    tier political issue when our proud nation enter the 2014 electoral voting and proceedings. The
                    other $50 million is to be donated by other contributors, yet to be found. To attract more
                    contributors to our good cause, I will need your support and help!
                    <span id="showDetails" onclick="showDetails()">Learn More ...</span>
                </p>
                <p class="hidden">By signing up you will demonstrate good will towards the environment and the people of
                    the future, you will also help us all by stating that you support our cause, and thereby making us
                    more attractive for other contributors.</p>
                <p class="hidden">We would be thankful if you could find the time to sign up for our email list, and the
                    men, women and children of the future will thank you as well!
                    <span id="hideDetails" onclick="hideDetails()">Hide details ...</span></p>
            </article>
            <div id="sep"></div>
            <aside id="right-container">
                <h3>Tom Steyer</h3>
                <img id="profile_pic" src="images/steyerheadshot.jpeg"/>
                <p>Founding member of NextGen Climate Action, is also a long-term successful business
                    man, serves on the Board of Trustees at Stanford University, and has signed the Giving Pledge - a pledge
                    to donate half his fortune - along with Bill Gates and Warren Buffet.</p>
                <p>Suffice to say that ambition and
                    success will be an integral part of his new environment project NGCA as well.</p>
                <p></p>
            </aside>
        </div>
    </main>
    <footer>
        <div id="footer_center">
            <div id="footer_left">
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
            <div id="footer_right">
                <section id="social_networks">
                    <img id="facebook" src="images/facebook_gray.png"/>
                    <img id="twitter" src="images/twitter_alt_gray.png"/>
                    <img id="linkedin" src="images/linkedin_gray.png"/>
                    <img id="google" src="images/google_gray.png"/>
                </section>
            </div>
        </div>
        <h6><span id="copyright">Copyright &copy; 2014</span></h6>
        <h6><span id="author">Nils Martinussen</span></h6>
    </footer>
</div>
</body>
</html>
