const apiKey = "1c380413dd434735808bf844b000239f";
const natural = require("natural");
const SpellCorrector = require("spelling-corrector");
const aposToLexForm = require("apos-to-lex-form");
const SW = require("stopword");

const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const sentimentAnalysis = (text) => {
    const lexedText = aposToLexForm(text);
    const casedReview = lexedText.toLowerCase();
    const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, "");

    const { WordTokenizer } = natural;
    const tokenizer = new WordTokenizer();
    const tokenizedReview = tokenizer.tokenize(alphaOnlyReview);

    tokenizedReview.forEach((word, index) => {
        tokenizedReview[index] = spellCorrector.correct(word);
    });

    const filteredReview = SW.removeStopwords(tokenizedReview);
    const { SentimentAnalyzer, PorterStemmer } = natural;
    const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
    const analysis = analyzer.getSentiment(filteredReview);
    return analysis;
};

export default function handler(req, res) {
    const { text, strength } = req.body;
    const site = `https://newsapi.org/v2/everything?q=${text}&from=2023-01-03&sortBy=publishedAt&apiKey=${apiKey}`;

    fetch(site)
        .then((response) => response.json())
        .then((data) => {
            const sentimentTuple = [];
            let overSentiment = 0;
            for (let i = 0; i < strength * data.articles.length; i++) {
                const currSentiment = sentimentAnalysis(data.articles[i].title);
                sentimentTuple.push(currSentiment);
                if (currSentiment) {
                    overSentiment += currSentiment;
                }
            }
            res.status(200).json({
                sentiment: overSentiment,
                tuple: sentimentTuple,
            });
        });
}
