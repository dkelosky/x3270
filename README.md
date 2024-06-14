## Man

http://x3270.bgp.nu/Unix/c3270-man.html
https://x3270.miraheze.org/wiki/C3270

## Keymap

Keymaps support files or resources.  Unable to get files to work (description of how it works is below)

### Keymap resources

create a file in home directory [`.c3270pro`](./.c3270pro). 

To see what keys you need, run `c3270 -trace tpx` (if `tpx` is a host - explained below)`.  Then `tail -F `/tmp/x3trc.<random num>`.

### Keymap files

Files supposedly go in `confDir`

See `confDir` by running `c3270` and typing `set`:

`confDir: /opt/homebrew/Cellar/x3270/4.3ga8/etc/x3270`

## Hosts

Go to [config dir](#keymap-files) and edit `ibm_hosts`, for example:

```
#tpx primary tpxdev.mainframe.net keymap(default)
tpx primary tpxdev.mainframe.net 
```

Then you can run `c3270 tpx`.
