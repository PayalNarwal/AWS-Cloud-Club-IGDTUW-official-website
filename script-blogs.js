const titles = [
    "AWS Unveiled: The Definitive Handbook on Amazon Web Services",
    "Getting Started with Cloud Computing: Basics and Benefits", 
    "Understanding AWS Services: A Primer for Beginners",
    "Cloud Security 101: Keeping Your Data Safe on AWS",
    "Migrating to the Cloud: Steps for a Successful Transition",
    "Budgeting for the Cloud: Tips for AWS Newbies",
    "Introduction to Serverless Computing: Building Apps Without Infrastructure",
    "A Beginner’s Guide to Building Your First Cloud Application on AWS",
    "Networking Basics on AWS: Understanding VPCs and Subnets"
];

const times = [
    '12-04-24', 
    '14-04-24', 
    '17-04-24', 
    '22-04-24', 
    '25-04-24', 
    '28-04-24', 
    '30-04-24', 
    '03-05-24', 
    '08-05-24'];
const authors = [
    'Avni Jain', 
    'Vedika Gupta', 
    'Vidhi Saxena', 
    'Sneha Yadav', 
    'Advika Singhal', 
    'Anshika Agarwal', 
    'Akansha Chaurasia', 
    'Pulak Srivastava', 
    'Trisha Tomy'];
const authorLinks = [
    'avni-jain-693971283/', 
    'vedika-gupta22/', 
    'vidhi-saxena-86150a243/', 
    'sneha-yadav-11a454283/', 
    'advika-singhal-ab97a7285/', 
    'anshika-agarwal-882b62258/', 
    'akansha-chaurasia-47235b260/', 
    'pulak-srivastava-/', 
    'trisha-tomy/'];
const num_cards = titles.length;

var title_elements = document.getElementsByClassName("title");
var author_elements = document.getElementsByClassName("author");
var time_elements = document.getElementsByClassName("time");

// update each card
for (var i = 0; i < num_cards; i++) {
    // update title
    title_elements[i].innerHTML = titles[i];
    
    // update author
    author_elements[i].innerHTML = 'By <a href="https://www.linkedin.com/in/' + authorLinks[i] + '" class="green">' + authors[i] + '</a>';
    
    // update posting time
    time_elements[i].innerHTML = 'Posted On <span class="green">' + times[i] + '</span>';
}
