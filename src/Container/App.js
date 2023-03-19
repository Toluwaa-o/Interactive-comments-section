import React, { Component } from 'react'
import Tweets from '../Components/Tweets.js/Tweets'
import ReplySection from '../Components/Layout/ReplySection/ReplySec'
import Confirmation from '../Components/Confirmation/Confirmation'
import Cover from '../Components/Cover/Cover'
import Footer from '../Components/Footer/Footer'

class App extends Component {
    state = {
        currentUser: null,
        comments: null,
        shouldDelete: false,
        theId: null
    }

    componentDidMount () {
        fetch('./data.json')
        .then(response => response.json())
        .then(res => {
            this.setState({
                comments: res.comments,
                currentUser: res.currentUser
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState !== this.state
    }

    increaseScore = (id) => {
        let ind = null
        for(let com of this.state.comments){
            if(id === com.id){
                ind = this.state.comments.indexOf(com)
                let newSt = [...this.state.comments]
                newSt[ind] = {...newSt[ind], score: newSt[ind].score+1}
                this.setState({comments: [...newSt]})

            }else {
                for(let com of this.state.comments){
                    if(com.replies.length > 0){
                        for(let rep of com.replies){
                            let arrNum = this.state.comments.indexOf(com)
                            if(id === rep.id){
                                ind = com.replies.indexOf(rep)
                                let newSt = [...this.state.comments]
                                newSt[arrNum].replies[ind] = {...newSt[arrNum].replies[ind], score: newSt[arrNum].replies[ind].score+1}
                                this.setState({comments: [...newSt]})
                                return
                            }
                        }
                    }
                }
        }
    }
}

decreaseScore = (id) => {
    let ind = null
    for(let com of this.state.comments){
        if(id === com.id){
            ind = this.state.comments.indexOf(com)
            let newSt = [...this.state.comments]
            newSt[ind] = {...newSt[ind], score: newSt[ind].score-1}
            this.setState({comments: [...newSt]})

        }else {
            for(let com of this.state.comments){
                if(com.replies.length > 0){
                    for(let rep of com.replies){
                        let arrNum = this.state.comments.indexOf(com)
                        if(id === rep.id){
                            ind = com.replies.indexOf(rep)
                            let newSt = [...this.state.comments]
                            newSt[arrNum].replies[ind] = {...newSt[arrNum].replies[ind], score: newSt[arrNum].replies[ind].score-1}
                            this.setState({comments: [...newSt]})
                            return
                        }
                    }
                }
            }
    }
}
}

myDate() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    hour = hour === 0 ? 12 : hour
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute

    let theDate = hour + ':' + minute
    return theDate
}

newTweet = (event) => {
    event.preventDefault()
    const {value} = event.target[0]
    if(value !== '') {
        this.setState({
        comments: [...this.state.comments, {
            "id": this.state.comments.length*2.5,
            "content": value,
            "createdAt": this.myDate(),
            "score": 0,
            "user": {
              "image": { 
                "png": this.state.currentUser.image.png,
              },
              "username": this.state.currentUser.username
            },
            "replies": []
    }]
    })
    
    event.target[0].value = ''
}
}

addReply = (event) => {
    event.preventDefault()

    const {value} = event.target[0]
    
    if(value !== ''){
        let x = event.target[0].getAttribute('class')
    let ind = null
    for(let com of this.state.comments){
        if(Number(x) === com.id){
            ind = this.state.comments.indexOf(com)
            let newSt = [...this.state.comments]
            newSt[ind] = {...newSt[ind], replies: [...newSt[ind].replies, {
                "id": this.state.comments.length*2.5,
                "content": value,
                "createdAt": this.myDate(),
                "score": 0,
                "replyingTo": com.user.username,
                "user": {
                  "image": { 
                    "png": this.state.currentUser.image.png,
                    "webp": this.state.currentUser.image.webp
                  },
                  "username": this.state.currentUser.username
                }
              }]}
              
            this.setState({comments: [...newSt]})
        }else {
            for(let com of this.state.comments){
                if(com.replies.length > 0){
                    for(let rep of com.replies){
                        if(Number(x) === rep.id){
                            ind = this.state.comments.indexOf(com)
                            let newSt = [...this.state.comments]
                            newSt[ind].replies = [...newSt[ind].replies, {
                                "id": this.state.comments.length*2.5,
                                "content": value,
                                "createdAt": this.myDate(),
                                "score": 0,
                                "replyingTo": rep.user.username,
                                "user": {
                                  "image": { 
                                    "png": this.state.currentUser.image.png,
                                    "webp": this.state.currentUser.image.webp
                                  },
                                  "username": this.state.currentUser.username
                                }
                              }]
                            this.setState({comments: [...newSt]})
                            return
                        }
                    }
                }
            }
        }
        }
    event.target[0].value = ''
    }
}

deleteYes = () => {

    let x = this.state.theId
    let ind = null
    for(let com of this.state.comments){
        if(Number(x) === com.id){
            ind = this.state.comments.indexOf(com)
            let newSt = [...this.state.comments]
            newSt.splice(ind, 1)
            this.setState({comments: [...newSt], shouldDelete: !this.state.shouldDelete, theId: null})
        }else {
            for(let com of this.state.comments){
                if(com.replies.length > 0){
                    for(let rep of com.replies){
                        if(Number(x) === rep.id){
                            let arrNum = this.state.comments.indexOf(com)
                                ind = com.replies.indexOf(rep)
                                let newSt = [...this.state.comments]
                                newSt[arrNum].replies.splice(ind, 1)
                                this.setState({comments: [...newSt], shouldDelete: !this.state.shouldDelete, theId: null})
                                return
                        }
                    }
                }
            }
        }
        }
}

deleteReply = (event) => {
    let newSt = {...this.state}
    newSt = {...newSt, shouldDelete: !this.state.shouldDelete, theId: event.target.getAttribute('class')}
    this.setState({
        ...newSt
    })
}

changeHandler = (event) => {
    const {value} = event.target
    let x = event.target.getAttribute('class')
    let ind = null
    for(let com of this.state.comments){
        if(Number(x) === com.id){
            ind = this.state.comments.indexOf(com)
            let newSt = [...this.state.comments]
            newSt[ind] = {...newSt[ind], content: value}
            this.setState({comments: [...newSt]})
        }else {
            for(let com of this.state.comments){
                if(com.replies.length > 0){
                    for(let rep of com.replies){
                        if(Number(x) === rep.id){
                            let arrNum = this.state.comments.indexOf(com)
                                ind = com.replies.indexOf(rep)
                                let newSt = [...this.state.comments]
                                newSt[arrNum].replies[ind] = {...newSt[arrNum].replies[ind], content: value}
                                this.setState({comments: [...newSt]})
                                return
                        }
                    }
                }
            }
        }
        }
}

    render() {
        const Page = this.state.comments ? <div className='fullPage'>
        <Tweets change={this.changeHandler} delete={this.deleteReply} add={this.increaseScore} sub={this.decreaseScore} comments={this.state.comments} send={this.addReply} user={this.state.currentUser} />
        <ReplySection 
        avatar={this.state.currentUser ? this.state.currentUser.image.png : null}
        type='Send' 
        show={true}
        class='textA'
        send={this.newTweet}
        name={this.state.currentUser ? this.state.currentUser.username : null}
        img={this.state.currentUser ? this.state.currentUser.image.png : null}
        />
        {this.state.shouldDelete ? <div>
            <Cover no={this.deleteReply} />
            <Confirmation no={this.deleteReply} delete={this.deleteYes} />
        </div> : null}
        <Footer />
    </div> : <div className="loader"></div>

        

        return (
            {Page}
        )
    }
}

export default App