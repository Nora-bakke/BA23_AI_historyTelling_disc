//Utkast for inndeling av historien, tingene som blir funnet, dialog, osv.

//Array for lagring av valg presentert fra AI.
const items = ["VALG_1a", "VALG_1b", "VALG_1c", "VALG_2a", "VALG_2b", "VALG_2c", "VALG_3a", "VALG_3b", "VALG_3c", "VALG_4a", "VALG_4b", "VALG_4c"];
const dialouge = ["dVALG_1a", "dVALG_1b", "dVALG_1c", "dVALG_2a", "dVALG_2b", "dVALG_2c", "dVALG_3a", "dVALG_3b", "dVALG_3c"];
const aiAnswers = ["Første AI svar", "Andre AI svar", "Tredje AI svar"];

//Objekt for å holde hele historien, pluss valgene tatt. Den er inndelt etter bitene som dukker opp på skjermen.
const story = {
    part1: "Once upon a time, there were three siblings, E, P and A, that lived in a house in the woods. For many years, they had heard stories from weary travels of a talking mountainside that always had a comeback to whatever you say. It was said that if you were able to outwit it to not have a comeback, you would win treasures untold. However, if the mountainside was able to outwit you, it would open up and swallow you whole. It was a very hard winter, and so the siblings decided to try their luck and travel to the mountainside to see if they could outsmart the mountain. \n",
    part2: "Søsknene la ut på reisen. I løpet av den første timen stoppet Askeladden opp. “Jeg fant , jeg fant!” Og i grøftekanten lå det…\n",
    part3: "“Jeg fant " + items[2] + "”, sier Askeladden. “Hva skal du med den? Kast den!”, sier broren. “Å, jeg har slikt å gjøre, jeg har slikt å føre, jeg fører vel den”, sier A. Da de hadde gått et stykke til, stoppet A opp igjen. “Jeg fant, jeg fant”. “Hva fant du nå?”, broren.\n",
    part4: "“Jeg fant " + items[3] + "” “Hva skal du med den, kast den”, broren. “Å, jeg har slikt å gjøre, jeg har slikt å føre, jeg fører vel den”, sier A. Da de hadde gått litt til, ropte han ut: “Jeg fant, jeg fant”. “hva fant du nå?”, bror.\n",
    part5: "“Jeg fant " + items[7] + "” “Hva skal du med den, kast den”, broren. “Å, jeg har slikt å gjøre, jeg har slikt å føre, jeg fører vel den”, sier A.\n",
    part6: "Etterhvert kom søsknene fram til fjellveggen. De ble enige om at den eldste skulle prøve først. De to første ble svelget av fjellet. Så var den A sin tur. \n" +
        "“God dag” sa A. “God dag igjen” sa fjellveggen. “Så knaus du er.” -A, \n “Du burde være forsiktig, det er mange store løse steiner.”\n",
    part7: dialouge[0] + "\n",
    part8: aiAnswers[0] + "\n" + dialouge[4] + "\n",
    part9: aiAnswers[1] + "\n" + dialouge[8] + "\n",
    part10: "Fjellveggen har ikke noe svar til det. I sin forfjamsethet spillter den seg i to, og ut av fjellet kom alle de som hadde prøvd og feilet. Det var og en stor skatt som A fant i fjellet, som ingen av de andre kunne se. Han tokk med seg den og sine brøde hjem. De levede lykkelige alle sine dager, da de aldri mer gikk sultene eller kalde.",
    //Funkjson for å printe ut hele historien i en. Brukbar på slutten når man presenterer historien laget.
    fullStory : function() {
        return this.part1 + this.part2 + this.part3 + this.part4 + this.part5 + this.part6 + this.part7 + this.part8 + this.part9 + this.part10;
    }
};

//Sprøsmålene til AI. Har mulighet til å legge til tingene som ikke ble valgt.
const aIquery = {
    part1: "\nAI inquery1, item choice 1\n\n",
    part2: "\n\nAI inquery2, item choice 2, not chosen " + items[0] + items[1] + "\n\n",
    part3: "\n\nAI inquery3, item choice 3\n\n",
    part4: "\n\nAI inquery4, dialouge option1\n\n",
    part5: "\n\nAI inquery5, ai answer, dialouge option2\n\n",
    part6: "\n\nAI inquery6, ai answer, dialouge option3\n\n",
};


//Hele sprøsmålet som blir set til AI, inkludere da historien så langt, pluss selve AI spørsmålet. Det er færre AI spørsmål enn historie deler.
const aIinput = {
    ai1: story.part1 + story.part2 + aIquery.part1,
    ai2: story.part1 + story.part2 + story.part3 + aIquery.part2,
    ai3: story.part1 + story.part2 + story.part3 + story.part4 + aIquery.part3,
    ai4: story.part1 + story.part2 + story.part3 + story.part4 + story.part5 + story.part6 + aIquery.part4,
    ai5: story.part1 + story.part2 + story.part3 + story.part4 + story.part5 + story.part6 + story.part7 + aIquery.part5,
    ai6: story.part1 + story.part2 + story.part3 + story.part4 + story.part5 + story.part6 + story.part7 + story.part8 + aIquery.part6,

    //ikke nødvening for funsjonalitet til applikasjonen, kun for å få en utskrift av alt iforbinnelse med testing og verifisering av innholdet.
    allCalls : function() {
        return this.ai1 + this.ai2 + this.ai3 + this.ai4 + this.ai5 + this.ai6;
    }
};

//For å teste ut logikken.

console.log("\n ~*~ \n");
console.log(story.fullStory());
console.log("\n ~*~ \n");
console.log("\n ~*~ \n");
console.log(aIinput.allCalls());

