import Button from "../UI/Button";
import styles from "@/styles/header.module.css"

const LoginBlock = () => {
  return (
    <>
      <a href="/login">Login</a>
      <Button text="Buy Nesa" pathname="/shop" />
    </>
  );
};

export default LoginBlock;
