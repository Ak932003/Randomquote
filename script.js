function generateQuote(){
    let quotes = {
        "- APJ Abdul Kalam" : '"You cannot change your future\n but you can change your habits\n and your habits will change your future."',
        "- John Galsworthy" : '"Life calls the tune, we dance."',
        "- Jamie Ford" : '"The library is like a candy store\n where everything is free."',
        "- C.S. Lewis" : '"I was not born to be free\n I was born to adore and obey"',
        "- Swami Vivekananda" : '"You cannot believe in God until\n you believe in yourself."'
    }
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.querySelector('#quote').innerText = quote;
    document.querySelector('#author').innerText = author;
}