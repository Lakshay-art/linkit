var ObjectId = require('mongoose').Types.ObjectId;
var objId = new ObjectId( (param.length < 12) ? "123456789012" : param );
// You should make string 'param' as ObjectId type. To avoid exception, 
// the 'param' must consist of more than 12 characters.

User.find( { $or:[ {'_id':objId}, {'name':param}, {'nickname':param} ]}, 
  function(err,docs){
    if(!err) res.send(docs);
});
