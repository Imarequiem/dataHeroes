interface Characters {
  info: Info
  results: Array<Character>
}

interface NameUrl {
  name: string
  url: string
}

interface Info {
  count: number
  next: string
  pages: number
  prev?: null
}

interface Character extends NameUrl {
  created: string
  episode: Array<String>
  gender: string
  id: number
  image: string
  location: NameUrl
  origin: NameUrl
  species: string
  status: string
  type: string
}

export type { Characters, Character }
