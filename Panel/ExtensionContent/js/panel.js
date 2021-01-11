const csInterface=new CSInterface();
const extensionRoot=csInterface.getSystemPath(SystemPath.EXTENSION);
const jsxFolder=extensionRoot + "/ExtensionContent/jsx/";
const appName=csInterface.hostEnvironment.appName;
let platform = csInterface.getOSInformation();
let jsxCalssName="";

let pageLoad=()=>{
    try{
        setConstants();
        loadJSX();
    }
    catch(ex){
        alert("Exception in pageLoad"+ex);
    }
}

let setConstants=()=>{
    try{
        platform = platform.substring(0, 7);
    }
    catch(ex){
        alert("Exception in setConstants"+ex);
    }
}

let loadJSX=()=> {
    try{
        let jsxFile="";        
        jsxCalssName=appName;
        if(appName=="PPRO"){
            jsxFile="ppro.jsx";
        }
        else if(appName=="AEFT"){
            jsxFile="aeft.jsx";
        }
        else if(appName=="ILST"){
            jsxFile="ilst.jsx";
        }
        else if(appName=="IDSN"){
            jsxFile="idsn.jsx";
        }
        else if(appName=="PHXS"){
            jsxFile="phxs.jsx";
        }
        else{
            jsxCalssName="SAMPLE";
            jsxFile="sample.jsx";
        }
        csInterface.evalScript('$._ext.evalFiles("' + jsxFolder + '","' + jsxFile + '")');
    }
    catch(ex){
        alert("Exception in loadJSX"+ex);
    }
}

let evalScript=(script, callback)=> {
	try{
        script='$.'+jsxCalssName+'.'+script;
	    csInterface.evalScript(script, callback);
	}
	catch(ex){
		alert("Exception in evalScript"+ex);
	}
}

let getPlatformName=()=>{
    try{
        $("#txtPlatform").val(platform);
    }
    catch(ex){
        alert("Exception in getPlatformName"+ex);
    }
}

let getActiveItemName=()=>{
    try{
        evalScript('getProjectName()',
		(newName)=> {
            $("#txtProjectName").val(newName);
		});
    }
    catch(ex){
        alert("Exception in getProjectName"+ex);
    }
}