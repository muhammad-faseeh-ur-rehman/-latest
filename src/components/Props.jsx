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

// const Props = (props) => {
//   return (
//     <div>
//       <h1> {props.user[1].name} </h1>
//       <p> {props.user[1].age} </p>
//       <p> {props.user[1].height} </p>
//       <h1> {props.user[1].city} </h1>
//     </div>
//   );
// };

// export default Props;

const Props = (props) => {
  return (
    <div>
      {props.user.map((value, index) => {
        return (
          <div
            key={index}
            className="w-full bg-gray-200 p-4 rounded-lg shadow-md mb-4  "
          >
            <h1>{value.name}</h1>
            <p>{value.age}</p>
            <p>{value.height}</p>
            <p>{value.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Props;
