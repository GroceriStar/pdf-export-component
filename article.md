PDF export from HTML was always a big problem at food tech projects, that I was working on.
I remember another old project, that my company rebuilds from scratch. It generates reports, based on static data, that was acquired from owners, top managers(it was surveyed, tests about problems, that company facing, from owners perspective). That data was merged and stored at DB pool of data from other companies from the same industry.
After processing survey data, you can review industry reports and make some long time predictions.

And the first version of that PDF export was created in 2005. At that time web-based software was weak.
Previous reports as PDF files was saved IN database. When I received all this data. It was about 500 Mb of calculations and files. At that time -> it's a huge amount of valuable data. Just try to remember what internet looks like at 2005 and what phones was ;)

So I think I know a lot about problems, of generating custom invoices, reports, meal plans, food information.

So when I realize that we have a demand for PDF export -> I was ready to struggle.
I prepare a list of libraries/npm packages and thank God, tools from this list are evolving and became better and better.

Some of the packages I tried, some I reviewed and compare. Some of them are good but didn't meet our needs.
I picked [React-PDF]. Creator of this package using an interesting approach, have a good community and heavily building it. Community that using this package provides some financial support. I'll put a link here - if you want to become a backer - It'll be awesome.
Open Collective maintaining all finances behind, so it's reliable. If this article will raise additional support -> I will be happy. Because it's a good an open-sourced library.
[link]
[link to GitHub of my source]

At one of our projects before we a WP database and custom plugin.
And You don't have any opportunity(not joking) to make calculations, before displaying data at Frontend.
So in order to make it work as we need it - we must generate an HTML page, using pure data from the database.
Then we start our DOM manipulations.  We hide main content, make calculations, remove some data, merge some "cells".
And only after this manipulations, we were able to end this HTML page to browser print.

At the next food project, my partner was responsible for coding. He is an experienced dev but was going crazy while coding export script. Sure thing, during the debugging process the display strings like 'hello', '123'... He also uses cursing words, because let's face it - simple things can generate a lot of troubles.

At some point, he sends me a document. He was stuck a few days with displaying image at PDF document. Images can be uploaded in different sizes, different modes(landscape/portrait) and when you display a meal image -> it cannot be shrunk. Inside of this document I saw a picture of an old man with flowers on his head. It was a sign that he completed this part of a project.

So when someone working or testing PDF reports -> you can see that he have a lot of PDF docs, downloaded from the web project.


So we're building our module, highly connected to react-pdf. It's far away from an ideal state. But it works and can be used by other developers and save time that we spend. If you like what we do -> feel free to star our repository on Github.

As a proof-of-concept we're launching this project, to show how it works and looks.
