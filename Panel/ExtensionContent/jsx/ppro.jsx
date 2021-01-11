$.PPRO={
    getProjectName:function()
    {
        try
        {
            return app.project.name;
        }
        catch(Error)
        {    
            return "No Project";
        }
    },
}