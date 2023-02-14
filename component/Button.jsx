import styled from "@emotion/styled";

export default function ButtonComponent({ label, compact, bg, color }) {
  const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 7px;
    height: 45px;
    width: ${(props) => (props.compact ? "fit-conten" : "100%;")}
    margin-top: 0.75em;
    font-size: 0.9em;
    cursor: pointer;
    background-color: ${bg};
    color: ${color && bg ? color : "#000000"};
  `;

  return <Button compact={compact}>{label}</Button>;
}
