class CharactersService {
  private constructor() {}

  public static get() {
    return {
      fromServer: async (params: Record<string, string>) => {
        const url: URL = new URL('https://rickandmortyapi.com/api/character')

        for (const key in params) {
          url.searchParams.append(key, params[key])
        }

        const response = await fetch(url.href)

        return response.json()
      }
    }
  }
}

export { CharactersService }
