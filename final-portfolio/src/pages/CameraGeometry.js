import Navbar from '../Navbar'
import Footer from '../Footer'
import Demo from '../images/iterative-design/Demo.mp4'
import Task1 from '../images/cg-task-1.jpg'
import '../CameraGeometry.css'
import Task2 from '../images/cg-task-2.jpg'
import Task3 from '../images/Camera-Geometry.jpg'

export default function CameraGeometry() {
  return (
    <div>
      <Navbar />
      <div>
      <div>
          <h1 class="padding">Camera Geometry</h1>
      </div>
        <h2 class="padding">Introduction</h2>
          <div class="pink-blue fill-in-top padding">
          <p>A lesson in camera and scene geometry.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <p>&emsp;&emsp;&emsp;How can we go from a 2D image to a 3D reconstruction (or vice versa)? How can we identify matching points in two slightly different images? How are we able to glean this information from just a handful of data?
        <br/><br/>
        &emsp;&emsp;&emsp;It turns out the answer is a lot of algorithms and matrix manipulation, specifically of two special matrices: the camera projection matrix and fundamental matrix. The former maps 3D world coordinates to image coordinates, estimated using corresponding 2D and 3D points. The latter matches points in one scene to points in another using only 2D information. After estimating the fundamental matrix, we can use the RANSAC algorithm to identify outliers and hone in on the correspondences that lead to the most accurate reconstruction. After calculating camera projection and fundamental matrices, we are able to calculate the 3D points to which the 2D image coordinates correspond.</p>
      </div>

      <div>
        <h2 class="padding">Camera Projection Matrix</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Finding a matrix that transforms 3D world coordinates to 2D image coordinates.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <p>&emsp;&emsp;&emsp;To find the camera projection matrix, the CSCI 1430 course staff provided image data that included Aruco markers, black and white squares that measured the relative 3D distances between each marker. Thus, the 3D distances were known ahead of time. Actually calculating the camera projection matrix - part of the puzzle in moving from 3D coordinates to 2D - requires setting up a system of equations and solving it using linear least squares regression. With a visualizer, we can see how well the camera projection matrix does. The blue dots represent the corners of the Aruco markers, which have been identified in each image.</p>
        <img src={Task1} class="task"/>
        <p class="center">Not too shabby!</p>
      </div>

      <div>
        <h2 class="padding">Estimating the Fundamental Matrix</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Mapping points in one image to points in another.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <p>&emsp;&emsp;&emsp;This task involves more matrix math - specifically, using Singular Value Decomposition (SVD) to solve a system of homogeneous linear equations as part of the 8-point algorithm. If you're unfamiliar with linear algebra, that's okay! You can think of the 8-point algorithm as a device. We feed the system of equations into the device and pull the lever (use SVD), and out comes a fundamental matrix. More technical details can be found <a href="https://en.wikipedia.org/wiki/Eight-point_algorithm">here</a> and <a href="https://en.wikipedia.org/wiki/Singular_value_decomposition">here</a>. The estimated fundamental matrix will be refined in the next step using the RANSAC algorithm.</p>
      </div>

      <div>
        <h2 class="padding">RANSAC and the Fundamental Matrix</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Using 2D images to approximate 3D position.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <p>&emsp;&emsp;&emsp;The first step in this process is to find tentative 2D correspondences between images. For this project, I was provided with feature point matching using the ORB descriptor. Essentially, the ORB descriptor detects similar features in different images and matches them to form a correspondence. These correspondences, however, are rather unreliable. From here, I used the RANSAC algorithm to determine outliers (point correspondences that did not match with the estimated fundamental matrix) in an attempt to refine the unreliable corespondences. In short, the RANSAC algorithm:</p>
        <ol class="task">
          <li>Randomly selects a subset of point correspondences from all of the possible point correspondences.</li>
          <li>Solves for a fundamental matrix using the subset.</li>
          <li>Counts the number of inliers (point correspondences that match with the estimated fundamental matrix) returned by the fundamental matrix in Step 2 out of all of the possible point correspondences.</li>
        </ol>
        <p>&emsp;&emsp;&emsp;Through trial and error, I determined an appropriate stopping point for RANSAC, which returned the calculated fundamental matrix with the most inliers. Here's what the correspondences looked like:</p>
        <img src={Task2} class="task" />
      </div>

      <div>
        <h2 class="padding">Converting 2D Matches to 3D Coordinates</h2>
          <div class="pink-blue fill-in-top padding">
          <p>Putting it all together.</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <p>&emsp;&emsp;&emsp;To solve for ground-truth 3D coordinates, I revisited the formula used when calculating the camera projection matrix, but solved for a different set of parameters. At a high level, the formula applies a matrix to a set of points to convert them from 2D to 3D, or 3D to 2D. Instead of finding the matrix now, I solved for the points. Doing so produced points in 3D space, the results of which can be seen below using a visualizer provided by the CSCI 1430 course staff:</p>
        <img src={Task3} class="task"/>
      </div>

      <div>
        <h2 class="padding">Next Steps</h2>
          <div class="pink-blue fill-in-top padding">
          <p>How can we improve our 3D reconstructions?</p>
          </div>
        </div>
        <div class="pink-blue fill-in-bottom">
        <ol class="task">
          <li>Normalize the estimation of the fundamental matrix. Real-world images can be quite noisy or complex. Normalizing the fundamental matrix can help reduce this instability when attempting to find correspondences.</li>
          <li>Experiment with different implementations of RANSAC, such as MLESAC, MAPSAC, and/or KALMANSAC.</li>
          <li>Experiment with different methods of feature matching. There are numerous possibilities: SIFT, SURF, the Harris corner detector, and more!</li>
        </ol>
      </div>
      <div class="bottom-padding"></div>
      <Footer />
    </div>
  )
}
