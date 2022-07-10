import { useState } from "react";
import { StyledButton } from "./ColorPicker.styled";
import { Link } from "../App.styled";
// import { useParams } from "react-router-dom";


const Colorpicker = ({ options }) => {
  // const { tag, name } = useParams();
  // console.log("Colorpicker ~ name", tag);


    const [activIndex, setActivIndex] = useState(0);
  
    const clkBtn = (index) => {
      setActivIndex(index);
    };
  
    return (
      <div>
        <Link to="/about">Go Back</Link>
        <Link to="/">Home</Link>
        {/* <Link to="color-picker">Color Picker</Link> */}
        {options.map(({ label, color }, index) => {
          return (
            <StyledButton
              key={label}
              type="button"
              style={{ backgroundColor: color }}
              activButton={activIndex === index}
              onClick={() => clkBtn(index)}
            ></StyledButton>
          );
        })}
      </div>
    );
  };

  export default Colorpicker