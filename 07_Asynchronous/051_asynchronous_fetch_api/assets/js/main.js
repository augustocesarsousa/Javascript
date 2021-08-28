// let request = obj => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(`Error: ${xhr.status} (${xhr.statusText})`);
//             }
//         });
//     });
// }

document.addEventListener('click', e => {
    let el = e.target;
    let tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    try {
        let href = el.getAttribute('href');
        let response = await fetch(href);

        if(response.status < 200 || response.status >= 300) throw new Error(`${response.status} (${response.statusText})`);
        
        let html = await response.text();
        loadResult(html);        
    } catch (e) {
        console.log(e);
    }
}

function loadResult(response) {
    let result = document.querySelector('.result');
    result.innerHTML = response;
}