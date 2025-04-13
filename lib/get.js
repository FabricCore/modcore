{
    let HttpClient = Packages.java.net.http.HttpClient;
    modcore.net.client = HttpClient.newBuilder()
        .followRedirects(HttpClient.Redirect.NORMAL)
        .build();

    let BodyHandlers = Packages.java.net.http.HttpResponse.BodyHandlers;

    let getTask = requireRunnable("modules/core/lib/getTask.js");

    modcore.net.get = (url, onRecv, bodyHandler) => {
        getTask.spawn(url, onRecv, bodyHandler);
        return true;
    };

    modcore.net.getDownload = (url, onRecv, path) => {
        getTask.spawn(
            url,
            onRecv,
            BodyHandlers.ofFile(paths.config.resolve(path)),
        );
    };

    modcore.net.getDownloadUnzip = (url, onRecv, path) => {
        getTask.spawn(
            url,
            (res) => {
                let stream = res.body();
                modcore.io.unzip(stream, paths.config.resolve(path));
                onRecv();
            },
            BodyHandlers.ofInputStream(),
        );
    };
}
