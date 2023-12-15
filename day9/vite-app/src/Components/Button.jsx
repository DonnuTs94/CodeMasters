/* eslint-disable react/prop-types */
// import PropTypes from "prop-types"

const Button = ({ type, className, children, ...props }) => {
  // console.log("type: ", type)
  // console.log("className: ", className)
  // console.log("children: ", children)

  const buttonClass = ["text-white px-4 py-2 rounded-md"]

  if (type === "primary") {
    buttonClass.push("bg-primary")
  }

  if (type === "secondary") {
    buttonClass.push("bg-secondary")
  }

  if (className) {
    className.split(" ").forEach((item) => {
      buttonClass.push(item)
    })
  }

  return (
    <button type="submit" className={buttonClass.join(" ")} {...props}>
      {children}
    </button>
  )
}

// const Button = ({ name, variant }) => {
//   return (
//     <button
//       className={`py-2 px-4 rounded ${
//         variant === "primary"
//           ? "bg-primary text-white"
//           : variant === "secondary"
//           ? "bg-secondary text-white"
//           : ""
//       }`}
//     >
//       {name}
//     </button>
//   )
// }

// Button.propTypes = {
//   name: PropTypes.string.isRequired,
//   variant: PropTypes.string,
// }

export default Button
