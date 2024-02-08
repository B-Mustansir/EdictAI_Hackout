import HomeOne from "./HomeOne";
import HoweTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import About from "./About";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Faq from "./Faq";
import Help from "./Help";
import Login from "./Login";
import Work from "./Work";
import Error from "./Error";
import Job from "./Job";
import JobDetails from "./JobDetails";
import GenerateVideo from "./GenerateVideo";
import Policy from "./Policy";
import TermsAndConditions from "./TermsAndConditions";
import RefundPolicy from "./RefundPolicy";

const routes = [
  { path: '/', component: <HoweTwo />},
  { path: '/index-2', component: <HomeOne />},
  { path: '/index-3', component: <HomeThree />},
  { path: '/about', component: <About />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/faq', component: <Faq />},
  { path: '/help', component: <Help />},
  { path: '/login', component: <Login />},
  { path: '/work', component: <Work />},
  { path: '/contact', component: <Contact />},
  { path: '/job', component: <Job />},
  { path: '/job-details', component: <JobDetails />},
  {path:'/generatevideo',component:<GenerateVideo/>},
  { path: '*', component: <Error />},
  { path:'/policyprivacy', component: <Policy />},
  { path:'/termsandconditions', component: <TermsAndConditions />},
  { path:'/refundpolicy', component: <RefundPolicy />},
]

export default routes;