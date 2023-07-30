import React from 'react';
import ItemLists from './ItemLists';
const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <>
      {(items.length)?(
        <ItemLists
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete} />
        ) : (
        <p>The list is empty</p>
      )}
    </>
  );
};

// const Content = () => {
// const [name, setName] = useState('first');
// function handleChange() {
//   const val = ["first", "second", "third"];
//   const int = Math.floor(Math.random() * 3);
//   setName(val[int]);
// };
// const handleClick = () => {
//   console.log('Button is Clicked!');
// };
// const handleClick2 = (name) => {
//   console.log(`Hii, ${name} here!`);
// }

// function namee(){
//   return console.log('new state is return');
// }

// const [count, setCount] = useState(0);
// const [name, setName] = useState(() => namee());
// function incrementFunction(){
//   setCount((prevCount) => {
//     return prevCount + 1;
//   });
// }
// function decrementFunction(){
//   setCount((prevCount) => {
//     return prevCount - 1;
//   });
// }
//   return (
//     <div>
//       <p>This is my {name} react app</p>
//       {/* <button onClick={handleClick}>Click Here</button> */}
//       <button onClick={handleChange}>Click Here</button>
//       {/* <button onClick={decrementFunction}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementFunction}>+</button> */}
//     </div>
//   );
// };

export default Content;
