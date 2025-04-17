function main(context) {
    let url = StringArgumentType.getString(context, "url");
    modcore.cmd.web(url);
}
