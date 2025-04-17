function main(context) {
    let path = StringArgumentType.getString(context, "path");
    modcore.cmd.load(path);
}
