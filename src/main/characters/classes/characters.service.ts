class CharactersService {
  private constructor() {}

  public static get() {
    return {
      fromServer: async (params: Record<string, string>) => {
        const url: URL = new URL('https://rickandmortyapi.com/api/character')

        for (const key in params) {
          url.searchParams.append(key, params[key])
        }

        const res = await fetch(url.href)
          .then((response: any) => {
            if (response.status === 404) {
              alert('Not found this character(s) :(')
              return
            }
            return response.json()
          })
          .catch((err: any) => console.log(err))

        return res
      }
    }
  }
}

export { CharactersService }
