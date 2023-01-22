import styles from '../components/phoneBook.module.css';
import { nanoid } from 'nanoid';

const Filter = () => {
  const id = nanoid(3);
  const elements = contacts.map(({ name, number }) => (
    <li key={nanoid(3)}>
      <p className={styles.name}>{name}</p>
      <p className={styles.name}>{number}</p>
    </li>
  ));

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default Contacts;
