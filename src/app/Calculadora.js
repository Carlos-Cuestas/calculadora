"use client"; // Indicamos que este componente debe ser renderizado en el cliente 
import { useState } from 'react';

import styles from './Calculadora.module.css';

function Calculadora() {
    const [input, setInput] = useState(''); // Estado para el valor de entrada 
    const [result, setResult] = useState(''); // Estado para el resultado 
    const [isResultShown, setIsResultShown] = useState(false); // Estado para indicar si se ha mostrado un resultado 

    // Función que maneja los clics en los botones de la calculadora 
    const handleClick = (e) => {
        const value = e.target.name;
        if (isResultShown) {
            if (!isNaN(value)) { // Si se muestra el resultado y se presiona un número
                setInput(value); // Reemplazar el input con el nuevo número
            } else { // Si se presiona un operador
                setInput(result + value); // Continuar con la operación usando el resultado anterior
            }
            setIsResultShown(false);
        } else {
            setInput(input + value); // Añadir el valor del botón al input
        }
    };

    // Función que maneja el cálculo del resultado 
    const calculate = () => {
        try {
            // Evaluar la expresión matemática en el input 
            const evalResult = eval(input).toString();
            setResult(evalResult);
            setIsResultShown(true); // Indicar que se ha mostrado el resultado
        } catch (err) {
            setResult('Error'); // Manejar errores en la evaluación 
            setIsResultShown(false); // Permitir la corrección de errores
        }
    };

    // Función que limpia el input y el resultado 
    const clear = () => {
        setInput('');
        setResult('');
        setIsResultShown(false);
    };

    // Función que borra el último carácter del input 
    const backspace = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <div className={styles.container}>
            <h1>Calculadora</h1>
            <div className={styles.calculadora}>
                <div className={styles.input}>
                    <input type="text" value={input} readOnly />
                </div>
                <div className={styles.result}>{result}</div>
                <div className={styles.buttons}>
                    {/* Números */}
                    <div className={styles.numbers}>
                        <button className={styles.button} name="7" onClick={handleClick}>7</button>
                        <button className={styles.button} name="8" onClick={handleClick}>8</button>
                        <button className={styles.button} name="9" onClick={handleClick}>9</button>
                        <button className={styles.button} name="4" onClick={handleClick}>4</button>
                        <button className={styles.button} name="5" onClick={handleClick}>5</button>
                        <button className={styles.button} name="6" onClick={handleClick}>6</button>
                        <button className={styles.button} name="1" onClick={handleClick}>1</button>
                        <button className={styles.button} name="2" onClick={handleClick}>2</button>
                        <button className={styles.button} name="3" onClick={handleClick}>3</button>
                        <button className={styles.button} name="0" onClick={handleClick}>0</button>
                        <button className={styles.button} name="." onClick={handleClick}>.</button>
                    </div>
                    {/* Operadores */}
                    <div className={styles.operators}>
                        <button className={styles.button} onClick={clear}>AC</button>
                        <button className={styles.button} onClick={backspace}>C</button>
                        <button className={styles.button} name="/" onClick={handleClick}>/</button>
                        <button className={styles.button} name="*" onClick={handleClick}>*</button>
                        <button className={styles.button} name="-" onClick={handleClick}>-</button>
                        <button className={styles.button} name="+" onClick={handleClick}>+</button>
                        <button className={styles.button} onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;
