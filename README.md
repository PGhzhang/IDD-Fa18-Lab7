# Video Doorbell, Lab 7

*A lab report by Hanyu Zhang*

### In This Report

## Part A. HelloYou from the Raspberry Pi

**a. Link to a video of your HelloYou sketch running.**

[![](http://img.youtube.com/vi/ItMW1Az5zGM/0.jpg)](http://www.youtube.com/watch?v=ItMW1Az5zGM "")


## Part B. Web Camera

**a. Compare `helloYou/server.js` and `IDD-Fa18-Lab7/pictureServer.js`. What elements had to be added or changed to enable the web camera? (Hint: It might be good to know that there is a UNIX command called `diff` that compares files.)**

Var NodeWebcam is created to load the webcam module to enbale the camera. Var opts, Wecam are created accordinlgy to leverage the module to start the web camera.

Take Picture function is added to enable users to take picture function upon clicking the take picture button. Within the function, server communicates with the client browser about image names.

**b. Include a video of your working video doorbell**

[![](http://img.youtube.com/vi/HulxHXfS-Lo/0.jpg)](http://www.youtube.com/watch?v=HulxHXfS-Lo "")


## Part C. Make it your own

**a. Find, install, and try out a node-based library and try to incorporate into your lab. Document your successes and failures (totally okay!) for your writeup. This will help others in class figure out cool new tools and capabilities.**

I used [gifshot](https://www.npmjs.com/package/gifshot), it's a javaScript library that create gifs from a set of images. I had a hard time importing the module at first. The gifshot package was located within node_modules directory and index.html can't import it directly. I had to copy gifshot.js to public folder to have it work(THANKS JD!). 

**b. Upload a video of your working modified project**

[Full Code](https://github.com/PGhzhang/IDD-Fa18-Lab7/blob/master/pictureServer.js)

[![](http://img.youtube.com/vi/tt_92T8LOrk/0.jpg)](http://www.youtube.com/watch?v=tt_92T8LOrk "")
