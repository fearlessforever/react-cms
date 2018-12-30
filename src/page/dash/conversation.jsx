import React,{Component} from 'react'
import Header from 'src/component/dashboard/header'
import {
  Box,
  BoxHeader,
  BoxBody
} from 'src/component/dashboard/box'
import asset from 'src/utils/asset'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import {UPDATE_MESSAGE_NOTIF} from 'src/store/type'

class Conversation extends Component{
  render(){
    let { data={} } = this.state
    let MessageList = data.chat.map((val,k)=>{
      return <MessageItem key={`msg-${k}`} {...val} />
    })

    return(
      <div>
        <Header title="Chat Message" />
        <div className="col-xs-12 col-md-7">
        <Box>
          <BoxHeader>
            <h2>Conversation</h2>
          </BoxHeader>

          <BoxBody>
            <div className="conversation-wrapper" >
              <div className="conversation-content">
                <PerfectScrollbar
                  containerRef={this.scrollInstanceTes.bind(this)}
                  className="conversation-inner" style={{ maxHeight:'300px' }}
                >
                  { MessageList }
                </PerfectScrollbar>
              </div>
              {/*============================================================================*/}
              <div className="conversation-new-message">
              <form>
                <div className="form-group">
                  <textarea onChange={e=>this.handleChangeValueOnInput('message',e.target.value)} className="form-control" rows="2" placeholder="Enter your message..."></textarea>
                </div>
                <div className="clearfix">
                  <button onClick={this.onSubmitHandle.bind(this)} type="submit" className="btn btn-success pull-right">Send message</button>
                </div>
              </form>
              </div>
            </div>
          </BoxBody>
        </Box>
        </div>
      </div>
    )
  }
  scrollToBottom = () => {
    this.scrollInstance.scrollTop= this.scrollInstance.scrollHeight
  }

  onSubmitHandle(e){
    e.preventDefault()
    let { inputData={} } = this.state
    let newData = [...this.state.data.chat]
    newData.push({
      image:'external/img/no_image.jpg',
      name:'No Name',
      position:'right',
      time:'just now',
      message:inputData.message
    })

    this.setState(function(prev){
      return{
        data:{...prev.data,chat:newData}
      }
    },()=>{
      //callback after new message
      let message = [...this.props.messageNotif]
      message.reverse().push({
        name:'No Name',
        pic:'/external/img/no_image.jpg',
        teks:inputData.message.substr(0,50),
        waktu:'just now'
      })
      this.props.addNewMessageNotif(message.reverse());
    })
    this.scrollToBottom();
  }

  handleChangeValueOnInput(key , value){
    if (key == null) {
			return;
		}
		if (value == null) {
			return;
    }
    this.setState(function(prev){
      return{
				inputData:{...prev.inputData,[key]:value},
      }
    })
  }
  scrollInstanceTes(e){
    this.scrollInstance=e
  }
  constructor(){
    super()
    this.state=defaultState;
  }
}

export default connect(store=>{
  return{
    messageNotif:store.dashBoard.messageList
  }
},(dispatch)=>{
  return{
    addNewMessageNotif: (messageNotif) =>{
      dispatch({
        type:UPDATE_MESSAGE_NOTIF,
        value:messageNotif
      })
    }
  }
})(Conversation)

//================================================
const MessageItem = (props)=>{
  return(
    <div className={"conversation-item clearfix "+(props.position === 'right' ? 'item-right' : 'item-left')}>
      <div className="conversation-user">
      <img src={asset(props.image)} alt="" />
      </div>
      <div className="conversation-body">
      <div className="name"> {props.name} </div>
      <div className="time hidden-xs"> {props.time} </div>
      <div className="text">{props.message}</div>
      </div>
    </div>
  )
}
//================================ Data Samples =====================================
const Message = [
  {
    image:'external/img/samples/ryan.png',
    name:'Ryan Gossling',
    time:'September 21, 2013 18:28',
    message:`Semua berubah semenjaka negara api menyerang.`,
    position:'left'
  },
  {
    image:'external/img/samples/ryan.png',
    name:'Ryan Gossling',
    time:'September 21, 2013 18:28',
    message:`Kita butuh avatar baru`,
    position:'left'
  },
  {
    image:'external/img/samples/emma.png',
    name:'Emma',
    time:'September 21, 2013 18:28',
    message:`tidak , kita butuh dragon ball ....`,
    position:'left'
  },
  {
    image:'external/img/no_image.jpg',
    name:'No Name',
    time:'September 21, 2013 18:28',
    message:`Wkwkwkw`,
    position:'right'
  },
  {
    image:'external/img/samples/emma.png',
    name:'Emma',
    time:'September 21, 2013 18:28',
    message:`imma outa here`,
    position:'left'
  },
  {
    image:'external/img/samples/ryan.png',
    name:'Ryan Gossling',
    time:'September 21, 2013 18:28',
    message:`wut ...............`,
    position:'left'
  },
  {
    image:'external/img/no_image.jpg',
    name:'No Name',
    time:'September 21, 2013 18:28',
    message:`pfffttt`,
    position:'right'
  },
]
//================================================
const defaultState = {
  inputData:{
    message:''
  },
  data:{
    chat:Message
  }
};
