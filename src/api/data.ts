export type NewsItemTypeForData = {
  id: string
  title: string
  image: string
  message: string
  date: Date
  tags: Array<string>
}

export const news: Array<NewsItemTypeForData> = [
  {
    title: `Biden election: Mike Pence 'welcomes' senators' bid to derail result`,
    date: new Date(2021, 1, 1),
    id: '1',
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/145E9/production/_116333438_pence.jpg`,
    message: `US Vice-President Mike Pence has welcomed an effort by a group of senators to refuse to certify Joe Biden's presidential election win.`,
    tags: ['Biden', 'America', 'Politic'],
  },

  {
    date: new Date(2022, 2, 2),
    id: '2',
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/72EF/production/_116332492_gettyimages-1097023042.jpg`,
    title: `Veteran US broadcaster Larry King 'in hospital with Covid'`,
    message: `Sources close to his family told ABC News and his former employer CNN that he has been at Cedars-Sinai Medical Centre for over a week.

King, whose career spans over 60 years, has won multiple accolades, including two Peabody Awards and an Emmy.`,
    tags: ['America', 'Veterans'],
  },
  {
    date: new Date(2020, 3, 3),
    id: '3',
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2016%2F01%2F28%2Fworld%2F28trumpbelgium-web2%2F28trumpbelgium-web2-facebookJumbo.jpg&f=1&nofb=1`,
    message: `Twitter has not only locked the President's Twitter feed but thrown serious jeopardy on Donald Trump's long-term future on the platform.

Despite numerous breaches of its rules over the years, Twitter has allowed Mr Trump to remain on the social media platform because he is the president.

But as the power given to him by the American people slowly slips away, so does his Twitter immunity.`,
    title: 'Does Trump have a future on Twitter?',
    tags: ['America', 'Trump'],
  },
  {
    date: new Date(),
    id: '4',
    title: `'Kulning': A hypnotic Swedish singing tradition`,
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanhede.se%2Fwp-content%2Fuploads%2F2017%2F09%2F2wXF56K.jpg&f=1&nofb=1`,
    message:
      'Skallskog is a secluded farm without running water or electricity that most Swedes have never heard of. Hidden deep in the Nordic wilderness, this humble collection of cattle barns and russet-red farmhouses may seem like a place of little importance. But this is where you’ll find the disappearing roots of an ancient Swedish singing tradition so intimately connected to nature that it can only be described as magic.',
    tags: ['Travel', 'Swedes'],
  },
  {
    date: new Date(2020, 0, 10, 18),
    id: '5',
    title: `Indonesia Sriwijaya Air Boeing 737 black boxes located`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/0D67/production/_116413430_065133649-1.jpg`,
    tags: ['India', 'Crash'],
    message: `Black boxes of a passenger plane which crashed in the sea soon after take-off from Jakarta, Indonesia on Saturday have been located, officials say.

    A small flotilla of ships has been searching the site and navy divers are expected to be able to retrieve the two flight recorders, they add.

    Aircraft parts and human remains have been found.`,
  },
  {
    date: new Date(2021, 0, 10, 13),
    id: '6',
    title: `'QAnon Shaman' Jake Angeli charged over pro-Trump riots`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/E1C9/production/_116410875_angeli2-gettyimages-1294935359-1.jpg`,
    tags: ['America', 'Trump', 'Election'],
    message: `A prominent follower of the baseless conspiracy theory QAnon has been charged over the US Capitol riots.

    Jacob Anthony Chansley, known as Jake Angeli, is in custody on charges including violent entry and disorderly conduct.

    Mr Chansley, who calls himself the QAnon Shaman, is allegedly the man pictured with a painted face, fur hat and horns inside Congress on Wednesday.

    Donald Trump faces another impeachment charge for his role in the unrest.

    Democrats accuse the president of encouraging the riots, in which five people died.

    The FBI has been appealing to the public to help bring the assailants to justice.`,
  },
]
