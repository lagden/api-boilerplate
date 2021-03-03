# Boilerplate Rest

[![XO code style][xo-img]][xo]

[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo


Boilerplate para desenvolvimento de uma API REST


## Como usar

Existem 2 maneiras de trabalhar:

- [Docker](#docker)
- [Local](#local)


Use o `degit` para fazer o `scaffolding` do projeto:

```shell
npx degit lagden/boilerplate-rest minha_api
cd minha_api
```


### Docker

Inicie a aplicação.

```shell
bin/start -b
```

Sobre o parâmetro:

 - `-b` Efetua o build da imagem (é importante passar quando houver alteração no `package.json`)


Acesse o URL: [http://[::1]:5000/](http://[::1]:5000/).


#### Test

Para executar os testes da sua API.

```shell
bin/test -b
```

#### Deploy (opcional)

Crie os arquivos de usuário e senha do **Registry**.

```shell
echo 'username' > .registry-user
echo 'password' > .registry-passwd
```

Sempre que executar o `bin/deploy`, também será executado o `bin/image` que faz o `build` da imagem e faz o `push` para o seu **Registry**.


### Local

Instale as dependências e inicie a aplicação:

```shell
bin/zera
bin/watch_local -e development
```

Acesse o URL: [http://[::1]:5000/](http://[::1]:5000/).


**Atenção!**

O `bin/watch_local` depende do [entr](https://github.com/eradman/entr).  
Mas é possível ajustar o para utilizar o [nodemon](https://github.com/remy/nodemon)

Crie o arquivo `.env-local` e sobrescreva os valores, por exemplo:

```shell
WATCH_CMD="nodemon --exec npm start"
```

#### Test

Para executar os testes da sua API.

```shell
npm test
```


## Chamadas

Algumas chamadas de exemplo.


```shell
curl 'http://[::1]:5000/'
```

```shell
curl 'http://[::1]:5000/Api'
```

```shell
curl 'http://[::1]:5000/echo' \
-H 'content-type: application/json' \
-d '{"apenas": "um show"}'
```


### Outros middlewares

- [koa-helmet](https://github.com/venables/koa-helmet)
- [@koa/multer](https://github.com/koajs/multer)
- [koa-ctx-cache-control](https://github.com/koajs/ctx-cache-control)
- [koa-ratelimit](https://github.com/koajs/ratelimit)
- [koa-static](https://github.com/koajs/static)
- ...


## License

MIT © [Thiago Lagden](https://github.com/lagden)
