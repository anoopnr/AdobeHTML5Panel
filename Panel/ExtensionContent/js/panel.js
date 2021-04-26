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
        jsxFile="aeft.jsx";
        csInterface.evalScript('$._ext.evalFiles("' + jsxFolder + '","' + jsxFile + '")');
    }
    catch(ex){
        alert("Exception in loadJSX"+ex);
    }
}

let evalScript=(script, callback)=> {
	try{
        script='$.AEFT'+'.'+script;
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

let openSystemFolder=()=>{
    try{
        var file=cep.fs.showOpenDialog();
        if(file.err==0 && file.data.length>0){
            $("#txtFilePath").val(file.data[0]);
        }
        else{
            alert("select a file");
        }
    }
    catch(ex){
        alert("Exception in openSystemFolder"+ex);
    }
}

let importFileToAEFT=()=>{
    try{
        if($("#txtFilePath").val()!=""){
            evalScript('importFile(\''+$("#txtFilePath").val()+'\')');
        }
        else{
            alert("Please select a file");
        }
    }
    catch(ex){
        alert("Exception in importFileToAEFT"+ex);
    }
}