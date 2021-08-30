const assert = require("chai").assert;
const server = require("../server");

describe("testing if data is displayed", function(){
 

 it("check if there is a string", function(){
     assert.isString(server.getFunnyQuote());
 })

 it("check if there is a value in timestamp", function(){
    assert.isString(server.getTime());
})
});