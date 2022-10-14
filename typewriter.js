const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  let letterDelay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, letterDelay);
  letterDelay += 50;
}
setTimeout(() => {
  console.log("");
}, letterDelay);
}
typewriter(sentence);
