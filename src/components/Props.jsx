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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {props.user.map((value, index) => {
        return (
          <div
            key={index}
            className="w-80 bg-white p-5 mb-4 rounded-lg shadow-md"
          >
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              {value.name}
            </h1>

            <p className="text-gray-600">Age: {value.age}</p>
            <p className="text-gray-600">Height: {value.height}</p>
            <p className="text-gray-600">City: {value.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Props;
