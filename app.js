document.querySelectorAll('.tab-bar').forEach(function(item) {
    let children = Array.from(item.children);
    let circleIndicator = item.querySelector('.tab-bar__circle-indicator');
    let lineIndicator = item.querySelector('.tab-bar__line-indicator');

    if(item.classList.contains('tab-bar-vertical')) {
        children.forEach((childItem, key) => {
            childItem.addEventListener('click', () => {
                let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.CDATA_SECTION_NODE.theme}`);

                lineIndicator.classList.remove('animate');
                lineIndicator.style.marginTop = ((25 + childItem.clientHeight) * key) + "px";
                lineIndicator.classList.add('animate');

                document.querySelector('body').style.backgroundColor = color;
                lineIndicator.style.backgroundColor = color;

            })
        })
    }
})