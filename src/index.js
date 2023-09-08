import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Books } from "./book";
import books from "./books";

const Booklist = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Books {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};
// const EventExample = () => {
//   const handleChangeInput = () => {
//     console.log("event is changed");
//   };
//   const handleChangebutton = () => {
//     alert("event is clicked");
//   };
//   const handleChangeForm = (e) => {
//     e.preventDefault();
//     console.log("form submited");
//   };
//   return (
//     <section>
//       <form onSubmit={handleChangeForm}>
//         <h2>Search for your Favourite books</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleChangeInput}
//           style={{ margin: "1rem 0" }}
//         />
//       </form>
//       <button onClick={handleChangebutton}>click me</button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
