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
response.readAsJSON(function(error, jsonObj) {
  if (error) {

  } else {
    apic.output('application/json');
    session.output.write(jsonObj);
  }
})
// apic.setvariable('message.body', response);
// console.log(response);
// apic.output('application/json');
// session.output.write(JSON.parse(response));
