//protypes=a mechanism that ensures 
// that passed value is of correct data type
//css styles
//inline 
//external
//modules
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
function App() {
    return(
      <>
        <Student name="HARRYPOTTER" age={21} isStudent={true}/>
        <Card/>
        <Student name="ANUSHKA" age={10} isStudent={false}/>
        
        
      </>
    );
}

export default App
