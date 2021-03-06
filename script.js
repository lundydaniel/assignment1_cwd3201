// console.log("connected");
//! Building out my variables
//* Different types of material I use in fly tying

const feathers = [
    "Saddle Hackle",
    "Marabou", 
    "Mallard Barred Flank", 
    "Turkey Quill", 
    "Grizzly Hackle Tips", 
    "Pheasent Tail"
]

let dubbing = [
    {name:"Ice Dub UV Dark Olive", colour:"Olive", synthetic:true, tinsel:"Purple"},
    {name:"Laser Dub White", colour:"White", synthetic:true, tinsel:"Blue"}, 
    {name:"Laser Dub Black", colour:"Black", synthetic:true, tinsel:"Purple"},
    {name:"Seal Fur Dubbing", colour:"Olive", synthetic:true, tinsel:"None"},
    {name:"Stone Blend Dubbing", colour:"Stone", synthetic:true, tinsel:"Red"},
    {name:"Hares Mask", colour:"Wittle Bunny Wabbit :)", synthetic:false, tinsel:"none"}
]

let tools = [
    "scissors",
    "bobbin",
    "bodkin",
    "whip finisher",
    "hackle plier",
    "vise"
]

//Fishing rod outfit
let fishingRod = ["Okuma SST Float", 10, 6, "medium light", "Okuma Raw II Float Reel"]

//* Other needed variables for the story
let startedTying = 2018;

//* Time for the story!

// Warn the reader!
console.warn("The following story may just make you want to go to your nearest Outdoor Store!");

// Console the title
console.log("%cAssignment 1 - A Story About My Hobby", "color:#D96704; font-size:2em");

// Console log the first paragraph.
console.log(`%cThis story starts out in ${startedTying}. I had just started getting into creek fishing. For many years I would watch people on television fishing on a river or a creek and was often intrigued. It also brought back a sense of adventure to me because my bothers and I use to run off to the local creek to discover things as kids. Being an advid angler, I wanted to get back out in the creeks and rediscover childhood in a way. Also, living in Ontario, there are lots of creeks that have spawn runs every fall and spring.`, "color:#BFB636; font-family:Arial; font-size:15px");

// Console log the second paragraph.
console.log(`%cSo I decided it was time to take up the offer that my brother extends every spring and fall to go fishing wth him. But first I needed to buy some equipment! Time to go to my favorite store. Sail! Off I went to gather a rod that I thought would suit. My brother uses a fly rod, and I did not want to spend a lot of time learning how to use one, but also did not want to use a spinning rod. I wanted to be able to do what I saw them do on television. I wanted to use little flies or nypmhs. The next best thing is a centerpin outfit I thought. I ended up getting an ${fishingRod[0]} rod. It is ${fishingRod[1]} feet, ${fishingRod[2]} inches. It is ${fishingRod[3]} action and is finished off with an ${fishingRod[4]}. `, "color:#BFB636; font-family:Arial; font-size:15px");

// Console log third paragraph
console.log("%cA couple weeks later, after much practice on the lawn with my new rod I was ready to fish. My brother had informed me that the fish were in the creek! I set off to catch my first salmon. I arrived at my brothers house and we walked down the block to the creek. I couldn't believe that the salmon where that big in there! I needed to catch one. I got the run down from my brother about what to do and how it is much different then regular fishing in the lake. And we began to fish. I watched him pull out one. Then another... and another. Being brothers, I was starting to get a little bit agitated with his success. Although happy for him, my brotherly competitive nature came out. I asked him what he was using and he laughed... then showed me. It was a nymph that he had hand tied. He gave me one to try out and not to long I had a bite and caught my first ever salmon!", "color:#BFB636; font-family:Arial; font-size:15px");

console.log("%cI'm sure you can guess what happens next.", "color:#BFB636; font-family:Arial; font-size:15px")
// Function declaration with an if statement using my boolean.
function influence(brother){
    if(brother==true){
        console.log("%cMy brother infuenced me to take up fly tying.", "color:#BFB636; font-family:Arial; font-size:15px");
    } else {
        console.log("%cMy brother did not influence me.", "color:#BFB636; font-family:Arial; font-size:15px")
    }
}
influence(true);

// Console Log fourth paragraph
console.log("%cFrom that point on I wanted to learn how to do the tie flies and begain my research. I quickly found out I needed a plethora of materials. I gathered my list of things and headed off to the store. First, I needed the following:", "color:#BFB636; font-family:Arial; font-size:15px");

// Fat arrow function
tools.forEach(mainTools => console.log(mainTools));

// Looping through an array
console.log("%cAnd of course I needed to also get the following. Let me lay it out in a nice table format!", "color:#BFB636; font-family:Arial; font-size:15px");
for(let dub of dubbing) {
    console.table(dub);
}

console.log("%cI also need different coloured thread and some feathers! This is what I picked up for feathers.", "color:#BFB636; font-family:Arial; font-size:15px")
// Function Expression for my feathers.
let  displayFeatherMats = function(){
    for(let i=0;i<feathers.length;i++){
        console.log(feathers[i]);
    }
}
displayFeatherMats();

// Ending paragraph
console.log(`%cSince ${startedTying} I have learned so much about the world of tying flies. There are some many different kinds. There are competitions held around the world. Podcasts about it and various other resources. Some people even go for absolute realism, and can make these little lures look like the real thing! It's rather impressive. Although I am not on that level, and frankly don't want to be, I enjoy this hobby very much. It is a way for me to escape reality a little and focus on just that. And I think the biggest reward from it, I never expected until it happened. When I caught my first trout on a fly that I handcrafted. I was emtional about it. In a way it made me feel closer to our forefathers. Using simple materials to catch a fish. Mind you it is not for survival, but if it ever came to that, it's one skill that I know have. I hope you have enjoyed my tale of how I got into fly tying.`, "color:#BFB636; font-family:Arial; font-size:15px");

console.log("%cA Story by Daniel Lundy", "color:#A67D32; font-size:1.5em");

console.error("Sorry, we are at the end of this story!");