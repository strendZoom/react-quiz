import './index.scss';
import React from 'react';
import Game from './components/Game';
import Result from './components/Result';

function App() {
  const [correct, setCorrect] = React.useState(0);
  const [getQuestion, setGetQuestion] = React.useState([]);
  const [step, setStep] = React.useState(0);

  window.onload = () => {
    fetch('https://5e0aaf2e27888f3e.mokky.dev/questions')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setGetQuestion(arr);
      });
  };

  const question = getQuestion[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== getQuestion.length ? (
        <Game
          getQuestion={getQuestion}
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correct={correct} getQuestion={getQuestion} />
      )}
    </div>
  );
}

export default App;
