function reconstructTree(inOrder,preOrder) {
    let answer = [];

    if (preOrder.length > 0) {
        answer.push(preOrder[0])
    }

    

    console.log(answer)
    return answer;
  }


module.exports = { reconstructTree };