// import styled from "styled-components";
// import "./CustomerItem.css";
import styles from "./CustomerItem.module.css";
// const DeleteButton = styled.button`
//   background-color: red;
//   padding: 8px;
//   transition: opacity 0.5s ease;
//   &:hover {
//     opacity: 0.5;
//   }
// `;

const CustomerItem = ({ customer, handleDelete }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <li className={styles.customerItem}>
      <div className={styles.customerInfo} onClick={handleClick}>
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className={styles.customerAvatar}
        />
        <span
          className={styles.className}
          // style={{
          //   color: "red",
          // }}
        >
          {" "}
          {customer.customerName}
        </span>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(customer)}
      >
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
