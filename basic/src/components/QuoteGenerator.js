import React, { useState, useEffect } from 'react';

function QuoteGenerator() {

const [quote, setQuote] = useState('');

useEffect(() => {

fetchQuote();

}, []);

const fetchQuote = async () => {

const response = await fetch('https://dummyjson.com/quotes/random');

const data = await response.json();

setQuote(data.content);

};
return(
    <div style={{padding: '30px', fontfamily:'Arial'}}>
        <h2>Random Quote</h2>
        <p style={{ fontstyle:'italic' }}> {quote}</p>
        <button onClick={fetchQuote}>Get New Button</button> 
    </div>
);
}
export default QuoteGenerator;