$.SAMPLE={
    getProjectName:function()
    {
        try
        {
            return "Not actual name";
        }
        catch(Error)
        {    
            return "Untitled";
        }
    },
}