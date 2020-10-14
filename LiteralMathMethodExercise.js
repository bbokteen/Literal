// Literal Math Method Exercise

// 1
let warmHugs = "Hi, I'm Olaf and I like warm hugs. "
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like", "love")
console.log(warmHugs);

// 2
let beenImpaled = "Oh, look at that. I've been impaled."
console.log(beenImpaled.slice(-18));
console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(18, 36));

// 3
let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);