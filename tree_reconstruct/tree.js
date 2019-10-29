function reconstructTree(inOrder, preOrder) {
    let answer = [];

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