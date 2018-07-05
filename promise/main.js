// 获取数据
function getData(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = () => {
            if(req.status === 200){
                resolve(req.response);
            }
            else{
                // 请求错误
                reject(req.statusText);
            }
        }
        req.onerror = () => {
            // 网络错误
            reject(Error('Network error.'));
        }
        req.send();
    })
}

// 将数据处理成JSON格式
function getJSON(url) {
    return getData(url).then(JSON.parse)
    .catch(err => {
        // 抛出错误，统一捕获
        throw err;
    })
}

// 将数据加载到页面
function addElementToPage(element) {
    let container = document.querySelector('.container');
    container.appendChild(element);
}
function addTitleToPage(titleData) {
    let title = document.createElement('h3');
    title.innerHTML = titleData;
    addElementToPage(title);
}
function addChapterToPage(chapterData) {
    let chapter = document.createElement('p');
    chapter.innerHTML = chapterData;
    addElementToPage(chapter);
}

// 加载完成，取消loading图
function hideSpinner() {
    let spinner = document.querySelector('.spinner');
    spinner.style.display = 'none';
}

let storyUrl = './data/story.json';

// 获取到一个段落后再请求下一个段落
// getJSON(storyUrl).then(story => {
//     addTitleToPage(story.title);
//     return story.chapterUrls;
// }).catch(err => console.log(err))
// .then(chapterUrls => {
//     let start = Promise.resolve();
//     chapterUrls.forEach((chapterUrl, index) => {
//         if (index != chapterUrls.length-1) {
//             start = start.then(() => getJSON(chapterUrl)).then(addChapterToPage).catch(err => console.log(err));
//         }
//         else {
//             start = start.then(() => getJSON(chapterUrl)).then(addChapterToPage).catch(err => console.log(err)).then(hideSpinner);
//         }
//     });
// })

// reduce改良版本
// getJSON(storyUrl).then(story => {
//     addTitleToPage(story.title);
//     return story.chapterUrls.reduce((start, chapterUrl) => {
//         return start.then(() => getJSON(chapterUrl)).then(addChapterToPage).catch(err => console.log(err));
//     }, Promise.resolve());
// }).then(hideSpinner);

// 浏览器可以同时请求多组数据，获取到所有数据后再展示
// getJSON(storyUrl).then(story => {
//     addTitleToPage(story.title);
//     return Promise.all(story.chapterUrls.map(getJSON));
// }).then(chapterList => {
//     chapterList.forEach(addChapterToPage);
// }).then(hideSpinner);

// 先获取到的数据可以按顺序先展示
getJSON(storyUrl).then(story => {
    addTitleToPage(story.title);
    return story.chapterUrls;
}).then(chapterUrls => {
    return chapterUrls.map(getJSON).reduce((start, chapterPromise) => {
        return start.then(() => chapterPromise).then(addChapterToPage).catch(err => console.log(err));
    }, Promise.resolve());
}).then(hideSpinner);