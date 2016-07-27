var React=require('react');
var ReactDOM=require('react-dom');
var OpenMail=require('./OpenMail');
var Mail=React.createClass(
  {
	getInitialState:function()
         {
           return {nameUp:'',
         showModal : false};

         },
         handleShowModal: function(){
           console.log("show");
           this.setState({showModal : true})
         },
         handleHideModal : function(){
           console.log("hide false");
           this.setState({showModal : false})
         },

    render:function()
    {
      return(
        <div className="Mail" id = "Mail">

      <div className="row">

        <form>
        <div className="MailDiv">
		<a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} data-toggle="modal">
		<ul><li>{this.props.AllMail.msg_from}</li>
        <li>{this.props.AllMail.Msg_snippet}</li>
        </ul>
		</a>
		{this.state.showModal?<OpenMail handleHideModal={this.handleHideModal} 
		AllMail={this.props.AllMail} />:null}
          </div>
            </form>

      </div>
    </div>
    );
  }
});
module.exports = Mail;
