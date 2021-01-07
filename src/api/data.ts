export type NewsItemType = {
  id: string
  title: string
  image: string
  message: string
  date: Date
  tags: Array<string>
}

export const news: Array<NewsItemType> = [
  {
    title: `Biden election: Mike Pence 'welcomes' senators' bid to derail result`,
    date: new Date(2020, 1, 1),
    id: '1',
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/145E9/production/_116333438_pence.jpg`,
    message: `US Vice-President Mike Pence has welcomed an effort by a group of senators to refuse to certify Joe Biden's presidential election win.`,
    tags: ['Biden', 'America', 'Politic'],
  },

  {
    date: new Date(2020, 2, 2),
    id: '2',
    image:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/72EF/production/_116332492_gettyimages-1097023042.jpg',
    title: `Veteran US broadcaster Larry King 'in hospital with Covid'`,
    message: `Sources close to his family told ABC News and his former employer CNN that he has been at Cedars-Sinai Medical Centre for over a week.

King, whose career spans over 60 years, has won multiple accolades, including two Peabody Awards and an Emmy.`,
    tags: ['America', 'Veterans'],
  },
  {
    date: new Date(2020, 3, 3),
    id: '3',
    image: `https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2021/1/7/21fc3bd3-2fc4-443e-89a1-597839bb87e2.jpg`,
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
    image: `https://ychef.files.bbci.co.uk/130x73/p091kxmg.jpg`,
    message:
      'Skallskog is a secluded farm without running water or electricity that most Swedes have never heard of. Hidden deep in the Nordic wilderness, this humble collection of cattle barns and russet-red farmhouses may seem like a place of little importance. But this is where you’ll find the disappearing roots of an ancient Swedish singing tradition so intimately connected to nature that it can only be described as magic.',
    tags: ['Travel', 'Swedes'],
  },
]
