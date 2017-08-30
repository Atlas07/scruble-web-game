# Online multiplayer Scrabble with HTML/JavaScript UI

## History

This repository contains the code for a multiplayer Scrabble game.  I
have written it I wanted A in university. Coming up with something better was on my To-Do-List for
month.

## Features

* Two players
* English letter set
* Written in JavaScript, runs in browser
* Desktop notification support
* Tile placement by mouse clicking
* Dictionary enforced
* Uses node.js on the server
* No database required, no deployment complexities

## Limitations

* Human players only.  No computer players are available.
* No security.  The server uses sufficiently long random numbers as keys for
  letters.
* Limited browser support.  We're using Chrome and Firefox and I am not
  testing on other browsers.
* Unlicensed.  "Scrabble" is a registered trademark by Hasbro and Spear, and
  the word is used in this program without permission.
* Bugs.  There are some minor (and maybe even some major) bugs which I have
  not come around to fix yet, and maybe never will.
* Ugly code.  I did not understand much of the original code when I started
  adding features, and did not refactor thoroughly in the course of action.
  There are several things in the code that I'd do differently now, but as
  the game works well enough as it is, I'm not doing it.  If you want to
  hack this code, expect a high WTF rate.
* Ugly UI.  Daniel's original work was very nice-looking, and my additions
  to the user interface can't compete with what he did.
* UI not translated.  The user interface is available in English, only.
* Simple database.  All game data is kept in memory. This works well, but has limited
  capacity and the database file grows without bounds.

As I am not planning to provide the game as a public service, but rather
run it for me and my friends to use, these limitations do not bother me.
If you look at the game, please consider that it is a game meant to be
played between friends, not an Internet service open to the general public.

## Future changes (To-Do-List)
* Make it resizeble (mobile and tablet versions)
* Use bigger dictionary
* Finish UI
* Make keyboard support

## Installing

The game uses node.js as server and depends on some npm packages.  To install
dependencies:

```
$ npm install
```

## Code features
* Using gulp
* Minifing and concating scripts via gulp
* Minifing and concating *.sass to *.css files via gulp
* Minifing pictures via gulp
* Using bootstap grid for adaptability
* Using Roboto Bold font ('RobotoBold', 'RobotoRegular')

Open your web browser on the configured game URL to create a new game.

If you have trouble getting the server to run, feel free to contact
me.  Be aware, though, that you will need a machine to run the server
on (I'm using Linux, but FreeBSD or Mac will work as well) and have
some command line knowledge.  I cannot help you if you don't know your
way through the shell and development tools.

Enjoy,
Vitalii (shapoval_vitalii@ukr.net)