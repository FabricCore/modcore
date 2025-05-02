# Core

Core modules providing basic functionalities.

### Installation

**Core** is included in [**bootstrap.js**](https://github.com/FabricCore/bootstrap.js).

#### Using pully

> Since pully requires **core**, core must be installed manually if not present. Subsequent updates can be done through **pully**.

```
/pully install core
```

#### Require as Dependency

```json
{
  "dependencies": {
    "core": "0.1.0"
  }
}
```

#### Manual Install

1. [Download **core**](https://github.com/FabricCore/modcore/archive/refs/heads/master.zip).
2. Unzip file content to _.minecraft/config/jscore/modules/core/_

The folder should look like this

```
.minecraft/config/jscore/
└── modules/
    └── core/
        ├── lib/
        ├── commands/
        └── package.json
```

## Commands

#### /js eval &lt;code&gt;

Evaluate JS code and displays evaluation result.

```js
/js eval 1+1
[CONSOLE] 2
```

#### /js load &lt;path&gt;

Loads script at path.

> Path is the full path after _.minecarft/config/jscore/_, the following example loads _.minecarft/config/jscore/init.js_.

```js
/js load init.js
[CONSOLE] Script loaded
```

#### /js web &lt;url&gt;

Request content at URL, and prints out response as text.

```js
/js web https://example.com
[CONSOLE] <!doctype html>
[CONSOLE] <html>
[CONSOLE] <head>
[CONSOLE]     <title>Example Domain</title>
[CONSOLE] ...
```

#### /js reload

Same as ***/js load init.js***.

```js
/js reload
[CONSOLE] Script loaded
```

#### /js &lt;query&gt;

If a subcommand is not specified, ***/js*** does its best to guess the command to run using the following rules.
- If query starts with *https://* or *http://*, it run ***/js web &lt;query&gt;***
- If query ends with *.js*, it runs ***/js load &lt;query&gt;***
- Otherwise, it runs ***js eval &lt;query&gt;***

## Library Functions

#### modcore.fs.exists(path: String) → boolean

Returns true if file exists at path.

> Path is the full path after _.minecarft/config/jscore/_

#### modcore.fs.read(path: String) → String

Read file at path and returns (text) file content.

#### modcore.fs.write(path: String, content: String)

Write content to file at path, create file and parent directory if not exist.

#### modcore.fs.append(path: String, content: String)

Similar to ***modcore.fs.write***, but appends to file if it exists.

#### modcore.fs.isDir(path: String) → boolean

Returns true if item at path is a directory.

#### modcore.fs.isFile(path: String) → boolean

Returns true if item at path is a file.

#### modcore.fs.createDir(path: String) → boolean

Create directory at path.

#### modcore.fs.delete(path: String)

Deletes file item at path, does not throw error if path is unoccupied.

#### modcore.fs.dirItems(path: String) → [String]

List full paths of immediate file items in directory.

#### modcore.fs.dirItems(path: String, filesOnly: boolean?) → [String]

List full paths of all file items in directory.
- If ***filesOnly*** is set to true, it will not include directories.
- If ***filesOnly*** is not specified, it defaults to true.

#### modcore.fs.unzip(from: String, target: String)

Unzip archive file to target directory.

#### modcore.fs.copy(from: String, target: String)

Copy file or directory to target.

#### modcore.fs.move(from: String, target: String)

Move file or directory to target.

#### modcore.net.get(url: String, onRecv: F, bodyHandler: BodyHandler?)
**where F: Fn([HttpResponse](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpResponse.html))**

Send get request to URL and processes using the specified ***[BodyHandler](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpResponse.BodyHandlers.html)***.
- If ***BodyHandler*** is not specified, defaults to ***BodyHandlers.ofString()***
- Note the response body can be extracted using ***res.body()***

#### modcore.net.getBlocking(url: String, bodyHandler: BodyHandler?) → [HttpResponse](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpResponse.html)

Blocking variant of ***modcore.net.get***, the response is returned directly instead of passing to a callback.

#### modcore.net.getDownload(url: String, onRecv: F, path: String)
**where F: Fn([HttpResponse](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpResponse.html))**

Downloads file to path, calls ***onRecv*** once complete.

#### modcore.net.getDownloadBlocking(url: String, path: String)  → [HttpResponse](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpResponse.html)

Blocking variant of ***modcore.net.getDownload***.

#### modcore.net.getDownloadUnzip(url: String, onRecv: F, path: String)
**where F: Fn()**

Download zip file and unzips to target directory.

#### modcore.net.getDownloadUnzipBlocking(url: String, path: String)

Blocking variant of ***modcore.net.getDownloadUnzip***.

#### modcore.io.unzip(is: [InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html), target: String)

Take ***is*** and unzips to target directory.
