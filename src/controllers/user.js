const _ = require("lodash");
const async = require("async");

module.exports = {
  saveUserInfo : async (req,res) => {
      console.log("getting into code");
      console.log(req.body);
      let data = req.body;

      if(data){
        res.status(200).json({
            status :  true,
            message : data
        })
      }else{
        res.json({
            status :  false,
            message : "Some error occured"
        })  
      }
  
  },
  getUserRequest : async (req,res) => {
      let urlParameters = req.params;
      if(urlParameters){
        res.status(200).json({
            status : true,
            message :  `You have successfully submitted the get request with ${urlParameters}`
        })
      }else{
          res.json({
              status : false,
              message  : "Some error occured"
          })
      }
     
  }
};
