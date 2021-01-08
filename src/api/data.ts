import BidenImg from './Biden_election.jpg'
import NatureImg from './Nature.jpg'
import TrumpImg from './Trump.jpg'
import VeteranUSImg from './Veteran_US.jpg'

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
    date: new Date(2020, 1, 1),
    id: '1',
    image: BidenImg,
    message: `US Vice-President Mike Pence has welcomed an effort by a group of senators to refuse to certify Joe Biden's presidential election win.`,
    tags: ['Biden', 'America', 'Politic'],
  },

  {
    date: new Date(2020, 2, 2),
    id: '2',
    image: VeteranUSImg,
    title: `Veteran US broadcaster Larry King 'in hospital with Covid'`,
    message: `Sources close to his family told ABC News and his former employer CNN that he has been at Cedars-Sinai Medical Centre for over a week.

King, whose career spans over 60 years, has won multiple accolades, including two Peabody Awards and an Emmy.`,
    tags: ['America', 'Veterans'],
  },
  {
    date: new Date(2020, 3, 3),
    id: '3',
    image: TrumpImg,
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
    image: NatureImg,
    message:
      'Skallskog is a secluded farm without running water or electricity that most Swedes have never heard of. Hidden deep in the Nordic wilderness, this humble collection of cattle barns and russet-red farmhouses may seem like a place of little importance. But this is where you’ll find the disappearing roots of an ancient Swedish singing tradition so intimately connected to nature that it can only be described as magic.',
    tags: ['Travel', 'Swedes'],
  },
]
