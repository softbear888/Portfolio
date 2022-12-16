import Navbar from '../Navbar'
import Footer from '../Footer'
import '../Redesign.css'
import Desktop from '../images/Desktop-1.png'
import DesktopWireframe from '../images/desktop wireframe.jpg'
import IPad from '../images/iPad - 1.png'
import IPadDropdown from '../images/iPad Dropdown.png'
import IPhone from '../images/iPhone 8 - 1.png'
import IPhoneDropdown from '../images/Phone Dropdown.png'
import IPhoneWireframe from '../images/phone wireframe.png'
import IPadWireframe from '../images/tablet wireframe.png'
import ThaiDiner1 from '../images/thaidinerscreenshot.jpg'
import ThaiDiner2 from '../images/thaidinerscreenshot-2.jpg'
import ThaiDiner3 from '../images/thaidinerscreenshot-3.jpg'
import VisGuide from '../images/Visual Style Guide.jpg'
import VisGuide2 from '../images/Visual Style Guide 2.jpg'


export default function Redesign() {
  return (
    <div>
    <Navbar />
    <div class="rr">
        <h1 class="padding">Thai Diner Homepage Redesign</h1>
    </div>
        <h2 class="padding">Introduction</h2>
          <div class="pink-blue fill-in-top padding"><p>Creating a responsive redesign of an existing webpage.</p></div>
          <div class="pink-blue fill-in-bottom">
          <p>&emsp;&emsp;&emsp;The prominence of digital communication has led to the creation of countless electronic devices. The devices themselves come in countless sizes, and a proper design must account for all of its users' needs. Where does a designer even start? One can think of these needs in terms of three metrics: usability (e.g. efficiency), learnability, and memorability. Usability concerns how easy the interface is to use, learnability how well a new user is able to learn to use the interface, and memorablility how well a user is able to use the interface after an extended period of time.<br/><br/></p>
          <p>&emsp;&emsp;&emsp;To start, it may be helpful to consider designing specifically for three particularly common devices: desktop, tablet, and phone. Here, I examined a preexisting interface (a webpage) to determine how I could redesign it to better meet the three metrics mentioned above.</p>
          <br/>
          <div id="take-me-there"><a href="https://softbear888.github.io/Responsive-Redesign-Final/#">Take me to the redesigned site!</a></div>
        </div>

        <div class="wrapper"><h2 class="padding">The Interface</h2></div>
        <div class="pink-blue fill-in-top padding"><p>The webpage that I chose is the homepage for <a href="https://www.thaidiner.com/">Thai Diner</a>, a restaurant in New York City that blends Thai cuisine with American diner fare. Below are several screenshots of the site:</p></div>
        <div class="pink-blue fill-in-bottom">
          <img src={ThaiDiner1} class="resize-screenshot"/>
          <img src={ThaiDiner2} class="resize-screenshot"/>
          <img src={ThaiDiner3} class="resize-screenshot"/>
        <div><p id="why-might">Why might this interface be concerning? Let's consider the three metrics: usability, learnability, and memorability.</p>
        <div class="lists">
        <div class="usability">
        <h4>Usability</h4>
        <ul>
          <li>Each time I visit the page, it loads the images somewhat slowly, with some images appearing to load on top of others. This, naturally, detracts from efficiency and slows down the user’s experience.</li>
          <li>Users of the website are most likely there to 1) order food, or 2) view the menu. These functions are confined to the navbar, which is small relative to the rest of the page and collapses on smaller window sizes. It may be fruitful to display these two functions prominently on the screen, regardless of how big it is.</li>
        </ul>
        </div>
        <div class="learnability">
        <h4>Learnability</h4>
        <ul>
          <li>Visually, different elements are vying for attention. The logo for the restaurant has the biggest text, but the business hours image draws attention away because it is so bright. The background itself, by nature of being so strong, can also be distracting.</li>
          <li>As a result, there is no clear hierarchy. The vast majority of the page consists of an image gallery of the restaurant or its food, with the pictures being mostly the same size.</li>
          <li>The pictures of the food do contain captions, but the captions are difficult to notice and/or read.</li>
          <li>The address and phone number of the restaurant blend in with one another.</li>
          <li>There is no description of the restaurant, which may make it difficult to accurately determine whether one wants to eat at the restaurant.</li>
        </ul>
        </div>
        <div class="memorability">
        <h4>Memorability</h4>
        <ul>
          <li>Because the page is so saturated with images, the user may primarily remember those images as opposed to how to use the interface.</li>
        </ul>
        </div>
        </div>
        </div>
        </div>

        <div class="wrapper-2">
        <h2 class="padding">Lofi Wireframes</h2>
          <div class="pink-blue fill-in-top padding">
          <p>I set out to create three lofi wireframes, one for each display (desktop, tablet, and phone). These wireframes generally delineated the structure and elements I planned to use to build a redesigned version of the webpage.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
          <div class="wireframes">
            <h4 class="dtp">Desktop:</h4>
            <img class="wireframe" src={DesktopWireframe}/>
            <h4 class="dtp">Tablet:</h4>
            <img class="wireframe" src={IPadWireframe}/>
            <h4 class="dtp">Phone:</h4>
            <img class="wireframe" src={IPhoneWireframe}/>
          </div>
          <div class="rest-of-lofi">
          <p class="padding-top-bottom padding" id="in-addition">In addition, I used the WAVE web accessibility evaluation tool to assess where the page could be improved in terms of accessbility.</p>
          <ul class="padding-align left-align">
            <li>The most frequent alert was that images had null or empty alt text. This is a concern particularly because the page features many images, some of which have important information.</li>
            <li>The text indicating the restaurant’s business hours is contained within an image without alt text. If the image failed to load, a user would not be able to access this information.</li>
            <li>The page contains empty aria labels, which makes it more difficult for users with screen readers to navigate the page.</li>
            <li>I did disagree with WebAIM’s claim that the navbar had “very low contrast” errors. Though the background is visually quite bold, the text on top is still clearly readable.</li>
          </ul>

          <h4 class="padding-align">Further thoughts and decisions throughout the design process:</h4>
          <ul class="padding-align left-align">
            <li>Each image has an alt text description.</li>
            <li>I wanted to keep some of the eccentricity of the original design, so I used the restaurant's signature dish, the Monster, as a focal image.</li>
            <li>I shifted the idea of having an image gallery complete with captions and/or descriptions to a separate Gallery page. The images on the homepage are primarily to catch the user's interest and encourage them to continue scrolling before reaching the information section of the page.</li>
            <li>The Order Online button and Instagram icon are frequently present to reflect the popularity of takeout/delivery (especially in light of COVID) and the value of having a social media presence, respectively.</li>
          </ul>
          </div>
          </div>

        <div class="wrapper">
        <h2 class="padding">Hifi Prototypes</h2>
        </div>
        <div class="hifi">
        <div class="pink-blue fill-in-top padding">
          <p class="padding-align">Using the lofi wireframes and a visual style guide as guidance, I created a hifi prototype for each wireframe. Each prototype is annotated with the approximate HTML/CSS that I planned to use. </p>
        </div>
        <div class="pink-blue fill-in-bottom">
        <h4 id="visdev-guide">Visual Style Guide</h4>
        <div class="visdevs">
        <img class="visdev" id="visdev-1" src={VisGuide}/>
        <img class="visdev" id="visdev-2" src={VisGuide2}/>
        </div>
        <div class="prototypes">
          <h4>Desktop:</h4>
          <div class="prototype">
          <img src={Desktop}/>
          </div>
          <h4>Tablet:</h4>
          <div class="prototype">
          <img class="protoype" src={IPad}/>
          </div>
          <h4>Phone:</h4>
          <div class="prototype">
          <img src={IPhone}/>
          </div>
        </div>
        <p class="padding">Though adding functionality to the hamburger menu was out of scope for this project, proof-of-concepts appear below. The left image is for a tablet display, while the right image is for a phone display. The dropdowns would encompass the whole screen.</p>
        <div class="dropdowns">
          <img class="dropdown" id="ipad-dropdown" src={IPadDropdown}/>
          <img class="dropdown" id="iphone-dropdown" src={IPhoneDropdown}/>
        </div>
        </div>
        </div>

        <div class="wrapper-2">
         <h2 class="padding">The Redesigned Website</h2>
         </div>
         <div class="site">
         <div class="padding bottom-padding">
         <a class="padding-align" href="https://softbear888.github.io/Responsive-Redesign-Final/#" id="take-me-there-btn">Take me to the redesigned site!</a>
         </div>
         </div>
        <Footer />
        </div>
  )
}
