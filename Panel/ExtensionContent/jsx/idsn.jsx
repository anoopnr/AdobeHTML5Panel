$.IDSN={
    getProjectName:function()
    {
        try
        {
            var doc = app.activeDocument;
            if (doc.saved)
            {
                var docName=doc.name;
                docName=docName.replace(".indd","");
                return(docName);
            }
            else{
                return "Untitled";
            }
        }
        catch(Error)
        {
            return "Untitled";
        }
    },
}