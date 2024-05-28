const titles = [
  "Blog Heading 1", "Blog Heading 2", "Blog Heading 3",
  "Blog Heading 4", "Blog Heading 5", "Blog Heading 6",
  "Blog Heading 7", "Blog Heading 8", "Blog Heading 9"
];

// Date doesn't seem to work properly on Codepen??? so using hardcoded values;
const times = ['9-17-16', '9-18-16', '9-19-16','9-17-16', '9-18-16', '9-19-16','9-17-16', '9-18-16', '9-19-16'];
const authors = ['author 1', 'author2', 'author3','author 4', 'author5', 'author6','author 7', 'author8', 'author9'];
const num_cards = titles.length;

var title_elements = document.getElementsByClassName("title");
var author_elements = document.getElementsByClassName("author");
var time_elements = document.getElementsByClassName("time");

//update each card
var i;
for (i = 0; i < num_cards; i++) {
  //update title
  title_elements[i].innerHTML = titles[i];
  //update author
  author_elements[i].innerHTML = 'By ' + "<span class='green'>" + authors[i] + "</span>";
  //update posting time
  time_elements[i].innerHTML = 'Posted On <span class="green">'+ times[i] + '</span>'
}