function customfunction(element, temp) {

    const domelement = document.createElement(element.type);
    domelement.innerHTML = element.children;

    for (const it in element.props) {                    // always use function to set  the attribute
        if (it === 'children') continue;
        domelement.setAttribute(it, element.props[it]);
    }
    temp.appendChild(domelement);
}

const reactelement = {                              // react convert app.jsx into these type of object (it convert jsx) 
    type: 'a',
    props: {
        href: 'https://www.youtube.com/',
        target: '_blank'
    },
    children: 'click here to open the youtube'
}

const temp = document.querySelector('#root');

customfunction(reactelement, temp);



