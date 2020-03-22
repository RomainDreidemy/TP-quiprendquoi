if(document.getElementById('partyList') !== null){
    let $ul = document.createElement('ul');
    caches.open('parties').then((cache) =>
        cache.keys().then((keys) =>
            keys.forEach((key) => {
                const name = localStorage.getItem(key.url);
                console.log(key)

                if (name) {
                    const $li = document.createElement('li');
                    const $link = document.createElement('a');
                    $link.href = key.url;
                    $link.innerHTML = name.split('|')[0];
                    $li.appendChild($link);
                    $ul.appendChild($li)
                }
            }),
        ),
    );

    document.getElementById('partyList').appendChild($ul);
}


