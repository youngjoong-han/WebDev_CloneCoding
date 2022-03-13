const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "사람들은 가치보다 가격에 더 주목한다. 하지만 가격은 당신이 지불하는것이고, 가치는 당신이 얻는것이다.",
        author: "워렌버핏",
    },
    {
        quote: "의지, 노력 기다림은 성공의 주춧돌이다.",
        author: "루이 파스퇴르",
    },
    {
        quote: "시작하라. 그 자체가 천재성이고 힘이며, 마력이다.",
        author: "괴테",
    },
    {
        quote: "행동의 가치는 그 행동을 끝까지 이루는데 있다.",
        author: "칭기스칸",
    },
    {
        quote: "인간의 위대함은 사고력에 있다.",
        author: "파스칼",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;