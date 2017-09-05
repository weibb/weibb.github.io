# Meta-Usage

1. Copy this repository
1. Replace instances of `<challenge-name>` with the name of the challenge.
    - note challenge names can only use lowercase letters, numbers, and hyphens
1. Delete this section from README
1. Edit files in `/src` with custom challenge code
    - all challenges should expose a single function as entry point which accepts a configuration object and returns a challenge class
    - Interface for configuration object and challenge class are documented below

# Installation

1. Set your npm token in the NPM_TOKEN environment variable
    1. [googlefu](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=set+environment+variable+mac+os+x+bash_profile)
1. `npm i -S <challenge-name>`

# Usage

```javascript
const $ = require( 'jQuery' );
const Challenge = require( '<challenge-name>' );
const challenge = new Challenge({
    canvas: $( 'canvas' ).get( 0 ),
});
challenge.start();
```

# Configuration Object

1. **id** *int* - unique id for entry.
1. **category** *array* - array of tag strings, include 'all' tag to each entry for initial or resent loads.
    1. **all** *string*
    1. **basic** *string*
    1. **clinical** *string*
    1. **engineering** *string*
1. **type** *array* - array of tag strings, include 'all' tag to each entry for initial or resent loads.
    1. **all** *string*
    1. **originalResearch** *string*
    1. **collaborativeResearch** *string*
    1. **caseReport** *string*
    1. **bookChapter** *string*
    1. **abstract** *string*
    1. **poster** *string*
    1. **proceedingReport** *string*
    1. **patent** *string*
1. **title** *string* - title of entry.
1. **publication** *string* - title of publication.
1. **link** *string* - url of entry.
1. **authors** *array* - array of author names with optional categories.
    1. **name** *object*
1. **date** *int* - entry year.
1. **image** *string* - url of image (optional).

# State Object

1. **redCount** *int* - number of reds counted
1. **blueCount** *int* - number of blues counted

## Required Properties

- **canvas** - *canvas element* The canvas element to run the challenge within

# Challenge Class

## Methods

- **constructor** - creates the challenge
- **load** - loads the challenge
    - accepts a callback that is called on progress event with the current percent
    - returns a promise that resolves on load
- **start** - starts the challenge
- **pause** - pauses the challenge
- **resume** - resumes the challenge if paused
- **restart** - restarts the challenge
- **destroy** - destroys the challenge

# Tests

Tests are configured to watch for changes and run automatically.
Coverage report can be found in `/coverage`.

1. `npm i -g karma`
1. `npm test`
