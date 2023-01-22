import styles from '../components/phoneBook.module.css';
import { nanoid } from 'nanoid';

const Contacts = ({ contacts }) => {
  return contacts.map(({ name, number }) => {
    const id = nanoid(3);
    <>
      <h2 className={styles.title}>Contacts</h2>
      <ul>
        <li key={id}>
          <p className={styles.name}>{name}</p>
          <p className={styles.name}>{number}</p>
        </li>
      </ul>
    </>;
  });
};

export default Contacts;
