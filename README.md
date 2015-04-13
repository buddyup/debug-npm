Here's an absolute bare-bones test.

```bash

npm install
gulp
```

Then, make a change and save `test.html`

You should see:

```bash
$ gulp
[13:05:28] Using gulpfile ~/Dropbox/workingCopy/buddyup/debug-npm/gulpfile.js
[13:05:28] Starting 'default'...
[13:05:28] Finished 'default' after 11 ms
changed
{ type: 'added',
  path: '/Users/skoczen/Dropbox/workingCopy/buddyup/debug-npm/test.html' }

```