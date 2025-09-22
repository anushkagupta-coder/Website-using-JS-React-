/*1.protypes=a mechanism that ensures 
 that passed value is of correct data type

 2.css styles
inline 
external
modules

3.click event=an interaction when a user clicks a specific element 
we can respond to clicks by passing a callback to onclick event handler

4.React hook=special function that allows functional components
to use react features without writing class components  (react v16.8)
(useState,useEffect,useContext,useReducer,useCallback)

5.useState() = A react hook that allowsthe creation of a staeful variable and a steer funtion
to update its value in virtual DOM.[NAME,SETNAME]

6.onChange== event handler used primiralily with from elements 
ex: <input>,<textarea>,<ssleect >,<radiio>
triggers a function every time the value of input chnages;

7.Upadter function==a func passed as an arg to setstate()ususally
ex.setYear(arrow func)
allow for safe updates based on previous state 
used with multiple state updates and asynchronous functions
good practice to use updater func

8.useEffect() == react hook that tells react to do some code when
    this componentrereders 
    this component mounts 
    the state of  a value
    
    useEffect(function,[dependenceis])

    1.useEffect(()=>{})    runs afetr every rereneder
    2.useEffect(()=>{},[]) runs only on mount
    3.useEffect(()=>{},[value]) uns on mount +when value chanegs  

    */

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MyComponent2 from './MyComponent2.jsx'
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import { useCallback, useContext, useEffect, useReducer } from 'react'

function App() {


  const fruits=[{id : 1,name:"apple",calories:95},
                {id : 2,name:"orange",calories:45},
                {id : 3,name:"banana",calories:105},
                {id : 4,name:"coconut",calories:37}];

  const vegetables=[{id : 5,name:"carrot",calories:95},
                {id : 6,name:"potatoes",calories:45},
                {id : 7,name:"cabbage",calories:105},
                {id : 8,name:"brocoli",calories:37}];


    return(
      <>
        <Student name="HARRYPOTTER" age={21} isStudent={true}/>
        <Card/>
        <Button/>
        <Footer/>
        <Counter/>
        <MyComponent/>
        <MyComponent2/>
        <MyComponent3/>
        <MyComponent4/>
        <List items={fruits} category="Fruits"/>
        <List items={vegetables} category ="Vegetables"/>
        <UserGreeting isLoggedIn={true} username="anushka"/>
        <UserGreeting />
        <Student name="ANUSHKA" age={10} isStudent={false}/>
        
        
      </>
    );
}

export default App
