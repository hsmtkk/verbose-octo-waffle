export default defineEventHandler((event) => {
    const query = getQuery(event)
    const text: string = query.text
    const count = busyWait(3000)
    return { text: text.toUpperCase(), count: count }
})

function busyWait(milliSecond: number): number {
    let end = new Date().getTime() + milliSecond
    let count = 0
    while (new Date().getTime() < end) {
        count += 1
    }
    return count
}