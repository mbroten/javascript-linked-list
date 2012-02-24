var linkedListNode = function(key){
    return {
        key: key,
        next: null
    };
};

var linkedList = function(){
    var head = null;

    var insert = function(node){
        node.next = head;
        head = node;
    };

    var search = function(key){
        var node = head;
        while (node !== null && node.key !== key){
            node = node.next;
        };
        return node;
    };

    var del = function(node){
        if (node === head){
            head = node.next;
            return;
        }

        var prev = head;
        while (prev.next !== null && prev.next !== node){
            prev = prev.next;
        };

        if (prev !== null){
            prev.next = node.next;
        }  
    };

    var getHead = function(){
        return head;
    };

    return {
        insert: insert,
        del: del,
        search: search,
        getHead: getHead
    };
};
