# Baby Feud

Baby Feud is a baby shower themed Family Feud-style game built with HTML, CSS, and JavaScript. It was created for Imran and Kiran’s baby shower as a fun, interactive party game for guests.

The game includes face-off rounds, team scoring, answer reveals, strikes, sound effects, background music, and a Fast Money round.

## Overview

Baby Feud works like a customized baby shower version of Family Feud. Two teams compete to guess the most popular answers to baby-themed questions. The game is designed to be displayed on a larger screen or TV while a host controls the game from the computer.

The current version is personalized for Imran and Kiran and includes a custom intro screen that says:

- Baby Feud
- For Imran and Kiran
- It’s a boy!

## Features

- Baby shower themed Family Feud gameplay
- Custom team name setup
- Face-off rounds
- Play or pass option
- Strike tracking
- Automatic scoring
- Answer board with hidden and revealed answers
- Host controls for revealing answers, moving rounds, stopping music, resuming music, and resetting the game
- Fast Money round
- Two-player Fast Money setup
- Countdown timer
- Duplicate answer handling
- Sound effects and background music
- Custom baby shower visuals and assets

## Game Rounds

The game includes a question bank with baby-themed prompts such as:

- Name something new parents miss most about their pre-baby lives
- Name something new parents constantly buy
- Name an event parents do not want to miss in their child’s life
- Name something people do to entertain a baby
- Name something a babysitter should not be doing on the job
- Name something babies put in their mouth
- Name something parents are always searching for

Each question has multiple answers with point values, hints, and accepted answer variations.

## Fast Money Round

After the main game, the winning team moves on to Fast Money.

Fast Money includes:

- Two players from the winning team
- A 5-second countdown before each player starts
- A 2-minute timer
- Five questions
- Duplicate answer prevention for Player 2
- A goal of reaching 200 points

## Tech Stack

- HTML
- CSS
- JavaScript

No backend or database is required. The game runs directly in the browser.

## Future Improvements

I am currently working on making Baby Feud playable across multiple devices. The goal is for the main board to be projected on a TV while guests join from their phones, select teams, choose round representatives, and submit answers in real time.

## Current Project Structure

```text
baby-feud/
├── assets/
│   ├── answering.mp3
│   ├── answering2.mp3
│   ├── duplicate.mp3
│   ├── naming teams and choosing.mp3
│   ├── on the board.mp3
│   ├── round loading.mp3
│   ├── strikes.mp3
│   ├── thank you for playing.mp3
│   ├── theme.mp3
│   ├── timer.mp3
│   ├── when a team wins.mp3
│   └── background images
├── index.html
├── style.css
├── script.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md