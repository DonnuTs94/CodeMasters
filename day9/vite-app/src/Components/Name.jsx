import PropTypes from "prop-types"

const Nama = (props) => {
  const className = props.className.split(" ")
  className.push("text-red-400")

  return <h1 className={className.join(" ")}>Hello {props.name}</h1>
}

Nama.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}
export default Nama
