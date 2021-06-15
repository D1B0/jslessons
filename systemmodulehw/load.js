function loadScript(args, callback) {
    const elements = [];
    if (typeof args === "function") {
        return args();
    }
    if (typeof args === "string") {
        args = [args];
    }
    if (!Array.isArray(args)) {
        throw new TypeError();
    }
    const test = Array.from(document.getElementsByTagName('script'),
        elem => elem.src);


    args.forEach(arg => {

        if (test.includes(arg)) return;
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = arg;

        elements.push(new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject
        }));

        document.body.appendChild(script);
    });

    Promise.all(elements).then(callback);
}