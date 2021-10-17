import React, {useState} from "react";
import styles from "./input-panel.module.css";
import InputPanelProps from "./input-panel.props";

export const SearchPanel: React.FC<InputPanelProps> = ({addTodo}) => {
  const [state, setState] = useState('')
  const changeLocalState = (e:React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
    console.log(state)
  }
  const customStyle = { width: "371px", margin: "0 auto" };
  return (
    <div className={styles.input} style={customStyle}>
      <form>
        <input placeholder="Enter new todo" onChange={changeLocalState} />
      </form>
      <img
        className={styles.searchIco}
        src="./search.svg"
        alt="search"
      />
      <button className={styles.submitBtn} onClick={()=> addTodo(state)}>+</button>
    </div>
  );
};
