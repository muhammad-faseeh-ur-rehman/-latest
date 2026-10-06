// const Props = (props) => {
//   return (
//     <div>
//       <h1> {props.name} </h1>
//       <p> {props.age} </p>
//       <p> {props.height} </p>
//     </div>
//   );
// };

// export default Props;

const Props = (props) => {
  return (
    <div>
      <h1> {props.user[0].name} </h1>
      <p> {props.user[0].age} </p>
      <p> {props.user[0].height} </p>
      <h1> {props.user[0].city} </h1>
    </div>
  );
};

export default Props;
