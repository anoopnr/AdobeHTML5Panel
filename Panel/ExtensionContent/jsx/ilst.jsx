$.ILST={
    getProjectName:function()
    {
        try
        {
            return app.activeDocument.name;
        }
        catch(Error)
        {    
            return "Untitled";
        }
    },
}