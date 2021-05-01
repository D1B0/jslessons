let str = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright.How about you ? '
One: 'Not too bad. The weather is great isn't it ? '
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion ? '
Two: 'It's their anniversary.'
One: 'That's great.Well, you better get going.You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`
let goo = str.replace(/'/g, '"')
// let foo = str.replace(/(?!s'|[a-zA-z]'[a-z])([\s\S])'/g, '"') \\ это для того что если апостроф стоит после буквы s 
let foo = str.replace(/\B'|'\B/g, '"');

console.log(goo);
console.log(foo);