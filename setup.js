var azure = require('azure-storage');
var fs = require('fs');
var process = require('process');

var storageaccountname = fs.readFileSync(process.env.HOME + '/.azuresettings/registry_storage_name').toString().trim();
var storagekey = fs.readFileSync(process.env.HOME + '/.azuresettings/registry_key').toString().trim();
var blobSvc = azure.createBlobService(storageaccountname,storagekey);


console.log(storageaccountname);
console.log(storagekey);

blobSvc.createContainerIfNotExists('registry', function(error, result, response){
      if(!error){
        console.log("Container Created");
        }
      });





