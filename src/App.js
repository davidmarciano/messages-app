import React from 'react';
import styled from 'styled-components';
import * as api from './api/api';
import './injectGlobal';
import FormSection from './components/FormSection';
import MessagesSection from './components/MessagesSection';

const Wrapper = styled.div`
  width:350px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin:auto;
  background-color:#f9f9f9;
  border:1px solid #efefef;
`;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        messageValue: '',
        items : [],
        filteredItems : [],
        filterValue: ''
    }
  }
  componentDidMount = () => {
    this.getMessages();
  }
  onEmailChange = (event) => {
    const {value} = event.target;
    this.setState({emailValue:value});
  }
  onMessageChange = (event) => {
      const {value} = event.target;
      this.setState({messageValue:value});
  }    
  onSubmit = () => {
      const {emailValue,messageValue} = this.state;
      const data = {email:emailValue,message:messageValue};
      api.postMessage(data)
        .then((isCreated) => isCreated ? this.handleOnSubmitSuccess() : console.log('an error occurred on get request after post'))
        .catch((error) => console.log(error));
  }
  handleOnSubmitSuccess = () => {
    this.getMessages();
    this.clearFields();
  }
  clearFields = () => {
      this.setState({emailValue:'',messageValue:'',filterValue:''});
  }  
  getMessages = () => {
    api.getMessages()
      .then((messsages) => this.setState({items : messsages, filteredItems : messsages}))
      .catch((error) => console.log(error));
  }        
  onFilterChange = (event) => {
      const {items} = this.state;
      const {value} = event.target;        
      const filteredItems = items.filter(({email}) => email.startsWith(value));
      this.setState({filterValue:value});
      this.setState({filteredItems});
  }  
  render() {
    const {emailValue,messageValue,filteredItems,filterValue} = this.state;
    return (
      <Wrapper>
        <FormSection emailValue={emailValue} messageValue={messageValue}
          onEmailChange={this.onEmailChange} onMessageChange={this.onMessageChange} onSubmit={this.onSubmit} />
        <MessagesSection filteredItems={filteredItems} filterValue={filterValue} onFilterChange={this.onFilterChange} />
      </Wrapper>
    );
  }
}

export default App;
