import RSSParser from "rss-parser"

let parser = new RSSParser();
let feedURL = "https://www.reddit.com/.rss"

const parse = async url =>{
    const feed = await parser.parseURL(url);
    console.log(feed.title);
    
}
const handleClick = ()=>{
    parse(feedURL)
}


export default function Index() {
  return (
    <div>
      <h1 onClick={handleClick}>Hello, Dear</h1>
    </div>
  )
}