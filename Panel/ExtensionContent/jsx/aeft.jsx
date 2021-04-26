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
            alert( "Error");
        }
    },

    createComp:function(){
        try{
            if(app.project.rootFolder.items.length>0){
                var sourceFootage =app.project.rootFolder.items[1];
                var newComp = app.project.items.addComp("testComp",
                                sourceFootage.width,
                                sourceFootage.height,
                                1,
                                10,
                                24);
                newComp.layers.add(sourceFootage);
            }
            else{
                alert("add an item to the project troot and try again");
            }
        }
        catch(Error){
            alert( "Error");
        }
    },
}