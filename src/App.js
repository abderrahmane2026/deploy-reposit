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

function App() {
  const {role} = userContext()
  console.log('the role is : ' , role)
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
       
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        {/* <Route path='/Login' element={<LoginPage/>}/> */}
        <Route path='/Login' element={<NewLoginPage/>}/>
        <Route path='/singup' element={<NewSignPage/>}/>

       
        <Route path='/ShoppingCart' element={<ShoppingCart/>}/>

       {/* dashboard vendeur */}

        <Route path='/Dashboard' element={ role == 'vendeure' ? <Vendeurdeashbord/> : role == 'client' ? <Userdeashbord/> : <Admindeashbord/>}>
          <Route path='Account' element={<AccountPage/>}/>
          <Route path='AddProduct' element={ <AddProduct/>}/>
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
