function main(context) {
    let code = StringArgumentType.getString(context, "code");
    modcore.cmd.eval(code);
}
