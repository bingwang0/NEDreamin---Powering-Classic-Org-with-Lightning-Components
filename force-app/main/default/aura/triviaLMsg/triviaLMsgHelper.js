({
    getAQuestion : function(kb, component) {
        var current = kb[Math.floor(Math.random() * kb.length)]; // pick a question
        component.set("v.know", current);
        component.set("v.question", current);        
    }
})
