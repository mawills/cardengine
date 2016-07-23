var mtg = new Game({deck:deck1}, {deck:deck2});
grant(mtg, "start game",      GAME_SOURCE, mtg.startGame);
grant(mtg, "check state",     GAME_SOURCE, mtg.checkState);
grant(mtg, "change phase",    GAME_SOURCE, mtg.changePhase);
grant(mtg, "assign priority", GAME_SOURCE, mtg.assignPriority);

act(mtg, "start game");
