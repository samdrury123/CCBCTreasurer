// Altered from solution from http://www.quirksmode.org/js/flash.html
function ChartTableVisibility(flashContainerID, tableContainerID,justDisplayTables)
{
    
    if (flashContainerID == "ChartsAssetsLiabilitiesAndPeople")
    {
      ChartTableVisibilityForAssetAndLiability(flashContainerID,"ChartEmployeeAndVolunteer",tableContainerID,justDisplayTables)
    }
     
   else
   
   { 
        var fcID = document.getElementById(flashContainerID)
        var tcID = document.getElementById(tableContainerID)
        if (justDisplayTables == 1)
        {
            //don't check for flash , just display tables
            fcID.style.display = 'none';
            if (tcID != null) tcID.style.display = '';
            return
        }
        if (flashinstalled == 2)
        {
            if (flashversion)
            {
                //document.write("You have Flash version " + flashversion + " installed.");
                fcID.style.display = 'block';
                if (tcID != null) tcID.style.display = 'none';
            }
            else
            {
                //document.write("You have Flash installed, but I can't detect the version.");
                //document.getElementById(flashContainerID).style.display = 'none';
                //document.getElementById(tableContainerID).style.display = '';
                fcID.style.display = 'block';
                if (tcID != null) tcID.style.display = 'none';
            }
                
        }
        else if (flashinstalled == 1)
        {
            //document.write("You don't have Flash installed.");
            fcID.style.display = 'none';
            if (tcID != null) tcID.style.display = '';
        }
        else
        {
            //document.write("I can't find out if you have Flash installed.");
            fcID.style.display = 'none';
            if (tcID != null) tcID.style.display = '';
        }
    }
}


//Function created to accomodate Employees and Volunteers section just below of the Asset& Liablity chart.
function ChartTableVisibilityForAssetAndLiability(flashContainerID1,flashContainerID2,tableContainerID,justDisplayTables)
{
    var fcID1 = document.getElementById(flashContainerID1)
    var fcID2 = document.getElementById(flashContainerID2)
    var tcID = document.getElementById(tableContainerID)
    
    if (justDisplayTables == 1)
    {
            //don't check for flash , just display tables
        fcID1.style.display = 'none';
        fcID2.style.display = 'none';
        if (tcID != null) tcID.style.display = '';
        return
    }
        
    if (flashinstalled == 2)
    {
        if (flashversion)
        {
            //document.write("You have Flash version " + flashversion + " installed.");
            fcID1.style.display = 'block';
            fcID2.style.display = 'block';
            if (tcID != null) tcID.style.display = 'none';
        }
        else
        {
            //document.write("You have Flash installed, but I can't detect the version.");
            //document.getElementById(flashContainerID).style.display = 'none';
            //document.getElementById(tableContainerID).style.display = '';
            fcID1.style.display = 'block';
            fcID2.style.display = 'block';
            if (tcID != null) tcID.style.display = 'none';
        }
            
    }
    else if (flashinstalled == 1)
    {
        //document.write("You don't have Flash installed.");
        fcID1.style.display = 'none';
        fcID2.style.display = 'none';
        if (tcID != null) tcID.style.display = '';
    }
    else
    {
        //document.write("I can't find out if you have Flash installed.");
        fcID1.style.display = 'none';
        fcID2.style.display = 'none';
        if (tcID != null) tcID.style.display = '';
    }
}

//Function to handle same multiple divs
function AllChartTableVisibility(flashContainerID, tableContainerID,justDisplayTables)
{
    var fcID = getElementsByClassName(document, "div", flashContainerID);
    var tcID = getElementsByClassName(document, "div", tableContainerID);
    if (justDisplayTables == 1)
    {
        //don't check for flash , just display tables
        for (var i = 0; i < fcID.length; i++) 
        {
            fcID[i].style.display = 'none';
        }
        for (var i = 0; i < tcID.length; i++) 
        {
            if (tcID[i] != null) tcID[i].style.display = '';
        }
        return
        
    }
    if (flashinstalled == 2)
    {
        if (flashversion)
        {
            //document.write("You have Flash version " + flashversion + " installed.");
            for (var i = 0; i < fcID.length; i++) 
            {
                 fcID[i].style.display = 'block';
            }
            for (var i = 0; i < tcID.length; i++) 
            {
                if (tcID[i] != null) tcID[i].style.display = 'none';
            }
        }
        else
        {
            for (var i = 0; i < fcID.length; i++) 
            {
                 fcID[i].style.display = 'block';
            }
            for (var i = 0; i < tcID.length; i++) 
            {
                if (tcID[i] != null) tcID[i].style.display = 'none';
            }
        }
            
    }
    else if (flashinstalled == 1)
    {
        //document.write("You don't have Flash installed.");
        for (var i = 0; i < fcID.length; i++) 
        {
            fcID[i].style.display = 'none';
        }
         for (var i = 0; i < tcID.length; i++) 
        {
            if (tcID[i] != null) tcID[i].style.display = '';
        }
    }
    else
    {
        //document.write("I can't find out if you have Flash installed.");
        for (var i = 0; i < fcID.length; i++) 
        {
            fcID[i].style.display = 'none';
        }
         for (var i = 0; i < tcID.length; i++) 
        {
            if (tcID[i] != null) tcID[i].style.display = '';
        }
    }
}

function getElementsByClassName(oElm, strTagName, strClassName)
{
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
	    oElement = arrElements[i];
	    if(oRegExp.test(oElement.className)){
		    arrReturnElements.push(oElement);
	    }
    }
    return (arrReturnElements)
}