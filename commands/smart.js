function smart(ctx) {
    let code = StringArgumentType.getString(ctx, "code");

    if (code.startsWith("https://") || code.startsWith("http://"))
        modcore.cmd.web(code);
    else if (code.endsWith(".js")) modcore.cmd.load(code);
    else modcore.cmd.eval(code);
}
