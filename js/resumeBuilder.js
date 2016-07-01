/*
This is empty on purpose! Your code to build the resume will go here.
 */
//
//$("#main").append('Akash Prabhakar');
//var lightspeed_ms =  299792458;
//var lightspeed_cn;
//
//lightspeed_cn = lightspeed_ms * 100 * (1  / 1000000000);
//$("#main").append(lightspeed_cn);
//
//var awesomeThoughts = "I am Akash and I am Awesome";
//console.log(awesomeThoughts);
//
//var funThoughts = awesomeThoughts.replace('Awesome','Fun');
//$("#main").append(funThoughts);



//var s = 'audacity';
//s = s[1].toUpperCase() + s.slice(2);
//
//console.log(s);

var skills = ['HTML5','CSS3','Javascript','PHP','Ruby'];
console.log(skills.length);


//var name = "AlbERt EINstEiN";
//
//function nameChanger(oldName) {
//    var finalName = oldName;
//    // Your code goes here!
//
//    var dumname = oldName.split(' ');
//    var firstname = dumname[0].toLowerCase();
//    var fname = firstname[0].toUpperCase() + firstname.slice(1)
//    
//    // Don't delete this line!
//    return fname + ' ' + dumname[1].toUpperCase();
//};
//
//// Did your code work? The line below will tell you!
//console.log(nameChanger(name));

var bio = {
    "name": "Akash Prabhakar",
    "role": "Web Developer",
    "contacts": {
        "mobile" :"8888032265",
        "email" :"akashmudliyar@gmail.com",
        "github":"akashprabhakar",
        "location":"Mumbai ,India"
    },
    "bioPic":"../images/fry.jpg",
    "welcomeMsg": "Checkout My Resume",
    "skills": skills
}


var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedContact = HTMLcontactGeneric.replace('%contact%',bio.contacts.mobile);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#topContacts").prepend(formattedContact);

var work = {};

work.position = "Web Developer";
work.employer = "Annet Technologies";
work.year = "2";


var education = {};

education.schoolName = "St Joseph High School";
education.years = "2010";

$("#main").append(work["position"]);
$("#main").append(education.schoolName);