'use strict';

let numChildren = [0, 1, 2, 3, 4];
let partnerNames = ['Chris', 'Gerben', 'Gholi', 'Gholam', 'Gholeidun'];
let locations = ['Amsterdam', 'Utrecht', 'toronto', 'sydney', 'Wellington'];
let jobs = ['web Developer', 'web Developer','web Developer','web Developer','web Developer'];

function tellFortune(numChildren, partnerNames, locations, jobs); {
  let random = Math.floor(Math.random() * 4);
  let fortune = `You will be a ${jobs[random]} in ${locations[random]}, married to ${partnerNames[random]} with ${numChildren[random]} kids.`;
  return fortune;
}

tellFortune(numChildren, partnerNames, locations, jobs);
