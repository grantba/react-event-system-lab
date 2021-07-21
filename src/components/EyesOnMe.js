// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    render() {
        return (
            <div id="eyes-on-me">
                <button onFocus={(e) => console.log('Good!')} onBlur={(e) => console.log('Hey! Eyes on me!')}>Button</button>
            </div>
        )
    }
}

// import React from 'react';

// class EyesOnMe extends React.Component {

//   onFocus = () => console.log('Good!')

//   onBlur = () => console.log('Hey! Eyes on me!')

//   render() {
//     return (
//       <button onFocus={this.onFocus} onBlur={this.onBlur}>
//         Eyes on me, please!
//       </button>
//     )
//   }
// }

// export default EyesOnMe;