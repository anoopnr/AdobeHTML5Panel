# After effects
Sample Panel For creating Extensions in Adobe After effects

## How to use it
Download the Exmancmd tool from\
https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html

====================================================================
## For Windows
Open the ExManCmd_win directory in comamnd line\
Close AEFT if opened\
Use the following command to install the sample.zxp\
exmancmd /install aeft.zxp\
Get the list of all installed panels using\
exmancmd /list all\
You will be able to see an entry\
 Status                        Extension Name                         Version\
=========  =======================================================  ==========\
Enabled    com.nr.aeftPanel                                          1.0.2\
To remove the panel use
exmancmd /remove com.nr.aeftPanel
======================================================================

## For Mac
Download the exmancmd commandline tool for mac \
use following command to install the panel\
./exmancmd --install full_path_to_aeft.zxp\
list\
./exmancmd --list all\
remove \
./exmancmd --remove com.nr.aeftPanel\

========================================================================
Now open the After Effects
In Menus Go to Window>>Extensions 
You will ba able to see AEFT Panel 1.0.2
Click on that and panel will be poping out

## Only few functionalities are added in this panel
    1. Get the platform name,
    2. Get the current project name.
    3. Select an item from the local machine
    4. Import the item to opened AEFT project
    5. Add the first item in the AEFT project to a new compostition named testComp

===========================================================================


