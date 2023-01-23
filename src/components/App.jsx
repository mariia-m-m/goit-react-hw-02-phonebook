import styles from '../components/phoneBook.module.css';
import { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(3), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(3), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(3), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(3), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    var joined = this.state.contacts.concat(data);
    this.setState({ contacts: joined });
  };

  onChange = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  onDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(user => user.id !== id),
    }));
  };

  render() {
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Phonebook</h2>
        <Form
          onSubmit={this.formSubmitHandler}
          contacts={this.state.contacts}
        />

        <div className={styles.blockContact}>
          <h2 className={styles.title}>Contacts</h2>
          <>
            <p className={styles.name}>Find contacts by name</p>
            <input
              value={this.state.value}
              onChange={this.onChange}
              className={styles.input}
              placeholder="Name of contact"
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </>
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDelete={this.onDelete}
          />
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
