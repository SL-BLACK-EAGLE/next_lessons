export default async function getUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) throw new Error('failed to fetch user' +res.statusText);

    return res.json()
}
