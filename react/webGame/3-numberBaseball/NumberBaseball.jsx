import React, { Component } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않게 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i<4; i+= 1){
        const chosen = candidate.splice(Math.floor(Math.random()* (9-i)), 1)[0];
        array.push(chosen);
    }
    console.log(array);
    return array;
}

class NumberBaseball extends Component {
    constructor(props){
        super(props);
        this.state = {
            result : '',
            value : '',
            answer : getNumbers(),
            tries: []
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onSubmitForm (e){
        e.preventDefault();
        console.log(this.state.value);
        if(this.state.value === this.state.answer.join('')){
            this.setState({
                result:"홈런!!!",
                tries: [...this.state.tries, {try:this.state.value, result: '홈런!!!'}]
            });
            this.setState({
                value : '',
                answer: getNumbers(),
                tries: [],
            });
        }else{
            const answerArray = this.state.value.split('').map(v=>parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9){ // 10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value : '',
                    answer: getNumbers(),
                    tries: [],
                });
            }else {
                for(let i =0; i<4; i+=1){
                    if(answerArray[i] === this.state.answer[i]){
                        strike += 1;
                    }else if(this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                    this.setState({
                        tries: [...this.state.tries, {try: this.state.value, result: `${strike}스트라이트 ${ball}볼`}],
                        value : ''
                    });
                }
            }
        }
    };

    onChangeInput (e) {
        this.setState({
            value : e.target.value
        });
    };

    input;

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} ref={c=>this.input=c} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {
                        this.state.tries.map((item, index) => 
                            <Try key={index+item} item={item} />)
                    }
                </ul>
            </>
        );
    }
}

export default NumberBaseball;