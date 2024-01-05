let adjective = prompt("Enter an Adjective:");
let noun = prompt("Enter A Noun:");
let verb = prompt("Enter A Verb:");
let lastname = prompt("Enter A Last Name:");
let place = prompt("Enter A Place:");
let room = prompt("Enter A Room:");
let color = prompt("Enter A Color:");
let name = prompt("Enter A Name:");
let bodypart = prompt("Enter A Body Part:");
let emotion = prompt("Enter A Emotion:");

let story= `Once upon a ${adjective} evening in the quaint town of ${place}, Detective ${lastname} found himself with a peculiar case on his hands. A ${adjective} murder had taken place at the ${adjective} mansion owned by the eccentric ${noun} family. The victim, Mr. ${noun}, was discovered in the ${room} with a ${adjective} cucumber lodged in his ${bodypart}.

Detective ${lastname}, known for his ${adjective} investigative skills, arrived at the crime scene wearing his signature ${color} trench coat. The atmosphere was thick with ${noun}, and the air seemed to carry a sense of ${adjective} tension. The ${adjective} butler, ${name}, nervously led the detective to the ${room}, where the ${adjective} murder had occurred.

Upon inspecting the crime scene, Detective ${lastname} noticed a ${adjective} trail of ${noun} leading from the ${room} to the ${adjective} garden. Determined to crack the case, he followed the trail, passing by a ${adjective} fountain and a ${adjective} hedge maze that seemed to hold ${adjective} secrets.

As he ventured deeper into the garden, Detective ${lastname} encountered a group of ${noun} who seemed to be discussing the ${adjective} events. Among them was the ${adjective} widow, Mrs. ${lastname}, whose ${adjective} eyes betrayed a hint of ${emotion}. The ${adjective} gardener, ${name}, was also present, his hands stained with ${color} soil.

With a keen sense of ${noun}, Detective ${lastname} interrogated the ${noun}, uncovering ${adjective} alibis and ${adjective} motives. Each suspect had a ${adjective} reason to want Mr. ${noun} out of the ${noun}. The plot thickened as the detective uncovered a ${adjective} love affair, a ${adjective} inheritance dispute, and a secret recipe for ${adjective} cucumber sandwiches.

As the sun dipped below the ${noun}, Detective ${lastname} gathered all the ${noun} in the ${room} and dramatically revealed the ${adjective} truth behind the murder. The murderer, it turned out, was none other than ${name}, the ${adjective} gardener, who had a ${adjective} grudge against Mr. ${noun} for ruining his ${noun} business.

With a ${adjective} confession and a pair of ${adjective} handcuffs, Detective ${lastname} solved the mystery, bringing justice to the ${adjective} town of ${place}. As the residents breathed a collective sigh of ${emotion}, Detective ${lastname} walked into the ${noun}, his silhouette disappearing into the ${adjective} night, ready for his next ${adjective} adventure.
`;
let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
