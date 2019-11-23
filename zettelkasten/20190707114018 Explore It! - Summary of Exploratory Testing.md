---
title: 20190707114018 Explore It! - Summary of Exploratory Testing
date: 2019-07-07 11:40
tags: #books #ref  #notes #software #testing #exploratory
---
##Explore It! - Summary of Exploratory Testing
##Connections:
[[20190707113435]] Explore It!- Reduce Risk and Increase Confidence with Exploratory Testing - Book Notes - Index
##Idea:
This is the essence of testing: designing an experiment to gather empirical evidence to answer a question about a risk.
LOCATION: 278

Different types of testing answer different types of questions. If you want to know how well a system holds up under peak load, you might run a performance test. If you want to know whether a small bit of code does what the programmer intended, you might isolate that bit of code in a set of unit tests. If you want to know whether users will be able to find their way through the software without help, you might conduct a usability test.
LOCATION: 279

It’s frustrating but undeniable: you simply cannot plan tests in advance to cover every condition. There are too many variations in data, configurations, interactions, sequences, and timing. If you try to create a comprehensive set of tests to cover every possibility, you’ll spend all your time writing tests and have no time left over to execute them. What you need isn’t the perfect set of comprehensive test cases. Instead, you need a test strategy that answers two core questions: Does the software behave as intended under the conditions it’s supposed to be able to handle? Are there any other risks?
LOCATION: 298

You can answer the first question with tests that you design in advance to check that the implementation behaves as intended under supported configurations and conditions. You can visualize these checks as a net of tripwires that are triggered whenever the software’s behavior violates expectations, as shown below. The better the coverage offered by the checks, the finer the weave in the net.
LOCATION: 299

Exploratory testing involves scouting around the areas that the net doesn’t cover. You interact with the implementation, designing and executing tiny experiments in rapid succession using the results from the last experiment to inform the next. As you discover potential risks, you probe deeper. You use your ability to observe and analyze to adapt your investigation on the fly. Your experiments give you empirical evidence about the capabilities and limitations of your software. Along the way, you uncover new questions needing answers and you plan for additional types of tests.
LOCATION: 304

**Tested = Checked + Explored** 
You’re not done testing until you’ve checked that the software meets expectations and you’ve explored whether there are additional risks. A comprehensive test strategy incorporates both approaches.
LOCATION: 311

**James Bach’s 2003 paper, “Exploratory Testing Explained.” ***
James said, “Exploratory testing is simultaneous learning, test design, and test execution.”
LOCATION: 316

**Cem Kaner’s definition of the term:**

Exploratory software testing is a style of software testing that emphasizes the personal freedom and responsibility of the individual tester to continually optimize the value of her work by treating test-related learning, test design, test execution, and test result interpretation as mutually supportive activities that run in parallel throughout the project.
LOCATION: 318

The definition of exploratory testing I use is this: Simultaneously designing and executing tests to learn about the system, using your insights from the last experiment to inform the next.
LOCATION: 322

Test design involves identifying interesting things to vary and interesting ways in which to vary them. There is already a wealth of literature on the topic, including classics like Glenford Myers’s The Art of Software Testing [Mye79] and Boris Beizer’s Software Testing Techniques [Bei90] as well as the more recent and comprehensive overview by Lee Copeland, A Practitioner’s Guide to Software Test Design [Cop04]. These books cover techniques like boundary value analysis, decision tables, and cause-effect graphing, as well as deriving tests from design models such as state diagrams, sequence diagrams, and flow charts.
LOCATION: 326

When exploring, you execute as soon as you think of a test. This is one of the key attributes that distinguishes exploratory testing from scripted testing.
LOCATION: 332

As you explore, you discover how the software operates. You learn about its quirks and peculiarities. You watch carefully, looking for subtle clues about where there might be a nest of bugs lurking. Observing is crucial: the better you are at observing, the more you’ll learn.
LOCATION: 337

With each experiment you execute, you gain a little more insight into how the software behaves. You notice what kinds of conditions the software does not handle well and use that knowledge to push even harder. You use your curiosity, fueled by what you’ve learned so far, to suggest the next most interesting piece of information to uncover. Steering while focusing on the most important information to discover is one of the core skills of a master explorer.
LOCATION: 342

##References:
[@hendrickson_explore_2013]: Locations above