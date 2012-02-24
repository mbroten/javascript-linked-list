describe('Linked List', function(){
    var list;

    var insertNewNode = function(list, key){
        var n = linkedListNode(key);
        list.insert(n);
        return n;
    };

    beforeEach(function(){
        list = linkedList();
    });

    it('can insert a node', function(){
        expect(list.getHead()).toBeNull();

        var nodeA = insertNewNode(list, 1);
        expect(list.getHead()).toBe(nodeA);
        expect(nodeA.next).toBeNull();

        var nodeB = insertNewNode(list, 2);
        expect(list.getHead()).toBe(nodeB);
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();

        var nodeC = insertNewNode(list, 3);
        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeB);
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();
    });

    it('can delete a head node', function(){
        var nodeA = insertNewNode(list, 1);
        var nodeB = insertNewNode(list, 2);
        var nodeC = insertNewNode(list, 3);

        // verify head is nodeC
        expect(list.getHead()).toBe(nodeC);
        
        // delete nodeC (head)
        list.del(nodeC);
        // verify head is nodeB
        expect(list.getHead()).toBe(nodeB);
        // verify rest of list is correct
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();

        // delete nodeB (head)
        list.del(nodeB);
        // verify that head is nodeA
        expect(list.getHead()).toBe(nodeA);
        // verify rest of list is correct
        expect(nodeA.next).toBeNull();

        // delete nodeA (head)
        list.del(nodeA);
        // verify that list is correct (empty)
        expect(list.getHead()).toBeNull();
    });

    it('can delete a tail node', function(){
        var nodeA = insertNewNode(list, 1);
        var nodeB = insertNewNode(list, 2);
        var nodeC = insertNewNode(list, 3);

        // verify that tail is nodeA 
        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeB);
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();
        
        // delete nodeA (tail)
        list.del(nodeA);
        // verify that tail is now nodeB
        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeB);
        expect(nodeB.next).toBeNull();
        
        // delete nodeB (tail)
        list.del(nodeB);
        // verify that tail is now nodeA
        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBeNull();
    });

    it('can delete a middle node', function(){
        var nodeA = insertNewNode(list, 1);
        var nodeB = insertNewNode(list, 2);
        var nodeC = insertNewNode(list, 3);

        // verify that nodeB is middle node
        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeB);
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();

        // delete nodeB (middle) and verify list is correct
        list.del(nodeB);
        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();
    });

    it('does not break when asked to delete a non-existent node', function(){
        var nodeA = insertNewNode(list, 1);
        var nodeB = insertNewNode(list, 2);
        var nodeC = insertNewNode(list, 3);

        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeB);
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();

        var nodeD = linkedListNode(4);
        list.del(nodeD);

        expect(list.getHead()).toBe(nodeC);
        expect(nodeC.next).toBe(nodeB);
        expect(nodeB.next).toBe(nodeA);
        expect(nodeA.next).toBeNull();
    });

    it('can find a node by its key', function(){
        var nodeA = insertNewNode(list, 1);
        var nodeB = insertNewNode(list, 2);
        var nodeC = insertNewNode(list, 3);

        var result = list.search(1);
        expect(result).toBe(nodeA);

        var result = list.search(2);
        expect(result).toBe(nodeB);

        var result = list.search(3);
        expect(result).toBe(nodeC);
    });

    it('returns null when no node exists for a key', function(){
        var nodeA = insertNewNode(list, 1);
        var nodeB = insertNewNode(list, 2);
        var nodeC = insertNewNode(list, 3);

        var result = list.search(4);
        expect(result).toBeNull();
    });
});
