# Promise带来的更好的体验
### 浏览器加载一篇文章,如果只是依次发出请求,而不关心加载的顺序,就会呈现乱序的章节.
``` js
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
```

###依次发出请求,按返回数据的顺序加载页面
``` js

```
## 顺序加载方式,使用then方法来依次执行任务,