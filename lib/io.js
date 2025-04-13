// targetDir is Path not string
modcore.io.unzip = (inputStream, targetDir) => {
    targetDir = targetDir.toAbsolutePath();

    let ZipInputStream = Packages.java.util.zip.ZipInputStream;
    let Files = Packages.java.nio.file.Files;

    try {
        let zipIn = new ZipInputStream(inputStream);

        for (let ze; (ze = zipIn.getNextEntry()) != null; ) {
            let resolvedPath = targetDir.resolve(ze.getName()).normalize();

            if (!resolvedPath.startsWith(targetDir))
                throw new Error(`Entry with illegal path "${ze.getName()}"`);

            if (ze.isDirectory()) Files.createDirectories(resolvedPath);
            else {
                Files.createDirectories(resolvedPath.getParent());
                Files.copy(zipIn, resolvedPath);
            }
        }
    } catch (e) {
        console.error("Unzip failed.");
        console.error(e);
    }
};
