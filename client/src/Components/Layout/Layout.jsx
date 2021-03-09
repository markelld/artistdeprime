// import Footer from "../Footer/Footer"; 
import Header from "../Header/Header";


const Layout = (props) => { 
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout"> 
      <Header 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />  
        <div>
          {props.children} 
        </div> 
      {/* <Footer/> */}
    </div>
  )
} 
export default Layout;