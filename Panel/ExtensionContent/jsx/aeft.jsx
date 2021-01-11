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
}