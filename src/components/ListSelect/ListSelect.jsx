import React from "react";
import Select from "../Select/Select";
import style from "./index.module.css";

function ListSelect({ children, list, setList }) {
  return (
    <div className={style.list}>
      {list.map((item, index) => (
        <Select
          valueProp={item}
          key={item}
          onChange={(e) => {
            let newValue = Number(e.currentTarget.value);
            if (!list.includes(newValue)) {
              setList((prevList) =>
                [...prevList].map((item, listIndex) =>
                  index === listIndex ? newValue : item
                )
              );
              return true;
            }
          }}
          onClose={() => {
            setList((prevList) =>
              prevList.filter((listItem) => listItem !== item)
            );
          }}
        >
          {children}
        </Select>
      ))}
      <button className={style.button}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            if (list.length === children.length) return;
            let newItem;
            do {
              newItem =
                children[Math.floor(Math.random() * children.length)].props
                  .value;
            } while (list.includes(newItem));

            setList((prevList) => [...prevList, newItem]);
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 7C11 6.73478 10.8946 6.48043 10.7071 6.29289C10.5196 6.10536 10.2652 6 10 6C9.73478 6 9.48043 6.10536 9.29289 6.29289C9.10536 6.48043 9 6.73478 9 7V9H7C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11H9V13C9 13.2652 9.10536 13.5196 9.29289 13.7071C9.48043 13.8946 9.73478 14 10 14C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9H11V7Z"
            fill="#354D78"
          />
        </svg>
      </button>
    </div>
  );
}

export default ListSelect;
