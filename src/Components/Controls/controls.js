import React, {Component} from 'react'
import Plus from './Plus/Plus'
import Minus from './Minus/Minus'

class Controls extends Component {
    state = {
        initialScore: null,
        plus: true,
        minus: this.props.likes > 0 ? false : false
    }

    componentDidMount() {
        this.setState({
            initialScore: this.props.likes
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.plus !== this.state.plus || nextState.minus !== this.state.minus
    }

    myChanger = (sign) => {
        if(sign === 'plus'){
            this.setState({
                minus: this.state.minus ? true : true, plus: !this.state.plus
            })
            
        }else {
            this.setState({
                plus: this.state.plus ? true : true, minus: !this.state.minus
            })
        }
    }

    render() {
        return (
            <div className='Controls'>
                <Plus 
                also={this.props.add}
                handler={this.state.plus} 
                addHandler={this.myChanger} />

                <p>{this.props.likes}</p>
                
                <Minus 
                also={this.props.sub}
                handler={this.state.minus} 
                minusHandler={this.myChanger} />
            </div>
        )
    }
}

export default Controls