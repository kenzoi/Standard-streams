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

#




nodemon({
  script: index.js,
  stdout: false // important: this tells nodemon not to output to console
}).on('readable', function() { // the `readable` event indicates that data is ready to pick up
  this.stdout.pipe(fs.createWriteStream('output.txt'));
  this.stderr.pipe(fs.createWriteStream('err.txt'));
});


Redirect the output 

ls 2>&1 | tee ./ls.txt



Sources: 
- [Standard streams](https://en.wikipedia.org/wiki/Standard_streams)
- [Nodemon - Pipe output to somewhere else](https://github.com/remy/nodemon/blob/master/README.md#pipe-output-to-somewhere-else)
- [Read command](https://linuxhandbook.com/read-command/)
