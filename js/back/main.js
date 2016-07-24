var mtg = new Game({deck:deck1}, {deck:deck2});
grant(mtg, "start game",      GAME_SOURCE, mtg.startGame);
act(mtg, "start game");
