$._ext = {
    //Evaluate a file and catch the exception.
    evalFile : function(path,jsxFile) {
        try {
            $.evalFile(path,jsxFile);
        } catch (e) {alert("Exception:" + e);}
    },
    // Evaluate all the files in the given folder 
    evalFiles: function(jsxFolderPath,jsxFile) {
        try
        {
        var folder = new Folder(jsxFolderPath);
        if (folder.exists) {
            var jsxFiles = folder.getFiles(jsxFile);
            for (var i = 0; i < jsxFiles.length; i++) {
                var jsxFile = jsxFiles[i];
                $._ext.evalFile(jsxFile);
            }
        }
    }
    catch(e)
    {
        alert("Exception:" + e);
    }
    }
};