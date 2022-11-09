import './index.scss';
import React from "react";

const questions = [
    {
        imageUrl: '../img/1.png',
        title: 'Как проверить значение null по типу?', variants: [
            'null == typeof null',
            'var a = null ' + '\n' + '(!a && typeof a === "object")',
            'typeof null === typeof null'],
        correct: 1,
    },
    {
        imageUrl: '../img/2.png',
        title: 'Чему равен null?',
        variants: [
            'console.log(typeof null == "object");',
            'console.log(typeof null == null);',
            'console.log(typeof null != null);'],
        correct: 1,
    },
    {
        imageUrl: '../img/3.jpg',
        title: 'Почему код ниже не будет работать?',
        variants: [
            'Запись console.log необходимо прописывать лишь в отдельных файлах");',
            'Необходима точка с запятой после console.log("Hi!")',
            'Неверно записан атрибут type'],
        correct: 0,
    }

];

function Result({correct}) {
    return (
        <div className="result">
            <img src="./logo512.png"/>
            <img src="./logo512.png"/>
            <img src="./logo512.png"/>
            <h1>Вы отгадали {correct} ответа из {questions.length}</h1>
            <button href="/">Попробовать снова</button>
        </div>
    );
}

function Game({step , question, onClickVariant}) {

    const scaleValue = Math.round((step/questions.length)*100);
    console.log(scaleValue);

    return (
        <>
            <div className="progress">
                <div style={{width: `${scaleValue}%`}} className="progress__inner"></div>
            </div>

            <h1>{question.title}</h1>
            <img src={question.imageUrl}/>
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
    const [correct,setCorrect] = React.useState(0);
    const [step, setStep] = React.useState(0);
    const question = questions[step];


    const onClickVariant = (index) => {
        setStep(step+1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }

    console.log(question);

    return (
        <div className="App">
            {
                step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>
            }
        </div>
    );
}

export default App;
