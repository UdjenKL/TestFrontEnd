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
    {
        title: ''
    }

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

function Game({question, onClickVariant}) {
    return (
        <>
            <div className="progress">
                <div style={{width: '10%'}} className="progress__inner"></div>
            </div>

            <h1>{question.title}</h1>
             <img src="../img/1.png"/>
            <ul>
                {
                    question.variants.map((question, index) =>
                        <li onClick={() => onClickVariant(index)} key={index}>{question}</li>)
                }
            </ul>

        </>
    );
}

function App() {

    const [step, setStep] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        // console.log(step,index);
        console.log(step + 1)
    }

    console.log(question);

    return (
        <div className="App">
            <Game question={question} onClickVariant={onClickVariant}/>
            {/*<Result />*/}
        </div>
    );
}

export default App;
