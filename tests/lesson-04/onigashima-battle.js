function upgradeCrew() {
    
    const pirates = [
        { name: "Pirates 1", bounty: 1000, strength: 100 },
        { name: "Pirates 2", bounty: 1300, strength: 110 },
        { name: "Pirates 3", bounty: 1200, strength: 450 },
    ];

    const awakenedPirates = pirates.map((pirates) => ({
        awakeName: pirates.name.toUpperCase(),
        awakeBou: pirates.bounty * 2,
        awakeStr: pirates.strength * 1.5,
    }));
    
    const monsterTrioCandidates = awakenedPirates.filter(awakenedPirates => awakenedPirates.awakeStr > 500);

    console.log(awakenedPirates);
    console.log(monsterTrioCandidates);
}

upgradeCrew();