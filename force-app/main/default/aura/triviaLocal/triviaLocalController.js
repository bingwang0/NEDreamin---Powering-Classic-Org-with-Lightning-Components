({
    init : function(component, event, helper) {
        var countries = ["Egypt","Sudan","Algeria","Namibia","Keyna","Nigeria","Ethiopia"];
        var capitals =["Cairo","Khartoum","Algiers","Windhoek","Nairobi","Abuja","Addis Ababa"];
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
            alert("hooray!");
        } else {
            //helper.showErrorToast(component);
            alert("nope!");
        }
    },

    refresh : function(component, event, helper) {
        helper.getAQuestion(component.get("v.kb"), component);
    }
})
