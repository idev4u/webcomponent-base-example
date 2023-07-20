# learn about webcomponents to use it as microfrontend

# pre
```sh
cd web-component-hello
```

## start 
```sh
ruby -run -e httpd . -p 8000
```
## sources
the example is insprired by this blog post https://opensource.com/article/21/7/web-components

## custom elements 

The custom element manifest is a description of the custom element which support the use of the custom element in the IDE or as ducmentation.
https://dev.to/open-wc/introducing-custom-elements-manifest-gkk

### generate
```sh
npx @custom-elements-manifest/analyzer analyze
``````