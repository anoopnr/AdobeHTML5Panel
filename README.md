# AdobeHTML5Panel
Sample Panel For creating Extensions in Adobe Applications

## About Adobe HTML5 Panels
Adobe applications like Premiere pro, After Effects, Indesign, Photoshop, Illustrator and Media encoder supports HTML5 extesnion panels inside the desktop applications,
just like the add ons in a browser. In the old versions these extensions were created in flex, but now in the creative cloud applications HTML5 panels are supported.
You can get the full details of existing adobe addons from the [Adobe Exchange protal](https://exchange.adobe.com/creativecloud)\
Adobe have also provided extensive documentation and sample panel codes in there [Git repository](https://github.com/Adobe-CEP)\
Adobe calls this as Common Extensibility Platfrom (CEP), CEP is based on the Chormium embedded Framework.\
Combining the Chromium V8 engine and Nodejs CEP provides an easy way for web developers to start working on Adobe Extensions.\
Get the complete details adout the CEP from this [link](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md)

## How to create a sample extension panel for Adobe Applications
In this repository we have added the initial wireframe needed to create a sample panel for
Premiere pro, After Effects, Indesign, Photoshop, Illustrator and Media encoder

**SAMPLE.ZXP** is the sample panel installation package, like an exe in case of an application\
**Panel** folder contains the extension related files.\
**CSXS** contains the configuration file manifest.xml,\
**ExtensionContent** have the panel HTML UI, Javascript, CSS and the CSInterface library which helps to execute the application level scripts in the Application DOM from the HTML DOM.\
**.debug** file is used to configure the debug settings for the panel

In case you want to see how the CEP Sample panel will look after the installation, try to install the **SAMPLE.ZXP** package using Exmancmd Commandline tool from [here](https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html)\
To install the panel use, **exmancmd /install full_path_to_SAMPLE.zxp**

To package a panel, get the ZXP signing tool from [this link](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD/4.1.103/win64)\
Use the ZXPSignCMD tool to create a self signed certificate and then package the **Panel** folder to an zxp file using this certificate.\
Follow the command from [this link](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf)

### Create a self signed certificate using
**ZXPSignCmd.exe -selfsignedCert IN KL myCompany nameofCompany password sample.p12**

### Sign the Panel folder using
**ZXPSignCmd -sign AdobeHTML5Panel\Panel newpanel.zxp sample.p12 password -tsa http://timestamp.digicert.com**

Close the Adobe app for which you are trying to install the panel for
### Install the newpanel.zxp using Excmancmd
**exmancmd /install newpanel.zxp**

### Check the panel is installed in the adobe app using
**exmancmd /list all**

### To see the panel in action
**Open the app, In Menus>>Windows>>Extenions>>Sample Panel 1.0.0**

### Remove the panel using Excmancmd
**exmancmd /remove com.nr.samplepanel**

## Make your first change in Extension panel
Go to Panel\ExtensionContent\samplepanel.html\
Make some change to the heading h1

Delete the old newpanel.zxp\
Sign and package the Panel folder again using the same certificate\
ZXPSignCmd -sign AdobeHTML5Panel\Panel newpanel.zxp sample.p12 password -tsa http://timestamp.digicert.com
Close the Adobe app for which you are trying to install the panel for\
Remove the existing panel using exmancmd /remove com.nr.samplepanel\
Install new panel using exmancmd /install newpanel.zxp

**Open the app, In Menus>>Windows>>Extenions>>Sample Panel 1.0.0**\
**Congrats**
