import '../Personas.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Kiosk from '../images/bearbucks-kiosk.jpg'
import BusyBrian from '../images/busy-brian.jpg'
import ThoroughTheodora from '../images/thorough-theodora.jpg'
import Frame1 from '../images/frame-0001.jpg'
import Frame2 from '../images/frame-0002.jpg'
import Frame3 from '../images/frame-0003.jpg'
import Frame4 from '../images/frame-0004.jpg'
import Frame5 from '../images/frame-0005.jpg'
import Frame6 from '../images/frame-0006.jpg'
import Frame7 from '../images/frame-0007.jpg'
import Frame8 from '../images/frame-0008.jpg'
import Frame9 from '../images/frame-0009.jpg'
import Frame10 from '../images/frame-0010.jpg'
import Frame11 from '../images/frame-0011.jpg'
import Frame12 from '../images/frame-0012.jpg'

export default function Personas() {
  return (
    <div class="container">
      <Navbar />
      <div class="personas">
        <h1 class="padding">Personas & Storyboarding</h1>
      </div>
        <h2 class="padding">Introduction</h2>
        <div id="intro">
          <div class="pink-blue" id="intro-heading"><p>Understanding and empathizing with users.</p></div>
          <p class="pink-blue" id="intro-body">&emsp;&emsp;&emsp;How can a designer understand their users? This question is an important one, as it informs countless
            design decisions for any product. Without understanding a product's users, one cannot hope to create a design that fits those users' needs or wants.<br/><br/>
            &emsp;&emsp;&emsp;So how can we go about putting ourselves in the users' shoes? Techniques such as real-time observation, conducting interviews, creating empathy maps, and storyboarding all offer insight into consumers' needs. In this project, users interacted with a long-standing, but unassuming interface: a Bear Bucks kiosk. Primarily, the kiosk offers a way for Brown University students to add school currency (Bear Bucks) to their ID cards. The big question: how do they navigate this process? Let's start by reviewing the interface itself.</p>
        </div>
        <h2 class="padding">Sketch of the Interface</h2>
        <div class="sketch">
        <div class="sketch-img"><img src={Kiosk}/></div>
        <div class="list">
        <ol>
          <li><b>Instructions.</b> Above the kiosk were two sheets of instructions. The first sheet (left) describes how to view one's Bear Bucks balance, purchase a Bear Bucks guest card, and add funds to either a Bear Bucks account or guest card. The second sheet (right) outlines other ways of adding funds to one's Bear Bucks account.</li>
          <li><b>Screen.</b> Users can tap on the screen to make selections. Usually, the screen displayed 2-3 buttons at a time.</li>
          <li><b>Card swipe.</b> Users swipe their ID cards here.</li>
          <li><b>Receipt dispenser.</b> After adding money, users can choose to print a receipt. If they choose to print one, this is where they would
            collect it.</li>
          <li><b>Bill acceptor.</b> Users feed bills into the kiosk here. Based on observations of three real users, the bill acceptor tends to reject bills at least once.</li>
        </ol>
        <p>Note that the text labels on the sketch were present on the kiosk. Any unlabeled components of the kiosk were not
          used by the individuals who were observed.</p>
        </div>
        </div>
        <h2 class="padding">Observations</h2>
          <div class="pink-blue" id="observations-intro"><p class="padding-align">After watching three users add value to their ID cards with the kiosk, here's what I observed.</p></div>
          <div class="pink-blue" id="observations-list">
          <ul>
            <li>All three users read at least some of the instructions before attempting to use the kiosk. One user looked back at the instructions while using the kiosk, while the other two users referred to the instructions once at the beginning of the process.</li>
            <li>All three users had to insert their bills at least twice. When this happened, each user paused and reinserted the bill. One user referred back to the instructions at this time.</li>
            <li>Users did not have to pause or hesitate while choosing between options presented on the screen.</li>
            <li>One user had to rummage through their backpack for some time to find their ID.</li>
          </ul>
        </div>
        <h2 class="padding">Interviews</h2>
        <div id="interviews">
        <p class="padding-align pink-blue" id="interviews-intro">In addition to watching users interact with the kiosk, I conducted short interviews with each of them about their experience. The questions that I asked and a summary of the answers appear below.</p>
        <div id="qa">
        <div id="questions" class="pink-blue">
          <h3 class="qa-heading">Questions:</h3>
          <ol>
            <li>Did you know this kiosk was here?</li>
            <li>Have you used a Bear Bucks kiosk to add value to your ID card before?
              <ul>
                <li><i>If yes:</i> When was the last time you did so?</li>
              </ul>
            </li>
            <li>How do you usually add Bear Bucks to your ID card?</li>
            <li>What do you use Bear Bucks for?</li>
            <li>What payment method were you planning to use?</li>
            <li>Did you read all of the instructions before starting to use the kiosk?
              <ul>
                <li><i>If no:</i> Where did you read up to?</li>
                <li>Did you think the instructions were helpful throughout the process of using the kiosk?</li>
              </ul>
            </li>
            <li>Were there any points where you had to pause to figure out what to do next?
              <ul>
                <li><i>If yes:</i> When?</li>
              </ul>
            </li>
            <li>Were you surprised at any point while using the kiosk?</li>
            <li>You may have noticed that the kiosk only accepts $1, $5, $10, and $20 bills. If you wanted to deposit $30 into your ID card, how would you go about doing so using the kiosk?
              <ul>
                <li>If you did not have exactly $30, how would you proceed?</li>
              </ul>
            </li>
            <li>What was your first thought when you started using the kiosk?</li>
            <li>Did you consider asking for help at any point?</li>
            <li>Was there anything you thought was particularly helpful about how the kiosk was set up?</li>
          </ol>
          </div>
          <div id="answers" class="pink-blue">
          <h3 class="qa-heading">Answers:</h3>
            <ul>
              <li>Two users hoped to use their respective credit card to add money, while the last user planned to use cash.</li>
              <li>All three users said that they would insert a $20 bill and a $10 bill to deposit $30 using the kiosk. They would, however, abandon the attempt if they did not already have cash within a $10 range of $30.</li>
              <li>None of the users had known the kiosk existed or used a Bear Bucks kiosk before. Instead of a kiosk, they rely on an online portal to add Bear Bucks to their ID cards. The Bear Bucks are mainly used for laundry.</li>
              <li>Two users thought the instructions were more than enough to successfully navigate the kiosk. Of these, one user thought the instructions were helpful, while the other thought they were unnecessary. These users stopped reading the instructions halfway through the first page. The last user thought the instructions would have benefited from a step-by-step checklist and considered asking for help. This user read the entire first page of instructions.</li>
              <li>Each user appreciated something different about the kiosk: the central location of the card swipe, the limited number of buttons, and the ability to obtain a receipt immediately.</li>
            </ul>
          </div>
        </div>
        </div>
        <div>
          <h2 class="padding">Empathy Maps</h2>
          <p class="padding-align pink-blue" id="empathy-heading">After getting to know the users of the kiosk, I set out to create personas that reflected their experiences and goals. The intent was to better understand the users and represent them without reducing them to stereotypes.</p>
          <div class="reduced-size pink-blue" id="theo">
          <img src={ThoroughTheodora} class="empathy-map"/>
          <div class="theodora">
            <p class="line-spacing heading-spacing">Thorough Theodora is a careful individual who likes to get the facts straight.</p>
            <h4 class="line-spacing heading-spacing">What does Thorough Theodora struggle with?</h4>
              <p class="line-spacing">Thorough Theodora does her best to establish a good understanding of a task or problem
                before diving into a solution. Unfortunately, this caution means that she can be easily overwhelmed
                by an overload of information or feel nervous without enough instruction. She also
                flusters easily if things do not go according to plan. When interacting with the kiosk,
                she does not have a clear idea of where to start. Does she read the instructions on the wall
                or follow the prompting on the screen? When her bill gets rejected, she is not sure what to do
                because she had not planned for something like this to happen, and the instructions do not mention
                what she should do if the bill acceptor rejects her money.</p>
            <h4 class="line-spacing heading-spacing">Who does Thorough Theodora represent?</h4>
              <p class="line-spacing">Thorough Theodora represents users
              who have not interacted with the kiosk before and who prefer to stick to methods that they know well.
              The former trait was shared among all three real users who were interviewed, and the latter represents
              those users' tendency to use a familiar online portal rather than a kiosk. She also reflects one particular user's challenges while using the interface, namely feeling overwhelmed by the simultaneous prompting from the screen and the instructions, as well as feeling apprehensive when she is unsure what to do.</p>
        </div>
        </div>
        <div class="reduced-size pink-blue" id="bri">
        <div>
          <img src={BusyBrian} class="empathy-map"/>
          <div class="brian">
            <p class="line-spacing heading-spacing">Busy Brian is a swamped student who always seems to be on the move.</p>
            <h4 class="line-spacing heading-spacing">What does Busy Brian struggle with?</h4>
              <p class="line-spacing">Busy Brian is short on time, so he is always trying to finish tasks as quickly as possible. He tends
              to become impatient when he has to linger on a task or when he feels that something was a waste of
              time. When interacting with the kiosk, he becomes slightly frustrated that he had to "waste time" reading
              instructions for a task he thought was simple and intuitive. He also becomes annoyed when the bill
              acceptor rejects his money. He considers leaving, as he has class soon.</p>
            <h4 class="line-spacing heading-spacing">Who does Busy Brian represent?</h4>
              <p class="line-spacing">Busy Brian represents a full-time college student who is juggling classes, assignments, clubs, and more. The kiosk, which is used to add Bear Bucks to student IDs or to purchase guest cards, appears to be geared toward helping students manage their school funds. Thus, Busy Brian portrays the main user population: students, who tend to have numerous commitments throughout the day. He possesses some traits that appeared in the observed users: a willingness to stop using the kiosk if an inconvenience popped up, feeling that he did not need the instructions to navigate the kiosk, and simply reinserting his money when the bill acceptor rejected it.</p>
          </div>
        </div>
        </div>
        </div>
        <div class="storyboard-container">
          <h2 class="padding">Storyboard</h2>
          <p class="padding-align pink-blue" id="storyboard-heading">My final strategy to understand the kiosk's users was to create a storyboard portraying one persona's interaction with the kiosk from start to finish. This technique places the persona in a particular scenario and attempts to represent their entire journey with the interface. Below, Thorough Theodora attempts to add money to her ID card with the Bear Bucks kiosk.</p>
          <div class="pink-blue" id="storyboard-rounding">
          <div class="storyboard">
            <img src={Frame1} class="frame"/>
            <p>While walking through the campus center, Theodora notices a Bear Bucks kiosk.</p>
          </div>
          <div class="storyboard">
            <img src={Frame2} class="frame"/>
            <p>Theodora remembers that she needs more Bear Bucks on her ID so that she can do laundry.
            She decides to give the kiosk a try while she's already here, hoping the process will be quick and easy.</p>
          </div>
          <div class="storyboard">
            <img src={Frame3} class="frame"/>
            <p>Theodora isn't sure where to start. "Should I follow the instructions on the screen or read what's on
              the wall?" she thinks.</p>
          </div>
          <div class="storyboard">
            <img src={Frame4} class="frame"/>
            <p>She decides to read the instructions on the wall, mentally forming a plan for using the kiosk. She notes that the kiosk is cash (bills) only. She also notices that the second sheet of instructions is about alternate methods of adding Bear Bucks to one's card, so she decides it's probably fine not to read it.</p>
          </div>
          <div class="storyboard">
            <img src={Frame5} class="frame"/>
            <p>Theodora rummages through her bag for a spare bill and her ID. She
              hasn't needed to use her ID yet today.</p>
          </div>
          <div class="storyboard">
            <img src={Frame6} class="frame"/>
            <p>Theodora swipes her ID in the card swipe after a minute or two of rummaging.</p>
          </div>
          <div class="storyboard">
            <img src={Frame7} class="frame"/>
            <p>The screen prompts her to choose one of two options. Theodora chooses one, confident it is what she needs.</p>
          </div>
          <div class="storyboard">
            <img src={Frame8} class="frame"/>
            <p>Theodora feeds her spare bill into the bill acceptor. "So far, so good," she thinks.</p>
          </div>
          <div class="storyboard">
            <img src={Frame9} class="frame"/>
            <p>The bill is rejected. This catches Theodora off guard.</p>
          </div>
          <div class="storyboard">
            <img src={Frame10} class="frame"/>
            <p>Theodora reads the instructions again. "Did I do something wrong? Did I miss something? Do the
              instructions say what to do if the bill spits back out?"
            </p>
          </div>
          <div class="storyboard">
            <img src={Frame8} class="frame"/>
            <p>Theodora decides to try feeding the bill to the kiosk one more time. She plans on asking for help
              if the bill is rejected again, but hopes that she will be able to figure this out on her own. She nervously waits for the bill acceptor's verdict.</p>
          </div>
          <div class="storyboard">
            <img src={Frame11} class="frame"/>
            <p>To her relief, the kiosk accepts the bill.</p>
          </div>
          <div class="storyboard">
            <img src={Frame12} class="frame"/>
            <p>Theodora confirms her balance and finishes the process. She makes a mental note of this experience in case she ever needs to use the kiosk again.</p>
          </div>
        </div>
        </div>
    <div class="bottom-padding">
      <h2 class="padding">Conclusions</h2>
      <div><p class="padding-align pink-blue" id="conclusions-heading">Despite being less popular than the online portal as a method for adding Bear Bucks to one's ID, the kiosk appears to be an overall effective interface. Each user was able to successfully add money to their ID, though some adjustments might make the process more smooth.</p></div>
      <div class="pink-blue" id="conclusions-container">
        <ul id="conclusions-list">
          <li>2/3 users preferred credit card as a form of payment. Therefore, expanding the kiosk's payment options may improve its usability.</li>
          <li>Users had mixed reactions to the instructions. Further research might be done to determine how to make them more effective. For example, one might try combining the instructions with the kiosk itself, adding short blurbs on screen to guide the user through the process.</li>
          <li>Each user had to reinsert their cash at least once, with one user becoming slightly flustered. An improved bill acceptor may remove this obstacle.</li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
}
