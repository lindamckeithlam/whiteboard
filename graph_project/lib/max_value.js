function maxValue(node, visited = new Set()) {
  if (visited.has(node.val)) return -Infinity;
  visited.add(node.val);
  let neighborMaxArray = node.neighbors.map(neighbor =>
    maxValue(neighbor, visited)
  );
  Math.max(node.val, neighborMaxArray, visited);
}

module.exports = {
  maxValue
};
