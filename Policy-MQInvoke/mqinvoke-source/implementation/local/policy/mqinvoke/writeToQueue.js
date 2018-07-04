/*
      Licensed Materials - Property of Five9.vn
      © Five9 Corp. 2018
*/
var urlopen = require('urlopen');
var apic = require('local:isp/policy/apim.custom.js')
var props = apic.getPolicyProperty();


var sitePersonel = {};
var employees = []
sitePersonel.employees = employees;
console.log(sitePersonel);

var firstName = "John";
var lastName = "Smith";
var employee = {
  "firstName": firstName,
  "lastName": lastName
}
sitePersonel.employees.push(employee);
console.log(sitePersonel);

var manager = "Jane Doe";
sitePersonel.employees[0].manager = manager;
console.log(sitePersonel);
apic.output('application/json');
session.output.write(sitePersonel);
