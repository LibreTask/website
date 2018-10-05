# Solely run the web app client
npm start -- do this from the website directory
  you need to move "public" into "website"
  and, once in website, move everything into a new "src" folder except:
      1. package.json, 2. /node_modules, 3. /public


UPDATE: for now, running "npm start" alongside "webpack" is insufficient.
to run locally, remove webpack from package.json, reinstall node_modules,
and then run "npm start"
