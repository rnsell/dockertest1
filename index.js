/*jslint vars: true, devel:true, nomen: true, node: true, indent: 2, maxerr: 50, esnext:true*/
/*global describe, it, after, before, beforeEach, afterEach*/
'use strict';

let app = require("express")();


app.use("/", (req,res)=>{
  res.json({message: "message1"});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
