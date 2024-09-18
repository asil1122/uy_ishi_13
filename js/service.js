const url = "https://data-lesson-13.vercel.app/phones"

export const getProducts = async () => {
    try {
        const res = await fetch(`${url}`)
        const data = await res.json()

        return data
    } catch (error) {
        return error.message
    }
}

export const getName = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        return error.message
    }
}
