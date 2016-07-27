var React=require('react');
var ReactDOM=require('react-dom');
var Mail=require('./Mail');

var MailList=React.createClass(
  {
    render:function()
    {
      console.log(this.props.data1);
    var MyMails = this.props.data1.map(function(mail) {
      return (
        <Mail AllMail={mail} key={mail.msg_id}></Mail>
      );
    }.bind(this));
    return (
      <div className="MailList">
          {MyMails}
      </div>
    );
  }
 });

module.exports=MailList;
