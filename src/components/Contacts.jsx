import styles from '../components/phoneBook.module.css';
import { nanoid } from 'nanoid';

const Contacts = ({ contacts, filter, onDelete }) => {
  let filtered = contacts;
  if (filter.toLowerCase()) {
    filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    const elements = filtered.map(({ name, number, id }) => {
      return (
        <li key={id}>
          <p className={styles.name}>{name}</p>
          <p className={styles.name}>{number}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      );
    });

    return <ol>{elements}</ol>;
  }
};
export default Contacts;
