({
    myAction : function(component, event, helper) {

    },
    submitForm : function(component, event, helper) {

    },
    handleChange : function(component, event, helper) {
        var color = event.getSource().getLocalId();
        console.log("color: " + color);
        switch (color) {
            case 'colorRed':
                component.set("v.selection", event.getParam("checked"));
                break;
            case 'colorBlue':
                component.set("v.selectionBlue", event.getParam("checked"));
                break;  
            case 'colorGreen':
                component.set("v.selectionGreen", event.getParam("checked"));
                    
        }
        console.log("debug " + component.get("v.selection"));
    }
})
