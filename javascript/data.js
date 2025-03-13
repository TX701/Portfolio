export const homeHTML = (num) => {
    return `<div class="home" id="home${num}">
                <div class="topbar" id="home${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/home.png" alt="Broken Image" />
                    <h1>Home</h1>
                </div>
                <div class="right">
                    <img id="home${num}-exit" src="./assets/icons/close-icon.png" alt="" />
                </div>
                </div>

                <div class="home-content">
                <h1>StrachanDev</h1>
                <div class="information">
                    <div class="menu">
                    <div class="contents"><p>Contents</p></div>
                    <div class="menu-item" id="home${num}-item"><p class="home-menu${num}">>> Home</p></div>
                    <div class="menu-item" id="home${num}-item"><p class="icons-menu${num}">Icons</p></div>
                    <div class="menu-item" id="home${num}-item"><p class="windows-menu${num}">Windows</p></div>
                    </div>
                    <div class="menu-text" id="menu${num}-text">
                    <p>Welcome.</p>
                    <p>Please click the icons on the desktop to explore around.</p>
                    <p>You can click on the menu to the left to learn more about each icon.</p>
                    </div>
                </div>
                </div>
                <div class="home-footer">
                    <div class="icon"></div>
                    <p>Show this screen each time the website starts</p>
                </div>
            </div>`;
}

    export const homeText = `<p>Welcome.</p>
                            <p>Please click the icons on the desktop to explore around.</p>
                            <p>You can click on the menu to the left to learn more about each icon.</p>`;

    export const iconsText = `<p>Each icon will open a different window.</p>
                            <p>You will need to double click on an icon to open a new window.</p>
                            <p>You may open multiple of the same window.</p>`;

    export const windowsText = `<p>Windows work how you would expect.</p>
                                <p>Open, close, and move them as you would like.</p>
                                <p>Most windows will also have functions to minimize to the tray or expand to be bigger, these functions will be in the top left of a window.</p>`;

export const portfolioHTML = (num) => {
    return `<div class="portfolio" id="portfolio${num}">
                <div class="topbar" id="portfolio${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/portfolio.png" alt="Broken Image" />
                    <h1>Portfolio</h1>
                </div>
                    <div class="right">
                    <img class="tray" id="portfolio${num}-tray" src="./assets/icons/tray-icon.png" alt=""/>
                    <img class="max" id="portfolio${num}-max" src="./assets/icons/max-icon.png" alt="" />
                    <img class="min" id="portfolio${num}-min" src="./assets/icons/restoredown-icon.png" alt="" />
                    <img id="portfolio${num}-exit" src="./assets/icons/close-icon.png" alt=""/>
                </div>
                </div>
                
                <div class="options-bar">
                    <div class="options-bar-divider"></div>
                    <div class="options-bar-elements">
                    <p><span>F</span>ile</p>
                    <p><span>E</span>dit</p>
                    <p><span>V</span>iew</p>
                    <p><span>G</span>o</p>
                    <p>F<span>a</span>vorites</p>
                    <p><span>T</span>ools</p>
                    <p><span>H</span>elp</p>
                    </div>
                    <div class="options-bar-divider"></div>
                    <div class="search-bar">
                    <h1>A<span>d</span>dress</h1>
                    <div class="bar">
                        <div class="bar-wrapper"> 
                        <img src="./assets/icons/portfolio.png" alt="">
                        <p>https://www.strachandev.com/portfolio</p>
                        </div>
                        <button><img src="./assets/icons/arrow-down.png" alt=""></button>
                    </div>
                    <h1>Go</h1>
                    <h1>Links</h1>
                    </div>
                </div>

                <div class="works">
                    <div class="example-work passionfruit">
                        <div class="left">
                            <h1>Passion Fruit</h1>
                            <img src="./assets/portfolio/passionfruit.png" draggable="false" alt="">

                            <div class="work-links">
                            <a href="https://tx701.github.io/PassionFruit/" target="_blank"><button>Website</button></a>
                            <a href="https://github.com/TX701/PassionFruit" target="_blank"><button>Repository</button></a>   
                            </div>
                        </div>
                        <div class="right">
                            <p>The website you are currently viewing is an alternative version of Passion Fruit, the one linked here (on the left) is an example of a possible art portfolio version.</p>
                            <p>Passion Fruit is a website that is presented like Windows 98. To view a different page the user will click on the icons on the desktop. These icons will open up Windows; Windows can be moved, maximized, minimized, or placed into the tray within the taskbar. The taskbar dynamically keeps track of the open Windows, a Window in the tray can be opened by clicking it in the taskbar. The taskbar can also be used to bring a Window to the top (highest z-index level) of the screen.</p>
                            <p>This is the most complex website I have made. Allowing the user to open as many Windows as they would like lead to complications in keeping track of those Windows and all of their functions. There was also some trouble with getting the Windows to move around correctly.</p>
                            <p>This is a project that is still in progress. I would consider this project complete once I have implemented the following:</p>
                            <div class="list">
                                <p>☐ Moveable Desktop icons</p>
                                <p>☐ Window resizing</p>
                                <p>☐ A working recycle bin</p>
                                <p>☐ More accurate UI overall</p>
                            </div>
                        </div>
                    </div>

                    <div class="example-work minesweeper">
                    <div class="left">
                        <h1>Minesweeper</h1>
                        <p>I had wanted to make games for Passion Fruit if I had the time. After a friend mentioned wanting to see minesweeper, I started working on it right away. I was interested in what I could do without researching how minesweeper is typically programmed.</p>
                        <p>Determining the values of each square seemed daunting, but it wasn't hard in practice. Each bomb is placed onto the grid randomly (a faux 2D array is used to keep track of details about this grid). The location of each bomb is kept in a seperate array array. After each bomb is placed, a loop goes through the bomb array passing each bomb's location into a function. This function gets all tiles within a one tile radius of the bomb (taking account for if the tile was on an edge) and adds one to the value of each tile surrounding the bomb.</p>
                        <p>This process works great as it accounts for tiles that touch multiple bombs easily. Using the bombs to determine values is also helpful as going tile by tile would have been much less efficient.</p>
                        <div class="work-links">
                        <a href="https://tx701.github.io/MS/" target="_blank"><button>Website</button></a>
                        <a href="https://github.com/TX701/MS" target="_blank"><button>Repository</button></a>
                        </div>
                    </div>
                    <div class="right">
                        <img src="./assets/portfolio/minesweeper.png" draggable="false" alt="">
                    </div>
                    </div>

                    <div class="example-work scraper">
                    <h1>Backloggd Scraper</h1>
                    <p>Due to some websites I wanted to make, I focused on making scrapers for a little bit. This scraper works with the website "Backloggd", a site thats anologous to "Letterboxd".</p>
                    <p>At the moment, this only exists as a repository, but it is fully functional.</p>
                    <p>The repository README has detailed information on how to run this code and a couple points on how it works. This program ruins in a code editing environment. The user is prompted to type a username into the editor's console, if that username exists on Backloggd, then that user's played games (among some other information) will be scraped and returned as a text file.</p>
                    <a href="https://github.com/TX701/Backloggd_Scraper" target="_blank"><button>Repository</button></a>
                    </div>
                </div>
            </div>`;
}

export const aboutHTML = (num) => {
    return `<div class="about" id="about${num}">
                <div class="topbar" id="about${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/about.png" alt="Broken Image" />
                    <h1>About</h1>
                </div>
                <div class="right">
                    <img class="tray" id="about${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                    <img class="max" id="about${num}-max" src="./assets/icons/max-icon.png" alt="" />
                    <img class="min" id="about${num}-min" src="./assets/icons/restoredown-icon.png" alt="" />
                    <img id="about${num}-exit" src="./assets/icons/close-icon.png" alt="" />
                </div>
                </div>

                <div class="options-bar">
                    <div class="options-bar-divider"></div>
                    <div class="options-bar-elements">
                    <p><span>F</span>ile</p>
                    <p><span>E</span>dit</p>
                    <p><span>V</span>iew</p>
                    <p><span>G</span>o</p>
                    <p>F<span>a</span>vorites</p>
                    <p><span>T</span>ools</p>
                    <p><span>H</span>elp</p>
                    </div>
                    <div class="options-bar-divider"></div>
                    <div class="search-bar">
                    <h1>A<span>d</span>dress</h1>
                    <div class="bar">
                        <div class="bar-wrapper"> 
                        <img src="./assets//iconsportfolio.png" alt="">
                        <p>https://www.strachandev.com/about</p>
                        </div>
                        <button><img src="./assets/icons/arrow-down.png" alt=""></button>
                    </div>
                    <h1>Go</h1>
                    <h1>Links</h1>
                    </div>
                </div>

                <div class="about-container">
                <div class="about-wrapper">
                    <h1>Rory Strachan</h1>
                    <p>I have always enjoyed creative endeavors. I largely focused my time on more standard forms of art growing up, In high school I realized that programming was another tool that could vastly increase the kinds of things I could create. Paintings are nice, and I still do like them, but I really enjoy being able to make things people can play with more directly.</p>
                    <p>I decided to major in computer science to further my studies in programming. I have also had a love of computers, technology, and logic most of my life, so I was interested in the more scientific and fundamental aspects of the major as well. After becoming infatuated with discrete mathematics, due to a course I had to take for my major, I picked up an applied mathematics minor.</p>
                    <p>In high school I learned Java and JavaScript; in college I refined my knowledge with these languages and also learned a bit of C. In my spare time I have been learning Python.</p>
                    <p>As of now my portfolio is largely JavaScript; this is just a byproduct of the classes I have been taking and my appreciation for how easy websites are to share. I would like to expand my portfolio to have more “standard” software soon.</p>
                    
                    <div class="contact">
                    <h2>Contact: </h2>
                    <a href="mailto:strachana0104@gmail.com">strachana0104@gmail.com</a>
                    <p>(248) 413-7462</p>
                    <a class="icon" href="https://github.com/TX701" target="_blank" draggable="false"><i class="bx bxl-github"></i></a>
                    <a class="icon" href="https://www.linkedin.com/in/rory-strachan-a56216356/" target="_blank" draggable="false"><i class="bx bxl-linkedin-square" ></i></a>
                    </div>
                </div>
                <img src="./assets/profile.png" alt="" draggable="false"/>
                </div>
            </div>`;
}

export const resumeHTML = (num) => {
    return `<div class="resume" id="resume${num}">
                <div class="topbar" id="resume${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/resume.png" alt="Broken Image" />
                    <h1>Resume</h1>
                </div>
                <div class="right">
                    <img class="tray" id="resume${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                    <img class="max" id="resume${num}-max" src="./assets/icons/max-icon.png" alt="" />
                    <img class="min" id="resume${num}-min" src="./assets/icons/restoredown-icon.png" alt=""/>
                    <img id="resume${num}-exit" src="./assets/icons/close-icon.png" alt=""/>
                </div>
                </div>
                <div class=resume-container>
                    <img src="./assets/STRACHAN_RESUME.png" alt="Broken Image" draggable="false">
                </div>
                <div class="resume-footer">
                <h2>STRACHAN_RESUME.pdf</h2>
                <a href="./assets/STRACHAN_RESUME.pdf" download><button>Download</button></a>
                </div>
            </div>`;
}
