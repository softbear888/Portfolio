import Navbar from '../Navbar'
import Footer from '../Footer'
import '../IterativeDesign.css'
import Cart from '../images/iterative-design/Cart.jpg'
import Checkout from '../images/iterative-design/Checkout.jpg'
import Demo from '../images/iterative-design/Demo.mp4'
import EileenSketch from '../images/iterative-design/Eileen_sketch.png'
import GraceSketches2 from '../images/iterative-design/Grace-Sketches-2.jpg'
import GraceSketches from '../images/iterative-design/Grace-Sketches.jpg'
import Home from '../images/iterative-design/Home.jpg'
import Inspiration2 from '../images/iterative-design/Inspiration-2.jpg'
import Inspiration from '../images/iterative-design/Inspiration.jpg'
import ItemPageUpdated from '../images/iterative-design/Item_Page_Updated.png'
import KatherineSketches1 from '../images/iterative-design/Katherine-Sketches-1.png'
import KatherineSketches2 from '../images/iterative-design/Katherine-Sketches-2.png'
import KatherineSketches3 from '../images/iterative-design/Katherine-Sketches-3.png'
import OrderConfirmation from '../images/iterative-design/Order-Confirmation.jpg'
import ReturnConfirmation from '../images/iterative-design/Return-Confirmation.jpg'
import Return from '../images/iterative-design/Return.jpg'
import ShippingConfirmationPage from '../images/iterative-design/ShippingCOnfirmationPage.png'
import ShoppingPage from '../images/iterative-design/ShoppingPage.png'
import StyleGuide from '../images/iterative-design/Style-Guide.jpg'
import TommySketch1 from '../images/iterative-design/TOMMY-SKETCH-1.jpg'
import TommySketch2 from '../images/iterative-design/TOMMY-SKETCH-2.jpg'
import TommySketch3 from '../images/iterative-design/TOMMY-SKETCH-3.jpg'
import UserTesting1 from '../images/iterative-design/UserTesting-4336832A.mp4'
import UserTesting2 from '../images/iterative-design/UserTesting-4336832B.mp4'
import UserTesting3 from '../images/iterative-design/UserTesting-4336832C.mp4'

export default function IterativeDesign() {
  return (
    <div>
    <Navbar />
    <div>
        <h1 class="padding">Ole Startup Prototype</h1>
    </div>
        <h2 class="padding">Introduction</h2>
          <div class="pink-blue fill-in-top padding"><p>A group project exploring iteration and user testing.</p></div>
          <div class="pink-blue fill-in-bottom">
          <p>&emsp;&emsp;&emsp;The process of creating a satisfactory design is often a complex one. At a high level, designers create sketches, lofi wireframes, hifi prototypes, and at last a final product. Laid out this way, the process doesn’t seem so bad. But with each version comes multiple rounds - iterations - of work. Changes both big and small are fueled by feedback from the design team itself and outside users. It is this iteration that is core to design, driving it toward a product that is well-tested, well-designed, and well-received. In this project, my group and I sought to familiarize ourselves with iterative design by creating an interactive mockup based on an active startup idea.<br/><br/></p>
          <p>&emsp;&emsp;&emsp;Ole is a shopping service that allows users to order online without worrying about whether clothes will fit or look good on them. Users input their zip code and view clothing items from various stores in the area. Thus, the clothes are not limited by brand or store. A personal shopper picks up the items and delivers them at a time that is determined by the user at checkout. While the driver waits, the user can try on each clothing item and select which ones to return or keep. The items they wish to return are given back to the driver, who completes the return process on the user’s behalf.<br/><br/></p>
          <p>&emsp;&emsp;&emsp;Because of the delivery-based nature of the service, we decided to design for a desktop view. We imagine that most users will be on their computers when in the comfort of their own homes (or generally indoors), and thus would access Ole through those devices.</p>
        </div>

        <div class="wrapper"><h2 class="padding">Sketching & Wireframing</h2></div>
        <div class="pink-blue fill-in-top padding"><p>We began the process by creating quick sketches of the core pages. The goal here was to explore a breadth of ideas and consider what core functionality would be helpful to users.</p></div>
        <div class="pink-blue fill-in-bottom">

          <h3 class="center">Set #1:</h3><br/><p class="center"><u>Left:</u> Sketches showing concepts for core pages: Home, Shopping, Location/Time Selection, and Cart. The Inspiration page was something we thought might be helpful for users: a way to view pre-existing outfits and gain inspiration for one's own style.<br/><br/>
          <u>Right:</u> Additional sketches for the Inspiration page, which we considered a more unique page.</p>
          <div class="padding bottom-margin">
            <img src={GraceSketches} class="resize-screenshot-half"/>
            <img src={GraceSketches2} class="resize-screenshot-half"/>
          </div>

          <h3 class="center">Set #2:</h3><br/><p class="center">Sketches show the general layout of the Home page, Shopping page, and Cart page.</p>
          <div class="padding bottom-margin">
            <img src={KatherineSketches1} class="resize-screenshot-third"/>
            <img src={KatherineSketches2} class="resize-screenshot-third"/>
            <img src={KatherineSketches3} class="resize-screenshot-third" />
          </div>

          <h3 class="center">Set #3:</h3><br/><p class="center">Sketches of each page and user's thoughts. Users of Ole typically want to shop for new clothes but find in-person shopping tiring.</p>
          <div class="padding bottom-margin"><img src={EileenSketch} class="resize-screenshot-one"/></div>

          <h3 class="center">Set #4:</h3><br/><p class="center">Sketches of potential Shopping, Return, and Shipping Confirmation pages.</p>
          <div class="padding bottom-margin">
            <img src={TommySketch1} class="resize-screenshot-third"/>
            <img src={TommySketch2} class="resize-screenshot-third"/>
            <img src={TommySketch3} class="resize-screenshot-third"/>
          </div>
        </div>

        <div>
        <h2 class="padding">Lofi Wireframes</h2>
          <div class="pink-blue fill-in-top padding">
          <p>After reviewing our sketches, we refined our ideas into lofi wireframes. Core design decisions and/or functionalities are noted beneath each wireframe.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom padding">
          <div class="wireframe-box">
            <img src={Home} class="wireframe"/>
            <p>A homepage consisting of a welcome message and a brief description of the service. Users can enter their zip code to see which stores/clothing items are available nearby. A map at the bottom of the page updates when the user enters a valid zip code.</p>
          </div>
          <div class="wireframe-box">
            <img src={ShoppingPage} class="wireframe"/>
            <p>A page where users can browse items and sort/filter accordingly.</p>
          </div>
          <div class="wireframe-box">
            <img src={ItemPageUpdated} class="wireframe"/>
            <p>The page for each item, where items' details are displayed and can be customized.</p>
          </div>
          <div class="wireframe-box">
            <img src={Cart} class="wireframe"/>
            <p>A page displaying all the items a user has added to their cart. Basic information about each item (price, quantity, subtotal, size, and color) is displayed. A breakdown of the costs is shown to the right.</p>
          </div>
          <div class="wireframe-box">
            <img src={Checkout} class="wireframe"/>
            <p>A page that allows users to input their information for the order. The Order Summary box still appears to remind users of what is generally in their order. They can return to the Cart page if they need more details, or would like to edit their order. In a fully developed application, there would be a very similar page for billing information.</p>
          </div>
          <div class="wireframe-box">
            <img src={ShippingConfirmationPage} class="wireframe"/>
            <p>A page where people can choose what time they want their personal shopper to arrive with their items, as well as which shipping method they prefer. A map displays the address that the user previously inputted.</p>
          </div>
          <div class="wireframe-box">
            <img src={OrderConfirmation} class="wireframe"/>
            <p>A simple order confirmation screen that lets the user know their purchase was successful. The button in the middle of the screen takes the user to the next step in the process: choosing which items to return and accept.</p>
          </div>
          <div class="wireframe-box">
            <img src={Return} class="wireframe"/>
            <p>This is where users can choose which items to keep and which items to return. It is very similar to the Cart page, but has checkboxes in lieu of the trash can icon. Checking the box associated with an item updates the Return Summary box.</p>
          </div>
          <div class="wireframe-box">
            <img src={ReturnConfirmation} class="wireframe"/>
            <p>A simple confirmation screen that lets the user know their transaction was successful. The button in the middle of the screen takes the user back to the Shop page in case they want to follow up on their order.</p>
          </div>
          <div class="wireframe-box">
            <img src={Inspiration} class="wireframe"/>
            <p>A Pinterest-style page that allows users to scroll through various outfits. If they find an outfit they like, they can click on it to view the items in the outfit and/or "heart" it. There is also a scrollable side section with suggested outfits based on the user's past likes.</p>
          </div>
          <div class="wireframe-box">
            <img src={Inspiration2} class="wireframe"/>
            <p>If a user clicks on an outfit, they are shown an enlarged image of the outfit, alongside the items in the outfit. We debated having an "Add to Cart" button next to each item, but decided against it. To add an item to cart, one would have to provide a size, color, and quantity, as well as be aware of the price. This was more information than we thought would be wise to display. We decided it would be best to separate this functionality and simply allow the user to navigate to an item's page by clicking on the image of it.</p>
          </div>
        </div>

        <div>
        <h2 class="padding">Initial Hifi Prototype</h2>
        </div>
        <div class="hifi">
        <div class="pink-blue fill-in-top">
          <p class="padding-align">We developed an initial version of our hifi prototype, which we presented in a peer review session. A summary of the feedback can be found below.</p>
        </div>
        <div class="pink-blue fill-in-bottom">
        <div>
        <ol>
          <li>
            <h5>Overall & Miscellaneous</h5>
            <ul>
              <li>Keep the same padding and margin across all pages. The buttons involved in the checkout process appear to
                be in slightly different positions on different pages.</li>
              <li>Keep the rounding of boxes and images consistent.</li>
              <li>The navigation bar is not fully functional on all pages. Fixing this will help emulate the actual
                experience of using the site more accurately.</li>
              <li>The navigation bar in particular is a bit "jumpy" bewteen pages.</li>
              <li>A wishlist page might be helpful as a way to store liked items.</li>
            </ul>
          </li>
          <li>
            <h5>Browsing (Shopping) Page</h5>
            <ul>
              <li>Placing filters at the top or left feels more intuitive.</li>
            </ul>
          </li>
          <li>
            <h5>Item Page</h5>
            <ul>
              <li>Add a description for each item.</li>
            </ul>
          </li>
          <li>
            <h5>Checkout Page</h5>
            <ul>
              <li>Users cannot go back to the previous page while checking out. A way to return to previous points in a checkout process is commonly supported and expected
                functionality.</li>
            </ul>
          </li>
          <li>
            <h5>Shipping/Time Confirmation Page</h5>
            <ul>
              <li>Consider offering ranges instead of specific times.</li>
              <li>Strengthen the hierarchy. At the moment, numerous elements appear to be at the same level of hierarchy
                when it seems like there should be an order.</li>
            </ul>
          </li>
          <li>
            <h5>Order Confirmation Page</h5>
            <ul>
              <li>Show a summary of the items that were ordered.</li>
            </ul>
          </li>
        </ol>
        </div>
        </div>
        </div>

        <div>
        <h2 class="padding">Improvements</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Because we received numerous critiques about consistency, we sought to strengthen our style guide, which can be found below.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
          <img src={StyleGuide} />
          <br/><br/>
          <h5 id="based-on-feedback">Based on other feedback from critique, we improved our prototype in several ways:</h5>
          <ul>
             <li>Added Order Summary and Return Summary sections to provide more helpful information during the checkout
               process.</li>
             <li>Added the ability to go back to previous steps in the checkout process.</li>
             <li>Standardized rounding and positioning of elements. In particular, the Summary sections and checkout-related
               buttons are now all positioned in the same location.</li>
             <li>The navbar is functional on all pages.</li>
             <li>Added a wishlist page.</li>
             <li>Altered the location of the filters on the Browse page.</li>
             <li>Added a description for each clothing item.</li>
             <li>Redesigned the Shipping/Time Confirmation page so that it has a clearer, more intuitive hierarchy. In
               particular, text sizes are more clearly different. The page also offers time ranges instead of concrete times.</li>
          </ul>
        </div>

        <div>
        <h2 class="padding">Revised Prototype</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Keeping these considerations in mind, we iterated on our prototype and created an updated version, a demo of which can be found below.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <video width="100%" controls>
          <source src={Demo} type="video/mp4"/>
        </video>
        </div>

        <div>
        <h2 class="padding">User Testing</h2>
          <div class="pink-blue fill-in-top padding">
          <p>To improve further, we had three professional user testers assess our prototype. The task that we provided and the accompanying feedback appear below. </p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
          <h5 class="center">Introduction</h5>
          <p>&emsp;&emsp;&emsp;Imagine you are a shopper looking to use Ole to pick out a blue sweater for the winter months. You already added a couple of items to the cart earlier today and are just looking to add one more item. Please think out loud as you navigate the prototype from page to page. Please note that the screens are not interactive; this interface is an interactive mockup made on prototyping software. This means, for example, the buttons with links will take you from webpage to webpage but will not alter the contents of the page you are on (e.g. if you click ‘like’ on a clothing item the heart will not change color). We are seeking feedback on the interaction, navigation, hierarchy, and intended functionality.</p>

          <h5 class="center">Subtasks</h5>
          <ol>
            <li>Without leaving the homepage, what are your initial
              impressions of the website? Explain your answer.</li>
            <li>Browse the page and look for a blue sweater. Add it to your
              cart. [5-point rating scale: Very difficult to Very easy]</li>
            <li>From the cart page, access the &lsquo;inspiration&rsquo; page
              from the navigation bar. Click the image with the blue sweater to explore potential outfits you can pair
              the clothes with. Describe your thoughts on the interfaces as you go. Is it easy to navigate? How does
              it compare to services like Pinterest? [5-point rating scale: Very difficult to Very easy]</li>
            <li>Go back to the cart. Purchase all of the items that are in
              the cart (the other ones are there from a previous visit you had to this page in this scenario). Go as
              far as you can until you get to the confirmation page. Move on to the next task when you&#39;re done.
              [5-point rating scale: Very difficult to Very easy]</li>
            <li>After reaching the confirmation page, return the coat.
              [5-point rating scale: Very difficult to Very easy]</li>
            <li>What 3 words would you use to describe Ole&#39;s webpage?
              Explain your answer.</li>
            <li>Any overall comments about the interface? Were there any
              places where you felt confused?</li>
          </ol>

          <h5 class="center"> Video #1</h5>
          <div class="center-flex">
            <video width="640" height="480" controls class="user-testing-vid">
              <source src={UserTesting1} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <h5 class="center"> Video #2</h5>
          <div class="center-flex">
            <video width="640" height="480" controls class="user-testing-vid">
              <source src={UserTesting2} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <h5 class="center"> Video #3</h5>
          <div class="center-flex" id="last-video">
            <video width="640" height="480" controls class="user-testing-vid">
              <source src={UserTesting3} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div>
        <h2 class="padding">Summary of Results & Further Suggestions</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Based on feedback from professional testers, we considered a few ways to continue developing and improving the prototype.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <h4 class="center">Navigation </h4>
        <p class="feedback-heading"><b>Tester Feedback</b></p>
        <ul>
          <li>Users enjoyed how most pages in the
            checkout process showed what they ordered and thought checkout was fluid.</li>
          <li>Two users navigated directly to the
            Cart page instead of first looking at the Browse page.</li>
          <li>One user assumed &nbsp;that by clicking 'Submit', they would be sent to a final confirmation page before their order was placed. Maybe rename
              &lsquo;Place Order&rsquo;.</li>
          <li>Users were often confused about whether an item was added to the
            cart.</li>
          <li>Enjoyed Shopping page but wanted a number next to the cart icon indicating how many items they had added and wanted a popup
            stating that the website was successfully updated.</li>
        </ul>
        <p class="feedback-heading"><b>Potential Interface Changes</b></p>
        <ul>
          <li>Rename the &lsquo;Submit&rsquo; button to &lsquo;Place
            Order&rsquo; so the user is more aware of what pressing the button does.</li>
          <li>Confirmation message appears at top of screen when item is added
            to cart and cart has number of items displayed as an icon.</li>
          <li>Emphasize the zip code search bar so that users better understand the intended first step of the process.
          </li>
        </ul>

        <h4 class="center">Hierarchy</h4>
        <p class="feedback-heading"><b>Tester Feedback</b></p>
        <ul>
          <li>Confused about the keep/return functionality on the Return page.</li>
          <li>Users wanted more ways to sort (e.g. by color) so that they could
            find
            the
            blue sweater quicker.</li>
          <li>Confused about how to select times on the Shipping
            Confirmation
            page but liked that they could pick when the item would be delivered.</li>
        </ul>
       <p class="feedback-heading"><b>Potential Interface Changes</b></p>
        <ul>
          <li>Make the buttons on the Shipping Confirmation page look more similar to
            other buttons on the website and have more affordances (e.g. darken when hovering) so that
            people
            know
            they can push them.</li>
          <li>Remove the keep button on the Return page so that people
            aren&rsquo;t confused by that functionality. Consider replacing the keep/return buttons with simple checkboxes.</li>
          <li>Add filters.</li>
        </ul>

        <h5 class="center">Functionality</h5>
        <p class="feedback-heading"><b>Tester Feedback</b></p>
        <ul>
          <li>Thought website was a base prototype for shopping companies
            based on home page.</li>
          <li>Liked the front page but didn&rsquo;t like the word frictionless &nbsp;&mdash;
              liked
              how
              it
              gave an introduction to the website.</li>
          <li>Wish the page didn&rsquo;t make you select options in order on the
            return page. The process was easy once that requirement was made clear.</li>
        </ul>
       <p class="feedback-heading"><b>Potential Interface Changes</b></p>
        <ul>
          <li>Make the Return page operate so you do not have to choose which
            items to keep/return in sequential order. (This was our intent, but we were unable to capture the full functionality in Figma.)</li>
          <li>Make it more clear on the homepage what the purpose of the
            startup is.</li>
        </ul>
        </div>

        <div>
        <h2 class="padding">Conclusions & Takeaways</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Final thoughts and lessons learned, which will guide us toward better designs in the future.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <ul>
          <li>Consistency goes a long way in a design. Inconsistencies with styling and placement can draw users' attention away from the content itself.</li>
          <li>Different users may feel differently about the same aspect of a design. Sometimes, there is no clear-cut answer, and it is up to the designers to make the final call.</li>
          <li>Getting attached to a particular design is often not the answer. Even after iterating, users may have critiques about parts of the design that the development team thought were intuitive. Designers must be willing to listen and adapt.</li>
        </ul>
        </div>
        <div class="bottom-padding"></div>
        <Footer />
        </div>
  )
}
