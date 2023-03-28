// Method to dynamically load JavaScript
function loadScripts(filename) {
    id = "script-" + filename;
    const exists = document.getElementById(id);
    if (typeof(exists) === 'undefined' || exists === null) {
        const node = document.createElement('script');
        node.id = id;
        node.src = filename;
        node.type = 'text/javascript';
        node.async = false;
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
