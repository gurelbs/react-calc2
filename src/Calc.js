import React from 'react'

export default function Calc(props) {
    return (
        <>
        <div className="row p-1">
            <button onClick={() => props.onBtnPressed(7)} className="col-3 btn btn-dark">7</button>
            <button onClick={() => props.onBtnPressed(8)} className="col-3 btn btn-dark">8</button>
            <button onClick={() => props.onBtnPressed(9)} className="col-3 btn btn-dark">9</button>
            <button onClick={() => props.operatorPressed('+')} className="col-3 btn btn-info">+</button>
        </div>
        <div className="row p-1">
            <button onClick={() => props.onBtnPressed(4)} className="col-3 btn btn-dark">4</button>
            <button onClick={() => props.onBtnPressed(5)} className="col-3 btn btn-dark">5</button>
            <button onClick={() => props.onBtnPressed(6)} className="col-3 btn btn-dark">6</button>
            <button onClick={() => props.operatorPressed('-')} className="col-3 btn btn-info">-</button>
        </div>
        <div className="row p-1">
            <button onClick={() => props.onBtnPressed(1)} className="col-3 btn btn-dark">1</button>
            <button onClick={() => props.onBtnPressed(2)} className="col-3 btn btn-dark">2</button>
            <button onClick={() => props.onBtnPressed(3)} className="col-3 btn btn-dark">3</button>
            <button onClick={() => props.operatorPressed('/')} className="col-3 btn btn-info">/</button>
        </div>
        <div className="row p-1">
            <button onClick={() => props.onBtnPressed(0)} className="col-3 btn btn-dark">0</button>
            <button onClick={() => props.clear()} className="col-3 btn btn-danger">AC</button>
            <button className="col-3 btn btn-dark">.</button>
            <button onClick={() => props.operatorPressed('*')} className="col-3 btn btn-info">X</button>
        </div>
        <div className="row p-1">
        <button onClick={() => props.findOpertor()} className="col-12 btn btn-success">=</button>
        </div>
        </>
    )
}
