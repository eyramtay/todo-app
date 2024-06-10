import React, { useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 1 } }}
      whileHover={{ scale: 0.9, transition: { type: "spring", duration: 2 } }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255, 0, 0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        name=""
        id=""
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <FaEdit />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkCircleSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <FaRegTrashAlt />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">completed</span>}
    </motion.li>
  );
};

export default TodoItem;
