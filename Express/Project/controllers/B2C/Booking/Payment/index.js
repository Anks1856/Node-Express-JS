const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../../MongoDB/model');

let Details = {};
class Payment {


    static async PaymentReview(req , res , next){

            model.Flight.findOne(req.body).populate('AirFare').then(result =>{
                
                Details.FlightName  = result.FlightName;
                Details.From = result.TakeoffPoint;
                Details.To = result.LandingPoint;
                Details.Economy = result.Economy;
                Details.TotalAirFare = result.AirFare.FareAmount + result.AirFare.ExtraFare
                                             + result.AirFare.SpecialServicesFare;
                res.send(Details);
                next();})
        }

    static async doPayment(req , res , next){
        const transation = new model.Transation(req.body);
        transation.save().then(result =>{
            res.send('your ticket is successfully booked!');
            next();
        }).catch(err =>{
            if(err) throw err;
            res.send('sorry your payment is not complated plase try again!');
            next();
        })

    }     
    
}

router.get('/paymentReview' ,[express.json()] ,Payment.PaymentReview);
router.post('/payment' , [express.json()] , Payment.doPayment);



module.exports = router;
