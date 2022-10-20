const mongoose = require('mongoose');

const schemaDefinition = {
    name: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    AddressLine1: {
        type: String,
       
    },
    phoneNumber: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
       
    }, province: {
        type: String,
       
    }, postcode: {
        type: String,
        
    }, country: {
        type: String,
        
    },status:{
        type: String,
        default: 'TO DO'
    }
}

let schemaObj = new mongoose.Schema(schemaDefinition);


module.exports = mongoose.model('Project', schemaObj);