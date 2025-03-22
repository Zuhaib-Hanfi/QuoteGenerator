const islamicQuotes = [
    "And whoever relies upon Allah – then He is sufficient for him. (Qur’an 65:3)",
    "Do not grieve; indeed, Allah is with us. (Qur’an 9:40)",
    "When you feel like you are drowning in life, don’t worry—your lifeguard walks on water.",
    "What is meant for you will reach you even if it is beneath two mountains; what is not meant for you will not reach you even if it is between your two lips.",
    "Tie your camel and trust in Allah. (Hadith – Tirmidhi 2517)",
    "And We have not sent you (O Muhammad), except as a mercy to the worlds. (Qur’an 21:107)",
    "The best among you are those who are best to their wives. (Hadith – Tirmidhi 1162)",
    "Allah loves those who put their trust in Him. (Qur’an 3:159)",
    "If Allah wants to do good to somebody, He afflicts him with trials. (Hadith – Bukhari 5645)",
    "Your Lord has not forsaken you, nor is He displeased. (Qur’an 93:3)",
    "Indeed, with hardship comes ease. (Qur’an 94:6)",
    "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient. (Qur’an 2:153)",
    "Every single night, Allah calls upon His servants: ‘Is there anyone making dua so I can respond? Is there anyone seeking forgiveness so I may forgive them?’ (Hadith – Bukhari & Muslim)",
    "The closest a servant comes to his Lord is when he is in prostration (sujood), so make plenty of du'a. (Hadith – Muslim 482)",
    "No fatigue, nor disease, nor sorrow, nor sadness, nor distress befalls a Muslim, but that Allah expiates some of his sins because of it. (Hadith – Bukhari 5642)",
    "The best among you are those who have the best manners and character. (Hadith – Bukhari 3559)",
    "A good word is charity. (Hadith – Bukhari & Muslim)",
    "Speak good or remain silent. (Hadith – Bukhari 6018, Muslim 47)",
    "Do not belittle any good deed, even meeting your brother with a cheerful face. (Hadith – Muslim 2626)",
    "A person’s true wealth is the good he does in this world."
];

function quoteGenerator() {
    const element = document.getElementById("quotes");
    let index = Math.floor(Math.random() * islamicQuotes.length);
    quotes.innerHTML = islamicQuotes[index];
}
setInterval(quoteGenerator, 3000);

function colorChanger() {
    const element = document.querySelector('div');
    let R = Math.floor(Math.random() * 156) + 100;
    let G = Math.floor(Math.random() * 156) + 100;
    let B = Math.floor(Math.random() * 156) + 100;

    element.style.backgroundColor = `rgb(${R},${G},${B})`;
}
setInterval(colorChanger, 3000);

function BGChanger() {
    const element = document.getElementById('BG');
    let R = Math.floor(Math.random() * 156) + 100;
    let G = Math.floor(Math.random() * 156) + 100;
    let B = Math.floor(Math.random() * 156) + 100;

    element.style.backgroundColor = `rgb(${R},${G},${B})`;
}
setInterval(BGChanger, 3000);