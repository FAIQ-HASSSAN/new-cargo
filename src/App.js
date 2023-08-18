import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import EDelivery from "./components/Pages/E-delivery";
import { Contact } from "./components/Pages/Contact";
import Calculateprice from "./components/Pages/Calculateprice";
import { About } from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import AfterSignupPage from './components/Pages/AfterSignupPage';
import AfterLoginPage from './components/Pages/AfterLoginPage';
import Payment from "./components/Pages/Payment";
import Transactionpage from "./components/Pages/Transactionpage";
import FAQ from "./components/Pages/FAQ";
import InvoiceAddress from "./components/Pages/InvoiceAddress";
import Invoice from "./components/Pages/invoice";
import Accountpassword from "./components/Pages/Accountpassword";
import Db from "./components/Pages/db";
import Da from "./components/Pages/da";
import Createshipmet from "./components/Pages/createshipmet";
import Shipping from "./components/Pages/shipping";
import Announcement from "./components/Pages/Announcement";
import Support from "./components/Pages/Support";
import EditShippingRow from "./components/Pages/editshippingrow";
import GDPR from './components/Pages/GDPR'
import TAC from './components/Pages/TAC'
import Cookiepoicy from './components/Pages/Cookiepolicy'
import Privacypolicy from './components/Pages/Privacypolicy'
import ScrollToTop from "./scrolltop";
import Homecalprice from "./components/Pages/home_calprice";
import ResetPassword from "./components/Pages/ResetPassowrd";
function App() {

  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edelivery" element={<EDelivery />} />
            <Route path="/calculateprice" element={<Calculateprice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/afterSignupPage" element={<AfterSignupPage />} />
            <Route path="/afterLoginPage" element={<AfterLoginPage />} />
            <Route path="/Payment" element={<Payment/>} />
            <Route path="/transactionpage" element={<Transactionpage/>} />
            <Route path="/FAQ" element={<FAQ/>} />
            <Route path="/invoiceaddress" element={<InvoiceAddress/>} />
            <Route path="/accountpassword" element={<Accountpassword/>} />
            <Route path="/invoice" element={<Invoice/>} />
            <Route path="/da" element={<Da/>} />
            <Route path="/db" element={<Db/>} />
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/Createshipment" element={<Createshipmet/>} />
            <Route path="/announcement" element={<Announcement/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/editshippingrow/:id" element={<EditShippingRow/>} />
            <Route path="/GDPR" element={<GDPR/>} />
            <Route path="/privacypolicy" element={<Privacypolicy/>} />
            <Route path="/Termsandconditions" element={<TAC/>} />
            <Route path="/Cookiepolicy" element={<Cookiepoicy/>} />
            <Route path="/homecalprice" element={<Homecalprice/>} />
            <Route path="/resetpassword" element={<ResetPassword/>} />
          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>
  </>
  );
}

export default App;
