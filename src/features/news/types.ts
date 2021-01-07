export type NewsItemType = {
  id: string
  title: string
  image: string
  message: string
  date: Date
  tags: Array<string>
}

export type AppWorkModeType = 'view' | 'edit' | 'add'
