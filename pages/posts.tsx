import styles from "../styles/Home.module.css";
export default function Posts() {
  const arr: string[] = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Recusandae iusto soluta velit",
    "Uiok rerum sapiente iste similique pariatur tenetur eaque",
    "iusto soluunde sint placeat corrupti quo id ",
  ];
  const listItems = arr.map((item: string, index: number) => (
    <li key={index}> {item}</li>
  ));
  return (
    <div className={styles.container}>
          <h1>Posts</h1>
          <h3>Descriptions</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
