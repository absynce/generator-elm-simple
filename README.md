# generator-elm-simple

Generate a simple Elm project.

To use it:

    yo elm-simple [your-app-name]

## What it does

1.  Adds `Main.elm` with `Html.program`
2.  Adds `index.html` pointing to `./elm.js`
3.  Creates npm `package.json` dependencies/scripts:

* `npm run build`
* `npm run dev`
* `npm run start`
* `npm run watch`

4.  Adds `.gitignore`

## To-do

* Fix invalid name (using same name in package.json and project)

```
  yo elm-simple "test name with space"
```
