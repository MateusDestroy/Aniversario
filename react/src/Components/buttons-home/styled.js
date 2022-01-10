import styled from "styled-components";

const Buttons = styled.div`
  .Buttons  {
    display: flex;
    flex-direction: column;
    padding-top: 10em;
  
  }

  .button1 {
    padding: 8px;
  }
  button :hover {
    background-color: #0085FF;
  }

  .button1 button {
    padding: 10px 2.3em 10px 2.3em;


    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 0.8em;
    color: white;
    border: none;
    background-color: #6C41C8;
    border-radius: 20px;
    
  }


  .button2 button {
    padding: 10px 25px 10px 25px;


    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 0.8em;
    color: white;
    border: none;
    background-color: #6C41C8;
    border-radius: 20px;
  }


  
`;
export default Buttons;
