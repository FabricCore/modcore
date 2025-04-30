function main(context) {
    let url = StringArgumentType.getString(context, "url");
    modcore.cmd.webQuiet(url);
}
