// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    render() {
        return (
            <div id="keypad">
                <input type="password" name="password" onKeyUp={(e) => console.log('Entering password...')} placeholder='Enter Password' />
            </div>
        )
    }
}

// import React from 'react';

// class Keypad extends React.Component {

//   handleInputPassword = () => console.log('Entering password...')

//   render() {
//     return (
//       <div>
//         <input 
//           type="password"
//           onKeyUp={this.handleInputPassword} 
//         />
//       </div>
//     )
//   }
// }

// export default Keypad;