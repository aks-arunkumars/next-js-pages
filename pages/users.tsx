import styles from "../styles/Home.module.css";
export default function Users() {
  const arr = ["Manu", "Deepika", "Rohit", "Athira"];
  const listItems = arr.map((item: string, index: number) => <li key={index}> {item}</li>);
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <h3>Names</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
