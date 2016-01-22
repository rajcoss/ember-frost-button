# ember-fr-button

 * [API](#API)
 * [Examples](#Examples)
 * [Development](#Development)

## Installation
```
ember install ember-frost-button
```

## API

| Category | Name | Description |
| -------- | ---- | ----------- |
| **Actions** | `on-click` | triggers associated action |
| **CSS (Content)** | `icon` | icon is part of the button |
| | `icon-text` | icon and text are part of the button |
| | `info` | additional info is part of the button |
| | `text` | text is part of the button |
| **CSS (Size)** | `small` | the smallest button you ever did see |
| | `medium` | not quite as small as `small`, but not very big either |
| | `large` | now we're getting somewhere  |
| | `extra-large` | my grandma, what a big button you have! |
| **CSS (TYPE)** | `primary` | default action on forms, etc. |
| | `secondary` | average, garden-variety button |
| | `tertiary` | subdued actions, like `Cancel` |
| **States** | `autofocus` | wave your arms and make a big racket to attract everyone's attention as soon as you render |
| | `disabled` | don't even think about trying to click this! |

## Examples

### Text
```handlebars
{{#frost-button autofocus disabled=isDisabled class='primary small' on-click=(action 'closure')}}
  <div class='text'>Text</div>
{{/frost-button}
```

### Icon
```handlebars
{{#frost-button class='tertiary medium' on-click=(action 'closure')}}
  <div class='icon'>
    {{frost-svg path='frost/add'}}
  </div>
{{/frost-button}}
```

### Icon Text
```handlebars
{{#frost-button class='secondary large' on-click=(action 'closure')}}
  <div class='icon-text'>
    {{frost-svg path='frost/add'}}
    <div class='text'>Text</div>
  </div>
{{/frost-button}}
```

### Info
```handlebars
{{#frost-button class='primary extra-large' on-click=(action 'closure')}}
  <div class='info'>
    {{frost-svg path='frost/add'}}
    <div class='content'>
      <div class='alias'>Info alias</div>
      <div class='details'>Info details</div>
    </div>
  </div>
{{/frost-button}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-button.git
cd ember-frost-button
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-button/tests/dummy`.
To run the server run `ember server` from the root of the repository and visit the app at http://localhost:4200.

### Testing
Run `ember test` from the root of the project to execute the test suite and output code coverage.

