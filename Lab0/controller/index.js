const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const candidates = [];
let votes =[];
const casted =[];

app.get('/getcandidates',(req,res)=>{
    return res.status(200).json({msg:candidates});
})

app.post('/castVote',(req,res)=>{
    const ind = candidates.indexOf(req.body.candidate);
    const cind =casted.indexOf(req.body.name); 
    if(cind==-1){
        if(ind>=0){
            let old =votes[ind]; 
            votes[ind]=old+1;
            casted.push(req.body.name)
            return res.status(200).json({msg:{candidates,votes,status:"sucess"}});
        }
    }
    return res.status(200).json({msg:{candidates:"",votes:"",status:"casted"}});
})

app.post('/addcandidates',(req,res)=>{
    candidates.push(req.body.name);
    votes.push(0);
    return res.status(200).json({msg:candidates});
})

app.get('/getResult',(req,res)=>{
    let mx1=-1;
    let ind1 = -1;
    for(let i = 0;i<votes.length;i++){
        if(votes[i]>mx1){
            mx1 = votes[i];
            ind1 = i;
        }
    }
    let mx2=-1;
    let ind2 = -1;
    for(let i = 0;i<votes.length;i++){
        if(votes[i]>mx2 && i!=ind1){
            mx2 = votes[i];
            ind2 = i;
        }
    }
    return res.status(200).json({msg:{
                        one:{name:candidates[ind1],vote:mx1},
                        two:{name:candidates[ind2],vote:mx2}
                    }
                })
})

app.get('/getReport',(req,res)=>{
    return res.status(200).json({msg:{candidates,votes}})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server Listning on ${PORT}`)
});
