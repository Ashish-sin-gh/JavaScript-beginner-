//method 1

/*
window.addEventListener('keydown', function(e){
    const main = document.getElementById('main');

    main.innerHTML = `
        <div id="insert">
            <div class="key">
                <span>event.key</span>
                <span>${e.key === ' ' ? 'Space' : e.key}</span>
            </div>
            <div class="key">
                <span>event.keycode</span>
                <span>${e.keyCode}</span>
            </div>
            <div class="key">
                <span>event.code</span>
                <span>${e.code}</span>
            </div>
        </div>`;
});
*/

//method 2

function onkeydown(e){
    //get element where to implement the DOM operations
    const main = document.getElementById('main');

    //clear the DOM on every run
    main.innerHTML = '';

    //create an object
    const objs = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    //loop through the object keys and create the elemets 
    /*<div class="key">
        <span>event.key</span>
            <span>${e.key === ' ' ? 'Space' : e.key}</span>
    </div> */
    for(let key in objs){
        const div = document.createElement('div');
        div.id = 'insert';

        const div2= document.createElement('div');
        div2.className = 'key';

        const span1 = document.createElement('span');
        const span2 = document.createElement('span');

        const span1Txt = document.createTextNode(key);
        const span2Txt = document.createTextNode(objs[key]);

        span1.appendChild(span1Txt);
        span2.appendChild(span2Txt);

        div2.appendChild(span1);
        div2.appendChild(span2);

        div2.appendChild(div);

        main.appendChild(div2);
    }
}

window.addEventListener('keydown', onkeydown);