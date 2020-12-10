const fs = require("fs/promises");
const { DirectedGraph } = require("@datastructures-js/graph");

const parse = (input) => {
  const [parent, partTwo] = input.split(" bags contain ");

  const children = partTwo
    .replace(/\./, "")
    .split(", ")
    .map((x) => {
      x = x.replace(/(bags|bag)/, "").trim();
      const number = Number(x[0]);
      const color = x.substring(2);
      return { number, color };
    });

  return [parent, children];
};

const getUniqueColors = (colors) => {
  const uniqueColors = new Set();
  for (const color of colors) {
    const [parent, children] = color;
    uniqueColors.add(parent);

    for (const child of children) {
      uniqueColors.add(child.color);
    }
  }
  return uniqueColors;
};

const generateGraphs = (inputs) => {
  const graph = new DirectedGraph();
  const transpose = new DirectedGraph();

  const colors = [];
  for (const input of inputs) {
    colors.push(parse(input));
  }

  const uniqueColors = getUniqueColors(colors);
  for (const color of Array.from(uniqueColors)) {
    graph.addVertex(color, color);
    transpose.addVertex(color, color);
  }

  for (const color of colors) {
    const [parent, children] = color;

    for (const child of children) {
      graph.addEdge(parent, child.color, child.number);
      transpose.addEdge(child.color, parent, child.number);
    }
  }

  return [graph, transpose];
};

const getContainingBags = (graph, bag) => {
  let bags = 0;

  graph.traverseDfs(bag, (v) => {
    if (v.getKey() === bag) return;

    const weight = graph.getWeight(bag, v.getKey());
    if (weight) {
      const containedBags = getContainingBags(graph, v.getKey());
      bags += weight + weight * containedBags;
    }
  });

  return bags;
};

const partOne = (graph) => {
  // use BFS on transposed graph from "shiny gold" node
  // count nodes that can be reached
  const nodes = [];
  graph.traverseBfs("shiny gold", (v) => {
    nodes.push(v.getKey());
  });

  // output includes "shiny gold" so remove it
  return nodes.length - 1;
};

const partTwo = (graph) => {
  let bag = "shiny gold";
  // recursive depth-first search, counting the number of bags along the way.
  return getContainingBags(graph, bag);
};

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.split("\n").filter((line) => {
    if (line === "") return false;
    if (line.includes("no other")) return false;
    return true;
  });

  const [graph, transpose] = generateGraphs(inputs);

  console.log("*** Part 1 ***");
  console.log(partOne(transpose));

  console.log("*** Part 2 ***");
  console.log(partTwo(graph));
})();
