//We created a cluster object
let cluster = new Set();

//We added apples and bananas with the clay add method
cluster.add('apple').add('banana');

//It will be true because we have applein the cluster
console.log(cluster.has('apple'));

//When we look at the size of the coop we see that the output is not 3 but 2. Because a cluster can contain at most one from the same element.
console.log(cluster.size);