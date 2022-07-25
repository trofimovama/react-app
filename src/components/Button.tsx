import "./Button.scss";

interface ButtonProps {
  name: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="btn-container">
    <div className="btn btn-main">
      {props.name}
    </div>
  </div>
  );
};

export default Button;