# CashFlow!

A game sheet that does the calculations for you.

---

## Playing

[Run it right now in your browser](https://nathanstrutz.github.io/cashflow-balance-sheet/)!

Did you...

- Play CashFlow and run out of game sheets?
- Need some replacement CashFlow Rat Race game sheets?
- Decide that you want to be rich but hate math?
- Just want an interactive, printable, mobile friendly CashFlow game sheet?

Well then I made this just for you. I mean, really I made it for me, but we can share.

---

## Development

What good, modern web application would be complete without an opinionated, virtual DOM powered, dynamic javascript-ecosystem-centric framework at the helm? Well not this one! Vue.js is fun to use, and I definitely used it.

If you don't want this game sheet as a javascript application, check out the `html` branch, it's just plain HTML & CSS.

### Dev Setup

Install a recent version of Node and install the dependencies with this command:

```
npm install
```

Once the dependencies are in place, you can run it as a hot-reloading JavaScript application

```
npm run serve
```

It will open up on whatever port is the default, probably :8080.

### TODO

- TODO: on mobile, break the overall grid or flow it one column at a time, it's too wide for a phone.
- TODO: change the Assets grid to a `<td>` table - it renders better, especially on mobile.
- TODO: Turn the page over, use the outer-loop scoresheet. Use Vue-Router?

### Publishing

To publish a working build to the demo site:

```sh
# if there isn't a local gh-pages branch
git checkout -b gh-pages
# edit the `./vue.config.js` file, add `publicPath: "/cashflow-balance-sheet",` to the top level
#
# once the gh-pages branch is established
git checkout gh-pages
git merge vue
npm run build
git add .
git commit -m "Building"
git subtree push --prefix dist origin gh-pages
git checkout vue
start "https://nathanstrutz.github.io/cashflow-balance-sheet/"
```
