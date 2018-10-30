const chapterList = (function () {
    let chapter1 = 'Chapter1 In 1989 an 8.2 earthquake almost flattened America, killing over 30,000 people in less than four minutes. In the midst of utter devastation and chaos, a father left his wife safely at home and rushed to the school where his son was supposed to be, only to discover that the building was as flat as a pancake.';
    let chapter2 = 'Chapter2 After the unforgettably initial shock, he remembered the promise he had made to his son: "No matter what, I’ll always be there for you!" And tears began to fill his eyes. As he looked at the pile of ruins that once was the school, it looked hopeless, but he kept remembering his commitment to his son.';
    let chapter3 = 'Chapter3 He began to direct his attention towards where he walked his son to class at school each morning. Remembering his son s classroom would be in the back right corner of the building; he rushed there and started digging through the ruins.';
    let chapter4 = 'Chapter4 As he was digging, other helpless parents arrived, clutching their hearts, saying: "My son!" "My daughter!" Other well meaning parents tried to pull him off what was left of the school, saying: "It s too late! They’re all dead! You can’t help! Go home! Come on, face reality, there s nothing you can do!"';
    let chapter5 = 'Chapter5 To each parent he responded with one line: "Are you going to help me now?" And then he continued to dig for his son, stone by stone. The fire chief showed up and tried to pull him off the school s ruins saying, "Fires are breaking out, explosions are happening everywhere. You’re in danger. We’ll take care of it. Go home." To which this loving, caring American father asked, "Are you going to help me now?"';

    return {chapter1, chapter2, chapter3, chapter4, chapter5};
})();

const http = require('http');
const server = http.createServer((request, response) => {
    if(request){
        let url = request.url.slice(1);
        let timeout = 0;
        switch (url) {
            case 'chapter1':
            timeout = 1000;
            break;

            case 'chapter2':
            timeout = 1500;
            break;

            case 'chapter3':
            timeout = 500;
            break;

            case 'chapter4':
            timeout = 2500;
            break;

            case 'chapter5':
            timeout = 1000;
            break;
        }
        setTimeout(() => {
            response.writeHead(200, {"Content-type": "text/json", "Access-Control-Allow-Origin": "http://localhost:8080"});
            response.end(JSON.stringify(chapterList[url]));
        }, timeout);
    }
}).listen(5500);

console.log('Server is runnig at http://localhost:5500');