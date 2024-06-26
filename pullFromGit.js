﻿const simpleGit = require('simple-git');
const path = require('path');

const repoPath = path.resolve(__dirname);

const repoUrl = 'https://github.com/marjobtw/horsebot.git';

const git = simpleGit(repoPath);

git.addRemote('origin', repoUrl);

git.reset('hard', (err) => {
    if (err) {
        console.error('Error occurred while resetting the repository:', err);
        return;
    }
}, 'main');

git.pull('origin', 'main', (err, update) => {
    if (err) {
        console.error('Error occurred while pulling changes:', err);
        return;
    }

    if (update && update.summary.changes) {
        console.log('Repository updated with the recent changes.');
        console.log('Summary:', update.summary);
    } else {
        console.log('No updates found.');
    }
});