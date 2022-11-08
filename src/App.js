import './index.scss';
import React from "react";

const questions = [
    {
        title: 'Как проверить значение null по типу?',
        variants: [
            'null == typeof null',
            'var a = null ' + '\n' + '(!a && typeof a === "object")',
            'typeof null === typeof null'],
        correct: 1,
    },

];

function Result() {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>Вы отгадали 3 ответа из 10</h2>
            <button>Попробовать снова</button>
        </div>
    );
}

function Game({question}) {
    return (
        <>
            <div className="progress">
                <div style={{width: '10%'}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((question, index) =>
                        <li key={index}>{question}</li>)
                }
            </ul>
        </>
    );
}

function App() {

    const [step, setStep] = React.useState(0);
    const question = questions[step];
    console.log(question);

    return (
        <div className="App">
            <Game question={question}/>
            {/*<Result />*/}
        </div>
    );
}

export default App;
