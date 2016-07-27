var React=require('react');
var MailList=require('./MailList');
var MailData=require('./MailData.json');

var MailBox = React.createClass({
  getInitialState:function()
  {
    return {data1:[]};
  },

  getallmails: function(){
  this.setState({data1:MailData});
 },

 componentWillMount: function(){
  this.getallmails();
},

 render: function() {
   return (
     <div className="MailBox">


      <MailList data1={this.state.data1} />

     </div>
   );
 }
});
module.exports=MailBox;
