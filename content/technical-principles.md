---
id: technical-principles
title: Technical Principles
---

During my meditation retreat, I identified some key programming principles I was breaking. This is far from an exhaustive list. I identify new principles and strategies as I write this guide. But it's a start!

## KISS

Keep it simple <del>stupid</del> silly!

When I started writing InfraGen, I was brimming with ideas of all the cool things it would do. Every time I thought of a new idea I would jump on immediately developing it, abandoning the initial goal I set. The project quickly ballooned to much more than its original intention. Sure all the stuff I wrote was cool but it didn’t serve the original purpose. I wasted so much time on things that weren’t immediately necessary. The end result was that I coded for dozens of hours and had nothing (working) to show for it.

## Plan First

T he core tenant of TDD is to plan first, write code later. And stick to the plan! I jumped right into coding. As soon as I thought of some cool new utility or refactor I could write, I jumped on that, not questioning if it was really necessary. I had no written plan. I was just going off the vague ideas in my head expecting them to guide the way.

## One (Small) Problem at a Time

It’s tempting to solve huge problems. I always feel that I have the entire solution figured out in my head. And just a few more hours...and it would be in code. It NEVER works that way. I get overwhelmed by the actual complexity of the problem, and end up spinning my wheels for weeks in a fruitless attempt to solve the entire problem in one shot. Instead it’s best to drill down from your MVP (minimal amount of functionality needed to present this a "useful" tool) and break it down into pieces. Each time focusing on the most immediate problem, and breaking it down until you can clearly visualize the code that solves that problem (ideally in not more than a dozen lines). If you’re not exactly sure what code you’re going to write, keep drilling down

## Small PRs and Commits

Pull requests should be small and succinct. Ideally no more than a few dozen lines. It’s so tempting to just finish a big feature and impress your colleagues. Well you're not impressing anyone. I was knowing for my monstrous 200 file PRs. At some point I was even proud of them. "Look at all this work I did!". The consequence was that other developers had no way to review the PRs. Best case, they'd just reject it, saying it was too much to review. Worst case they approve it, not actually reviewing the code, and later resenting you for not having any input. When faced with 200 files, nobody knows where to start. You won't win any friends, and more importantly you'll pass up on valuable advice as you code from an objective 3rd party, helping you course correct before going down the wrong rabbit hole

Think of commits as just smaller PRs. Ideally a PR should not have more than a few commits (remember the whole PR should be no more than a few dozen lines). Often it makes sense to group a few small, related bits of code together, as separate commits, in case you need to go back, or somebody wants an even further breakdown of your code. [Commitizen](https://github.com/commitizen/cz-cli) is an excellent tool that enforces great commits.

## Full PASSING Test Suite/Docs Before Committing

It’s tempting to jump on the next problem as soon as you’ve solved the previous. "I’ll just write the tests later". "I don’t need to write docs now, everything will change anyways". Well the end results is the tests never get written and even more frequently neither do the docs. The repercussions are the app becomes a nightmare to maintain, for you, and especially for other developers. Make sure that you finish what you started FULLY. That means every pathway of your code should be tested and documented before you submit a PR (ideally before you even commit)
