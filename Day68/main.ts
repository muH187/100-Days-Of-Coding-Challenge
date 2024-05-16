// Tuple:
let article: readonly [number, string, boolean] = [32, "One", false]
console.log(article)

article = [1001, "The Millionaire Fastlane", true]
const [id, title, published] = article
console.log(id)
console.log(title)
console.log(published)