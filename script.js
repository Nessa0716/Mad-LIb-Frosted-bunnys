let adjective=prompt('Enter an Adjective:')
let noun=prompt ('Enter A Noun:')
let verb=prompt ('Enter A Verb:')
let adverb=prompt ('Enter A Adverb:')
let name=prompt ('Enter A Name:')

let story=`You wake up in the morning in your ${adjective} pajamas. You start to head to the ${noun} to ${verb}. Then you go to the mailbox to get some mail. You open the mail inside and realize you got invited to ${noun}. In the afternoon you come to the realization that you love to ${adverb} ${verb}.


${name} couldn't help but experience a mixture of anxiety and excitement as the big day drew near. [He/She] pondered about the other guests and the unforgettable experiences that were in store for [him/her]. As the RSVP deadline drew closer, [Your Name] eagerly replied, "Yes!"

When ${name} arrived to ${noun} on the day of the event, the [Adjective] atmosphere welcomed them. Each visitor was individually greeted by a stranger, and the venue was decorated with [Decorations]. Mixing and chatting with other guests, ${name} struck up new conversations.


`
let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML=`<p>${story}</p>`