---
id: index
title: Welcome
slug: /
hide_title: true
---

import Mountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import Tree from '@site/static/img/undraw_docusaurus_tree.svg';
import Coach from '@site/static/img/undraw_docusaurus_react.svg';

Welcome to the Chase The Split Knowledge Base! This site contains all the information you need to get up and running with Chase The Split and get the most out of the platform. 

import DocCardList from '@theme/DocCardList';

<DocCardList items={[
  {type: 'link', label: 'Getting Started', href: '/docs/getting-started/connect-to-concept2-logbook', description: 'Set up and connect your account'},
  {type: 'link', label: 'Features', href: '/docs/features/using-the-ai-assistant', description: 'Records, pace progression, AI Coach'},
  {type: 'link', label: 'Understanding Your Data', href: 'understanding-your-data/how-to-change-your-pace-goal', description: 'Changing your pace goal, reading your efficiency charts},
  {type: 'link', label: 'Troubleshooting', href: 'troubleshooting/how-to-reset-your-password', description: 'Resetting your passwords, troubleshooting workouts not syncing'},
]} />

Chase The Split contains many features to help track your workouts:

<div className="row">
  <div className="col col--4 text--center padding-horiz--md">
    <Mountain role="img" style={{height: 200, width: 200}} />
    <h3>Personal Records</h3>
    <p>Track your all-time best splits across every distance, updated
    automatically with each workout you import.</p>
  </div>
  <div className="col col--4 text--center padding-horiz--md">
    <Tree role="img" style={{height: 200, width: 200}} />
    <h3>Pace Progression</h3>
    <p>Your journey to goal pace, visualized — filter by 15 days to a full
    year and see the trend, your best split, and your In Zone count.</p>
  </div>
  <div className="col col--4 text--center padding-horiz--md">
    <Coach role="img" style={{height: 200, width: 200}} />
    <h3>AI Coach</h3>
    <p>Turn your data into a plan: ask what to row tomorrow, why your pace
    stalled, or how close you are to your goal.</p>
  </div>
</div>
