class Character {
  static get(charId) {
    if (charId === '01234567') {
      return {
        id: charId,
        name: 'Prof Schmallock',
        race: 'Human',
        class: 'Wizard',
        skills: 'Theory (9001), Practice (0)',
      };
    }
    if (charId === '11111111') {
      return {
        id: charId,
        name: 'Titine',
        race: 'Drow',
        class: 'Rogue',
        skills: 'Backstab (5), Luck(-INT_MAX), Sneak (4), Thievery (2)',
      };
    }
    if (charId === 'deadbeef') {
      return {
        id: charId,
        name: 'Grudu',
        race: 'Half-orc',
        class: 'Barbarian',
        skills: 'Hurt (4), Kill (5), Maim (3), Rage (6), Two-handed (4)',
      };
    }
    return null;
  }
}

module.exports = Character;
