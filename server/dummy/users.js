// 'use strict';
// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     return queryInterface.bulkInsert('Users', usersData);
//   },

//   down: function (queryInterface, Sequelize) {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('Person', null, {});
//     */
//   }
// };

var usersDummy = [{
  "name": "Tony Renneke",
  "email": "trenneke0@springer.com",
  "password": "trenneke0@ning.com",
  "active": 5,
  "grooming": 3,
  "size": 3,
  "noise": 1,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Osmond Filyashin",
  "email": "ofilyashin1@booking.com",
  "password": "ofilyashin1@thetimes.co.uk",
  "active": 4,
  "grooming": 1,
  "size": 4,
  "noise": 4,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Elfie Farres",
  "email": "efarres2@jigsy.com",
  "password": "efarres2@pen.io",
  "active": 1,
  "grooming": 4,
  "size": 5,
  "noise": 3,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Laverne Ralfe",
  "email": "lralfe3@yelp.com",
  "password": "lralfe3@people.com.cn",
  "active": 1,
  "grooming": 2,
  "size": 2,
  "noise": 2,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Edouard Colebourne",
  "email": "ecolebourne4@simplemachines.org",
  "password": "ecolebourne4@naver.com",
  "active": 5,
  "grooming": 2,
  "size": 4,
  "noise": 4,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Fabian Kimber",
  "email": "fkimber5@nps.gov",
  "password": "fkimber5@i2i.jp",
  "active": 5,
  "grooming": 2,
  "size": 1,
  "noise": 3,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Neda Andryushchenko",
  "email": "nandryushchenko6@purevolume.com",
  "password": "nandryushchenko6@cdc.gov",
  "active": 3,
  "grooming": 1,
  "size": 1,
  "noise": 5,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Bernarr Tranckle",
  "email": "btranckle7@hibu.com",
  "password": "btranckle7@nature.com",
  "active": 5,
  "grooming": 5,
  "size": 2,
  "noise": 5,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Vaclav Ditch",
  "email": "vditch8@about.com",
  "password": "vditch8@webs.com",
  "active": 1,
  "grooming": 4,
  "size": 4,
  "noise": 2,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Marie-jeanne Hardwich",
  "email": "mhardwich9@nhs.uk",
  "password": "mhardwich9@sciencedaily.com",
  "active": 1,
  "grooming": 5,
  "size": 3,
  "noise": 5,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Bert Salvadore",
  "email": "bsalvadorea@usnews.com",
  "password": "bsalvadorea@nationalgeographic.com",
  "active": 4,
  "grooming": 3,
  "size": 5,
  "noise": 5,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Marlin Regi",
  "email": "mregib@nba.com",
  "password": "mregib@bbb.org",
  "active": 1,
  "grooming": 4,
  "size": 2,
  "noise": 4,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Marcel Favell",
  "email": "mfavellc@gov.uk",
  "password": "mfavellc@tripadvisor.com",
  "active": 4,
  "grooming": 1,
  "size": 3,
  "noise": 4,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Madelaine Philpin",
  "email": "mphilpind@va.gov",
  "password": "mphilpind@shareasale.com",
  "active": 5,
  "grooming": 5,
  "size": 4,
  "noise": 1,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Cal Uff",
  "email": "cuffe@sitemeter.com",
  "password": "cuffe@cam.ac.uk",
  "active": 4,
  "grooming": 5,
  "size": 1,
  "noise": 2,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Wilmer Steane",
  "email": "wsteanef@t.co",
  "password": "wsteanef@wsj.com",
  "active": 2,
  "grooming": 5,
  "size": 4,
  "noise": 4,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Nadia Gallagher",
  "email": "ngallagherg@nydailynews.com",
  "password": "ngallagherg@bbc.co.uk",
  "active": 1,
  "grooming": 3,
  "size": 4,
  "noise": 5,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "D'arcy Flanaghan",
  "email": "dflanaghanh@deliciousdays.com",
  "password": "dflanaghanh@delicious.com",
  "active": 1,
  "grooming": 3,
  "size": 2,
  "noise": 2,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Ogdon Lack",
  "email": "olacki@virginia.edu",
  "password": "olacki@latimes.com",
  "active": 3,
  "grooming": 5,
  "size": 5,
  "noise": 5,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Bryan Sirmond",
  "email": "bsirmondj@ycombinator.com",
  "password": "bsirmondj@si.edu",
  "active": 2,
  "grooming": 3,
  "size": 5,
  "noise": 5,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Forest Mole",
  "email": "fmolek@usa.gov",
  "password": "fmolek@disqus.com",
  "active": 5,
  "grooming": 4,
  "size": 3,
  "noise": 4,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Georgianne Shay",
  "email": "gshayl@sciencedaily.com",
  "password": "gshayl@miitbeian.gov.cn",
  "active": 5,
  "grooming": 2,
  "size": 1,
  "noise": 4,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Phylis Baglin",
  "email": "pbaglinm@earthlink.net",
  "password": "pbaglinm@mtv.com",
  "active": 5,
  "grooming": 1,
  "size": 1,
  "noise": 1,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Calida Lantry",
  "email": "clantryn@sbwire.com",
  "password": "clantryn@globo.com",
  "active": 1,
  "grooming": 4,
  "size": 3,
  "noise": 2,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Bink Canning",
  "email": "bcanningo@ehow.com",
  "password": "bcanningo@yale.edu",
  "active": 2,
  "grooming": 3,
  "size": 5,
  "noise": 2,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Aeriell Vipan",
  "email": "avipanp@thetimes.co.uk",
  "password": "avipanp@paginegialle.it",
  "active": 4,
  "grooming": 4,
  "size": 4,
  "noise": 2,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Beaufort Rowan",
  "email": "browanq@goo.gl",
  "password": "browanq@bloomberg.com",
  "active": 2,
  "grooming": 5,
  "size": 4,
  "noise": 4,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Karalynn Thatcham",
  "email": "kthatchamr@google.fr",
  "password": "kthatchamr@goodreads.com",
  "active": 4,
  "grooming": 2,
  "size": 4,
  "noise": 1,
  "petExperience": false,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Alyce Khotler",
  "email": "akhotlers@usnews.com",
  "password": "akhotlers@delicious.com",
  "active": 1,
  "grooming": 1,
  "size": 3,
  "noise": 2,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}, {
  "name": "Wallis Parmiter",
  "email": "wparmitert@theatlantic.com",
  "password": "wparmitert@de.vu",
  "active": 1,
  "grooming": 3,
  "size": 5,
  "noise": 5,
  "petExperience": true,
  "children": true,
  "currentDogs": false,
  "currentPets": true
}];

module.exports = usersDummy;