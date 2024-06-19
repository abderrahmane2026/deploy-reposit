//hhhhhhhhhhhh
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Header from './commponent/Navbare/Header';

import ProdectDetail from './commponent/ProdectDetails/ProdectDetail';

import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import FavoritPage from './Pages/FavoritPage/FavoritPage';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import LoginPage from './Pages/LoginPage/LoginPage';
import Userdeashbord from './Deashbord/Userdeashbord/Userdeashbord';
import Settings from './Deashbord/Vendeurdeashbord/Setting';
import OrdersPage from './Deashbord/Vendeurdeashbord/OrderPage/OrdersePage';
import ProdectList from './Deashbord/Vendeurdeashbord/ProdectList/ProdectList';
import NewLoginPage from './Pages/LoginPage/newLoginpage';
import NewSignPage from './Pages/LoginPage/newSignuppage';
import Footer from './commponent/Footer/Footer';
import Vendeurdeashbord from './Deashbord/Vendeurdeashbord/Vendeurdeashbord';
import AccountPage from './Deashbord/Vendeurdeashbord/AccontPage/AccontPage';
import Admindeashbord from './Deashbord/Admindeashbord/Admindeashbord';
import Setting from './Deashbord/Admindeashbord/SettingPage/Setting';
import Sellers from './Deashbord/Admindeashbord/Sellers/Sellers';
import Reports from './Deashbord/Admindeashbord/Reports/Reports';
import Users from './Deashbord/Admindeashbord/UsersPage/Users';
import AddProduct from './Deashbord/Vendeurdeashbord/AddProduct/AddProduct';
import RequireAuth from './Pages/Auth/RequireAuth';
import { userContext } from './Context/UserContext';
import NewsPage from './Pages/News/NewsPage';
import PaidPage from './Pages/Paidpage/Paid';
import Matches from './Pages/News/Match';
import Competitions from './Pages/News/Competitions';
import Events from './Pages/News/Events';
import Athletes from './Pages/News/Athletes';
import Coaches from './Pages/News/Coaches';

function App() {
  const {user} = userContext()
  return (
    <div className="App">
       <Header/>
      {/* <Searchbar/>  */}

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop />}/>
        <Route path='/product' element={<ProdectDetail/>}>
        <Route path=':prodectId' element ={<ProdectDetail/>}/>
        </Route>
       
         <Route path='/Favorit' element={<FavoritPage/>}/>
        <Route path='/Favorit' element={<Userdeashbord/>}/>

        {/* news page */}
        <Route path='/News' element={<NewsPage/>}>
          
          <Route path="matches" element={<Matches/>} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="events" element={<Events />} />
          <Route path="athletes" element={<Athletes />} />
          <Route path="coaches" element={<Coaches />} />
        
        </Route>
       
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        {/* <Route path='/Login' element={<LoginPage/>}/> */}
        <Route path='/Login' element={<NewLoginPage/>}/>
        <Route path='/singup' element={<NewSignPage/>}/>
        <Route path='/paid' element={<PaidPage/>}/>



       
        <Route path='/ShoppingCart' element={<ShoppingCart/>}/>

       {/* dashboard vendeur */}

       <Route path='/Dashboard' element={
          user?.role == 'seller' ? <Vendeurdeashbord/> :
          user?.role == 'client' ? <Userdeashbord/> :
          user?.role == 'admin' ? <Admindeashbord/> :
          <NewLoginPage/>
        }>
          
          <Route path='Account' element={<AccountPage/>}/>
          <Route path='AddProduct' element={<AddProduct/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='orders' element={<OrdersPage/>}/>
          <Route path='products' element={<ProdectList/>}/>
          <Route path="users" element={<Users />} />
          <Route path="Sallers" element={<Sellers />} />
          <Route path="settings" element={<Setting />} />
          <Route path="reports" element={<Reports/>} />
          <Route path="ShoppingCart" element={<ShoppingCart/>} />
        </Route>
      

        {/* deashbord admine */}

       {/* <Route element={<RequireAuth/>}>
       </Route> */}

        {/* <Route path="/About" element={<Admindeashbord />}>
        <Route path="users" element={<Users />} />
        <Route path="Sallers" element={<Sellers />} />
        
        <Route path="settings" element={<Setting />} />
        <Route path="reports" element={<Reports/>} />
        </Route>
      */}
        

      </Routes>
      
      <Footer/>

      
     
      
      {/* <Nav/>
      
      <Landingpage/> */}
     

      
    </div>
  );
}

export default App;
