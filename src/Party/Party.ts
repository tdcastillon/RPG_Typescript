import Hero from "../Hero/Hero";

interface HeroPosition {
    hero: Hero;
    position: number;
}

interface Party {
    [index: number]: HeroPosition;
    length: number;
}

export default Party;