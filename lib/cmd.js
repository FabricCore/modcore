modcore.cmd.eval = (code) => {
    console.log(`> \u00A7a${code}`);

    let res = Core.eval(code);
    if (res.isEmpty()) return;

    res = res.get();

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
