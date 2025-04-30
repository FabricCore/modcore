Command.register({
    package: "modules/core/commands",
    name: "js",

    args: {
        code: {
            type: StringArgumentType.greedyString(),
            execute: "smart.js",
        },
    },

    subcommands: {
        eval: {
            args: {
                code: {
                    type: StringArgumentType.greedyString(),
                    execute: "eval.js",
                },
            },
        },
        load: {
            args: {
                path: {
                    type: StringArgumentType.greedyString(),
                    execute: "load.js",
                },
            },
        },
        web: {
            args: {
                url: {
                    type: StringArgumentType.greedyString(),
                    execute: "webQuiet.js",
                },
            },
            subcommands: {
                verbose: {
                    args: {
                        url: {
                            type: StringArgumentType.greedyString(),
                            execute: "web.js",
                        },
                    },
                },
            },
        },
        reload: {
            execute: "reload.js",
        },
    },
});
