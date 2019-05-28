function breadthFirstSearch(startingNode, targetVal) {
  const queue = [startingNode];
  let visited = new Set();
  while (queue.length) {
    const node = queue.shift();
    // if the set already has the node, skip to the next iteration
    if (visited.has(node)) continue;
    // anything below this will not run if visited has node

    visited.add(node);

    if (node.val === targetVal) return node;
    // neighbors is an array so you can concat into queue
    queue.push(...node.neighbors);
  }
  return null;
}

module.exports = {
  breadthFirstSearch
};
