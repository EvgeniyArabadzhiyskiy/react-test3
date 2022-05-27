

const IconButton = ({ children, type = "button", onClick, ...allyProps }) => {
  return (
    <button className="IconButton" type={type} onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

export default IconButton;
