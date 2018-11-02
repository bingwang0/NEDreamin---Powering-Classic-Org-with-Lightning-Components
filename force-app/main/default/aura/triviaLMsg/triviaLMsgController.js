({
    init : function(component, event, helper) {
        var countries = ["Egypt","Sudan","Algeria","Namibia","Keyna"];
        var capitals =["Cairo","Khartoum","Algiers","Windhoek","Nairobi"];
        var ksize = countries.length;
        var knowledge=[];
        for (var i=0; i<=ksize-1; i++){
            knowledge.push({
                country : countries[i],
                capital : capitals[i]
            });
        }
        component.set("v.kb", knowledge); //knowledge base
        helper.getAQuestion(knowledge, component);
    },

    submit : function(component, event, helper) {
        var knowledge = component.get("v.know");
        if (component.get("v.answer")==knowledge.capital) {
            //alert("hooray!");
            component.set("v.popupMsg","You're right!");
            component.set("v.showPopup", true);
        } else {
            //helper.showErrorToast(component);
            component.set("v.popupMsg","Try again!");
            component.set("v.showPopup", true);            
        }
    },

    refresh : function(component, event, helper) {
        helper.getAQuestion(component.get("v.kb"), component);
    },

    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.showPopup", true);
     },
   
     closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.showPopup", false);
     }
})