const express = require('express');
const router = express.Router();

const Project = require('../../models/project');

router.get('/', (req, res, next) =>{

    //res.render('success');

    Project.find((err, projects) => {
        if(err){
            console.log(err);
            res.json('Error').status(500);
        }
        else{
            res.json(projects).status(200);
        }
    });
});

//add function
router.post('/', (req,res, next) =>{
    if(!req.body.name){
        res.status(400).json({ValidationError: "Name is a required field"});
    }else if(!req.body.lastName){
        res.status(400).json({ValidationError: "Last Name is a required field"});
    }else if(!req.body.emailAddress){
        res.status(400).json({ValidationError: "Email Address is a required field"});
    }else if(!req.body. phoneNumber){
        res.status(400).json({ValidationError: " Phone Number is a required field"});
    }else{

        Project.create({
            name: req.body.name,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            AddressLine1: req.body.AddressLine1,
            phoneNumber: req.body.phoneNumber,
            addressLine2: req.body.addressLine2,
            province: req.body.province,
            postcode: req.body.postcode,
            country: req.body.country
        }, (err, newproject)=>{
            if(err){
                console.log(err);
                res.status(500).json({'ErrorMessage': 'Server threw an exception'});
            }else{
                res.status(200).json(newproject);
            }
        });
    }
});

//update function
router.put('/:_id', (req,res,next) =>{
    if(!req.body.name){
        res.status(400).json({ValidationError: "Name is a required field"});
    }else if(!req.body.lastName){
        res.status(400).json({ValidationError: "Last Name is a required field"});
    }else if(!req.body.emailAddress){
        res.status(400).json({ValidationError: "Email Address is a required field"});
    }else if(!req.body. phoneNumber){
        res.status(400).json({ValidationError: " Phone Number is a required field"});
    }else{
        Project.findOneAndUpdate({
            _id: req.params._id
        }, {
            name: req.body.name,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            AddressLine1: req.body.AddressLine1,
            phoneNumber: req.body.phoneNumber,
            addressLine2: req.body.addressLine2,
            province: req.body.province,
            postcode: req.body.postcode,
            country: req.body.country,
            status: req.body.status
        }, (err, updatedProject) =>{
            if(err){
                console.log(err);
                res.status(500).json({'ErrorMessage': 'Server threw an exception'});
            }else{
                res.status(200).json(updatedProject);
            }

        });
    } 
});

//delete function

router.delete('/:_id', (req,res,next)=>{
    Project.remove({
        _id: req.params._id
    }, (err)=>{
        if(err){
            console.log(err);
            res.status(500).json({'ErrorMessage': 'Server threw an exception'});
        }else {
            res.status(200).json({'success':'true'});
        }
    } )
});

module.exports = router;