const QUESTION_BANK = [
  {
    question: "Name something new parents miss most about their pre-baby lives",
    answers: [
      { text: "Sleep", points: 59, hint: "The household jackpot after dark.", accepted: ["sleep", "rest", "naps", "nap", "sleeping", "resting"] },
      { text: "Freedom", points: 15, hint: "The old schedule with fewer tiny logistics.", accepted: ["freedom", "free time", "independence"] },
      { text: "Quiet Time", points: 8, hint: "A rare volume setting.", accepted: ["quiet time", "quiet", "peace", "peace and quiet", "silence"] },
      { text: "Going Out", points: 7, hint: "Shoes, keys, and no stroller math.", accepted: ["going out", "go out", "partying", "night out", "clubing"] },
      { text: "Dinner Out", points: 3, hint: "A table without tiny utensils.", accepted: ["dinner out", "dinner", "restaurant night", "nice dinner", "meal out", "date night"] },
      { text: "Travel", points: 2, hint: "Suitcases that are not mostly wipes.", accepted: ["travel", "vacation", "trips"] }
    ]
  },
  {
    question: "Name something new parents constantly buy",
    answers: [
      { text: "Diapers", points: 70, hint: "A stack that vanishes by morning.", accepted: ["diapers", "diaper"] },
      { text: "Wipes / Cream", points: 8, hint: "The cleanup backup crew.", accepted: ["wipes", "cream", "wipes cream", "diaper cream", "baby wipes"] },
      { text: "Baby Clothes", points: 7, hint: "Tiny fabric with a short shelf life.", accepted: ["baby clothes", "clothes", "outfits", "outfit"] },
      { text: "Take-Out", points: 4, hint: "Dinner arriving in a bag.", accepted: ["take out", "takeout", "food delivery", "delivery"] },
      { text: "Coffee", points: 3, hint: "A grown-up refill button.", accepted: ["coffee", "caffeine"] },
      { text: "Formula", points: 2, hint: "A measured scoop situation.", accepted: ["formula", "milk"] }
    ]
  },
  {
    question: "Name an event parents do not want to miss in their child's life",
    answers: [
      { text: "1st Steps", points: 48, hint: "Two tiny feet making news.", accepted: ["1st steps", "first steps", "walking", "walk"] },
      { text: "1st Word", points: 19, hint: "A sound everyone tries to claim.", accepted: ["1st word", "first word", "first words", "talking"] },
      { text: "Birthdays", points: 11, hint: "Candles keep count here.", accepted: ["birthdays", "birthday"] },
      { text: "1st Smile", points: 5, hint: "A little face finally gives back.", accepted: ["1st smile", "first smile", "smile"] },
      { text: "Birth", points: 5, hint: "The very first arrival.", accepted: ["birth", "being born", "delivery"] },
      { text: "Wedding", points: 3, hint: "A far-future aisle moment.", accepted: ["wedding", "marriage"] }
    ]
  },
  {
    question: "Name something people do to entertain a baby",
    answers: [
      { text: "Sing", points: 29, hint: "A voice turns into entertainment.", accepted: ["sing", "singing", "song", "songs"] },
      { text: "Funny Faces", points: 28, hint: "Comedy without words.", accepted: ["funny faces", "make faces", "faces"] },
      { text: "Peekaboo", points: 21, hint: "A quick disappearing act.", accepted: ["peekaboo", "peek a boo", "peek-a-boo"] },
      { text: "Dance", points: 6, hint: "Tiny laughs from big moves.", accepted: ["dance", "dancing"] },
      { text: "Baby Talk", points: 5, hint: "Nonsense with confidence.", accepted: ["baby talk", "talk", "talking"] },
      { text: "Read", points: 3, hint: "Pages before comprehension.", accepted: ["read", "reading", "book", "books"] }
    ]
  },
  {
    question: "Name a good toy for a baby",
    answers: [
      { text: "Rattle", points: 46, hint: "A tiny noisemaker with a handle.", accepted: ["rattle", "rattles"] },
      { text: "Sensory Toys", points: 8, hint: "Colors, bumps, and crinkles.", accepted: ["sensory toys", "sensory toy"] },
      { text: "Teether", points: 7, hint: "A chewable rescue item.", accepted: ["teether", "teething toy", "teething"] },
      { text: "Musical Toys", points: 6, hint: "Buttons parents may regret.", accepted: ["musical toys", "musical toy", "music toy"] },
      { text: "Stuffed Animal", points: 5, hint: "A soft friend with stitched eyes.", accepted: ["stuffed animal", "stuffed animals", "plush", "teddy bear"] },
      { text: "Play Mat", points: 5, hint: "The floor gets upgraded.", accepted: ["play mat", "mat"] }
    ]
  },
  {
    question: "Name something that's cute when a baby does it but not when an adult does it",
    answers: [
      { text: "Fart", points: 59, hint: "A small sound with big reactions.", accepted: ["fart", "farting", "pass gas"] },
      { text: "Poop / Pee Pants", points: 11, hint: "Laundry suddenly gets involved.", accepted: ["poop", "pee", "poop pants", "pee pants", "poop pee pants"] },
      { text: "Burp", points: 6, hint: "A tiny sound after a meal.", accepted: ["burp", "burping"] },
      { text: "Drool", points: 4, hint: "A bib’s main opponent.", accepted: ["drool", "drooling"] },
      { text: "Blow Bubbles", points: 3, hint: "Tiny mouth weather.", accepted: ["blow bubbles", "bubbles"] },
      { text: "Messy Eating", points: 2, hint: "The high chair tells the story.", accepted: ["messy eating", "eat messy", "messy"] }
    ]
  },
  {
    question: "Name something new parents will try to do when the baby's asleep",
    answers: [
      { text: "Sleep", points: 41, hint: "The household jackpot after dark.", accepted: ["sleep", "nap", "rest"] },
      { text: "Clean / Chores", points: 20, hint: "The quiet-room speed run.", accepted: ["clean", "chores", "cleaning", "housework"] },
      { text: "Hobbies", points: 11, hint: "An old fun habit tries to return.", accepted: ["hobbies", "hobby", "crafts", "reading", "games", "gaming"] },
      { text: "Shower", points: 7, hint: "A ten-minute luxury mission.", accepted: ["shower", "bathe", "bath"] },
      { text: "Eat a Good Meal", points: 7, hint: "Warm food becomes the goal.", accepted: ["eat", "eat a good meal", "meal", "food"] },
      { text: "Screen Time", points: 4, hint: "A glowing rectangle break.", accepted: ["screen time", "tv", "phone", "watch tv"] }
    ]
  },
  {
    question: "Name a reason the baby might be crying",
    answers: [
      { text: "Hangry", points: 65, hint: "A tiny stomach calls the shots.", accepted: ["hangry", "hungry", "hunger", "needs food"] },
      { text: "Tired", points: 11, hint: "Sleep is needed but not accepted.", accepted: ["tired", "sleepy", "needs sleep"] },
      { text: "Farts / Gas", points: 8, hint: "A belly problem with sound effects.", accepted: ["farts", "gas", "gassy", "fart"] },
      { text: "Dirty Diaper", points: 7, hint: "The smell gives a clue.", accepted: ["dirty diaper", "diaper", "poop", "pee"] },
      { text: "Colic", points: 1, hint: "The mystery setting no one likes.", accepted: ["colic"] },
      { text: "Teething", points: 1, hint: "Tiny mouth construction work.", accepted: ["teething", "teeth"] }
    ]
  },
  {
    question: "Name a place where people hope not to have to sit next to a baby",
    answers: [
      { text: "Airplane", points: 68, hint: "A seatbelt situation with no escape.", accepted: ["airplane", "plane", "flight"] },
      { text: "Restaurant", points: 12, hint: "Napkins, plates, and side-eyes.", accepted: ["restaurant", "dining"] },
      { text: "Movies", points: 12, hint: "A giant screen wants silence.", accepted: ["movies", "movie theater", "cinema", "theater"] },
      { text: "Bar", points: 1, hint: "A very grown-up room.", accepted: ["bar"] },
      { text: "Bus / Train", points: 1, hint: "Shared seats, shared noise.", accepted: ["bus", "train", "bus train", "public transportation"] },
      { text: "Library", points: 1, hint: "The quiet rules are strict here.", accepted: ["library"] }
    ]
  },
  {
    question: "Name a situation you don't want to be in when your water breaks",
    answers: [
      { text: "Working", points: 27, hint: "Bad timing near a boss.", accepted: ["working", "work", "at work"] },
      { text: "Driving", points: 17, hint: "Hands on the wheel is not ideal.", accepted: ["driving", "car", "in the car"] },
      { text: "Shopping", points: 13, hint: "Aisles are involved.", accepted: ["shopping", "store", "mall"] },
      { text: "Airplane", points: 9, hint: "A seatbelt situation with no escape.", accepted: ["airplane", "plane", "flight"] },
      { text: "Far From Home", points: 5, hint: "Too many miles from comfort.", accepted: ["far from home", "away from home"] },
      { text: "On the Street", points: 5, hint: "Too public for a surprise.", accepted: ["on the street", "street", "outside"] }
    ]
  },
  {
    question: 'The parents just said "oh no!" ...what did the baby do?',
    answers: [
      { text: "Vomited", points: 60, hint: "Milk makes a return trip.", accepted: ["vomited", "vomit", "puke", "puked", "throw up", "threw up"] },
      { text: "Blowout / Poop", points: 45, hint: "The diaper loses the battle.", accepted: ["blowout", "poop", "pooped", "diaper blowout"] },
      { text: "Hurt Themselves", points: 7, hint: "A small accident changes the mood.", accepted: ["hurt themselves", "hurt", "fell", "fall"] },
      { text: "Dropped / Threw Something", points: 4, hint: "Gravity joins the game.", accepted: ["dropped something", "threw something", "dropped", "threw"] },
      { text: "Pee/Poop During Diaper Change", points: 4, hint: "Bad timing during an open-diaper moment.", accepted: ["pee during diaper change", "poop during diaper change", "peed", "pooped"] },
      { text: "Put Something In Their Mouth", points: 3, hint: "The floor becomes suspiciously interesting.", accepted: ["put something in their mouth", "mouth", "ate something"] }
    ]
  },
  {
    question: "If you could go back to being a baby for a day, what would you enjoy the most?",
    answers: [
      { text: "Big Naps", points: 49, hint: "A calendar event with pillows.", accepted: ["big naps", "naps", "nap", "sleep"] },
      { text: "Snuggles", points: 14, hint: "Cozy arms do the work.", accepted: ["snuggles", "cuddles", "cuddle"] },
      { text: "Being Carried", points: 10, hint: "Transportation by grown-up.", accepted: ["being carried", "carried", "held"] },
      { text: "No Responsibilities", points: 9, hint: "No bills, no inbox, no schedule.", accepted: ["no responsibilities", "no responsibility", "nothing to do"] },
      { text: "Being Catered To", points: 2, hint: "Everyone becomes staff for a day.", accepted: ["being catered to", "catered to", "taken care of"] },
      { text: "Playtime", points: 2, hint: "The serious business of toys.", accepted: ["playtime", "play", "playing"] }
    ]
  },
  {
    question: "Name something your partner does that's just like a baby",
    answers: [
      { text: "Whine", points: 18, hint: "A complaint with extra sound.", accepted: ["whine", "whining", "complain"] },
      { text: "Fart", points: 18, hint: "A small sound with big reactions.", accepted: ["fart", "farting"] },
      { text: "Fall Asleep Anywhere", points: 16, hint: "Any surface becomes a bed.", accepted: ["fall asleep anywhere", "sleep anywhere", "falls asleep"] },
      { text: "Always Eating", points: 7, hint: "Snack mode stays on.", accepted: ["always eating", "eating", "eat"] },
      { text: "Noisy Sleep", points: 5, hint: "The room hears the nap.", accepted: ["noisy sleep", "snoring", "snores"] },
      { text: "Messy Eating", points: 4, hint: "The high chair tells the story.", accepted: ["messy eating", "messy", "eats messy"] }
    ]
  },
  {
    question: "Name something you would not want a babysitter doing on the job",
    answers: [
      { text: "Drugs", points: 25, hint: "A huge red flag for childcare.", accepted: ["drugs", "drug use"] },
      { text: "Drinking", points: 24, hint: "Not the kind of bottle anyone wants here.", accepted: ["drinking", "alcohol", "drink"] },
      { text: "Sleeping", points: 22, hint: "Stillness finally happens.", accepted: ["sleeping", "sleep", "nap"] },
      { text: "Phone / Screens", points: 10, hint: "A pocket rectangle steals attention.", accepted: ["phone", "screens", "phone screens", "texting", "on their phone"] },
      { text: "Invite People Over", points: 5, hint: "Extra guests were not on the job description.", accepted: ["invite people over", "invite friends", "friends over", "guests", "company"] },
      { text: "Throw Party", points: 5, hint: "The house should not become an event venue.", accepted: ["throw party", "party", "having a party", "partying"] }
    ]
  },
  {
    question: "Name something a baby shouldn't touch, but might try to",
    answers: [
      { text: "Outlets", points: 26, hint: "A wall spot with hidden danger.", accepted: ["outlets", "outlet", "socket", "electric outlet"] },
      { text: "Hot Stove / Oven", points: 17, hint: "Kitchen heat with a warning label.", accepted: ["hot stove", "stove", "oven", "hot oven"] },
      { text: "Dirty Diaper", points: 7, hint: "The smell gives a clue.", accepted: ["dirty diaper", "diaper", "poop"] },
      { text: "Animals", points: 7, hint: "Cute but not always predictable.", accepted: ["animals", "animal", "pet", "pets"] },
      { text: "Hot Drink / Food", points: 5, hint: "Warm things spill badly.", accepted: ["hot drink", "hot food", "coffee", "tea"] },
      { text: "Knives", points: 5, hint: "Kitchen tools with sharp edges.", accepted: ["knives", "knife"] }
    ]
  },
  {
    question: "Name something babies put in their mouth",
    answers: [
      { text: "Toys", points: 38, hint: "The play pile becomes taste-tested.", accepted: ["toys", "toy"] },
      { text: "Fingers", points: 24, hint: "Tiny hands are always nearby.", accepted: ["fingers", "finger", "hands", "hand"] },
      { text: "Pacifier", points: 16, hint: "Small, soothing, and always missing.", accepted: ["pacifier", "binky", "dummy"] },
      { text: "Blanket", points: 9, hint: "Soft comfort gets chewed too.", accepted: ["blanket", "blankie"] },
      { text: "Shoes", points: 7, hint: "Not clean, still interesting.", accepted: ["shoes", "shoe"] },
      { text: "Keys", points: 6, hint: "Jingly metal everyone loses.", accepted: ["keys", "key"] }
    ]
  },
  {
    question: "Name something people baby-proof in a house",
    answers: [
      { text: "Outlets", points: 35, hint: "A wall spot with hidden danger.", accepted: ["outlets", "outlet", "socket", "sockets"] },
      { text: "Cabinets", points: 24, hint: "Little doors hiding surprises.", accepted: ["cabinets", "cabinet", "cupboards", "cupboard"] },
      { text: "Stairs", points: 18, hint: "A gate usually appears here.", accepted: ["stairs", "staircase", "steps"] },
      { text: "Sharp Corners", points: 10, hint: "Furniture’s pointy problem.", accepted: ["sharp corners", "corners", "table corners"] },
      { text: "Doors", points: 8, hint: "Tiny fingers meet moving edges.", accepted: ["doors", "door"] },
      { text: "Toilet", points: 5, hint: "A lid that should stay closed.", accepted: ["toilet", "bathroom"] }
    ]
  },
  {
    question: "Name something a baby might throw on the floor",
    answers: [
      { text: "Food", points: 40, hint: "The floor gets fed.", accepted: ["food", "meal", "snack", "snacks"] },
      { text: "Bottle", points: 20, hint: "A handheld item that can fly.", accepted: ["bottle", "milk bottle"] },
      { text: "Toy", points: 17, hint: "Playtime becomes gravity testing.", accepted: ["toy", "toys"] },
      { text: "Pacifier", points: 10, hint: "Small, soothing, and always missing.", accepted: ["pacifier", "binky"] },
      { text: "Spoon", points: 8, hint: "A tiny utensil takes a trip.", accepted: ["spoon", "utensil"] },
      { text: "Cup", points: 5, hint: "A spill waiting to happen.", accepted: ["cup", "sippy cup"] }
    ]
  },
  {
    question: "Name something parents take pictures of during the baby's first year",
    answers: [
      { text: "First Smile", points: 30, hint: "A face worth saving.", accepted: ["first smile", "1st smile", "smile"] },
      { text: "First Steps", points: 25, hint: "Wobbly feet make history.", accepted: ["first steps", "1st steps", "walking", "walk"] },
      { text: "Sleeping", points: 15, hint: "Stillness finally happens.", accepted: ["sleeping", "sleep", "nap"] },
      { text: "Bath Time", points: 12, hint: "Bubbles make a scene.", accepted: ["bath time", "bath", "bathing"] },
      { text: "Messy Eating", points: 10, hint: "The high chair tells the story.", accepted: ["messy eating", "eating", "food face"] },
      { text: "Outfits", points: 8, hint: "Tiny fashion gets documented.", accepted: ["outfits", "clothes", "baby clothes"] }
    ]
  },
  {
    question: "Name something you might hear on a baby monitor",
    answers: [
      { text: "Crying", points: 44, hint: "The speaker makes it louder.", accepted: ["crying", "cry", "screaming"] },
      { text: "Babbling", points: 20, hint: "A conversation without translations.", accepted: ["babbling", "babble", "baby talk"] },
      { text: "Coughing", points: 12, hint: "A small sound that gets attention.", accepted: ["coughing", "cough"] },
      { text: "Snoring", points: 10, hint: "Sleep comes with a soundtrack.", accepted: ["snoring", "snore"] },
      { text: "Music", points: 8, hint: "A soft tune may be nearby.", accepted: ["music", "lullaby", "song"] },
      { text: "Silence", points: 6, hint: "Peaceful… or suspicious.", accepted: ["silence", "quiet", "nothing"] }
    ]
  },
  {
    question: "Name something a baby does during bath time",
    answers: [
      { text: "Splash", points: 42, hint: "The tub leaves the tub.", accepted: ["splash", "splashing"] },
      { text: "Cry", points: 20, hint: "Water does not always win fans.", accepted: ["cry", "crying"] },
      { text: "Play With Toys", points: 15, hint: "A rubber duck may be involved.", accepted: ["play with toys", "toys", "bath toys", "toy"] },
      { text: "Kick", points: 10, hint: "Small legs make waves.", accepted: ["kick", "kicking"] },
      { text: "Laugh", points: 8, hint: "Tub-time joy makes noise.", accepted: ["laugh", "laughing", "giggle"] },
      { text: "Pee", points: 5, hint: "Warm water has consequences.", accepted: ["pee", "peeing"] }
    ]
  },
  {
    question: "Name something parents are always searching for",
    answers: [
      { text: "Pacifier", points: 35, hint: "Small, soothing, and always missing.", accepted: ["pacifier", "binky"] },
      { text: "Bottle", points: 22, hint: "A handheld item that can fly.", accepted: ["bottle", "milk bottle"] },
      { text: "Wipes", points: 17, hint: "Cleanup cannot start without it.", accepted: ["wipes", "baby wipes"] },
      { text: "Diaper", points: 12, hint: "The emergency bottom layer.", accepted: ["diaper", "diapers"] },
      { text: "Blanket", points: 8, hint: "Soft comfort gets chewed too.", accepted: ["blanket", "blankie"] },
      { text: "Sock", points: 6, hint: "One tiny foot is missing something.", accepted: ["sock", "socks"] }
    ]
  },
  {
    question: "Name something babies wear",
    answers: [
      { text: "Diaper", points: 50, hint: "The emergency bottom layer.", accepted: ["diaper", "diapers"] },
      { text: "Onesie", points: 24, hint: "A one-piece tiny uniform.", accepted: ["onesie", "bodysuit"] },
      { text: "Bib", points: 10, hint: "The shirt’s shield.", accepted: ["bib", "bibs"] },
      { text: "Socks", points: 7, hint: "Tiny foot covers with disappearing powers.", accepted: ["socks", "sock"] },
      { text: "Hat", points: 5, hint: "A little head topper.", accepted: ["hat", "cap"] },
      { text: "Mittens", points: 4, hint: "Tiny scratch guards.", accepted: ["mittens", "gloves"] }
    ]
  },
  {
    question: "Name something people say to a baby in a silly voice",
    answers: [
      { text: "Who's a cutie?", points: 30, hint: "A high-voice compliment.", accepted: ["whos a cutie", "who is a cutie", "cutie", "so cute"] },
      { text: "Goo Goo Ga Ga", points: 25, hint: "Fake baby language classic.", accepted: ["goo goo ga ga", "goo goo", "ga ga"] },
      { text: "I love you", points: 16, hint: "The sweetest repeat phrase.", accepted: ["i love you", "love you"] },
      { text: "Peekaboo", points: 12, hint: "A quick disappearing act.", accepted: ["peekaboo", "peek a boo"] },
      { text: "Hi Baby", points: 10, hint: "A simple greeting, extra soft.", accepted: ["hi baby", "hello baby", "hi"] },
      { text: "Nom Nom", points: 7, hint: "A silly food sound.", accepted: ["nom nom", "nom", "yum yum"] }
    ]
  },
  {
    question: "Name something that makes a baby laugh",
    answers: [
      { text: "Funny Faces", points: 32, hint: "Comedy without words.", accepted: ["funny faces", "faces", "silly faces"] },
      { text: "Peekaboo", points: 26, hint: "A quick disappearing act.", accepted: ["peekaboo", "peek a boo"] },
      { text: "Tickles", points: 18, hint: "Giggles from tiny ribs.", accepted: ["tickles", "tickling", "tickle"] },
      { text: "Silly Sounds", points: 10, hint: "Random noise becomes comedy.", accepted: ["silly sounds", "sounds", "funny sounds"] },
      { text: "Dancing", points: 8, hint: "Big moves for little laughs.", accepted: ["dancing", "dance"] },
      { text: "Pets", points: 6, hint: "Furry entertainment walks by.", accepted: ["pets", "dog", "cat", "animals"] }
    ]
  },
  {
    question: "Name something you bring to a baby shower",
    answers: [
      { text: "Gift", points: 40, hint: "Usually wrapped before arrival.", accepted: ["gift", "present"] },
      { text: "Diapers", points: 22, hint: "A stack that vanishes by morning.", accepted: ["diapers", "diaper"] },
      { text: "Card", points: 14, hint: "A folded message comes along.", accepted: ["card", "greeting card"] },
      { text: "Food", points: 10, hint: "The floor gets fed.", accepted: ["food", "dish", "snacks"] },
      { text: "Balloons", points: 8, hint: "Decor that floats.", accepted: ["balloons", "balloon"] },
      { text: "Flowers", points: 6, hint: "Pretty, but not practical.", accepted: ["flowers", "flower"] }
    ]
  },
  {
    question: "Name something a baby might be afraid of",
    answers: [
      { text: "Loud Noises", points: 36, hint: "Too much sound at once.", accepted: ["loud noises", "noise", "noises", "loud sounds"] },
      { text: "Strangers", points: 24, hint: "Unfamiliar faces get judged.", accepted: ["strangers", "stranger", "people"] },
      { text: "Dark", points: 14, hint: "Lights out changes the mood.", accepted: ["dark", "darkness"] },
      { text: "Vacuum", points: 12, hint: "The cleaning monster gets loud.", accepted: ["vacuum", "vacuum cleaner"] },
      { text: "Bath", points: 8, hint: "Water time is not always welcome.", accepted: ["bath", "bath time"] },
      { text: "Pets", points: 6, hint: "Furry entertainment walks by.", accepted: ["pets", "dog", "cat", "animals"] }
    ]
  },
  {
    question: "Name something parents do when the baby finally falls asleep",
    answers: [
      { text: "Stay Quiet", points: 35, hint: "Everyone becomes a statue.", accepted: ["stay quiet", "be quiet", "quiet"] },
      { text: "Sleep", points: 25, hint: "The household jackpot after dark.", accepted: ["sleep", "nap", "rest"] },
      { text: "Clean", points: 14, hint: "The nap clock starts ticking.", accepted: ["clean", "cleaning", "chores"] },
      { text: "Check Monitor", points: 10, hint: "A tiny screen gets watched.", accepted: ["check monitor", "baby monitor", "monitor"] },
      { text: "Eat", points: 9, hint: "A rare uninterrupted bite.", accepted: ["eat", "food", "meal"] },
      { text: "Celebrate", points: 7, hint: "A silent victory dance.", accepted: ["celebrate", "party", "happy dance"] }
    ]
  },
  {
    question: "Name something a baby might grab",
    answers: [
      { text: "Hair", points: 38, hint: "A painful handle.", accepted: ["hair"] },
      { text: "Glasses", points: 20, hint: "Face furniture gets stolen.", accepted: ["glasses", "eyeglasses"] },
      { text: "Phone", points: 16, hint: "The shiny grown-up rectangle.", accepted: ["phone", "cell phone"] },
      { text: "Jewelry", points: 10, hint: "Dangly things attract hands.", accepted: ["jewelry", "necklace", "earrings"] },
      { text: "Food", points: 9, hint: "The floor gets fed.", accepted: ["food", "snack"] },
      { text: "Remote", points: 7, hint: "The magic button stick.", accepted: ["remote", "tv remote"] }
    ]
  },
  {
    question: "Name something parents forget to pack in the diaper bag",
    answers: [
      { text: "Wipes", points: 32, hint: "Cleanup cannot start without it.", accepted: ["wipes", "baby wipes"] },
      { text: "Diapers", points: 28, hint: "A stack that vanishes by morning.", accepted: ["diapers", "diaper"] },
      { text: "Bottle", points: 15, hint: "A handheld item that can fly.", accepted: ["bottle", "milk bottle"] },
      { text: "Extra Clothes", points: 10, hint: "The backup outfit saves the day.", accepted: ["extra clothes", "clothes", "outfit"] },
      { text: "Pacifier", points: 8, hint: "Small, soothing, and always missing.", accepted: ["pacifier", "binky"] },
      { text: "Toys", points: 7, hint: "The play pile becomes taste-tested.", accepted: ["toys", "toy"] }
    ]
  },
  {
    question: "Name something a baby does that makes everyone say aww",
    answers: [
      { text: "Smile", points: 35, hint: "A tiny grin wins the room.", accepted: ["smile", "smiling"] },
      { text: "Laugh", points: 25, hint: "Tub-time joy makes noise.", accepted: ["laugh", "laughing", "giggle"] },
      { text: "Yawn", points: 14, hint: "Sleepiness looks cute.", accepted: ["yawn", "yawning"] },
      { text: "Clap", points: 10, hint: "Tiny hands applaud.", accepted: ["clap", "clapping"] },
      { text: "Wave", points: 9, hint: "A small hello or goodbye.", accepted: ["wave", "waving"] },
      { text: "Sneeze", points: 7, hint: "A tiny achoo.", accepted: ["sneeze", "sneezing"] }
    ]
  }
];

let questions = [];

const FAST_MONEY_BANK = [
  {
    question: "Name something a baby does when they are hungry.",
    answers: [
      { text: "Cry", points: 42, accepted: ["cry", "crying", "scream", "screaming"] },
      { text: "Reach for food", points: 22, accepted: ["reach", "reach for food", "grab food"] },
      { text: "Suck fingers", points: 18, accepted: ["suck fingers", "suck thumb", "thumb"] },
      { text: "Get fussy", points: 12, accepted: ["fussy", "get fussy", "fuss"] },
      { text: "Open mouth", points: 6, accepted: ["open mouth", "mouth"] }
    ]
  },
  {
    question: "Name something new parents constantly buy.",
    answers: [
      { text: "Diapers", points: 70, hint: "A stack that vanishes by morning.", accepted: ["diapers", "diaper"] },
      { text: "Wipes / Cream", points: 8, hint: "The cleanup backup crew.", accepted: ["wipes", "cream", "wipes cream", "diaper cream", "baby wipes"] },
      { text: "Baby Clothes", points: 7, hint: "Tiny fabric with a short shelf life.", accepted: ["baby clothes", "clothes", "outfits", "outfit"] },
      { text: "Take-Out", points: 4, hint: "Dinner arriving in a bag.", accepted: ["take out", "takeout", "food delivery", "delivery"] },
      { text: "Coffee", points: 3, hint: "A grown-up refill button.", accepted: ["coffee", "caffeine"] },
      { text: "Formula", points: 2, hint: "A measured scoop situation.", accepted: ["formula", "milk"] }
    ]
  },
  {
    question: "Name something you do to calm a crying baby.",
    answers: [
      { text: "Rock them", points: 35, accepted: ["rock", "rock them", "rock baby"] },
      { text: "Feed them", points: 25, accepted: ["feed", "feed them", "milk"] },
      { text: "Sing", points: 18, accepted: ["sing", "song", "singing"] },
      { text: "Give pacifier", points: 14, accepted: ["pacifier", "binky", "give pacifier"] },
      { text: "Hold them", points: 8, accepted: ["hold", "hold them", "cuddle"] }
    ]
  },
  {
    question: "Name something people say a baby looks like.",
    answers: [
      { text: "Mom", points: 35, accepted: ["mom", "mother", "mommy"] },
      { text: "Dad", points: 33, accepted: ["dad", "father", "daddy"] },
      { text: "Angel", points: 12, accepted: ["angel", "an angel"] },
      { text: "Doll", points: 10, accepted: ["doll", "baby doll"] },
      { text: "Grandparent", points: 10, accepted: ["grandparent", "grandma", "grandpa"] }
    ]
  },
  {
    question: "Name something you pack when taking a baby outside.",
    answers: [
      { text: "Diapers", points: 36, accepted: ["diapers", "diaper"] },
      { text: "Wipes", points: 25, accepted: ["wipes", "baby wipes"] },
      { text: "Bottle", points: 18, accepted: ["bottle", "milk bottle"] },
      { text: "Blanket", points: 12, accepted: ["blanket", "baby blanket"] },
      { text: "Extra clothes", points: 9, accepted: ["clothes", "extra clothes", "outfit"] }
    ]
  },
  {
    question: "Name something a baby does a lot.",
    answers: [
      { text: "Cry", points: 38, accepted: ["cry", "crying"] },
      { text: "Sleep", points: 30, accepted: ["sleep", "sleeping", "nap"] },
      { text: "Eat", points: 16, accepted: ["eat", "eating", "drink milk", "milk"] },
      { text: "Poop", points: 10, accepted: ["poop", "pooping"] },
      { text: "Drool", points: 6, accepted: ["drool", "drooling"] }
    ]
  },
  {
    question: "Name something parents lose after having a baby.",
    answers: [
      { text: "Sleep", points: 48, accepted: ["sleep", "rest"] },
      { text: "Free time", points: 22, accepted: ["free time", "freedom", "time"] },
      { text: "Money", points: 14, accepted: ["money", "cash"] },
      { text: "Patience", points: 9, accepted: ["patience"] },
      { text: "Personal Space", points: 7, accepted: ["personal space", "space", "room to breathe"] }
    ]
  },
  {
    question: "Name something you find in a nursery.",
    answers: [
      { text: "Crib", points: 40, accepted: ["crib", "baby bed"] },
      { text: "Changing table", points: 22, accepted: ["changing table", "change table"] },
      { text: "Diapers", points: 18, accepted: ["diapers", "diaper"] },
      { text: "Rocking chair", points: 12, accepted: ["rocking chair", "chair"] },
      { text: "Toys", points: 8, accepted: ["toys", "toy"] }
    ]
  },
  {
    question: "Name something a baby might do during a photo shoot.",
    answers: [
      { text: "Cry", points: 34, accepted: ["cry", "crying"] },
      { text: "Smile", points: 26, accepted: ["smile", "smiling"] },
      { text: "Sleep", points: 18, accepted: ["sleep", "sleeping", "nap"] },
      { text: "Poop", points: 12, accepted: ["poop", "pooping"] },
      { text: "Look away", points: 10, accepted: ["look away", "not look", "turn away"] }
    ]
  },
  {
    question: "Name something parents do when the baby cries at night.",
    answers: [
      { text: "Feed them", points: 36, accepted: ["feed", "feed them", "milk"] },
      { text: "Rock them", points: 24, accepted: ["rock", "rock them"] },
      { text: "Change diaper", points: 18, accepted: ["change diaper", "diaper", "change them"] },
      { text: "Check on them", points: 12, accepted: ["check on them", "check", "look"] },
      { text: "Give pacifier", points: 10, accepted: ["pacifier", "binky", "give pacifier"] }
    ]
  },
  {
    question: "Name something a baby might grab from you.",
    answers: [
      { text: "Hair", points: 36, accepted: ["hair"] },
      { text: "Glasses", points: 22, accepted: ["glasses", "eyeglasses"] },
      { text: "Phone", points: 18, accepted: ["phone", "cell phone"] },
      { text: "Jewelry", points: 14, accepted: ["jewelry", "necklace", "earrings"] },
      { text: "Food", points: 10, accepted: ["food", "snack"] }
    ]
  },
  {
    question: "Name something that makes a baby laugh.",
    answers: [
      { text: "Funny faces", points: 34, accepted: ["funny faces", "faces", "silly faces"] },
      { text: "Peekaboo", points: 28, accepted: ["peekaboo", "peek a boo", "peek-a-boo"] },
      { text: "Tickles", points: 20, accepted: ["tickles", "tickling", "tickle"] },
      { text: "Silly sounds", points: 10, accepted: ["silly sounds", "sounds", "funny sounds"] },
      { text: "Dancing", points: 8, accepted: ["dancing", "dance"] }
    ]
  },
  {
    question: "Name something parents forget to bring for the baby.",
    answers: [
      { text: "Diapers", points: 35, accepted: ["diapers", "diaper"] },
      { text: "Wipes", points: 28, accepted: ["wipes", "baby wipes"] },
      { text: "Bottle", points: 16, accepted: ["bottle", "milk bottle"] },
      { text: "Pacifier", points: 12, accepted: ["pacifier", "binky"] },
      { text: "Extra clothes", points: 9, accepted: ["extra clothes", "clothes", "outfit"] }
    ]
  },
  {
    question: "Name something people do when holding a baby.",
    answers: [
      { text: "Rock them", points: 30, accepted: ["rock", "rock them"] },
      { text: "Talk baby talk", points: 24, accepted: ["baby talk", "talk", "talking"] },
      { text: "Smile", points: 18, accepted: ["smile", "smiling"] },
      { text: "Take pictures", points: 16, accepted: ["take pictures", "pictures", "photo"] },
      { text: "Bounce them", points: 12, accepted: ["bounce", "bounce them"] }
    ]
  },
  {
    question: "Name something babies hate.",
    answers: [
      { text: "Diaper changes", points: 32, accepted: ["diaper changes", "diaper change", "changing diaper"] },
      { text: "Bath time", points: 24, accepted: ["bath time", "bath"] },
      { text: "Being hungry", points: 20, accepted: ["being hungry", "hungry", "hunger"] },
      { text: "Being tired", points: 14, accepted: ["being tired", "tired", "sleepy"] },
      { text: "Loud noises", points: 10, accepted: ["loud noises", "noise", "noises"] }
    ]
  },
  {
    question: "Name something babies love.",
    answers: [
      { text: "Milk", points: 35, accepted: ["milk", "formula", "breast milk"] },
      { text: "Being held", points: 26, accepted: ["being held", "held", "cuddled"] },
      { text: "Pacifier", points: 16, accepted: ["pacifier", "binky"] },
      { text: "Toys", points: 13, accepted: ["toys", "toy"] },
      { text: "Sleep", points: 10, accepted: ["sleep", "nap"] }
    ]
  },
  {
    question: "Name something a baby might do in public that embarrasses parents.",
    answers: [
      { text: "Cry", points: 38, accepted: ["cry", "crying", "scream"] },
      { text: "Poop", points: 22, accepted: ["poop", "pooping"] },
      { text: "Spit up", points: 18, accepted: ["spit up", "vomit", "throw up"] },
      { text: "Throw food", points: 12, accepted: ["throw food", "food"] },
      { text: "Pull clothes", points: 10, accepted: ["pull clothes", "pull shirt", "clothes"] }
    ]
  },
  {
    question: "Name something you would see at a baby shower.",
    answers: [
      { text: "Gifts", points: 38, accepted: ["gifts", "gift", "presents"] },
      { text: "Balloons", points: 22, accepted: ["balloons", "balloon"] },
      { text: "Cake", points: 18, accepted: ["cake", "cupcakes"] },
      { text: "Games", points: 14, accepted: ["games", "game"] },
      { text: "Decorations", points: 8, accepted: ["decorations", "decor"] }
    ]
  },
  {
    question: "Name something a baby might need in the middle of the night.",
    answers: [
      { text: "Bottle", points: 34, accepted: ["bottle", "milk bottle"] },
      { text: "Diaper change", points: 28, accepted: ["diaper change", "change diaper", "diaper"] },
      { text: "Pacifier", points: 16, accepted: ["pacifier", "binky"] },
      { text: "Cuddles", points: 12, accepted: ["cuddles", "cuddle", "held"] },
      { text: "Medicine", points: 10, accepted: ["medicine", "medication"] }
    ]
  },
  {
    question: "Name something a parent might say to a newborn.",
    answers: [
      { text: "I love you", points: 35, accepted: ["i love you", "love you"] },
      { text: "You're so cute", points: 28, accepted: ["youre so cute", "so cute", "cute"] },
      { text: "Hi baby", points: 16, accepted: ["hi baby", "hello baby", "hi"] },
      { text: "Shhh", points: 12, accepted: ["shhh", "shh", "quiet"] },
      { text: "It's okay", points: 9, accepted: ["its okay", "it is okay", "okay"] }
    ]
  },

  {
    question: "Name something new parents miss most about their pre-baby lives.",
    answers: [
      { text: "Sleep", points: 59, hint: "The household jackpot after dark.", accepted: ["sleep", "rest", "naps", "nap"] },
      { text: "Freedom", points: 15, hint: "The old schedule with fewer tiny logistics.", accepted: ["freedom", "free time", "independence"] },
      { text: "Quiet Time", points: 8, hint: "A rare volume setting.", accepted: ["quiet time", "quiet", "peace", "peace and quiet", "silence"] },
      { text: "Going Out", points: 7, hint: "Shoes, keys, and no stroller math.", accepted: ["going out", "go out", "partying", "night out"] },
      { text: "Dinner Out", points: 3, hint: "A table without tiny utensils.", accepted: ["dinner out", "dinner", "restaurant night", "nice dinner", "meal out"] },
      { text: "Travel", points: 2, hint: "Suitcases that are not mostly wipes.", accepted: ["travel", "vacation", "trips"] }
    ]
  },
  {
    question: "Name an event parents do not want to miss in their child's life.",
    answers: [
      { text: "1st Steps", points: 48, hint: "Two tiny feet making news.", accepted: ["1st steps", "first steps", "walking", "walk"] },
      { text: "1st Word", points: 19, hint: "A sound everyone tries to claim.", accepted: ["1st word", "first word", "first words", "talking"] },
      { text: "Birthdays", points: 11, hint: "Candles keep count here.", accepted: ["birthdays", "birthday"] },
      { text: "1st Smile", points: 5, hint: "A little face finally gives back.", accepted: ["1st smile", "first smile", "smile"] },
      { text: "Birth", points: 5, hint: "The very first arrival.", accepted: ["birth", "being born", "delivery"] },
      { text: "Wedding", points: 3, hint: "A far-future aisle moment.", accepted: ["wedding", "marriage"] }
    ]
  },
  {
    question: "Name something people do to entertain a baby.",
    answers: [
      { text: "Sing", points: 29, hint: "A voice turns into entertainment.", accepted: ["sing", "singing", "song", "songs"] },
      { text: "Funny Faces", points: 28, hint: "Comedy without words.", accepted: ["funny faces", "make faces", "faces"] },
      { text: "Peekaboo", points: 21, hint: "A quick disappearing act.", accepted: ["peekaboo", "peek a boo", "peek-a-boo"] },
      { text: "Dance", points: 6, hint: "Tiny laughs from big moves.", accepted: ["dance", "dancing"] },
      { text: "Baby Talk", points: 5, hint: "Nonsense with confidence.", accepted: ["baby talk", "talk", "talking"] },
      { text: "Read", points: 3, hint: "Pages before comprehension.", accepted: ["read", "reading", "book", "books"] }
    ]
  },
  {
    question: "Name a good toy for a baby.",
    answers: [
      { text: "Rattle", points: 46, hint: "A tiny noisemaker with a handle.", accepted: ["rattle", "rattles"] },
      { text: "Sensory Toys", points: 8, hint: "Colors, bumps, and crinkles.", accepted: ["sensory toys", "sensory toy"] },
      { text: "Teether", points: 7, hint: "A chewable rescue item.", accepted: ["teether", "teething toy", "teething"] },
      { text: "Musical Toys", points: 6, hint: "Buttons parents may regret.", accepted: ["musical toys", "musical toy", "music toy"] },
      { text: "Stuffed Animal", points: 5, hint: "A soft friend with stitched eyes.", accepted: ["stuffed animal", "stuffed animals", "plush", "teddy bear"] },
      { text: "Play Mat", points: 5, hint: "The floor gets upgraded.", accepted: ["play mat", "mat"] }
    ]
  },
  {
    question: "Name something that's cute when a baby does it but not when an adult does it.",
    answers: [
      { text: "Fart", points: 59, hint: "A small sound with big reactions.", accepted: ["fart", "farting", "pass gas"] },
      { text: "Poop / Pee Pants", points: 11, hint: "Laundry suddenly gets involved.", accepted: ["poop", "pee", "poop pants", "pee pants", "poop pee pants"] },
      { text: "Burp", points: 6, hint: "A tiny sound after a meal.", accepted: ["burp", "burping"] },
      { text: "Drool", points: 4, hint: "A bib’s main opponent.", accepted: ["drool", "drooling"] },
      { text: "Blow Bubbles", points: 3, hint: "Tiny mouth weather.", accepted: ["blow bubbles", "bubbles"] },
      { text: "Messy Eating", points: 2, hint: "The high chair tells the story.", accepted: ["messy eating", "eat messy", "messy"] }
    ]
  },
  {
    question: "Name something new parents will try to do when the baby's asleep.",
    answers: [
      { text: "Sleep", points: 41, hint: "The household jackpot after dark.", accepted: ["sleep", "nap", "rest"] },
      { text: "Clean / Chores", points: 20, hint: "The quiet-room speed run.", accepted: ["clean", "chores", "cleaning", "housework"] },
      { text: "Hobbies", points: 11, hint: "An old fun habit tries to return.", accepted: ["hobbies", "hobby", "crafts", "reading", "games", "gaming"] },
      { text: "Shower", points: 7, hint: "A ten-minute luxury mission.", accepted: ["shower", "bathe", "bath"] },
      { text: "Eat a Good Meal", points: 7, hint: "Warm food becomes the goal.", accepted: ["eat", "eat a good meal", "meal", "food"] },
      { text: "Screen Time", points: 4, hint: "A glowing rectangle break.", accepted: ["screen time", "tv", "phone", "watch tv"] }
    ]
  },
  {
    question: "Name a reason the baby might be crying.",
    answers: [
      { text: "Hangry", points: 65, hint: "A tiny stomach calls the shots.", accepted: ["hangry", "hungry", "hunger", "needs food"] },
      { text: "Tired", points: 11, hint: "Sleep is needed but not accepted.", accepted: ["tired", "sleepy", "needs sleep"] },
      { text: "Farts / Gas", points: 8, hint: "A belly problem with sound effects.", accepted: ["farts", "gas", "gassy", "fart"] },
      { text: "Dirty Diaper", points: 7, hint: "The smell gives a clue.", accepted: ["dirty diaper", "diaper", "poop", "pee"] },
      { text: "Colic", points: 1, hint: "The mystery setting no one likes.", accepted: ["colic"] },
      { text: "Teething", points: 1, hint: "Tiny mouth construction work.", accepted: ["teething", "teeth"] }
    ]
  },
  {
    question: "Name a place where people hope not to have to sit next to a baby.",
    answers: [
      { text: "Airplane", points: 68, hint: "A seatbelt situation with no escape.", accepted: ["airplane", "plane", "flight"] },
      { text: "Restaurant", points: 12, hint: "Napkins, plates, and side-eyes.", accepted: ["restaurant", "dining"] },
      { text: "Movies", points: 12, hint: "A giant screen wants silence.", accepted: ["movies", "movie theater", "cinema", "theater"] },
      { text: "Bar", points: 1, hint: "A very grown-up room.", accepted: ["bar"] },
      { text: "Bus / Train", points: 1, hint: "Shared seats, shared noise.", accepted: ["bus", "train", "bus train", "public transportation"] },
      { text: "Library", points: 1, hint: "The quiet rules are strict here.", accepted: ["library"] }
    ]
  },
  {
    question: "Name a situation you don't want to be in when your water breaks.",
    answers: [
      { text: "Working", points: 27, hint: "Bad timing near a boss.", accepted: ["working", "work", "at work"] },
      { text: "Driving", points: 17, hint: "Hands on the wheel is not ideal.", accepted: ["driving", "car", "in the car"] },
      { text: "Shopping", points: 13, hint: "Aisles are involved.", accepted: ["shopping", "store", "mall"] },
      { text: "Airplane", points: 9, hint: "A seatbelt situation with no escape.", accepted: ["airplane", "plane", "flight"] },
      { text: "Far From Home", points: 5, hint: "Too many miles from comfort.", accepted: ["far from home", "away from home"] },
      { text: "On the Street", points: 5, hint: "Too public for a surprise.", accepted: ["on the street", "street", "outside"] }
    ]
  },
  {
    question: "The parents just said \"oh no!\" ...what did the baby do?",
    answers: [
      { text: "Vomited", points: 60, hint: "Milk makes a return trip.", accepted: ["vomited", "vomit", "puke", "puked", "throw up", "threw up"] },
      { text: "Blowout / Poop", points: 45, hint: "The diaper loses the battle.", accepted: ["blowout", "poop", "pooped", "diaper blowout"] },
      { text: "Hurt Themselves", points: 7, hint: "A small accident changes the mood.", accepted: ["hurt themselves", "hurt", "fell", "fall"] },
      { text: "Dropped / Threw Something", points: 4, hint: "Gravity joins the game.", accepted: ["dropped something", "threw something", "dropped", "threw"] },
      { text: "Pee/Poop During Diaper Change", points: 4, hint: "Bad timing during an open-diaper moment.", accepted: ["pee during diaper change", "poop during diaper change", "peed", "pooped"] },
      { text: "Put Something In Their Mouth", points: 3, hint: "The floor becomes suspiciously interesting.", accepted: ["put something in their mouth", "mouth", "ate something"] }
    ]
  },
  {
    question: "If you could go back to being a baby for a day, what would you enjoy the most?",
    answers: [
      { text: "Big Naps", points: 49, hint: "A calendar event with pillows.", accepted: ["big naps", "naps", "nap", "sleep"] },
      { text: "Snuggles", points: 14, hint: "Cozy arms do the work.", accepted: ["snuggles", "cuddles", "cuddle"] },
      { text: "Being Carried", points: 10, hint: "Transportation by grown-up.", accepted: ["being carried", "carried", "held"] },
      { text: "No Responsibilities", points: 9, hint: "No bills, no inbox, no schedule.", accepted: ["no responsibilities", "no responsibility", "nothing to do"] },
      { text: "Being Catered To", points: 2, hint: "Everyone becomes staff for a day.", accepted: ["being catered to", "catered to", "taken care of"] },
      { text: "Playtime", points: 2, hint: "The serious business of toys.", accepted: ["playtime", "play", "playing"] }
    ]
  },
  {
    question: "Name something your partner does that's just like a baby.",
    answers: [
      { text: "Whine", points: 18, hint: "A complaint with extra sound.", accepted: ["whine", "whining", "complain"] },
      { text: "Fart", points: 18, hint: "A small sound with big reactions.", accepted: ["fart", "farting"] },
      { text: "Fall Asleep Anywhere", points: 16, hint: "Any surface becomes a bed.", accepted: ["fall asleep anywhere", "sleep anywhere", "falls asleep"] },
      { text: "Always Eating", points: 7, hint: "Snack mode stays on.", accepted: ["always eating", "eating", "eat"] },
      { text: "Noisy Sleep", points: 5, hint: "The room hears the nap.", accepted: ["noisy sleep", "snoring", "snores"] },
      { text: "Messy Eating", points: 4, hint: "The high chair tells the story.", accepted: ["messy eating", "messy", "eats messy"] }
    ]
  },
  {
    question: "Name something you would not want a babysitter doing on the job.",
    answers: [
      { text: "Drugs", points: 25, hint: "A huge red flag for childcare.", accepted: ["drugs", "drug use"] },
      { text: "Drinking", points: 24, hint: "Not the kind of bottle anyone wants here.", accepted: ["drinking", "alcohol", "drink"] },
      { text: "Sleeping", points: 22, hint: "Stillness finally happens.", accepted: ["sleeping", "sleep", "nap"] },
      { text: "Phone / Screens", points: 10, hint: "A pocket rectangle steals attention.", accepted: ["phone", "screens", "phone screens", "texting", "on their phone"] },
      { text: "Invite People Over", points: 5, hint: "Extra guests were not on the job description.", accepted: ["invite people over", "invite friends", "friends over", "guests", "company"] },
      { text: "Throw Party", points: 5, hint: "The house should not become an event venue.", accepted: ["throw party", "party", "having a party", "partying"] }
    ]
  },
  {
    question: "Name something a baby shouldn't touch, but might try to.",
    answers: [
      { text: "Outlets", points: 26, hint: "A wall spot with hidden danger.", accepted: ["outlets", "outlet", "socket", "electric outlet"] },
      { text: "Hot Stove / Oven", points: 17, hint: "Kitchen heat with a warning label.", accepted: ["hot stove", "stove", "oven", "hot oven"] },
      { text: "Dirty Diaper", points: 7, hint: "The smell gives a clue.", accepted: ["dirty diaper", "diaper", "poop"] },
      { text: "Animals", points: 7, hint: "Cute but not always predictable.", accepted: ["animals", "animal", "pet", "pets"] },
      { text: "Hot Drink / Food", points: 5, hint: "Warm things spill badly.", accepted: ["hot drink", "hot food", "coffee", "tea"] },
      { text: "Knives", points: 5, hint: "Kitchen tools with sharp edges.", accepted: ["knives", "knife"] }
    ]
  }
];

let fastMoneyQuestions = [];

const audioTracks = {
  intro: "intro-audio",
  setup: "setup-audio",
  answering: "answering-audio",
  correct: "correct-audio",
  wrong: "wrong-audio",
  duplicate: "duplicate-audio",
  winner: "winner-audio",
  roundLoading: "round-loading-audio",
  timer: "timer-audio",
  thanks: "thanks-audio"
};

const MUSIC_VOLUME = 0.35;
const ANSWERING_TIMER_DUCKED_VOLUME = 0.24;
const TIMER_AUDIO_VOLUME = 0.48;
const FAST_MONEY_GOAL = 200;
const ROUND_TOTAL_TIME = 180;
const TIMER_WARNING_TIME = 60;
const TIMER_DANGER_TIME = 30;
const TIMER_SPEED_STEP_SECONDS = 30;
const TIMER_SPEED_STEP_AMOUNT = 0.05;
const TIMER_MAX_ANSWERING_RATE = 1.25;

let teams = [];
let activeTeamIndex = 0;
let controllingTeamIndex = 0;
let stealingTeamIndex = 1;
let currentQuestionIndex = 0;
let roundScore = 0;
let strikes = 0;
let revealedAnswers = [];
let autoRevealedAnswers = [];
let phase = "intro";

let faceoffAnswers = [];
let faceoffTurn = 0;
let faceoffWinnerIndex = null;

let roundTimerId = null;
let roundTimeLeft = ROUND_TOTAL_TIME;

let fastMoneyTeamIndex = 0;
let fastMoneyPlayer = 1;
let fastMoneyQuestionIndex = 0;
let fastMoneyAnswers = [[], []];
let fastMoneyPlayerNames = ["Player 1", "Player 2"];
let fastMoneyTotal = 0;
let fastMoneyTimeLeft = 0;
let fastMoneyTimerId = null;
let finalMessageText = "Baby Feud is over!";
let roundSummaries = [];

let currentBackgroundAudio = null;
let audioEnabled = false;
let currentFadeInterval = null;
let eventTimeoutId = null;
let audioSequence = 0;
let answeringSpeedInterval = null;
let answeringTargetRate = 1;
let masterVolume = 1;
let answerOwners = [];
let overrideAlreadyHandled = false;
let currentOverrideAdds = [];
let manualPauseState = null;
let fastMoneyTeamOrder = [0, 1];
let fastMoneyTeamTotals = [0, 0];
let fastMoneyScoresAdded = false;
let roundPrepIntervalId = null;
let roundPrepTimeLeft = 0;
let fastMoneyTeamPrepIntervalId = null;
let fastMoneyTeamPrepTimeLeft = 0;
let fastMoneyStartCountdownIntervalId = null;
let fastMoneyStartCountdownLeft = 0;
let revealIntervalId = null;
let revealOverrideTimeoutId = null;
let pendingRevealIndexes = [];
let pendingRevealPosition = 0;

function getScaledVolume(baseVolume) {
  return Math.max(0, Math.min(1, baseVolume * masterVolume));
}

function getMusicVolume() {
  return getScaledVolume(MUSIC_VOLUME);
}

function getDuckedAnsweringVolume() {
  return getScaledVolume(ANSWERING_TIMER_DUCKED_VOLUME);
}

function getTimerVolume() {
  return getScaledVolume(TIMER_AUDIO_VOLUME);
}

function setMasterVolume(value) {
  const numericValue = Number(value);
  masterVolume = Number.isFinite(numericValue) ? Math.max(0, Math.min(1, numericValue / 100)) : 1;

  document.querySelectorAll('input[type="range"][oninput*="setMasterVolume"]').forEach((volumeInput) => {
    volumeInput.value = Math.round(masterVolume * 100);
  });

  const timerAudio = document.getElementById(audioTracks.timer);
  const answeringAudio = document.getElementById(audioTracks.answering);

  Object.values(audioTracks).forEach((audioId) => {
    const audio = document.getElementById(audioId);
    if (!audio) return;

    if (audioId === audioTracks.timer) {
      audio.volume = getTimerVolume();
    } else if (audioId === audioTracks.answering && timerAudio && !timerAudio.paused) {
      audio.volume = getDuckedAnsweringVolume();
    } else {
      audio.volume = getMusicVolume();
    }
  });
}

function getFastMoneyTeamIndexForPlayer(playerNumber = fastMoneyPlayer) {
  return fastMoneyTeamOrder[playerNumber - 1] ?? 0;
}

const RECENT_REGULAR_QUESTIONS_KEY = "babyFeudRecentRegularQuestions";
const RECENT_FAST_MONEY_QUESTIONS_KEY = "babyFeudRecentFastMoneyQuestions";
const RECENT_REGULAR_LIMIT = 15;
const RECENT_FAST_MONEY_LIMIT = 15;

function getQuestionId(questionItem) {
  return normalizeAnswer(questionItem.question || "");
}

function getRecentQuestionIds(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch (error) {
    return [];
  }
}

function saveRecentQuestionIds(storageKey, ids, limit) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(ids.slice(0, limit)));
  } catch (error) {
    // If localStorage is unavailable, the game still works with normal shuffling.
  }
}

function shuffleItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getRandomQuestionsAvoidingRecent(bank, amount, storageKey, recentLimit) {
  const recentIds = getRecentQuestionIds(storageKey);
  const recentSet = new Set(recentIds);
  const freshQuestions = bank.filter((item) => !recentSet.has(getQuestionId(item)));

  let selected = [];

  if (freshQuestions.length >= amount) {
    selected = shuffleItems(freshQuestions).slice(0, amount);
  } else {
    const selectedIds = new Set(freshQuestions.map(getQuestionId));
    const backfillQuestions = bank.filter((item) => !selectedIds.has(getQuestionId(item)));
    selected = [
      ...shuffleItems(freshQuestions),
      ...shuffleItems(backfillQuestions)
    ].slice(0, amount);
  }

  const selectedIds = selected.map(getQuestionId);
  const updatedRecentIds = [
    ...selectedIds,
    ...recentIds.filter((id) => !selectedIds.includes(id))
  ];

  saveRecentQuestionIds(storageKey, updatedRecentIds, recentLimit);

  return selected;
}

function getRandomQuestionsFromBank(amount) {
  return getRandomQuestionsAvoidingRecent(
    QUESTION_BANK,
    amount,
    RECENT_REGULAR_QUESTIONS_KEY,
    RECENT_REGULAR_LIMIT
  );
}

function getRandomFastMoneyQuestionsFromBank(amount) {
  return getRandomQuestionsAvoidingRecent(
    FAST_MONEY_BANK,
    amount,
    RECENT_FAST_MONEY_QUESTIONS_KEY,
    RECENT_FAST_MONEY_LIMIT
  );
}

function setHostControlsLoadingMode(isLoading) {
  const hostControls = document.querySelector("#game-screen .host-controls");

  if (hostControls) {
    hostControls.classList.toggle("loading-mode", Boolean(isLoading));
  }
}

function enableAudio() {
  audioEnabled = true;
}

function tryAutoplayTheme() {
  enableAudio();

  const introAudio = document.getElementById(audioTracks.intro);

  if (!introAudio) {
    return;
  }

  introAudio.loop = true;
  introAudio.volume = getMusicVolume();
  introAudio.currentTime = 0;

  introAudio.play()
    .then(() => {
      currentBackgroundAudio = introAudio;
    })
    .catch(() => {
      audioEnabled = false;
    });
}

function startIntroMusic() {
  enableAudio();

  const introAudio = document.getElementById(audioTracks.intro);
  const startButton = document.querySelector("#intro-screen button");
  const smallText = document.querySelector("#intro-screen .small-text");

  if (startButton) {
    startButton.disabled = true;
  }

  // Do not restart the theme if it is already playing.
  if (introAudio && introAudio.paused) {
    introAudio.loop = true;
    introAudio.volume = getMusicVolume();
    introAudio.play().catch(() => {
      console.log("Intro audio could not play, continuing anyway.");
    });

    currentBackgroundAudio = introAudio;
  }

  let count = 3;

  if (smallText) {
    smallText.textContent = `Starting in ${count}...`;
  }

  const countdownInterval = setInterval(() => {
    count--;

    if (count > 0) {
      if (smallText) {
        smallText.textContent = `Starting in ${count}...`;
      }
    } else {
      clearInterval(countdownInterval);

      if (smallText) {
        smallText.textContent = "Let’s play!";
      }

      showSetupScreen();
    }
  }, 1000);
}

function playThanksAudio(restart = true) {
  const thanksAudio = document.getElementById(audioTracks.thanks);

  if (!thanksAudio) {
    return;
  }

  fadeToBackgroundAudio(audioTracks.thanks, {
    restart,
    loop: false
  });
}

function goToSetup() {
  showSetupScreen();
}

function showSetupScreen() {
  phase = "setup";
  enableAudio();

  document.getElementById("intro-screen").classList.remove("active");
  document.getElementById("setup-screen").classList.add("active");

  fadeToBackgroundAudio(audioTracks.setup, {
    restart: true,
    loop: true
  });
}

function startGame() {
  questions = getRandomQuestionsFromBank(5);

  const teamOneName = document.getElementById("team-name-0").value.trim() || "Team 1";
  const teamTwoName = document.getElementById("team-name-1").value.trim() || "Team 2";

  teams = [
    { name: teamOneName, score: 0 },
    { name: teamTwoName, score: 0 }
  ];

  currentQuestionIndex = 0;
  activeTeamIndex = 0;
  controllingTeamIndex = 0;
  stealingTeamIndex = 1;
  finalMessageText = "Baby Feud is over!";
  roundSummaries = [];

  document.getElementById("setup-screen").classList.remove("active");
  document.getElementById("game-screen").classList.add("active");

  startRoundPrepCountdown(10);
}

function startRoundPrepCountdown(seconds = 10) {
  clearRoundTimer();
  clearRoundPrepCountdown();
  phase = "round-prep";
  roundPrepTimeLeft = seconds;
  setHostControlsLoadingMode(true);

  const statusPanel = document.querySelector("#game-screen .status-panel");
  if (statusPanel) {
    statusPanel.classList.add("round-ended");
  }

  hideHints();
  hideGuessArea();
  hidePlayPassControls();
  updateStrikes();

  const roundNumber = currentQuestionIndex + 1;
  const phaseLabel = document.getElementById("phase-label");

  document.getElementById("round-label").textContent = `Round ${roundNumber}`;
  document.getElementById("question-text").textContent = `Round ${roundNumber} is starting soon`;
  document.getElementById("answer-board").innerHTML = "";

  if (phaseLabel) {
    phaseLabel.textContent = "Get Ready";
  }

  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: true,
    loop: true
  });

  updateRoundPrepText();
  roundPrepIntervalId = setInterval(tickRoundPrepCountdown, 1000);
}

function clearRoundPrepCountdown() {
  if (roundPrepIntervalId) {
    clearInterval(roundPrepIntervalId);
    roundPrepIntervalId = null;
  }
}

function updateRoundPrepText() {
  const roundNumber = currentQuestionIndex + 1;
  const isFirstRound = roundNumber === 1;
  const teamGoingFirstName = teams[currentQuestionIndex % 2]?.name || "the next team";
  const prepMessage = isFirstRound
    ? `Round 1 starts in ${roundPrepTimeLeft} seconds. ${teamGoingFirstName} goes first. Once the question appears, discuss as a team and send someone up to type answers.`
    : `Next round in ${roundPrepTimeLeft} seconds. ${teamGoingFirstName} goes first. Once the question appears, discuss as a team and send someone up to type answers.`;

  document.getElementById("active-team-label").textContent = prepMessage;
  document.getElementById("game-message").textContent = "";
}

function tickRoundPrepCountdown() {
  roundPrepTimeLeft--;

  if (roundPrepTimeLeft > 0) {
    updateRoundPrepText();
  } else {
    clearRoundPrepCountdown();
    fadeToBackgroundAudio(audioTracks.answering, {
      restart: true,
      loop: true
    });
    loadRound();
  }
}

function resumeRoundPrepCountdown() {
  phase = "round-prep";
  setHostControlsLoadingMode(true);
  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: false,
    loop: true
  });
  updateRoundPrepText();
  clearRoundPrepCountdown();
  roundPrepIntervalId = setInterval(tickRoundPrepCountdown, 1000);
}

function loadRound() {
  clearRoundTimer();
  setHostControlsLoadingMode(false);

  const statusPanel = document.querySelector("#game-screen .status-panel");
  if (statusPanel) {
    statusPanel.classList.remove("round-ended");
  }

  roundScore = 0;
  strikes = 0;
  revealedAnswers = [];
  autoRevealedAnswers = [];
  answerOwners = [];
  overrideAlreadyHandled = false;
  currentOverrideAdds = [];
  faceoffAnswers = [];
  faceoffTurn = 0;
  faceoffWinnerIndex = null;
  roundTimeLeft = ROUND_TOTAL_TIME;
  phase = "faceoff";

  activeTeamIndex = currentQuestionIndex % 2;
  controllingTeamIndex = activeTeamIndex;
  stealingTeamIndex = getOtherTeamIndex(controllingTeamIndex);

  const currentQuestion = questions[currentQuestionIndex];

  document.getElementById("round-label").textContent = `Round ${currentQuestionIndex + 1}`;
  document.getElementById("question-text").textContent = currentQuestion.question;
  document.getElementById("game-message").textContent =
    `Face-Off: ${teams[activeTeamIndex].name}, enter your answer.`;

  hidePlayPassControls();
  showGuessArea();
  hideHints();

  renderScoreboard();
  renderAnswerBoard();
  updateStrikes();
  updateActiveTeamLabel();
  updatePhaseLabel();
  clearGuessInput();

  startRoundTimer();
}

function submitGuess() {
  if (phase === "revealing" || phase === "round-over" || phase === "game-over" || phase === "override-review") {
    return;
  }

  if (phase === "play-or-pass") {
    document.getElementById("game-message").textContent =
      `${teams[faceoffWinnerIndex].name}, choose Play or Pass.`;
    return;
  }

  const guessInput = document.getElementById("guess-input");
  const guess = normalizeAnswer(guessInput.value);

  if (!guess) {
    document.getElementById("game-message").textContent = "Please enter an answer.";
    return;
  }

  if (phase === "faceoff") {
    handleFaceoffGuess(guess);
  } else if (phase === "main-round") {
    handleMainRoundGuess(guess);
  } else if (phase === "steal") {
    handleStealGuess(guess);
  }

  clearGuessInput();
}

function handleFaceoffGuess(guess) {
  const matchedIndex = findMatchingAnswerIndex(guess, true);

  if (matchedIndex !== -1) {
    revealAnswer(matchedIndex);
    playCorrectAudio();

    const answer = questions[currentQuestionIndex].answers[matchedIndex];

    faceoffAnswers.push({
      teamIndex: activeTeamIndex,
      answerIndex: matchedIndex,
      points: getAnswerPoints(answer)
    });

    document.getElementById("game-message").textContent =
      `${teams[activeTeamIndex].name} found ${answer.text} for ${getAnswerPoints(answer)} points!`;
  } else {
    playStrikeAudio();

    faceoffAnswers.push({
      teamIndex: activeTeamIndex,
      answerIndex: -1,
      points: 0
    });

    document.getElementById("game-message").textContent =
      `${teams[activeTeamIndex].name} did not find an answer on the board.`;
  }

  renderScoreboard();
  renderAnswerBoard();

  const didGetTopAnswer = matchedIndex === 0;

  if (faceoffTurn === 0 && didGetTopAnswer) {
    faceoffWinnerIndex = activeTeamIndex;
    setTimeout(showPlayPassChoice, 3000);
    return;
  }

  if (faceoffTurn === 0) {
    faceoffTurn = 1;
    activeTeamIndex = getOtherTeamIndex(activeTeamIndex);

    setTimeout(() => {
      if (phase !== "faceoff") {
        return;
      }

      document.getElementById("game-message").textContent =
        `Face-Off: ${teams[activeTeamIndex].name}, enter your answer.`;

      updateActiveTeamLabel();
      updatePhaseLabel();
      renderScoreboard();
      clearGuessInput();
    }, 3000);

    return;
  }

  determineFaceoffWinner();
  setTimeout(showPlayPassChoice, 3000);
}


function isActiveRoundTimerPhase() {
  return (
    phase === "faceoff" ||
    phase === "main-round" ||
    phase === "steal"
  );
}

function isActiveTimedAnsweringPhase() {
  return isActiveRoundTimerPhase() || phase === "fast-money-active";
}

function getActiveTimerInfo() {
  if (phase === "fast-money-active") {
    return {
      total: 120,
      left: fastMoneyTimeLeft
    };
  }

  return {
    total: ROUND_TOTAL_TIME,
    left: roundTimeLeft
  };
}

function getTargetAnsweringPlaybackRate() {
  if (!isActiveTimedAnsweringPhase()) {
    return 1;
  }

  const timerInfo = getActiveTimerInfo();
  const elapsedSeconds = Math.max(0, timerInfo.total - timerInfo.left);
  const speedSteps = Math.floor(elapsedSeconds / TIMER_SPEED_STEP_SECONDS);
  const targetRate = 1 + speedSteps * TIMER_SPEED_STEP_AMOUNT;

  return Math.min(TIMER_MAX_ANSWERING_RATE, targetRate);
}

function smoothSetAnsweringAudioSpeed(targetRate) {
  const answeringAudio = document.getElementById(audioTracks.answering);

  answeringTargetRate = targetRate;

  if (!answeringAudio) {
    return;
  }

  if (Math.abs(answeringAudio.playbackRate - targetRate) < 0.01) {
    answeringAudio.playbackRate = targetRate;
    return;
  }

  if (answeringSpeedInterval) {
    clearInterval(answeringSpeedInterval);
    answeringSpeedInterval = null;
  }

  const startRate = answeringAudio.playbackRate || 1;
  const steps = 20;
  let currentStep = 0;

  answeringSpeedInterval = setInterval(() => {
    currentStep++;
    const progress = currentStep / steps;
    answeringAudio.playbackRate = startRate + (targetRate - startRate) * progress;

    if (currentStep >= steps) {
      clearInterval(answeringSpeedInterval);
      answeringSpeedInterval = null;
      answeringAudio.playbackRate = targetRate;
    }
  }, 100);
}

function resetAnsweringAudioSpeed() {
  const answeringAudio = document.getElementById(audioTracks.answering);

  if (answeringSpeedInterval) {
    clearInterval(answeringSpeedInterval);
    answeringSpeedInterval = null;
  }

  answeringTargetRate = 1;

  if (answeringAudio) {
    answeringAudio.playbackRate = 1;
  }
}

function startTimerWarningAudio() {
  const timerAudio = document.getElementById(audioTracks.timer);
  const answeringAudio = document.getElementById(audioTracks.answering);

  if (!timerAudio || !audioEnabled) {
    return;
  }

  if (answeringAudio && !answeringAudio.paused) {
    answeringAudio.volume = getDuckedAnsweringVolume();
  }

  timerAudio.loop = true;
  timerAudio.volume = getTimerVolume();
  timerAudio.playbackRate = 1;

  if (timerAudio.paused) {
    timerAudio.currentTime = 0;
    timerAudio.play().catch(() => {});
  }
}

function stopTimerWarningAudio(resetAnswering = true) {
  const timerAudio = document.getElementById(audioTracks.timer);
  const answeringAudio = document.getElementById(audioTracks.answering);
  const phaseLabel = document.getElementById("phase-label");

  if (timerAudio) {
    timerAudio.pause();
    timerAudio.currentTime = 0;
    timerAudio.playbackRate = 1;
    timerAudio.volume = getTimerVolume();
  }

  if (answeringAudio) {
    answeringAudio.volume = getMusicVolume();
  }

  if (resetAnswering) {
    resetAnsweringAudioSpeed();
  }

  if (phaseLabel) {
    phaseLabel.classList.remove("timer-warning", "timer-danger");
  }

  const fastTimer = document.getElementById("fast-timer");
  if (fastTimer) {
    fastTimer.classList.remove("timer-warning", "timer-danger");
  }

  [phaseLabel?.closest(".side-small-box"), fastTimer?.closest(".fast-side-header")].forEach((element) => {
    if (element) {
      element.classList.remove("timer-warning-container", "timer-danger-container");
    }
  });
}

function updateRoundTimerEffects() {
  const phaseLabel = document.getElementById("phase-label");
  const fastTimer = document.getElementById("fast-timer");
  const activeTimerElement = phase === "fast-money-active" ? fastTimer : phaseLabel;
  const phaseContainer = phaseLabel ? phaseLabel.closest(".side-small-box") : null;
  const fastContainer = fastTimer ? fastTimer.closest(".fast-side-header") : null;

  [phaseLabel, fastTimer].forEach((element) => {
    if (element) {
      element.classList.remove("timer-warning", "timer-danger");
    }
  });

  [phaseContainer, fastContainer].forEach((element) => {
    if (element) {
      element.classList.remove("timer-warning-container", "timer-danger-container");
    }
  });

  if (!isActiveTimedAnsweringPhase()) {
    stopTimerWarningAudio(true);
    return;
  }

  const timerInfo = getActiveTimerInfo();
  const activeContainer = phase === "fast-money-active" ? fastContainer : phaseContainer;

  smoothSetAnsweringAudioSpeed(getTargetAnsweringPlaybackRate());

  if (timerInfo.left <= TIMER_DANGER_TIME) {
    if (activeTimerElement) {
      activeTimerElement.classList.add("timer-danger");
    }
    if (activeContainer) {
      activeContainer.classList.add("timer-danger-container");
    }
    startTimerWarningAudio();
  } else if (timerInfo.left <= TIMER_WARNING_TIME) {
    if (activeTimerElement) {
      activeTimerElement.classList.add("timer-warning");
    }
    if (activeContainer) {
      activeContainer.classList.add("timer-warning-container");
    }
    startTimerWarningAudio();
  } else {
    stopTimerWarningAudio(false);
  }
}

function startRoundTimer() {
  clearRoundTimer();

  if (
    phase === "game-over" ||
    phase === "fast-money-intro" ||
    phase === "fast-money-countdown" ||
    phase === "fast-money-active" ||
    phase === "fast-money-complete"
  ) {
    return;
  }

  updateRoundTimerDisplay();

  roundTimerId = setInterval(() => {
    roundTimeLeft--;
    updateRoundTimerDisplay();

    if (roundTimeLeft <= 0) {
      clearRoundTimer();
      handleRoundTimeout();
    }
  }, 1000);
}

function clearRoundTimer() {
  if (roundTimerId) {
    clearInterval(roundTimerId);
    roundTimerId = null;
  }

  stopTimerWarningAudio();
}

function updateRoundTimerDisplay() {
  const minutes = Math.floor(roundTimeLeft / 60);
  const seconds = roundTimeLeft % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const timerText = `Timer: ${minutes}:${formattedSeconds}`;
  const phaseLabel = document.getElementById("phase-label");

  if (!phaseLabel) {
    return;
  }

  if (phase === "faceoff") {
    phaseLabel.textContent = `Face-Off | ${timerText}`;
  } else if (phase === "play-or-pass") {
    phaseLabel.textContent = `Play or Pass | Paused: ${minutes}:${formattedSeconds}`;
  } else if (phase === "main-round") {
    phaseLabel.textContent = `Main Round | ${timerText}`;
  } else if (phase === "steal") {
    phaseLabel.textContent = `Steal | ${timerText}`;
  } else if (phase === "revealing") {
    phaseLabel.textContent = "Revealing Answers";
  } else if (phase === "round-prep") {
    phaseLabel.textContent = "Get Ready";
  } else {
    phaseLabel.textContent = timerText;
  }

  updateRoundTimerEffects();
}

function handleRoundTimeout() {
  if (
    phase === "revealing" ||
    phase === "game-over" ||
    phase === "fast-money-intro" ||
    phase === "fast-money-countdown" ||
    phase === "fast-money-active" ||
    phase === "fast-money-complete"
  ) {
    return;
  }

  setHostControlsLoadingMode(true);

  hideGuessArea();
  hidePlayPassControls();
  hideHints();

  const timeoutWinnerIndex = getTimeoutWinningTeamIndex();
  awardRoundToTeam(
    timeoutWinnerIndex,
    `Round time is up! ${teams[timeoutWinnerIndex].name} had the most answers on the board and gets the round.`
  );
}

function determineFaceoffWinner() {
  const first = faceoffAnswers[0];
  const second = faceoffAnswers[1];

  if (!first && !second) {
    faceoffWinnerIndex = activeTeamIndex;
    return;
  }

  if (!second) {
    faceoffWinnerIndex = first.teamIndex;
    return;
  }

  if (first.points >= second.points) {
    faceoffWinnerIndex = first.teamIndex;
  } else {
    faceoffWinnerIndex = second.teamIndex;
  }
}

function showPlayPassChoice() {
  clearRoundTimer();

  phase = "play-or-pass";
  activeTeamIndex = faceoffWinnerIndex;

  document.getElementById("game-message").textContent =
    `${teams[faceoffWinnerIndex].name} won the face-off! Choose Play or Pass.`;

  showPlayPassControls();
  hideGuessArea();
  updateActiveTeamLabel();
  updatePhaseLabel();
  renderScoreboard();
}

function choosePlay() {
  if (phase !== "play-or-pass") {
    return;
  }

  controllingTeamIndex = faceoffWinnerIndex;
  stealingTeamIndex = getOtherTeamIndex(controllingTeamIndex);
  activeTeamIndex = controllingTeamIndex;

  beginMainRound(`${teams[controllingTeamIndex].name} chose to play!`);
}

function choosePass() {
  if (phase !== "play-or-pass") {
    return;
  }

  controllingTeamIndex = getOtherTeamIndex(faceoffWinnerIndex);
  stealingTeamIndex = faceoffWinnerIndex;
  activeTeamIndex = controllingTeamIndex;

  beginMainRound(`${teams[faceoffWinnerIndex].name} passed! ${teams[controllingTeamIndex].name} will play the board.`);
}

function beginMainRound(message) {
  phase = "main-round";
  strikes = 0;

  hidePlayPassControls();
  showGuessArea();
  updateStrikes();
  updateActiveTeamLabel();
  updatePhaseLabel();
  renderScoreboard();

  document.getElementById("game-message").textContent = message;
  clearGuessInput();
  startRoundTimer();
}

function handleMainRoundGuess(guess) {
  const matchedIndex = findMatchingAnswerIndex(guess, true);

  if (matchedIndex !== -1) {
    revealAnswer(matchedIndex);
    playCorrectAudio();

    const answer = questions[currentQuestionIndex].answers[matchedIndex];

    document.getElementById("game-message").textContent =
      `Correct! ${answer.text} was worth ${getAnswerPoints(answer)} points.`;

    renderScoreboard();
    renderAnswerBoard();

    if (allAnswersRevealed()) {
      setTimeout(() => {
        awardRoundToTeam(controllingTeamIndex, `${teams[controllingTeamIndex].name} cleared the board!`);
      }, 5600);
    }

    return;
  }

  playStrikeAudio();

  strikes++;
  updateStrikes();

  if (strikes === 2) {
    showHints();
  }

  if (strikes >= 3) {
    setTimeout(enterStealMode, 2200);
  } else {
    document.getElementById("game-message").textContent =
      `Strike ${strikes}! ${teams[controllingTeamIndex].name} keeps control.`;
  }
}

function enterStealMode() {
  phase = "steal";
  activeTeamIndex = stealingTeamIndex;

  document.getElementById("game-message").textContent =
    `${teams[stealingTeamIndex].name}, you have one chance to steal!`;

  updateActiveTeamLabel();
  updatePhaseLabel();
  renderScoreboard();
  clearGuessInput();
}

function handleStealGuess(guess) {
  const matchedIndex = findMatchingAnswerIndex(guess, true);

  hideHints();
  hideGuessArea();
  hidePlayPassControls();

  if (matchedIndex !== -1) {
    revealAnswer(matchedIndex);
    playCorrectAudio();

    const answer = questions[currentQuestionIndex].answers[matchedIndex];

    const statusPanel = document.querySelector("#game-screen .status-panel");
    if (statusPanel) {
      statusPanel.classList.add("round-ended");
    }

    document.getElementById("active-team-label").textContent =
      `${teams[stealingTeamIndex].name} stole the round with ${answer.text}!`;
    document.getElementById("game-message").textContent = "";

    renderScoreboard();
    renderAnswerBoard();

    setTimeout(() => {
      awardRoundToTeam(stealingTeamIndex, `${teams[stealingTeamIndex].name} stole the round!`);
    }, 5600);

    return;
  }

  playStrikeAudio();

  const statusPanel = document.querySelector("#game-screen .status-panel");
  if (statusPanel) {
    statusPanel.classList.add("round-ended");
  }

  document.getElementById("active-team-label").textContent =
    `No steal! ${teams[controllingTeamIndex].name} keeps the round.`;
  document.getElementById("game-message").textContent = "";

  setTimeout(() => {
    awardRoundToTeam(controllingTeamIndex, `No steal! ${teams[controllingTeamIndex].name} keeps the round.`);
  }, 3000);
}

function awardRoundToTeam(teamIndex, message) {
  if (phase === "revealing" || phase === "round-over" || phase === "game-over") {
    return;
  }

  const earnedPoints = roundScore;
  const currentQuestion = questions[currentQuestionIndex];

  roundSummaries.push({
    round: currentQuestionIndex + 1,
    question: currentQuestion ? currentQuestion.question : "",
    winningTeam: teams[teamIndex].name,
    points: earnedPoints,
    foundAnswers: revealedAnswers.length,
    totalAnswers: currentQuestion ? currentQuestion.answers.length : 0
  });

  teams[teamIndex].score += roundScore;
  roundScore = 0;

  const statusPanel = document.querySelector("#game-screen .status-panel");
  if (statusPanel) {
    statusPanel.classList.add("round-ended");
  }

  document.getElementById("active-team-label").textContent = message;
  document.getElementById("game-message").textContent = "";

  playWinnerMusic();

  renderScoreboard();
  hideHints();
  hideGuessArea();
  hidePlayPassControls();

  setTimeout(() => {
    revealRemainingAnswersThenContinue();
  }, 2200);
}

function clearRevealTimers() {
  if (revealIntervalId) {
    clearInterval(revealIntervalId);
    revealIntervalId = null;
  }

  if (revealOverrideTimeoutId) {
    clearTimeout(revealOverrideTimeoutId);
    revealOverrideTimeoutId = null;
  }
}

function scheduleOverrideDecision(delay = 1200) {
  if (revealOverrideTimeoutId) {
    clearTimeout(revealOverrideTimeoutId);
  }

  revealOverrideTimeoutId = setTimeout(() => {
    revealOverrideTimeoutId = null;
    showOverrideDecision();
  }, delay);
}

function startRemainingRevealInterval() {
  if (revealIntervalId) {
    clearInterval(revealIntervalId);
  }

  revealIntervalId = setInterval(() => {
    if (phase !== "revealing") {
      return;
    }

    const answerIndex = pendingRevealIndexes[pendingRevealPosition];

    if (answerIndex === undefined) {
      clearRevealTimers();
      scheduleOverrideDecision(1200);
      return;
    }

    if (!autoRevealedAnswers.includes(answerIndex)) {
      autoRevealedAnswers.push(answerIndex);
    }

    if (!revealedAnswers.includes(answerIndex)) {
      revealedAnswers.push(answerIndex);
    }

    renderAnswerBoard();
    pendingRevealPosition++;

    if (pendingRevealPosition >= pendingRevealIndexes.length) {
      clearRevealTimers();
      scheduleOverrideDecision(1200);
    }
  }, 1200);
}

function revealRemainingAnswersThenContinue() {
  clearRoundTimer();
  clearRevealTimers();
  setHostControlsLoadingMode(true);

  phase = "revealing";
  updatePhaseLabel();

  playWinnerMusic();

  hideHints();
  hideGuessArea();
  hidePlayPassControls();

  const statusPanel = document.querySelector("#game-screen .status-panel");
  if (statusPanel) {
    statusPanel.classList.add("round-ended");
  }

  document.getElementById("active-team-label").textContent = "Revealing answers...";
  document.getElementById("game-message").textContent = "";

  const currentAnswers = questions[currentQuestionIndex].answers;
  pendingRevealIndexes = [];
  pendingRevealPosition = 0;

  currentAnswers.forEach((answer, index) => {
    if (!revealedAnswers.includes(index)) {
      pendingRevealIndexes.push(index);
    }
  });

  if (pendingRevealIndexes.length === 0) {
    scheduleOverrideDecision(1000);
    return;
  }

  startRemainingRevealInterval();
}

function showOverrideDecision() {
  if (overrideAlreadyHandled || phase === "game-over") {
    goToNextRoundOrFastMoney();
    return;
  }

  overrideAlreadyHandled = true;
  currentOverrideAdds = [];
  phase = "override-review";
  setHostControlsLoadingMode(true);

  hideGuessArea();
  hidePlayPassControls();
  hideHints();

  const activeLabel = document.getElementById("active-team-label");
  const answers = questions[currentQuestionIndex].answers
    .map((answer) => `<li>${answer.text}: ${getAnswerPoints(answer)} points</li>`)
    .join("");

  activeLabel.innerHTML = `
    <div class="override-controls">
      <p>Host check: do any answers need an override?</p>
      <ol class="override-answer-list">${answers}</ol>
      <div>
        <button type="button" onclick="noOverrideContinue()">No Override Needed</button>
        <button type="button" onclick="showOverrideForm()">Override / Add Points</button>
      </div>
    </div>
  `;

  document.getElementById("game-message").textContent = "";
}

function noOverrideContinue() {
  goToNextRoundOrFastMoney();
}

function getOverrideTableHtml() {
  if (!currentOverrideAdds.length) {
    return `<p class="override-mini-note">No override points have been added yet.</p>`;
  }

  const rows = currentOverrideAdds.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.teamName}</td>
      <td>${item.answerText}</td>
      <td>${item.points}</td>
    </tr>
  `).join("");

  return `
    <table class="override-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>Answer</th>
          <th>Points Added</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function showOverrideForm(message = "") {
  const activeLabel = document.getElementById("active-team-label");
  const teamOptions = teams
    .map((team, index) => `<option value="${index}">${team.name}</option>`)
    .join("");

  const usedIndexes = new Set(currentOverrideAdds.map((item) => item.answerIndex));
  const answerOptions = questions[currentQuestionIndex].answers
    .map((answer, index) => {
      const disabled = usedIndexes.has(index) ? " disabled" : "";
      const label = `${answer.text} — ${getAnswerPoints(answer)} points${disabled ? " (already added)" : ""}`;
      return `<option value="${index}"${disabled}>${label}</option>`;
    })
    .join("");

  const answers = questions[currentQuestionIndex].answers
    .map((answer) => `<li>${answer.text}: ${getAnswerPoints(answer)} points</li>`)
    .join("");

  activeLabel.innerHTML = `
    <div class="override-controls">
      <p>Add override points by choosing one of this round's answer values.</p>
      <p class="override-mini-note">This prevents adding random points that were not available on the board.</p>
      ${message ? `<p>${message}</p>` : ""}
      <ol class="override-answer-list">${answers}</ol>
      <div class="override-add-row">
        <select id="override-team-select">${teamOptions}</select>
        <select id="override-answer-select">${answerOptions}</select>
        <button type="button" onclick="applyOverridePoints()">Add Points</button>
      </div>
      ${getOverrideTableHtml()}
      <div>
        <button type="button" onclick="finishOverrides()">Done</button>
      </div>
    </div>
  `;
}

function applyOverridePoints() {
  const teamSelect = document.getElementById("override-team-select");
  const answerSelect = document.getElementById("override-answer-select");
  const teamIndex = Number(teamSelect ? teamSelect.value : 0);
  const answerIndex = Number(answerSelect ? answerSelect.value : NaN);
  const currentAnswers = questions[currentQuestionIndex].answers;
  const answer = currentAnswers[answerIndex];

  if (!teams[teamIndex] || !answer) {
    showOverrideForm("Choose a team and an available answer value first.");
    return;
  }

  if (currentOverrideAdds.some((item) => item.answerIndex === answerIndex)) {
    showOverrideForm("That answer value was already added as an override.");
    return;
  }

  const points = getAnswerPoints(answer);

  teams[teamIndex].score += points;

  const overrideItem = {
    teamIndex,
    teamName: teams[teamIndex].name,
    answerIndex,
    answerText: answer.text,
    points
  };

  currentOverrideAdds.push(overrideItem);

  const latestSummary = roundSummaries[roundSummaries.length - 1];
  if (latestSummary && latestSummary.round === currentQuestionIndex + 1) {
    latestSummary.overridePoints = (latestSummary.overridePoints || 0) + points;
    latestSummary.overrideDetails = latestSummary.overrideDetails || [];
    latestSummary.overrideDetails.push(overrideItem);
  }

  renderScoreboard();
  showOverrideForm(`${points} point${points === 1 ? "" : "s"} added to ${teams[teamIndex].name} for ${answer.text}.`);
}

function finishOverrides() {
  goToNextRoundOrFastMoney();
}

function goToNextRoundOrFastMoney() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    startRoundPrepCountdown(10);
  } else {
    const statusPanel = document.querySelector("#game-screen .status-panel");
    if (statusPanel) {
      statusPanel.classList.add("round-ended");
    }

    document.getElementById("active-team-label").textContent =
      "All rounds are complete! Moving to Fast Money...";
    document.getElementById("game-message").textContent = "";

    setTimeout(showFastMoneyScreen, 2500);
  }
}

function forceRevealAndNext() {
  if (
    phase === "revealing" ||
    phase === "round-over" ||
    phase === "override-review" ||
    phase === "game-over" ||
    phase === "fast-money-intro" ||
    phase === "fast-money-countdown" ||
    phase === "fast-money-active" ||
    phase === "fast-money-complete"
  ) {
    return;
  }

  clearRoundTimer();
  hideGuessArea();
  hidePlayPassControls();
  hideHints();
  revealRemainingAnswersThenContinue();
}

function revealAnswer(answerIndex, teamIndex = activeTeamIndex) {
  if (revealedAnswers.includes(answerIndex)) {
    return;
  }

  revealedAnswers.push(answerIndex);
  answerOwners[answerIndex] = teamIndex;

  const answer = questions[currentQuestionIndex].answers[answerIndex];
  roundScore += getAnswerPoints(answer);
}

function getTimeoutWinningTeamIndex() {
  const foundCounts = teams.map(() => 0);

  revealedAnswers.forEach((answerIndex) => {
    const owner = answerOwners[answerIndex];
    if (typeof owner === "number" && foundCounts[owner] !== undefined) {
      foundCounts[owner]++;
    }
  });

  if (foundCounts[0] > foundCounts[1]) {
    return 0;
  }

  if (foundCounts[1] > foundCounts[0]) {
    return 1;
  }

  return teams[0].score >= teams[1].score ? 0 : 1;
}

function getAnswerPoints(answer) {
  return answer.points;
}

function findMatchingAnswerIndex(guess, ignoreRevealed) {
  const currentAnswers = questions[currentQuestionIndex].answers;

  for (let i = 0; i < currentAnswers.length; i++) {
    if (ignoreRevealed && revealedAnswers.includes(i)) {
      continue;
    }

    const acceptedAnswers = currentAnswers[i].accepted.map((answer) => normalizeAnswer(answer));

    if (acceptedAnswers.includes(guess)) {
      return i;
    }
  }

  return -1;
}

function showFastMoneyScreen() {
  setHostControlsLoadingMode(false);
  clearRoundTimer();
  stopAllAudioExcept();

  phase = "fast-money-intro";

  fastMoneyQuestions = getRandomFastMoneyQuestionsFromBank(5);
  const leadingTeamIndex = teams[0].score >= teams[1].score ? 0 : 1;
  fastMoneyTeamOrder = [leadingTeamIndex, getOtherTeamIndex(leadingTeamIndex)];
  fastMoneyTeamIndex = fastMoneyTeamOrder[0];
  fastMoneyPlayer = 1;
  fastMoneyQuestionIndex = 0;
  fastMoneyAnswers = [[], []];
  fastMoneyPlayerNames = ["Player 1", "Player 2"];
  fastMoneyTeamTotals = [0, 0];
  fastMoneyScoresAdded = false;
  fastMoneyTotal = 0;
  finalMessageText = "Fast Money will decide the final winner!";

  document.getElementById("game-screen").classList.remove("active");
  document.getElementById("fast-money-intro-screen").classList.add("active");

  fadeToBackgroundAudio(audioTracks.setup, {
    restart: true,
    loop: true
  });

  const firstTeamName = teams[fastMoneyTeamOrder[0]].name;
  const secondTeamName = teams[fastMoneyTeamOrder[1]].name;

  document.getElementById("fast-money-intro-message").textContent =
    `Fast Money is for both teams! ${firstTeamName} goes first because they are currently ahead. Read the rules, then press Continue to start the 1-minute representative discussion countdown.`;
}

function startFastMoneyFromIntro() {
  stopAllAudioExcept();

  const firstTeamName = teams[fastMoneyTeamOrder[0]].name;
  const secondTeamName = teams[fastMoneyTeamOrder[1]].name;

  fastMoneyPlayerNames = [`${firstTeamName} Representative`, `${secondTeamName} Representative`];
  fastMoneyPlayer = 1;
  fastMoneyTeamIndex = fastMoneyTeamOrder[0];

  document.getElementById("fast-money-intro-screen").classList.remove("active");
  document.getElementById("fast-money-screen").classList.add("active");

  document.getElementById("fast-team-label").textContent =
    `${firstTeamName} goes first`;

  document.getElementById("fast-player-label").textContent =
    `${firstTeamName} representative`;

  document.getElementById("fast-timer").textContent = "Timer: 2:00";
  document.getElementById("fast-start-button").classList.add("hidden");
  document.getElementById("fast-end-button").classList.add("hidden");
  document.getElementById("fast-answer-area").classList.add("hidden");
  document.getElementById("fast-money-board").classList.add("hidden");

  startFastMoneyTeamPrepCountdown(60);
}

function startFastMoneyTeamPrepCountdown(seconds = 60) {
  phase = "fast-money-countdown";
  clearFastMoneyTeamPrepCountdown();
  fastMoneyTeamPrepTimeLeft = seconds;

  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: true,
    loop: true
  });

  document.getElementById("fast-money-screen").classList.add("fast-countdown-mode");
  document.getElementById("fast-countdown").classList.remove("hidden");
  document.getElementById("fast-answer-area").classList.add("hidden");
  document.getElementById("fast-start-button").classList.add("hidden");
  document.getElementById("fast-money-board").classList.add("hidden");
  document.getElementById("fast-message").textContent =
    "Pick one representative from each team. No teammates can help once their player starts answering.";

  updateFastMoneyTeamPrepText();
  fastMoneyTeamPrepIntervalId = setInterval(tickFastMoneyTeamPrepCountdown, 1000);
}

function clearFastMoneyTeamPrepCountdown() {
  if (fastMoneyTeamPrepIntervalId) {
    clearInterval(fastMoneyTeamPrepIntervalId);
    fastMoneyTeamPrepIntervalId = null;
  }
}

function updateFastMoneyTeamPrepText() {
  const firstTeamName = teams[fastMoneyTeamOrder[0]].name;
  const secondTeamName = teams[fastMoneyTeamOrder[1]].name;

  document.getElementById("fast-countdown").textContent = fastMoneyTeamPrepTimeLeft;
  document.getElementById("fast-question-text").textContent =
    `Both teams have ${fastMoneyTeamPrepTimeLeft} seconds to choose their Fast Money representative. ${firstTeamName} answers first, then ${secondTeamName}.`;
}

function tickFastMoneyTeamPrepCountdown() {
  fastMoneyTeamPrepTimeLeft--;

  if (fastMoneyTeamPrepTimeLeft > 0) {
    updateFastMoneyTeamPrepText();
  } else {
    clearFastMoneyTeamPrepCountdown();
    document.getElementById("fast-countdown").classList.add("hidden");
    document.getElementById("fast-money-screen").classList.remove("fast-countdown-mode");
    startFastMoneyCountdown();
  }
}

function resumeFastMoneyTeamPrepCountdown() {
  phase = "fast-money-countdown";
  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: false,
    loop: true
  });
  updateFastMoneyTeamPrepText();
  clearFastMoneyTeamPrepCountdown();
  fastMoneyTeamPrepIntervalId = setInterval(tickFastMoneyTeamPrepCountdown, 1000);
}

function startFastMoneyCountdown() {
  phase = "fast-money-countdown";

  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: true,
    loop: true
  });

  fastMoneyTeamIndex = getFastMoneyTeamIndexForPlayer();
  const teamName = teams[fastMoneyTeamIndex].name;

  document.getElementById("fast-money-screen").classList.add("fast-countdown-mode");

  document.getElementById("fast-start-button").classList.add("hidden");
  document.getElementById("fast-answer-area").classList.add("hidden");
  document.getElementById("fast-money-board").classList.add("hidden");
  document.getElementById("fast-message").textContent =
    fastMoneyPlayer === 1
      ? `${teamName}, answer all 5 Fast Money questions before time runs out.`
      : `${teamName}, answer now. No duplicate answers from the first team.`;

  document.getElementById("fast-team-label").textContent = `${teamName} answering`;
  document.getElementById("fast-player-label").textContent = `${teamName} representative`;

  fastMoneyStartCountdownLeft = 5;
  const countdownElement = document.getElementById("fast-countdown");
  countdownElement.textContent = fastMoneyStartCountdownLeft;
  countdownElement.classList.remove("hidden");

  document.getElementById("fast-question-text").textContent =
    `${teamName}, get ready! The timer starts after the countdown.`;

  clearFastMoneyStartCountdown();
  fastMoneyStartCountdownIntervalId = setInterval(tickFastMoneyStartCountdown, 1000);
}

function clearFastMoneyStartCountdown() {
  if (fastMoneyStartCountdownIntervalId) {
    clearInterval(fastMoneyStartCountdownIntervalId);
    fastMoneyStartCountdownIntervalId = null;
  }
}

function tickFastMoneyStartCountdown() {
  fastMoneyStartCountdownLeft--;
  const countdownElement = document.getElementById("fast-countdown");

  if (fastMoneyStartCountdownLeft > 0) {
    countdownElement.textContent = fastMoneyStartCountdownLeft;
  } else {
    clearFastMoneyStartCountdown();
    countdownElement.classList.add("hidden");
    document.getElementById("fast-money-screen").classList.remove("fast-countdown-mode");
    beginFastMoneyPlayer();
  }
}

function resumeFastMoneyStartCountdown() {
  phase = "fast-money-countdown";
  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: false,
    loop: true
  });
  document.getElementById("fast-countdown").textContent = fastMoneyStartCountdownLeft;
  clearFastMoneyStartCountdown();
  fastMoneyStartCountdownIntervalId = setInterval(tickFastMoneyStartCountdown, 1000);
}

function beginFastMoneyPlayer() {
  phase = "fast-money-active";
  fastMoneyTeamIndex = getFastMoneyTeamIndexForPlayer();
  stopTimerWarningAudio(true);

  fadeToBackgroundAudio(audioTracks.answering, {
    restart: true,
    loop: true
  });

  fastMoneyQuestionIndex = 0;
  fastMoneyTimeLeft = 120;

  document.getElementById("fast-money-screen").classList.remove("fast-countdown-mode");
  document.getElementById("fast-money-board").classList.add("hidden");
  document.getElementById("fast-answer-area").classList.remove("hidden");

  updateFastMoneyLabels();
  document.getElementById("fast-message").textContent = "";

  startFastMoneyTimer();
  showCurrentFastMoneyQuestion();
}

function startFastMoneyTimer() {
  clearFastMoneyTimer();

  updateFastMoneyTimerDisplay();

  fastMoneyTimerId = setInterval(() => {
    fastMoneyTimeLeft--;
    updateFastMoneyTimerDisplay();

    if (fastMoneyTimeLeft <= 0) {
      clearFastMoneyTimer();
      endCurrentFastMoneyPlayer();
    }
  }, 1000);
}

function updateFastMoneyTimerDisplay() {
  const minutes = Math.floor(fastMoneyTimeLeft / 60);
  const seconds = fastMoneyTimeLeft % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById("fast-timer").textContent =
    `Timer: ${minutes}:${formattedSeconds}`;

  updateRoundTimerEffects();
}

function clearFastMoneyTimer() {
  if (fastMoneyTimerId) {
    clearInterval(fastMoneyTimerId);
    fastMoneyTimerId = null;
  }

  stopTimerWarningAudio();
}

function showCurrentFastMoneyQuestion() {
  const question = fastMoneyQuestions[fastMoneyQuestionIndex];

  if (!question) {
    document.getElementById("fast-question-text").textContent =
      "All 5 questions answered.";
    return;
  }

  document.getElementById("fast-question-text").textContent =
    `Question ${fastMoneyQuestionIndex + 1}: ${question.question}`;

  document.getElementById("fast-message").textContent = "";

  clearFastMoneyInput();
}

function submitFastMoneyAnswer() {
  if (phase !== "fast-money-active") {
    return;
  }

  if (fastMoneyQuestionIndex >= fastMoneyQuestions.length) {
    document.getElementById("fast-message").textContent =
      "All questions have already been answered for this player.";
    return;
  }

  const input = document.getElementById("fast-answer-input");
  const rawAnswer = input.value.trim();
  const normalizedAnswer = normalizeAnswer(rawAnswer);

  if (!normalizedAnswer) {
    document.getElementById("fast-message").textContent = "Please enter an answer.";
    return;
  }

  const match = findFastMoneyMatch(fastMoneyQuestionIndex, normalizedAnswer);

  if (fastMoneyPlayer === 2 && isDuplicateFastMoneyAnswer(fastMoneyQuestionIndex, normalizedAnswer, match)) {
    const playerName = fastMoneyPlayerNames[fastMoneyPlayer - 1];

    playDuplicateAudio();

    document.getElementById("fast-message").textContent =
      `Duplicate answer! ${playerName}, try a different answer.`;

    clearFastMoneyInput();
    return;
  }

  const answerData = {
    rawAnswer,
    normalizedAnswer,
    displayAnswer: match ? match.text : rawAnswer,
    matchedAnswer: match ? match.text : null,
    points: match ? match.points : 0
  };

  fastMoneyAnswers[fastMoneyPlayer - 1][fastMoneyQuestionIndex] = answerData;

  fastMoneyQuestionIndex++;

  if (fastMoneyQuestionIndex >= fastMoneyQuestions.length) {
    clearFastMoneyTimer();

    document.getElementById("fast-answer-area").classList.add("hidden");
    showFastMoneyTransitionCountdown();
  } else {
    showCurrentFastMoneyQuestion();
  }
}

function showFastMoneyTransitionCountdown() {
  const teamName = teams[getFastMoneyTeamIndexForPlayer()].name;
  const goingToSecondPlayer = fastMoneyPlayer === 1;

  if (goingToSecondPlayer) {
    fadeToBackgroundAudio(audioTracks.winner, {
      restart: true,
      loop: true
    });
  } else {
    fadeToBackgroundAudio(audioTracks.roundLoading, {
      restart: true,
      loop: true
    });
  }

  let countdown = 5;

  document.getElementById("fast-money-screen").classList.add("fast-countdown-mode");
  document.getElementById("fast-answer-area").classList.add("hidden");
  document.getElementById("fast-start-button").classList.add("hidden");
  document.getElementById("fast-end-button").classList.add("hidden");
  document.getElementById("fast-money-board").classList.add("hidden");
  document.getElementById("fast-message").textContent = "";

  const updateText = () => {
    if (goingToSecondPlayer) {
      const secondTeamName = teams[fastMoneyTeamOrder[1]].name;
      document.getElementById("fast-question-text").textContent =
        `Great job, ${teamName}! ${secondTeamName}, get ready. Next team starts in ${countdown}...`;
    } else {
      document.getElementById("fast-question-text").textContent =
        `Great job, ${teamName}! Continuing to final results in ${countdown}...`;
    }
  };

  updateText();

  const transitionId = setInterval(() => {
    countdown--;

    if (countdown > 0) {
      updateText();
    } else {
      clearInterval(transitionId);
      document.getElementById("fast-money-screen").classList.remove("fast-countdown-mode");
      endCurrentFastMoneyPlayer();
    }
  }, 1000);
}

function findFastMoneyMatch(questionIndex, guess) {
  const question = fastMoneyQuestions[questionIndex];

  for (const answer of question.answers) {
    const accepted = answer.accepted.map((item) => normalizeAnswer(item));

    if (accepted.includes(guess)) {
      return answer;
    }
  }

  return null;
}

function isDuplicateFastMoneyAnswer(questionIndex, normalizedAnswer, match) {
  const playerOneAnswer = fastMoneyAnswers[0][questionIndex];

  if (!playerOneAnswer) {
    return false;
  }

  if (playerOneAnswer.normalizedAnswer === normalizedAnswer) {
    return true;
  }

  if (match && playerOneAnswer.matchedAnswer === match.text) {
    return true;
  }

  return false;
}

function endCurrentFastMoneyPlayer() {
  clearFastMoneyTimer();

  document.getElementById("fast-money-screen").classList.remove("fast-countdown-mode");
  document.getElementById("fast-answer-area").classList.add("hidden");
  document.getElementById("fast-money-board").classList.add("hidden");

  if (fastMoneyPlayer === 1) {
    fastMoneyPlayer = 2;
    fastMoneyQuestionIndex = 0;
    fastMoneyTeamIndex = getFastMoneyTeamIndexForPlayer();

    const teamName = teams[fastMoneyTeamIndex].name;

    document.getElementById("fast-team-label").textContent = `${teamName} answering next`;
    document.getElementById("fast-player-label").textContent = `${teamName} representative`;

    document.getElementById("fast-timer").textContent = "Timer: 2:00";

    document.getElementById("fast-question-text").textContent =
      `${teamName}, get ready. Your representative cannot repeat the first team's answers!`;

    document.getElementById("fast-message").textContent =
      "Press Start Fast Money Round when the next representative is ready.";

    document.getElementById("fast-start-button").textContent = "Start Fast Money Round";
    document.getElementById("fast-start-button").classList.remove("hidden");

    return;
  }

  finishFastMoney();
}

function finishFastMoney() {
  clearFastMoneyTimer();
  phase = "fast-money-complete";

  calculateFastMoneyTotal();

  if (!fastMoneyScoresAdded) {
    teams[0].score += fastMoneyTeamTotals[0];
    teams[1].score += fastMoneyTeamTotals[1];
    fastMoneyScoresAdded = true;
  }

  const finalWinnerIndex = teams[0].score >= teams[1].score ? 0 : 1;
  const tiedGame = teams[0].score === teams[1].score;

  playThanksAudio(true);

  document.getElementById("fast-money-screen").classList.remove("fast-countdown-mode");
  document.getElementById("fast-money-board").classList.remove("hidden");
  renderFastMoneyBoard(true);

  document.getElementById("fast-answer-area").classList.add("hidden");
  document.getElementById("fast-start-button").classList.add("hidden");
  document.getElementById("fast-end-button").classList.remove("hidden");
  document.getElementById("fast-end-button").textContent = "Continue";
  document.getElementById("fast-timer").textContent = "Timer: Done";
  document.getElementById("fast-question-text").textContent = "Final Fast Money Results";

  if (tiedGame) {
    finalMessageText = `The whole game ends in a tie! ${teams[0].name}: ${teams[0].score}, ${teams[1].name}: ${teams[1].score}.`;
    document.getElementById("fast-message").textContent = finalMessageText;
  } else {
    finalMessageText =
      `${teams[finalWinnerIndex].name} wins the whole game with ${teams[finalWinnerIndex].score} total points!`;
    document.getElementById("fast-message").textContent =
      `${teams[finalWinnerIndex].name} wins! Final score: ${teams[0].name} ${teams[0].score}, ${teams[1].name} ${teams[1].score}.`;
  }
}

function calculateFastMoneyTotal() {
  fastMoneyTotal = 0;
  fastMoneyTeamTotals = [0, 0];

  fastMoneyAnswers.forEach((playerAnswers, playerIndex) => {
    const teamIndex = fastMoneyTeamOrder[playerIndex] ?? playerIndex;

    playerAnswers.forEach((answer) => {
      if (answer) {
        fastMoneyTotal += answer.points;
        fastMoneyTeamTotals[teamIndex] += answer.points;
      }
    });
  });
}

function renderFastMoneyBoard(showEverything = false) {
  const board = document.getElementById("fast-money-board");
  board.innerHTML = "";

  const header = document.createElement("div");
  header.className = "fast-row header";

  header.innerHTML = `
    <span>Question</span>
    <span>${teams[fastMoneyTeamOrder[0]]?.name || fastMoneyPlayerNames[0] || "Team 1"}</span>
    <span>Pts</span>
    <span>${teams[fastMoneyTeamOrder[1]]?.name || fastMoneyPlayerNames[1] || "Team 2"}</span>
    <span>Pts</span>
  `;

  board.appendChild(header);

  fastMoneyQuestions.forEach((question, index) => {
    const playerOne = fastMoneyAnswers[0][index];
    const playerTwo = fastMoneyAnswers[1][index];

    const hidePlayerOne =
      fastMoneyPlayer === 2 &&
      phase !== "fast-money-complete" &&
      !showEverything;

    const row = document.createElement("div");
    row.className = "fast-row";

    row.innerHTML = `
      <span>${index + 1}. ${question.question}</span>
      <span>${playerOne ? (hidePlayerOne ? "Hidden" : playerOne.displayAnswer) : "—"}</span>
      <span>${playerOne ? (hidePlayerOne ? "—" : playerOne.points) : "—"}</span>
      <span>${playerTwo ? playerTwo.displayAnswer : "—"}</span>
      <span>${playerTwo ? playerTwo.points : "—"}</span>
    `;

    board.appendChild(row);
  });

  if (showEverything || phase === "fast-money-complete") {
    const totalCard = document.createElement("div");
    totalCard.className = "fast-total-card";
    totalCard.textContent = `Total: ${fastMoneyTotal} / ${FAST_MONEY_GOAL}`;
    board.appendChild(totalCard);
  }
}

function updateFastMoneyLabels() {
  fastMoneyTeamIndex = getFastMoneyTeamIndexForPlayer();
  const teamName = teams[fastMoneyTeamIndex].name;

  document.getElementById("fast-team-label").textContent = `${teamName} answering`;
  document.getElementById("fast-player-label").textContent = `${teamName} representative`;
}

function clearFastMoneyInput() {
  const input = document.getElementById("fast-answer-input");

  if (input) {
    input.value = "";
    input.focus();
  }
}

function handleFastMoneyEnter(event) {
  if (event.key === "Enter") {
    submitFastMoneyAnswer();
  }
}

function renderScoreboard() {
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = "";

  teams.forEach((team, index) => {
    const card = document.createElement("div");
    card.className = "score-card";

    if (index === activeTeamIndex) {
      card.classList.add("active-team");
    }

    if (phase === "main-round" && index === controllingTeamIndex) {
      card.classList.add("control-team");
    }

    card.innerHTML = `
      <h2>${team.name}</h2>
      <p>${team.score}</p>
    `;

    scoreboard.appendChild(card);
  });

  const roundCard = document.createElement("div");
  roundCard.className = "score-card round-score-card";

  roundCard.innerHTML = `
    <h2>Bank</h2>
    <p>${roundScore}</p>
  `;

  scoreboard.appendChild(roundCard);
}

function renderAnswerBoard() {
  const board = document.getElementById("answer-board");
  board.innerHTML = "";

  const currentAnswers = questions[currentQuestionIndex].answers;

  currentAnswers.forEach((answer, index) => {
    const card = document.createElement("div");

    if (revealedAnswers.includes(index)) {
      card.className = "answer-card revealed";

      if (autoRevealedAnswers.includes(index)) {
        card.classList.add("auto-revealed");
      }

      card.innerHTML = `
        <span>${answer.text}</span>
        <span>${getAnswerPoints(answer)}</span>
      `;
    } else {
      card.className = "answer-card hidden-answer";
      card.textContent = index + 1;
    }

    board.appendChild(card);
  });
}

function allAnswersRevealed() {
  return revealedAnswers.length === questions[currentQuestionIndex].answers.length;
}

function updateStrikes() {
  document.getElementById("strike-1").classList.toggle("hidden", strikes < 1);
  document.getElementById("strike-2").classList.toggle("hidden", strikes < 2);
  document.getElementById("strike-3").classList.toggle("hidden", strikes < 3);
}

function updateActiveTeamLabel() {
  let label = "";

  if (phase === "faceoff") {
    label = `Face-Off Team: ${teams[activeTeamIndex].name}`;
  } else if (phase === "play-or-pass") {
    label = `Choice: ${teams[faceoffWinnerIndex].name}`;
  } else if (phase === "main-round") {
    label = `Playing Team: ${teams[controllingTeamIndex].name}`;
  } else if (phase === "steal") {
    label = `Stealing Team: ${teams[stealingTeamIndex].name}`;
  } else {
    label = "Baby Feud";
  }

  document.getElementById("active-team-label").textContent = label;
}

function updatePhaseLabel() {
  const phaseLabel = document.getElementById("phase-label");

  if (!phaseLabel) {
    return;
  }

  if (
    phase === "faceoff" ||
    phase === "play-or-pass" ||
    phase === "main-round" ||
    phase === "steal"
  ) {
    updateRoundTimerDisplay();
  } else if (phase === "revealing") {
    phaseLabel.textContent = "Revealing Answers";
  } else {
    phaseLabel.textContent = "Baby Feud";
  }
}

function showHints() {
  const hintBox = document.getElementById("hint-box");

  if (!hintBox) {
    return;
  }

  const currentAnswers = questions[currentQuestionIndex].answers;

  const lowestUnrevealedAnswer = currentAnswers
    .map((answer, index) => ({ ...answer, index }))
    .filter((answer) => !revealedAnswers.includes(answer.index))
    .sort((a, b) => a.points - b.points)[0];

  if (!lowestUnrevealedAnswer) {
    hideHints();
    return;
  }

  hintBox.innerHTML = `
    <div class="hint-title">Hint unlocked!</div>
    <div class="hint-clue">${lowestUnrevealedAnswer.hint}</div>
  `;

  hintBox.classList.remove("hidden");
}

function hideHints() {
  const hintBox = document.getElementById("hint-box");

  if (!hintBox) {
    return;
  }

  hintBox.innerHTML = "";
  hintBox.classList.add("hidden");
}

function showPlayPassControls() {
  document.getElementById("play-pass-controls").classList.remove("hidden");
}

function hidePlayPassControls() {
  document.getElementById("play-pass-controls").classList.add("hidden");
}

function showGuessArea() {
  document.getElementById("guess-area").classList.remove("hidden");
}

function hideGuessArea() {
  document.getElementById("guess-area").classList.add("hidden");
}

function getOtherTeamIndex(teamIndex) {
  return teamIndex === 0 ? 1 : 0;
}

function normalizeAnswer(answer) {
  return answer
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ");
}

function clearGuessInput() {
  const input = document.getElementById("guess-input");

  if (input) {
    input.value = "";
    input.focus();
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    submitGuess();
  }
}


function canPauseCurrentGameState() {
  return (
    phase !== "intro" &&
    phase !== "setup" &&
    phase !== "game-over" &&
    phase !== "fast-money-complete"
  );
}

function getPauseType() {
  if (phase === "revealing") return "revealing";
  if (phase === "round-prep") return "round-prep";
  if (phase === "fast-money-countdown" && fastMoneyTeamPrepIntervalId) return "fast-money-team-prep";
  if (phase === "fast-money-countdown" && fastMoneyStartCountdownIntervalId) return "fast-money-start-countdown";
  if (phase === "fast-money-active") return "fast-money-active";
  if (isActiveRoundTimerPhase()) return "regular-timer";
  return "generic";
}

function toggleManualPause() {
  if (manualPauseState) {
    resumeFromManualPause();
  } else {
    pauseGameManually();
  }
}

function pauseGameManually() {
  if (!canPauseCurrentGameState()) {
    return;
  }

  const pauseType = getPauseType();

  manualPauseState = {
    phaseBeforePause: phase,
    pauseType,
    wasFastMoney: phase.startsWith("fast-money")
  };

  if (roundTimerId) {
    clearInterval(roundTimerId);
    roundTimerId = null;
  }

  if (fastMoneyTimerId) {
    clearInterval(fastMoneyTimerId);
    fastMoneyTimerId = null;
  }

  if (pauseType === "round-prep") {
    clearRoundPrepCountdown();
  }

  if (pauseType === "fast-money-team-prep") {
    clearFastMoneyTeamPrepCountdown();
  }

  if (pauseType === "fast-money-start-countdown") {
    clearFastMoneyStartCountdown();
  }

  if (pauseType === "revealing") {
    clearRevealTimers();
  }

  stopTimerWarningAudio(false);
  document.body.classList.add("game-paused");

  const pauseButton = document.getElementById("pause-game-button");
  if (pauseButton) {
    pauseButton.textContent = "Resume Game";
  }

  if (manualPauseState.wasFastMoney) {
    document.getElementById("fast-message").innerHTML =
      '<div class="pause-message">Game paused.</div>';
    if (pauseType === "fast-money-active") {
      document.getElementById("fast-timer").textContent =
        `Paused: ${Math.floor(fastMoneyTimeLeft / 60)}:${fastMoneyTimeLeft % 60 < 10 ? "0" : ""}${fastMoneyTimeLeft % 60}`;
    }
  } else {
    document.getElementById("game-message").innerHTML =
      '<div class="pause-message">Game paused.</div>';
    if (pauseType === "regular-timer") {
      updateRoundTimerDisplay();
    }
  }

  phase = "paused";

  fadeToBackgroundAudio(audioTracks.roundLoading, {
    restart: false,
    loop: true
  });
}

function resumeFromManualPause() {
  if (!manualPauseState) {
    return;
  }

  const pausedState = manualPauseState;
  manualPauseState = null;
  phase = pausedState.phaseBeforePause;

  document.body.classList.remove("game-paused");

  const pauseButton = document.getElementById("pause-game-button");
  if (pauseButton) {
    pauseButton.textContent = "Pause Game";
  }

  if (pausedState.pauseType === "round-prep") {
    resumeRoundPrepCountdown();
    return;
  }

  if (pausedState.pauseType === "fast-money-team-prep") {
    document.getElementById("fast-message").textContent =
      "Pick one representative from each team. No teammates can help once their player starts answering.";
    resumeFastMoneyTeamPrepCountdown();
    return;
  }

  if (pausedState.pauseType === "fast-money-start-countdown") {
    document.getElementById("fast-message").textContent = "";
    resumeFastMoneyStartCountdown();
    return;
  }

  if (pausedState.pauseType === "fast-money-active") {
    fadeToBackgroundAudio(audioTracks.answering, {
      restart: false,
      loop: true
    });
    document.getElementById("fast-message").textContent = "";
    startFastMoneyTimer();
    showCurrentFastMoneyQuestion();
    return;
  }

  if (pausedState.pauseType === "regular-timer") {
    fadeToBackgroundAudio(audioTracks.answering, {
      restart: false,
      loop: true
    });
    document.getElementById("game-message").textContent = "Game resumed.";
    startRoundTimer();
    return;
  }

  document.getElementById("game-message").textContent = "Game resumed.";
}

function resumeMusic() {
  enableAudio();

  let audioId = audioTracks.intro;
  let shouldLoop = true;

  if (phase === "setup" || phase === "fast-money-intro") {
    audioId = audioTracks.setup;
  } else if (phase === "round-prep") {
    audioId = audioTracks.roundLoading;
  } else if (phase === "revealing" || phase === "round-over") {
    audioId = audioTracks.winner;
  } else if (phase === "fast-money-countdown") {
    audioId = audioTracks.roundLoading;
  } else if (
    phase === "faceoff" ||
    phase === "play-or-pass" ||
    phase === "main-round" ||
    phase === "steal" ||
    phase === "fast-money-active"
  ) {
    audioId = audioTracks.answering;
  } else if (phase === "fast-money-complete" || phase === "game-over") {
    audioId = audioTracks.thanks;
    shouldLoop = false;
  }

  fadeToBackgroundAudio(audioId, {
    restart: false,
    loop: shouldLoop
  });
}

function resetGame() {
  setHostControlsLoadingMode(false);
  stopAllAudio();
  clearFastMoneyTimer();
  clearRoundTimer();
  clearRevealTimers();
  teams = [];
  activeTeamIndex = 0;
  controllingTeamIndex = 0;
  stealingTeamIndex = 1;
  currentQuestionIndex = 0;
  roundScore = 0;
  strikes = 0;
  revealedAnswers = [];
  autoRevealedAnswers = [];
  answerOwners = [];
  overrideAlreadyHandled = false;
  currentOverrideAdds = [];
  manualPauseState = null;
  phase = "intro";
  faceoffAnswers = [];
  faceoffTurn = 0;
  faceoffWinnerIndex = null;
  roundTimeLeft = ROUND_TOTAL_TIME;
  fastMoneyTeamIndex = 0;
  fastMoneyPlayer = 1;
  fastMoneyQuestionIndex = 0;
  fastMoneyAnswers = [[], []];
  fastMoneyPlayerNames = ["Player 1", "Player 2"];
  fastMoneyTeamOrder = [0, 1];
  fastMoneyTeamTotals = [0, 0];
  fastMoneyScoresAdded = false;
  fastMoneyTotal = 0;
  fastMoneyTimeLeft = 0;
  fastMoneyQuestions = [];
  finalMessageText = "Baby Feud is over!";
  roundSummaries = [];
  document.body.classList.remove("game-paused");
  const pauseButton = document.getElementById("pause-game-button");
  if (pauseButton) {
    pauseButton.textContent = "Pause Game";
  }
  enableAudio();

  document.getElementById("game-screen").classList.remove("active");
  document.getElementById("setup-screen").classList.remove("active");
  document.getElementById("fast-money-intro-screen").classList.remove("active");
  document.getElementById("fast-money-screen").classList.remove("active");
  document.getElementById("thanks-screen").classList.remove("active");
  document.getElementById("intro-screen").classList.add("active");

  const introButton = document.querySelector("#intro-screen button");

  if (introButton) {
    introButton.disabled = false;
    introButton.textContent = "Start Baby Feud";
  }

  const smallText = document.querySelector("#intro-screen .small-text");

  if (smallText) {
    smallText.textContent = "It’s a boy!";
  }

  const summary = document.getElementById("game-summary");

  if (summary) {
    summary.innerHTML = "";
  }

  fadeToBackgroundAudio(audioTracks.intro, {
    restart: true,
    loop: true
  });
}

function renderGameSummary() {
  const summary = document.getElementById("game-summary");

  if (!summary) {
    return;
  }

  const teamRows = teams.map((team) => `
    <tr>
      <td>${team.name}</td>
      <td>${team.score}</td>
      <td>${roundSummaries.filter((round) => round.winningTeam === team.name).length}</td>
    </tr>
  `).join("");

  const roundRows = roundSummaries.length
    ? roundSummaries.map((round) => `
      <tr>
        <td>${round.round}</td>
        <td>${round.winningTeam}</td>
        <td>${round.points}${round.overridePoints ? ` + ${round.overridePoints} override` : ""}</td>
        <td>${round.foundAnswers}/${round.totalAnswers}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="4">No regular-round summary was recorded.</td></tr>`;

  const fastRows = fastMoneyQuestions.length
    ? fastMoneyQuestions.map((question, index) => {
      const playerOne = fastMoneyAnswers[0][index];
      const playerTwo = fastMoneyAnswers[1][index];

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${question.question}</td>
          <td>${playerOne ? playerOne.displayAnswer : "—"}</td>
          <td>${playerOne ? playerOne.points : "—"}</td>
          <td>${playerTwo ? playerTwo.displayAnswer : "—"}</td>
          <td>${playerTwo ? playerTwo.points : "—"}</td>
        </tr>
      `;
    }).join("")
    : `<tr><td colspan="6">Fast Money was not played.</td></tr>`;

  summary.innerHTML = `
    <div class="summary-section">
      <h2>Final Team Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Final Score</th>
            <th>Rounds Won</th>
          </tr>
        </thead>
        <tbody>${teamRows}</tbody>
      </table>
    </div>

    <div class="summary-section">
      <h2>Round Recap</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Winner</th>
            <th>Points Won</th>
            <th>Answers Found</th>
          </tr>
        </thead>
        <tbody>${roundRows}</tbody>
      </table>
    </div>

    <div class="summary-section">
      <h2>Fast Money Recap</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>${teams[fastMoneyTeamOrder[0]]?.name || fastMoneyPlayerNames[0] || "Team 1"}</th>
            <th>Pts</th>
            <th>${teams[fastMoneyTeamOrder[1]]?.name || fastMoneyPlayerNames[1] || "Team 2"}</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>${fastRows}</tbody>
      </table>
      <div class="summary-total">Fast Money Totals: ${teams[0]?.name || "Team 1"}: ${fastMoneyTeamTotals[0] || 0}, ${teams[1]?.name || "Team 2"}: ${fastMoneyTeamTotals[1] || 0}</div>
    </div>
  `;
}

function showThanksScreen() {
  phase = "game-over";
  clearFastMoneyTimer();
  clearRoundTimer();

  document.getElementById("game-screen").classList.remove("active");
  document.getElementById("fast-money-intro-screen").classList.remove("active");
  document.getElementById("fast-money-screen").classList.remove("active");
  document.getElementById("thanks-screen").classList.add("active");

  document.getElementById("final-winner-message").textContent = finalMessageText;
  renderGameSummary();

  const thanksAudio = document.getElementById(audioTracks.thanks);

  if (thanksAudio && thanksAudio.paused) {
    playThanksAudio(false);
  }
}

function playCorrectAudio() {
  playTimedEventAudio(audioTracks.correct, {
    startTime: 0,
    duration: 3,
    returnToAnswering: true
  });
}

function playDuplicateAudio() {
  playTimedEventAudio(audioTracks.duplicate, {
    startTime: 0,
    duration: 2,
    returnToAnswering: true
  });
}

function playStrikeAudio() {
  playTimedEventAudio(audioTracks.wrong, {
    startTime: 2,
    duration: 2,
    returnToAnswering: true
  });
}

function playWinnerMusic() {
  if (!audioEnabled) {
    return;
  }

  audioSequence++;
  cancelPendingEventReturn();
  stopForegroundEventAudio();

  fadeToBackgroundAudio(audioTracks.winner, {
    restart: true,
    loop: true
  });
}

function stopAllAudioExcept(exceptAudioId = null) {
  cancelPendingEventReturn();

  if (answeringSpeedInterval) {
    clearInterval(answeringSpeedInterval);
    answeringSpeedInterval = null;
  }
  answeringTargetRate = 1;

  if (currentFadeInterval) {
    clearInterval(currentFadeInterval);
    currentFadeInterval = null;
  }

  Object.values(audioTracks).forEach((audioId) => {
    if (audioId === exceptAudioId) {
      return;
    }

    const audio = document.getElementById(audioId);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = getMusicVolume();
      audio.playbackRate = 1;
      audio.onended = null;
    }
  });

  if (exceptAudioId) {
    currentBackgroundAudio = document.getElementById(exceptAudioId);
  } else {
    currentBackgroundAudio = null;
  }
}



function fadeToBackgroundAudio(audioId, options = {}) {
  if (!audioEnabled) {
    return;
  }

  const {
    restart = true,
    loop = true
  } = options;

  const nextAudio = document.getElementById(audioId);

  if (!nextAudio) {
    return;
  }

  if (currentFadeInterval) {
    clearInterval(currentFadeInterval);
    currentFadeInterval = null;
  }

  if (currentBackgroundAudio === nextAudio && !nextAudio.paused) {
    nextAudio.volume = getMusicVolume();
    nextAudio.loop = loop;

    if (audioId === audioTracks.answering) {
      smoothSetAnsweringAudioSpeed(getTargetAnsweringPlaybackRate());
    }

    return;
  }

  const previousAudio = currentBackgroundAudio !== nextAudio ? currentBackgroundAudio : null;

  nextAudio.loop = loop;
  nextAudio.playbackRate = audioId === audioTracks.answering ? getTargetAnsweringPlaybackRate() : 1;
  nextAudio.volume = 0;

  if (restart || nextAudio.paused) {
    nextAudio.currentTime = 0;
  }

  nextAudio.play().catch(() => {});

  currentBackgroundAudio = nextAudio;

  const fadeSpeed = 50;
  const fadeStep = 0.03;

  currentFadeInterval = setInterval(() => {
    if (previousAudio) {
      previousAudio.volume = Math.max(0, previousAudio.volume - fadeStep);
    }

    nextAudio.volume = Math.min(getMusicVolume(), nextAudio.volume + fadeStep);

    if (nextAudio.volume >= getMusicVolume()) {
      clearInterval(currentFadeInterval);
      currentFadeInterval = null;

      if (previousAudio) {
        previousAudio.pause();
        previousAudio.currentTime = 0;
      }

      nextAudio.volume = getMusicVolume();
    }
  }, fadeSpeed);
}

function playTimedEventAudio(audioId, options = {}) {
  if (!audioEnabled) {
    return;
  }

  const {
    startTime = 0,
    duration = null,
    returnToAnswering = true
  } = options;

  const sound = document.getElementById(audioId);

  if (!sound) {
    return;
  }

  const thisAudioSequence = ++audioSequence;

  cancelPendingEventReturn();
  stopForegroundEventAudio(audioId);

  fadeOutCurrentBackground(() => {
    if (thisAudioSequence !== audioSequence) {
      return;
    }

    sound.loop = false;
    sound.playbackRate = 1;
    sound.pause();
    sound.currentTime = startTime;
    sound.volume = getMusicVolume();

    sound.play().catch(() => {});

    if (duration !== null) {
      eventTimeoutId = setTimeout(() => {
        if (thisAudioSequence !== audioSequence) {
          return;
        }

        fadeOutAudio(sound, () => {
          sound.pause();
          sound.currentTime = 0;

          if (returnToAnswering && thisAudioSequence === audioSequence) {
            fadeToBackgroundAudio(audioTracks.answering, {
              restart: true,
              loop: true
            });
          }
        });
      }, duration * 1000);
    } else if (returnToAnswering) {
      sound.onended = () => {
        if (thisAudioSequence === audioSequence) {
          fadeToBackgroundAudio(audioTracks.answering, {
            restart: true,
            loop: true
          });
        }
      };
    }
  });
}

function fadeOutCurrentBackground(callback) {
  if (!currentBackgroundAudio) {
    callback();
    return;
  }

  const audioToFade = currentBackgroundAudio;

  fadeOutAudio(audioToFade, () => {
    audioToFade.pause();

    if (currentBackgroundAudio === audioToFade) {
      currentBackgroundAudio = null;
    }

    callback();
  });
}

function fadeOutAudio(audio, callback) {
  const fadeSpeed = 50;
  const fadeStep = 0.05;

  const fadeInterval = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - fadeStep);

    if (audio.volume <= 0) {
      clearInterval(fadeInterval);
      callback();
    }
  }, fadeSpeed);
}

function cancelPendingEventReturn() {
  if (eventTimeoutId) {
    clearTimeout(eventTimeoutId);
    eventTimeoutId = null;
  }

  const correctAudio = document.getElementById(audioTracks.correct);
  const wrongAudio = document.getElementById(audioTracks.wrong);
  const duplicateAudio = document.getElementById(audioTracks.duplicate);

  if (correctAudio) {
    correctAudio.onended = null;
  }

  if (wrongAudio) {
    wrongAudio.onended = null;
  }

  if (duplicateAudio) {
    duplicateAudio.onended = null;
  }
}

function stopForegroundEventAudio(excludeAudioId = null) {
  const eventAudioIds = [
    audioTracks.correct,
    audioTracks.wrong,
    audioTracks.duplicate
  ];

  eventAudioIds.forEach((audioId) => {
    if (audioId === excludeAudioId) {
      return;
    }

    const audio = document.getElementById(audioId);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

function stopAllAudio() {
  cancelPendingEventReturn();

  if (answeringSpeedInterval) {
    clearInterval(answeringSpeedInterval);
    answeringSpeedInterval = null;
  }
  answeringTargetRate = 1;

  if (currentFadeInterval) {
    clearInterval(currentFadeInterval);
    currentFadeInterval = null;
  }

  Object.values(audioTracks).forEach((audioId) => {
    const audio = document.getElementById(audioId);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = getMusicVolume();
      audio.playbackRate = 1;
      audio.onended = null;
    }
  });

  currentBackgroundAudio = null;
}