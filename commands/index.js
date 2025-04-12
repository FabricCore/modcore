Command.register({
    package: "modules/core/commands",
    name: "js",

    args: {
        code: {
            type: StringArgumentType.greedyString(),
            execute: "eval.js",
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
    },
});

Command.register({
    package: "modules/core/commands",
    name: "curl",

    args: {
        url: {
            type: StringArgumentType.greedyString(),
            execute: "curl.js",
        },
    },
});
