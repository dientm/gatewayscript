/*
      Licensed Materials - Property of Five9.vn
      © Five9 Corp. 2018
*/
var urlopen = require('urlopen');
var apic = require('local:isp/policy/apim.custom.js');
var props = apic.getPolicyProperty();

// var http_status_code = props.http_status_code;
// var error = props.error;
// var error_description = props.error_description;
// var error_uri = props.error_uri;

var response = {}
response.error = 'error'
response.error_description = 'error_description'
response.error_uri = "error_uri"

apic.write(response);
apic.output('application/json');
