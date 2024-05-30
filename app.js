/**
 *
 * <div id= "parent">
 *      <div id ="child"
 *      <h1>Iam an h1 tag</h1>
 *      <h1>Iam an h2 tag</h1>
 *      </div>
 * </div>
 *
 *ReactElement(Object)=>HTML(Browser Understants)
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div",{ id: "child1" },[
    React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h2",{},"Iam an h2 tag ")
]),
React.createElement("div",{ id: "child2" },[
    React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h2",{},"Iam an h2 tag ")
])
)

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
