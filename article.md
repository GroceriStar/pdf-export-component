PDF export from HTML was always a big problem at food tech projects, that i was working on.
I remember another old project, that my company rebuild from scratch. It generates a reports, based on static data, that was aquired from ownerns, top managers(it was surveys, tests about problems, that company facing, from owners prospective). That data was merged and stored at db pool of data from other companies from the same industry.
After processing survey data, you can review industry reports and make some long time predictions.

And first version of that PDF export was created in 2005. At that wime web based software was weak.
Previous reports  as PDF files was saved IN database. When i received all this data. It was about 500 mb of calculations and files. At that time -> it's a huge amount of valuable data. Just try to remember what internet looks like at 2005 and what phones was ;)

So I think i know a lot about problems, of generating custom invoices, reports, meal plans, food information.

So when I realize that we have a demand on PDF export -> I was ready to struggle.
I prepare a list of libraries/npm packages, and thank God, tools from this list are evolving, and became better and better.

Some of packages I tried, some I reviewed and compare. Some of them are good, but didn't meet to our needs.
I picked [React-PDF]. Creator of this package using an interesting approach, have a good community and heavily building it. Community provide some financial support. I'll put link here - if you want to became a backer - It'll be awesome.
Open Collective maintaining all finances behind, so it's reliable. If this article will raise an additional support -> i will be happy. Because it's a good an open-sourced library.
[link]
[link to github of my source]

At one of our projects before we an WP database and custom plugin.
And You don't have any opportunity(not joking) to make a calculations, before displaying data at Frontend.
So in order to make it work as we need it - we must generate a HTML page, using pure data from database.
Then we start our DOM manipulations.  We hide main content, make calculations, remove some data, merge some "cells".
And only after this manipulations, we was able to end this HTML page to browser print.

At the next food project my partner was responsible on coding. He is an experienced dev, but was going crazy while coding export script. Sure thing, during the debugging process he display strings like 'hello', '123'... He also uses cursing words, because let's face it - simple things can generate a lot of troubles.

At some point he send me a document. He was stuck a few days with displaying image at PDF document. Images can be uploaded in different sizes, different modes(landscape/portrait) and when you display a meal image -> it cannot be shrinked. Inside of this document I saw a picture of an old man with flowers on his head. It was a sign that he completed this part of a project.

So when someone working or testing PDF reports -> you can see that he have a lot of PDF docs, downloaded from web project.


So we're building our module, hightly connected to react-pdf. It's far away from an ideal state. But it works, and can be used by other developers and save time that we spend. If you like what we do -> feel free to star our repository on Github.

As a proof-of-concept we're launching this project, to show how it works and looks.
