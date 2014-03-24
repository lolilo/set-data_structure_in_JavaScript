set = {
    elements: [],
    add: function(item){
        if (this.has(item)){
            console.log("Item is already in set.");
            return;
        }
        else {
            console.log("Item added to set.");
            this.elements.push(item);
        }
    },
    has: function(item){
        for (i=0; i<this.elements.length; i++){
            if (item == this.elements[i]){
                return true;
            }
        }
        return false;
    },
    size: function() {
        return this.elements.length;
    }
};
