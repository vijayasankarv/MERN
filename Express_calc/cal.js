// a simple calculator
module.exports={
    add:function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)+parseFloat(b);
        }else{
                 throw "wrong input";
        }
},

sub:function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)-parseFloat(b);
        }else{
                 throw "wrong input";
        }
},

mul:function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)*parseFloat(b);
        }else{
                 throw "wrong input";
        }
},

mod:function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)%parseFloat(b);
        }else{
                 throw "wrong input";
        }
},

div:function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(parseFloat(a)/parseFloat(b));
        }else{
                 throw "wrong input";
        }
}
};
