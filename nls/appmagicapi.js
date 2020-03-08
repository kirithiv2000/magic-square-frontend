function main(e){
var w;
var v;
w=[]
for (var i=0; i<e;i++){
    v=[]
    for (var j=0; j<e;j++){
        v.push(0)
    }w.push(v)
}

var turn=0;
var side=Math.floor(w.length/2);
var start=1;

while(true){
    if (w[turn][side]==0){
        var changed=0;
        w[turn][side]=start
        start+=1
        if (turn==0){
            turn =w.length-1
        }else{
            turn -=1
        }
        if (side==w.length-1){
            side=0
        }else{
            side+=1
        }
    }else{
        changed+=1
        if(side==0){
            side=w.length-1
        }else{
            side-=1
        }
        if(turn==w.length-1){
            turn=1
        }else if(turn==w.length-2){
            turn=0
        }else{
            turn+=2
        }
        if(changed==2){
            break
        }
       
    }
}
console.log(w)

   return w
}


const express = require("express")
const app = express()
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.get("/:square",(req,res)=>{
    res.send(main(req.params.square))
})
app.listen(8000,()=>{
    console.log('server started at 8000')
})

