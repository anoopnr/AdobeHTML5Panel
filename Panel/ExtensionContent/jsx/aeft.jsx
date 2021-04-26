$.AEFT={
    getProjectName:function()
    {
        try
        {
            return unescape(app.project.file.name);
        }
        catch(Error)
        {    
            return "Untitled";
        }
    },

    importFile:function(filePath){
        try{
            var result=app.project.importFile(new ImportOptions(new File(filePath)));
        }
        catch(Error){
            return "Error";
        }
    },
}