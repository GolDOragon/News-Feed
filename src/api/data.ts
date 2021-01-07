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
]
