"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


	const rss = new RSS(
	    document.querySelector("#rss-feeds"),
	    //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
	    {
		    limit: 3,

			ssl: true,

			layoutTemplate: "<div class='items'>{entries}</div>",

			entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',
		    
	    }
	);
	rss.render();
    new GitHubCalendar("#github-graph", "sukanta7660", { responsive: true });

    GitHubActivity.feed({ username: "sukanta7660", selector: "#ghfeed" });
