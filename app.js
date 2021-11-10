// OPPExercise

// #1a
const mulan = {
    title:  `Mulan`,
    main:  `Fa Mulan`,
    
    // 1b
    quote: () => `Dishonor! Dishonor on your whole family!`,

    // #1c
    storyline: () => {
        return `The movie ${this.title} is about ${this.main}`
    }
}

    // #2a
    const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,

   // #2b
   quote:() => `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`

   // #2c
   storyline: () => {
   return `The movie ${this.title} is about ${this.main}.`
   }
}
  // #3a
  function disneyMovie (t, m){
    this.title = t;
    this.main = m;
  }

  // #3b
  disneyMovie.prototype.storyline = () => `The movie ${this.title} is about ${this.main}`;

  // #3c
  const mulan1 = new disneyMovie(`Mulan`, `Fa Mulan`);

  // #3d
   const tangled1 = new disneyMovie(`Tangled`, `Rapunzel`);

  // #4a
    class DM {
    constructor(t, m){
    this.title = t;
    this.main = m;
            }
    }

  // #4b
  storyline(){
    return `The movie ${this.title} is about ${this.main}`;

  // #4c
  const mulan2 = new disneyMovie(`mulan`, `Fa mulan`);
    //4d
    const tangled2 = new disneyMovie(`Tangled`, `Rapunzel`);
    }
     // 4e
     static loveDisneyMovies() {
        return `I Love Disney Movies!`;
    }

// 4f
console.log(DM.loveDisneyMovies());

// 5a
class DMCast extends DM {
    // 5b
    constructor(t, m, c){
        // 5c
        super(t, m);
        this.cast = c;
    }
    
// 5d
const mulan3 = new DMCast (`Mulan`, `Fa Mulan`, 
    {
        mulan: `Ming-Na Wen`, 
        mushu: `Eddie Murphy`, 
        shang: `BD Wong`, 
        theEmperor: `Pat Morita`
    });

// 5e
const tangled3 = new DMCast (`Tangled`, `Rapunzel`,{
rapunzel: `Mandy Moore`, 
flynnRider: `Zachary Levi`, 
motherGothel: `Donna Murphy`
});

// Bonus

// 6a 
static create(t, m, c){
    const moana = new DMCast(t, m, c); 
    // 6c ???
    console.log(moana); 
}
}
// 6b
const moana = DMCast.create(`Moana`, `Moana of Motunui`, 
    {
        moana: `Auli'i Cravalho`, 
        maui: `Dwayne Johnson`, 
        grammaTala: `Rachel House`, 
        chiefTui: `Temuera Morrison`
    });

// 6c 
console.log(moana); // comes out as 'undefined' in console