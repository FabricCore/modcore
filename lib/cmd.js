modcore.cmd.eval = (code, verbose = true) => {
    if (verbose)
        console.log(
            `${code
                .split("\n")
                .map((line) => `\u00A77> \u00A7a${line}`)
                .join("\n")}`,
        );

    let res = Core.eval(code);
    if (res.isEmpty()) return;

    res = res.get();
    if (res != undefined || verbose)
        console.log(
            `\u00A7e${res != undefined && res.thisIsAnArbitraryKeyToCheckIfItIsAJavaPackage != undefined ? res : JSON.stringify(res, null, 2)}`,
        );
};

modcore.cmd.load = (path) => {
    let Files = Packages.java.nio.file.Files;

    if (!Files.exists(paths.config.resolve(path))) {
        console.error(
            `File does not exist at .minecraft/config/jscore/${path}`,
        );
        return;
    }

    require(path);
    console.log("\u00A7aScript loaded");
};

modcore.cmd.web = (url) => {
    console.log("\u00A7aFetching script");

    modcore.net.get(url, (res) => {
        let body = res.body();
        modcore.cmd.eval(body);
    });
};

modcore.cmd.webQuiet = (url) => {
    console.log("\u00A7aFetching script");

    modcore.net.get(url, (res) => {
        let body = res.body();
        modcore.cmd.eval(body, false);
    });
};
