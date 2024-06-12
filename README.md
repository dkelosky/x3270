## Keymap

Keymaps support files or resources.  Unable to get files to work (description of how it works is below)

### Keymap resources

create a file in home directory `.c3270pro`.  Here is a basic useful mapping:

```
! Use the 'mine' keymap, defined below
c3270.keymap: mine
! Definition of the 'mine' keymap
c3270.keymap.mine: \
 <Key>PPAGE: PF(7)\n\
 <Key>NPAGE: PF(8)\n\
 <Key>U+007F: Backspace()\n
```
To see what keys you need, run `c3270 -trace tpx` (if `tpx` is a host - explained below)`.  Then `tail -F `/tmp/x3trc.<random num>`.

### Keymap files

Files supposedly go in `confDir`

See `confDir` by running `c3270` and typing `set`:

`confDir: /opt/homebrew/Cellar/x3270/4.3ga8/etc/x3270`

## Hosts

Go to [config dir](#keymap-files)
