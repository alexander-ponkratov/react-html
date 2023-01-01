const linkData = [
    {
        title: "React - A JavaScript Library for Building User Interfaces",
        url: "https://reactjs.org",
        shortUrl: "reactjs.org",
        excerpt: "React makes it painless to create interactive UIs."
    },
    {
        title: "React (web framework) - Wikipedia",
        url: "https://en.wikipedia.org/wiki/React_(web_framework)",
        shortUrl: "en.wikipedia.org › wiki › React_(web_framework)",
        excerpt: "React is a JavaScript library for building user interfaces."
    },
    {
        title: "React (@reactjs) | Twitter",
        url: "https://twitter.com/reactjs",
        shortUrl: "twitter.com › reactjs",
        excerpt: "The latest Tweets from React (@reactjs)."
    }
];

function Link(props) {
    return (
        <div>
            <a href={props.url}>{props.title}</a>
            <div>
                <h3>{props.shortUrl}</h3>
            </div>
            <div>{props.excerpt}</div>
        </div>
    );
}

function App() {
    return (
        <section>
            {linkData.map(function (link) {
                return (
                    <Link
                        key={link.url}
                        title={link.title}
                        url={link.url}
                        shortUrl={link.shortUrl}
                        excerpt={link.excerpt}
                    />
                );
            })}
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));