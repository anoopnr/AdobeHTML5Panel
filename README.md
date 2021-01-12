# AdobeHTML5Panel
Sample Panel For creating Extensions in Adobe Applications

## Small Discription about Adobe HTML5 Panels
Adobe applications like Premiere pro, After Effects, Indesign, Photoshop, Illustrator and Media encoder supports HTML5 extesnion panels inside the desktop applications,
just like the add ons in a browser. In the old versions these extensions were created in flex, but now in the creative cloud applications HTML5 panels are supported.
You can get the full details of existing adobe addons from the [Adobe Exchange protal](https://exchange.adobe.com/creativecloud)
Adobe have also provided extensive documentation and sample panel codes in there [Git repository](https://github.com/Adobe-CEP)
Adobe calls this as Common Extensibility Platfrom (CEP), CEP is based on the Chormium embedded Framework.
Combining the Chromium V8 engine and Nodejs CEP provides an easy way for web developers to start working on Adobe Extensions.
Get the complete details adout the CEP from this [link](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md)

## How to create a sample extension panel for Adobe Applications
In this repository we have added the initial wireframe needed to create a sample panel for
Premiere pro, After Effects, Indesign, Photoshop, Illustrator and Media encoder
Clone the repository using 
### git clone https://github.com/anoopnr/AdobeHTML5Panel.git

**SAMPLE.ZXP** is the sample panel installation package, like an exe in case of an application
**Panel** folder contains the extension related files.
**CSXS** contains the configuration file manifest.xml,
**ExtensionContent** have the panel HTML UI, Javascript, CSS and the CSInterface library which helps to execute the application level scripts in the Application DOM from the HTML DOM.
**.debug** file is used to configure the debug settings for the panel
