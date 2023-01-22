import styles from '../components/phoneBook.module.css';
import { nanoid } from 'nanoid';

const Contacts = ({ contacts, filter }) => {
  let filtered = contacts;
  if (filter.toLowerCase()) {
    filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    const elements = filtered.map(({ name, number }) => (
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
  }
};
export default Contacts;
