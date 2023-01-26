import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/phoneBook.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    if (this.isDublicate(name, number)) {
      return alert(
        `Dear User, ${name} with number ${number} is already in your contacts!`
      );
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(3),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });

    // Додає в масив новий контакт за допомогою методу concat:
    // var joined = this.state.contacts.concat(data);
    // this.setState({ contacts: joined });
  };

  onFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  onChangeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  onDelete = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(user => user.id !== id);
      return { contacts: newContacts };
    });
  };

  isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const contact = contacts.find(({ name }) => {
      return name.toLocaleLowerCase() === normalizedName;
    });
    return Boolean(contact);
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts && contacts.length > 0) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      const { contacts } = this.state;
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const isContacts = Boolean(this.state.contacts.length);
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <div className={styles.blockContact}>
          <h2 className={styles.title}>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} />
          {isContacts && (
            <Contacts onFilter={this.onFilter} onDelete={this.onDelete} />
          )}
          {!isContacts && <p>There are no contacts in your Phone Book...</p>}
          <></>
        </div>
      </div>
    );
  }
}
