# ESDoc

> ESDoc [Read more](https://esdoc.org/)

```bash
yarn add esdoc esdoc-jsx-plugin esdoc-react-plugin esdoc-standard-plugin --exact
```

Add __.esdoc.json__ config file

```json
{
  "index": "./README.md",
  "package": "./package.json",
  "source": "./src",
  "destination": "./doc",
  "includes": ["\\.jsx?$"],
  "excludes": [],
  "plugins": [
    {
      "name": "esdoc-standard-plugin",
      "options": {
        "lint": {"enable": true},
        "coverage": {"enable": true},
        "accessor": {"access": ["public", "protected", "private"], "autoPrivate": true},
        "brand": {
          "title": "Awesome React"
        }
      }
    },
    {
      "name": "esdoc-jsx-plugin",
      "options": {
        "enable": true
      }
    },
    {
      "name": "esdoc-react-plugin"
    }
  ]
}
```

package.json add script ```esdoc```
