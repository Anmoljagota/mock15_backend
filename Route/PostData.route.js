const mongoose = require("mongoose");
const { PostdataModel } = require("../Models/PostData");
const express = require("express");
const postDataroute = express.Router();

postDataroute.post("/post", async (req, res) => {
  try {
    let postdata = new PostdataModel(req.body);
    await postdata.save();
    res.send("Product created");
  } catch (err) {
    res.send(err);
  }
});
postDataroute.get("/post", async (req, res) => {
    console.log(req.query.filter)

    if(req.query.filter && req.query.sort){
if(req.query.sort==="LTH"){
    let getfilter = await PostdataModel.find({destination:req.query.filter}).sort({ budget: 1 });
    res.send(getfilter)
}
if(req.query.sort==="HTL"){
    let getfilter = await PostdataModel.find({destination:req.query.filter}).sort({ budget: -1 });
    res.send(getfilter)
}
    }
  else if (req.query.filter) {
    let getpostdata = await PostdataModel.find({
      destination: req.query.filter,
    });
    res.send(getpostdata);
  } else if (req.query.sort) {
    console.log(req.query.sort,"sortttt");
    console.log("hey run");
    if ((req.query.sort === "LTH")) {
        console.log("LTH RUNNING")
      let getfilter = await PostdataModel.find({}).sort({ budget: 1 });
      res.send(getfilter);
    } else if ((req.query.sort === "HTL")) {
        console.log("HTL RUNNING")
      let getfilter1 = await PostdataModel.find({}).sort({ budget: -1 });
      res.send(getfilter1);
    }
  } else {
    console.log("i am running");
    try {
      let getpostdata = await PostdataModel.find({});
      res.send(getpostdata);
    } catch (err) {
      res.send(err);
    }
  }
});
module.exports = {
  postDataroute,
};
