//import PropTypes from "prop-types";

function UserGreeting(props){
    const welcomemessage= <h2 className="welcome-message">
                            welcome  {props.username}
                            </h2>

    const loginprompt=<h2 className="login-prompt">
                        please login to continue
                        </h2>
    //if(props.isLoggedIn){
    //    return <h2>WELCOME {props.username}</h2>
    //}
    //return <h2>PLEASE LOGIN TO CONTINUE</h2>
    //2ND OPTION IS USING TERNARY OPERATOR
    return(props.isLoggedIn ? welcomemessage : loginprompt)

}
//UserGreeting.proptypes={
  //  isLogedin:PropTypes.bool,
    //username:PropTypes.string
//}
//UserGreeting.defauktProps={
  //  isLoggedin:false,
    //username:"guest",
//}
export default UserGreeting