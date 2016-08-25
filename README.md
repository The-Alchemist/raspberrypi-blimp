# Raspberry Pi Powered Blimp

## Bill of Materials (BOM)
- Raspberry Pi 3 Model B
  - technically any Raspberry Pi will do
  - even the [Pi Zero](https://www.adafruit.com/products/2885) will work, as long as you also get [a WiFi dongle](https://www.adafruit.com/products/814) and [USB OTG connector](https://www.adafruit.com/products/2910)
  - NOTE: we had trouble fitting the [USB OTG connector](https://www.adafruit.com/products/2910) into the [a WiFi dongle](https://www.adafruit.com/products/814) so we don't recommend this approach
- [Raspberry Pi Camera](https://www.adafruit.com/products/3099)
 - comes with cable, so you don't need to separately buy one
- [Pimoroni Explorer pHAT for Raspberry Pi Zero](https://www.adafruit.com/products/3018)
- two [small DC motors](https://www.adafruit.com/products/711)
- two small (3") propellers
 - we purchased these from a local hobby store, but they are similar to [these from Amazon.com](https://www.amazon.com/dp/B01G55PRF6?psc=1)
- small [1200mah lithium battery](https://www.adafruit.com/products/258)
- [PowerBoost 1000C](https://www.adafruit.com/products/2465)
 - The 1000C is often out of stock, and you can easily use the [PowerBoost 500C](https://www.adafruit.com/products/1944) instead or anything from the PowerBoost family
- [44" mylar balloon](http://www.ebay.com/itm/44-re-usable-Mylar-RC-Mach-Battlebot-Blimp-Balloon-/130653554922)
 - holds about five cubic feet of helium
- [9 cubit foot helium tank](http://www.walmart.com/ip/Balloon-Time-9.5-Helium-Balloon-Tank-Kit-with-30-Balloons/49382071)
 - WalMart had the lowest cost for the helium, and oddly, the price per cubic foot went UP with the higher capacity tanks
Many suppliers have these parts, but we mostly bought from Adafruit so those are the hyperlinks we are including.

## Instructions
* install dependencies:
```
     $ npm install
```

* run the Node.js app:
```
     $ DEBUG=raspberrypi-blimp:* npm start
```


## After-Action Review (AAR)
- it was much too heavy
