/*
      Licensed Materials - Property of Five9.vn
      © Five9 Corp. 2018
*/
var urlopen = require('urlopen');
var apic = require('local:isp/policy/apim.custom.js')
var props = apic.getPolicyProperty();


var response = {
  "error" : "error",
  "error_description" : "error_description",
  "error_uri" : "error_uri"
}
apic.output('application/json');
session.output.write('{"response":"Hello World"}');
// apim.setvariable('message.headers', "json.headers");
