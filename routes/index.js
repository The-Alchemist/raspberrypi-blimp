var express = require('express');
var router = express.Router();

var sleep= require('sleep');
var wpi = require('wiring-pi');

wpi.setup('wpi');

var motor1 = {
 pin1 : 24,
 pin2 : 28
};

var motor2 = {
 pin1 : 29,
 pin2 : 25
};

wpi.pinMode(motor1.pin1, wpi.OUTPUT);
wpi.pinMode(motor1.pin2, wpi.OUTPUT);
wpi.pinMode(motor2.pin1, wpi.OUTPUT);
wpi.pinMode(motor2.pin2, wpi.OUTPUT);

// stop
function stop(motor) {
	wpi.digitalWrite(motor.pin1, 0);
	wpi.digitalWrite(motor.pin2, 0);
}

// forward
function forwards(motor) {
	wpi.digitalWrite(motor.pin1, 0);
	wpi.digitalWrite(motor.pin2, 1);
}


// backwards
function backwards(motor) {
	wpi.digitalWrite(motor.pin1, 1);
	wpi.digitalWrite(motor.pin2, 0);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blimp Controller' });
});

router.post('/left', function(req, res, next) {
  console.log('Should enable left motor');
  forwards(motor1);
  res.status(200).json({ test: 'message' })
});

router.delete('/left', function(req, res, next) {
  console.log('Should stop left motor');
  stop(motor1);
  res.status(200).json({ test: 'message' })
});

router.post('/right', function(req, res, next) {
  console.log('Should enable right motor');
  forwards(motor2);
  res.status(200).json({ test: 'message' })
});

router.delete('/right', function(req, res, next) {
  console.log('Should stop right motor');
  stop(motor2);
  res.status(200).json({ test: 'message' })
});

module.exports = router;
