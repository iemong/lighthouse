type Result = {
    score: number
}

const data = await Deno.readTextFile('./report/lighthouse/json/summary.json')
const parsed:Result[] = JSON.parse(data)

const rankingList = [...parsed].sort((a, b) => b.score - a.score)

await Deno.writeTextFile("./sortedSummary.json", JSON.stringify(rankingList));
