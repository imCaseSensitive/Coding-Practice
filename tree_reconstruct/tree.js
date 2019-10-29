function reconstructTree(inOrder, preOrder) {

    let answer = [];

    // const createTree = (curNode, remainingVals) => {
    //     if(remainingVals.length < 1) return;
    //     const [head, ...others] = remainingVals.slice(0);
    //     head.push([]); //left
    //     head.push([]); //right
    //     curNode.push(head);
    // };
    // createTree(answer, preOrder.slice());

    const recurse = (index = 0) => {

        if (preOrder.length > 1 && answer.length === 0) {
            answer.push(preOrder[index])
        }

        for (let i = 0; i < inOrder.length; i++) {

        }

    }


    recurse()
    return answer;
  }


module.exports = { reconstructTree };

// this is the tree to reconstruct:
//        4
//       / \
//      /   \
//     2     6
//    / \   /
//   1   3 5

// inOrder  = [1,2,3,4,5,6]
// preOrder = [4,2,1,3,6,5]

// reconstructTree(inOrder,preOrder) => [ 4
//                                      , [ 2
//                                        , [ 1 , [], [] ]
//                                        , [ 3 , [], [] ]
//                                        ]
//                                      , [ 6
//                                        , [ 5 , [], [] ]
//                                        , []
//                                        ]
//                                      ]