# apidoc-test
apidoc文档: http://apidocjs.com/#example-basic

1. 首先全局安装apidoc: npm install apidoc -g

2. 生成文档: apidoc -i myapp/ -o apidoc/

3. 配置package.json
```
    "apidoc": {
        "title": "apidoc文档练习",
        "url" : "http://127.0.0.1/v1"
      }
```

4. 配置package.json script如下,然后执行npm run apidoc即可
```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "apidoc": "apidoc -i myapp/ -o apidoc"
      }
```
