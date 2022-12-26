// @flow
import React from "react";
import Card from "react-bootstrap/Card"
import { useStyletron } from "styletron-react"



const Item = (props) => {
  const [css, theme] = useStyletron();
  return (    
  <Card>
    <span className={css({display: "flex", flexDirection: "row"})}>
      <img src={props.logo} alt="Image Not Found"></img>
      <span>
        <p>Price: {props.price}</p>
      </span>
      <span>
        <p>Qty: {props.qty}</p>
      </span>
    </span>
  </Card>
  )
}
function App() {
  const [css, theme] = useStyletron();
  return (
    <span className={css({display: "flex", flexDirection: "row"})}>
      <Item logo="./chips" price="12" qty={3}/>
      <Item logo="./chocolate" price="2" qty={3}/>
      <Item logo="./ice_cream" price="19" qty={3}/>
      <Item logo="./pizza" price="12" qty={3}/>
    </span>
  );
}

export default App;
