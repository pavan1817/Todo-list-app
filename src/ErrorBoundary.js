// import React, {Component} from 'react'

// class ErrorBoundary extends React.Component { 
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
    
//     static getDrivedStateFromError(error){
//         return { hasError: true, error}
//     }

//     componentDidCatch(error, errorInfo){
//         console.log(error, errorInfo);
//     }

//     render(){
//         if(this.state.hasError){
//             return <p> Reload the app.. </p>
//         }
//         return this.props.children
//     }
// }

// // class ErrorBoundary extends React.Component {
// //     state = {
// //       hasError: false,
// //       error: null,
// //       errorInfo: null
// //     };
  
// //     static getDerivedStateFromError(error) {
// //       return { hasError: true, error };
// //     }
  
// //     componentDidCatch(error, errorInfo) {
// //       this.setState({ errorInfo });
// //     }
  
// //     render() {
// //       if (this.state.hasError) {
// //         return (
// //           <div>
// //             <h2>Something went wrong.</h2>
// //             <p>{this.state.error && this.state.error.toString()}</p>
// //             <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
// //           </div>
// //         );
// //       }
  
// //       return this.props.children;
// //     }
// //   }
  
// export default ErrorBoundary