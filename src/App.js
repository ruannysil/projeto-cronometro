import React, {Component} from 'react';
import './App.css';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'COMEÇAR'
        };
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.limpar = this.limpar.bind(this);
    }
    comecar() {
        let state = this.state;

        if(this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'CONTINUAR'
        }else{
            this.timer = setInterval(() =>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
                
            },100)
            state.botao = 'PAUSAR';
        }
        this.setState(state);
    }
    limpar(){
       
        if(this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.botao = 'COMEÇAR';
        this.setState(state);

    }
    render(){
        return(
            <div className='container'>
                <img src={require('./assets/cronometro.png')} alt="" className='img' />
                <span href='' className='timer'>{this.state.numero.toFixed(1)}</span>
                <div className='areaBtn'>
                    <span className='botao' onClick={this.comecar}>{this.state.botao}</span>
                    <span className='botao' onClick={this.limpar}>LIMPAR</span>
                </div>
            </div>
        )
    }
}

export default App;