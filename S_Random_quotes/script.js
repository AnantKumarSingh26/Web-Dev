const jsQuotes = [
    // THE CLASSICS
    "Java is to JavaScript what car is to Carpet.",
    "Any application that can be written in JavaScript, will eventually be written in JavaScript.",
    "JavaScript: The world's most misunderstood programming language.",
    "The strength of JavaScript is that you can do anything. The weakness is that you will.",
    "First, solve the problem. Then, write the code.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Functions are first-class citizens in JavaScript.",
    "JavaScript is the duct tape of the Internet.",
    "Mastering the DOM is mastering the web.",
    "In JS, everything is an object (almost).",

    // RELATABLE & FUNNY
    "I've got 99 problems but a promise ain't one.",
    "JavaScript: Where '5' - 3 is 2, but '5' + 3 is '53'.",
    "A JS developer's favorite hangout? The Console.",
    "I don't always test my code, but when I do, I do it in production.",
    "Callback hell is a real place.",
    "If you like it, then you should have put a 'try-catch' on it.",
    "JavaScript: Where [] == ![] is true.",
    "My code works, but I don't know why.",
    "My code doesn't work, and I don't know why.",
    "I’m not lazy, I’m just buffering.",
    "Vanilla JS is the real superpower.",
    "Frameworks come and go, but the DOM is forever.",
    "CSS for the beauty, JS for the brains.",
    "Writing JS is like building a plane while flying it.",
    "Keep calm and console.log().",
    "NaN is a number that is not a number.",
    "The 'this' keyword: JavaScript's greatest mystery.",
    "Debugging: Being the detective in a movie where you are also the murderer.",
    "A semicolon a day keeps the errors away.",
    "I speak fluent JavaScript and sarcasm.",

    // TECHNICAL WISDOM
    "Prefer 'const' over 'let', and 'let' over 'var'.",
    "Arrows are for more than just bows; use Arrow Functions.",
    "Spread operator: because copying should be easy.",
    "Destructuring is like opening a gift—take only what you need.",
    "Async/Await: making the chaotic predictable.",
    "Promises are meant to be kept (or rejected).",
    "Strict mode: because we all need a little discipline.",
    "The virtual DOM is the secret sauce.",
    "Closures: Functions with memories.",
    "Recursion: To understand recursion, you must first understand recursion.",
    "Clean code is not written, it's rewritten.",
    "Write code for humans, not for machines.",
    "Comments explain WHY, code explains HOW.",
    "Don't repeat yourself (DRY).",
    "Keep it simple, stupid (KISS).",
    "The best code is no code at all.",
    "Complexity is the enemy of reliability.",
    "Logic will get you from A to B. JavaScript will take you everywhere.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Talk is cheap. Show me the code.",

    // MOTIVATIONAL
    "Every expert was once a beginner.",
    "Don't stop until you're proud.",
    "Your only limit is your imagination (and browser memory).",
    "Small steps in code lead to giant leaps in tech.",
    "Coding is the closest thing we have to magic.",
    "The only way to learn a new language is to write in it.",
    "Focus on the journey, not just the 'done' state.",
    "Consistency is key in the world of syntax.",
    "Build things that matter.",
    "Be the developer your younger self would be proud of.",
    "Every 'Error' is just a lesson in disguise.",
    "Success is a collection of fixed bugs.",
    "Code, Sleep, Repeat.",
    "Innovation starts with a single line of code.",
    "Make it work, make it right, make it fast.",
    "Learning JS is a marathon, not a sprint.",
    "The web is your canvas.",
    "Believe in your logic.",
    "Stay hungry, stay coding.",
    "Dream in JavaScript.",

    // ONE-LINERS
    "undefined is not a function.",
    "Type coercion is a wild ride.",
    "Scope: The wall between your variables.",
    "Event bubbling: Pass it up the chain.",
    "Hoisting: JS taking your variables to the top.",
    "Map, Filter, Reduce: The holy trinity.",
    "Template literals make strings beautiful.",
    "The ternary operator: The shortcut to happiness.",
    "ES6 changed the game.",
    "Node.js: JavaScript everywhere.",
    "React is just JavaScript.",
    "Vue is just JavaScript.",
    "Angular is just... complex JavaScript.",
    "JSON: The language of data.",
    "APIs: The bridges of the web.",
    "JWT: The digital passport.",
    "Local Storage: The browser's backpack.",
    "Session Storage: Gone in a flash.",
    "Cookies: The old school tracker.",
    "Web Workers: The heavy lifters.",

    // FINAL PUSH
    "Code like a pro, think like a user.",
    "Interface matters.",
    "Interaction is the soul of the web.",
    "JavaScript is the heartbeat of modern UI.",
    "Create, Break, Fix.",
    "Push your limits (and your code).",
    "Git commit -m 'Initial masterpiece'.",
    "The console is your best friend.",
    "Embrace the chaos of the JS ecosystem.",
    "100 lines of code started with one 'var'.",
    "JavaScript is the only language where you can be 'undefined' but still exist.",
    "In a world of constants, be a 'let'—always ready to evolve.",
    "Your code is a letter written to your future self. Make it a love letter.",
    "A Promise is a heartbeat; it either fulfills your dreams or handles the heartbreak.",
    "Variables are just containers for our temporary brilliance.",
    "The DOM is a tree; your script is the wind that makes it dance.",
    "Event listeners are the ears of your website, always eavesdropping for a spark.",
    "Scope is the boundary of your influence.",
    "Closures are functions that refuse to forget where they came from.",
    "An infinite loop is just a circle that forgot to be a spiral.",

    // THE WITTY & SHARP
    "JavaScript is a chaotic neutral alignment in language form.",
    "Errors are just the compiler’s way of asking for a better conversation.",
    "Code isn't finished until the last 'console.log' is deleted.",
    "I don't need a therapist, I just need my code to compile without warnings.",
    "If JavaScript was a person, it would be that friend who is brilliant but messy.",
    "CSS is the suit, but JS is the walk.",
    "My brain has too many open tabs, most of them are StackOverflow.",
    "A bug is just an undocumented feature with an attitude.",
    "Object.freeze() is the ultimate 'talk to the hand' of programming.",
    "Async/Await: because life is too short to wait in a blocking line.",

    // THE METAPHORICAL
    "Writing JS is like painting a masterpiece on a moving train.",
    "The browser is a stage, and your script is the lead actor.",
    "JSON is the universal currency of the digital border.",
    "RegEx: The dark art of finding a needle in a digital haystack.",
    "Recursion is a mirror reflecting a mirror reflecting a dream.",
    "The 'this' keyword is the 'who am I?' of the digital world.",
    "Compiling is the moment of truth between logic and reality.",
    "An API is a handshake between two strangers who speak different codes.",
    "Middleware is the quiet waiter in the restaurant of your app.",
    "Strict mode is the seatbelt of your coding journey.",

    // THE SASSY DEVELOPER
    "I'm not ignoring you, I'm just in an 'await' state.",
    "Don't 'var' me, bro.",
    "Spread love, and also spread arrays.",
    "My favorite exercise is running... out of memory.",
    "I like my coffee black and my code bug-free.",
    "Keep your friends close and your dependencies closer.",
    "Life is short. Use a template literal.",
    "I'm a 'const' in a world of 'var'.",
    "Don't follow me, I'm also 'null'.",
    "Try/Catch: Because I know I'm going to mess up eventually.",

    // THE CREATIVE ONE-LINERS
    "Logic: The thread that sews the web together.",
    "Data is the paint; JavaScript is the brush.",
    "An app without JS is like a car without an engine.",
    "Type coercion is JavaScript's way of saying 'I know what you meant'.",
    "The console is the confessional of the developer.",
    "Stay humble, stay 'strict'.",
    "Your logic is the architecture of someone else's experience.",
    "Every curly brace is a hug for your logic.",
    "Semicolons are the heartbeat of a finished thought.",
    "Map your dreams, filter your fears, and reduce your stress.",

    // HIGH-ENERGY BITS
    "Code the change you want to see in the browser.",
    "Keyboard: The instrument. JavaScript: The symphony.",
    "The web is a playground; JS is the swing set.",
    "Deploy like a boss, debug like a monk.",
    "Frameworks are fashion; Vanilla is style.",
    "Reacting to life with a 'useEffect' state of mind.",
    "Build it once, make it responsive forever.",
    "Code is the poetry of the 21st century.",
    "A function a day keeps the manual labor away.",
    "Digital alchemy: turning logic into pixels.",

    // THE WEIRD & WONDERFUL
    "NaN is the ghost in the machine.",
    "Truthy or Falsy? That is the question.",
    "Hoisting: The magic trick you didn't ask for.",
    "The event loop never sleeps.",
    "Prototypes: The ancestors of every object.",
    "Destructuring: Taking apart the engine to see how it works.",
    "The ternary operator: JavaScript's haiku.",
    "Global variables are like public toothbrushes—don't use them.",
    "A script without comments is a map without labels.",
    "Garbage collection: The unsung hero of the browser.",

    // THE FUTURE-FORWARD
    "Web3 is just JS with a longer password.",
    "AI is just JS with a lot of 'if' statements (mostly).",
    "The cloud is just someone else's 'localhost'.",
    "JavaScript today, the world tomorrow.",
    "Pixels are cheap, logic is expensive.",
    "Simplicity is the ultimate sophistication in syntax.",
    "Build for the user, code for the maintainer.",
    "Innovation is just a refactor away.",
    "Code is a living organism; it grows, it breaks, it heals.",
    "Don't just code. Create.",

    // THE SHORTIES
    "Null and void.",
    "Object.assign(success, hardWork);",
    "window.alert('Be Awesome');",
    "return true;",
    "while(alive) { code(); }",
    "Error: Success not found (yet).",
    "Scripting the impossible.",
    "Vanilla is the best flavor.",
    "Logic > Emotion.",
    "Pixel perfect, logic sound.",

    // THE FINAL 10
    "JavaScript is the bridge between imagination and interaction.",
    "The best debugger is a good night's sleep.",
    "Coffee + JS = Magic.",
    "Your UI is your handshake.",
    "Make it snappy, make it JS.",
    "Logic is the new literacy.",
    "Every 'click' is a conversation.",
    "Write code that tells a story.",
    "The browser is your canvas, don't leave it blank.",
    "JavaScript: Connecting the dots of the digital universe."
];

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

const quote = document.createElement('h1');
const main = document.querySelector('main');
const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    body.style.backgroundColor = `rgb(${r},${g},${b})`

    quote.textContent = jsQuotes[Math.floor(Math.random() * jsQuotes.length)];
    main.appendChild(quote);
    quote.style.display = 'block'
})




// console.log(jsQuotes[Math.floor(Math.random()*jsQuotes.length)]);
// fetch("DdYha0kQJ93869LvBQgxT4CnR0EKJTT4kSDXaTR1", {
//   headers: { "X-Api-Key": "YOUR_API_KEY" }
// })
// .then(res => res.json())
// .then(data => {
//   const img = document.createElement("img");
//   img.src = "data:image/jpeg;base64," + data.image;
//   document.body.appendChild(img);
// });
