const QuestionSchema = require("../models/questionModel");

exports.savingQuestion = async (req,res)=>{
    var question = new QuestionSchema(); 
    question.question = req.body.question; 
    question.questionLevel = req.body.questionLevel; 
    question.questionOutput = req.body.questionOutput; 
    question.questionExample = req.body.questionExample; 
    await question.save((err, question)=>{
          if(err){
              console.log(err)
          }else {
              res.send(question)
          }
    });
}
// this will reaturn a bunch of questions for a interview 
exports.getQuestions  = async (req, res)=>{    
    if(req.body.level == 'easy'){
        QuestionSchema.aggregate([
            {$match: {questionLevel: "easy"}},
            {$sample: {size: 5}}
        ], function(err, docs) {
            if(err){
                console.log(err)
            }else {
                res.send(docs)
            }
        });
    }
    else if(req.body.level  == 'medium'){

    }else if(req.body.level == 'hard'){

    }else {
        res.send("Invalid choice....")
    }
}
