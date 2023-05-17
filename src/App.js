import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.signature = React.createRef();
    this.handleSkip = this.handleSkip.bind(this);
  }
  handleSubmit = () => {
    this.setState({
      message: 'Ваше соглашение принято. Большая ошибка!'
    })
  }
  handleSkip = () => {
    // вызовите метод focus для значения current рефа
    this.signature.current.focus();
  }
  render() {
    return (
      <div className="app">
        <h1>Important Contract</h1>
        <div className="input">
          <button className="input__button" onClick={this.handleSkip}>
            Скучно! Не хочу читать этот договор!
          </button>
        </div>
        <p className="app__text">
          Это очень важный юридический документ, требующий исключительной внимательности при прочтении.
        </p>
        <p className="app__text">
          При разработке новых версий программного обеспечения вы обязуетесь... и так далее,
          и тому подобное... В случае обнаружения несоответствия каким-либо существующим
          соглашениям вы несёте всю ответственность... Что-то глаза слипаются...
        </p>
        <p className="app__text">
          Протоколы, документы, лицензии! Слияния и поглощения! Подписывая настоящий договор,
          вы подтверждаете, что ознакомлены с содержанием каждого названного документа, и
          соглашаетесь со всеми условиями, указанными в настоящем договоре и перечисленных документах.
          Мы предупредили!
        </p>
        <div className="input">
          <input ref={this.signature} type="text" className="input__name" placeholder="Ваше полное имя" />
          <input onClick={this.handleSubmit} type="submit" className="input__button" value="Я соглашаюсь со всеми условиями!" />
        </div>
        <p className="app__message">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
