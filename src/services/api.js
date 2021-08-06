export const api_url = "https://bitbucket.org/vitriosdev/vitrio-dev-test/raw/master/data/catalogo.json"

export async function getCatalogo() {
    const response = await fetch(`${api_url}catalogo.json`)
    const data = await response.json()

    return data
}
