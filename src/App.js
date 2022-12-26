// @flow
import React from "react";
import {Block} from "baseui/block"
import {Card} from "baseui/card"
import { useStyletron } from "styletron-react"




const Item = (props) => {
  return (    
<Card display="flex" flexDirection="row">
  <span display="flex" flexDirection="column">
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
  return (
    <Block display="flex" flexDirection = "row">
      <Item logo="./chips" price="12" qty={3}/>
      <Item logo="./chocolate" price="2" qty={3}/>
      <Item logo="./ice_cream" price="19" qty={3}/>
      <Item logo="./pizza" price="12" qty={3}/>
    </Block>
  );
}

export default App;
