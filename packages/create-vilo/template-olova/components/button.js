import "../assets/css/button.css";
const Button = (props) => {
  return `
      <button @click="${props.click}">${props.text}</button>
      `;
};

export default Button;
