// Method to dynamically load JavaScript
function loadScripts(filename, callback) {
    id = "script-" + filename;
    const exists = document.getElementById(id);
    if (typeof(exists) === 'undefined' || exists === null) {
        const node = document.createElement('script');
        node.id = id;
        node.src = filename;
        node.type = 'text/javascript';
        node.async = false;
        if(typeof(callback) === "function" ) node.onload = callback;
        node.onerror = (err) => {
            console.log(err);
            console.log(`Can't not find ${filename}`);
        }
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
