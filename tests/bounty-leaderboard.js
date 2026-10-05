function printBountyLeaderboard (crewList) {
    for (let i = 0; i < crewList.length; i ++) {
        let rank = i + 1;
        let medal = "";
        if (rank === 1) {
            medal = "🥇";
        } else if (rank === 2) {
            medal = "🥈";
        } else if (rank === 3) {
            medal = "🥉";
        } else {
            medal = `# `;
        }

        console.log(`${medal} ${rank}. ${crewList[i].name} - ${crewList[i].bounty}`);
    }
}

    const players = [
        {name: "Player 1", bounty: 1000},
        {name: "Player 2", bounty: 900},
        {name: "Player 3", bounty: 800},
        {name: "Player 4", bounty: 700},
        {name: "Player 5", bounty: 600},
        {name: "Player 6", bounty: 500}
    ]

printBountyLeaderboard(players);