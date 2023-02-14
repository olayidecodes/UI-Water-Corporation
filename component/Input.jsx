import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  display: block;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 7px;
  padding: 1em;
  font-size: 1em;
`;

const Label = styled.label`
  font-size: 0.9em;
  display: block;
  margin-bottom: 0.5em;
`;
export default function InputComponent({ label, value, changeHandler, name }) {
  return (
    <div>
      <Label>{label}</Label>
      <Input value={value} onChange={changeHandler} name={name} />
    </div>
  );
}
