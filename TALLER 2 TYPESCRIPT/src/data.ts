// src/data.ts

export class Serie {
    constructor(
        public id: number,
        public name: string,
        public channel: string,
        public seasons: number,
        public description: string,
        public url: string,
        public imageUrl: string
    ) {}
}

export const series: Serie[] = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "BreakingBad.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "OrangeIsTheNewBlack.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "GOT.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Long description here...", "https://www.cbs.com/shows/big_bang_theory/about/", "BIGBANGTHEORY.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes solving various mysteries in modern-day London.", "https://www.bbc.co.uk/programmes/b018ttws", "Sherlock.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries.", "https://www.bbc.co.uk/programmes/p065smy4", "VeryEnglishScandal.jpeg")
];
