# Standard streams

Standard streams are interconnected input and output communication channels[1] between a computer program and its environment when it begins execution. 

Originally I/O happened via a physically connected system console (input via keyboard, output via monitor), but standard streams abstract this. When a command is executed via an interactive shell, the streams are typically connected to the text terminal on which the shell is running, but can be changed with redirection or a pipeline. More generally, a child process inherits the standard streams of its parent process.


## Standard input (stdin)

Standard input is a stream from which a program reads its input data

In the case of an interactive shell, that is usually associated with the keyboard.

``` shell

read
# [keyboard input / stdin]

echo $REPLY

```


## Standard output (stdout)

Standard output is a stream to which a program writes its output data. 

In the case of an interactive shell, that is usually the text terminal which initiated the program.

``` shell

ls -lha

# output on you terminal
```


## standard error (stderr)

Standard error is another output stream typically used by programs to output error messages or diagnostics. It is a stream independent of standard output.

The usual destination is the text terminal which started the program to provide the best chance of being seen even if standard output is redirected.

``` shell

ls -K > stdout
# Error is returned to the terminal

less stdout
# stdout is empty

```


# Pipeline (Unix)

Pipeline is a mechanism for inter-process communication using message passing. A pipeline is a set of processes chained together by their standard streams, so that the output text of each process (stdout) is passed directly as input (stdin) to the next one.

 ``` shell
 
grep Standard README.md | wc -l

```


# Redirection

Redirection is a form of interprocess communication, and is a function common to most command-line interpreters, including the various Unix shells that can redirect standard streams to user-specified locations.

Linux/Unix-like:

- 1 for stdout
- 2 for stderr


## Redirect to file

``` shell

# Write the stdout to file

[source] > [destination] # or without spaces, [source]>[destination]

# Append the stdout to file

[source] >> [destination]

# Write the stderr to file

[source] 2> [destination]

# Append the stderr to file

[source] 2>> [destination]

```


## Combining Output

``` shell
[source] 2>&1 [destination]

[source] 1>&1 [destination]

# Redirect both stdout and stderr to a file and print to the terminal
[source] 2>&1 | tee ./file

```

# Node Input and Output


``` js
console.log() // --> stdout

console.error() // --> stderr

throw new Error() // --> stderr
```

## Example1:

Run the file as below.

``` shell
node example1.js > stdout.log 2> stderr.log
```

## Example2:

``` shell
cd example2
node example2.js > stdout.log 2> stderr.log

curl localhost:3001/req # --> Print the req object to stdout

curl localhost:3001/res # --> Print the res object to stdout

curl localhost:3001/error # --> Print a console.error() to stderr
```

# Redirect Nodemon Output

Nodemon prints the output with colors by default, redirecting the output directly from shell catch a lot of color tags. Instead follow the next steps:

1. Create a new javascript file, file.js
2. Import nodemon and fs
3. Append the code below:

``` js
nodemon({
  script: index.js,
  stdout: false // important: this tells nodemon not to output to console
}).on('readable', function() { // the `readable` event indicates that data is ready to pick up
  this.stdout.pipe(fs.createWriteStream('output.txt'));
  this.stderr.pipe(fs.createWriteStream('err.txt'));
});
```




Sources: 
- [Standard streams](https://en.wikipedia.org/wiki/Standard_streams)
- [Nodemon - Pipe output to somewhere else](https://github.com/remy/nodemon/blob/master/README.md#pipe-output-to-somewhere-else)
- [Read command](https://linuxhandbook.com/read-command/)
- [Bash redirect stdout stderr](https://csatlas.com/bash-redirect-stdout-stderr/)
