# Boilerplate Rest

[![XO code style][xo-img]][xo]

[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo


Boilerplate para desenvolvimento de uma API REST.

- [Instalação](#instalação)
- [Como utilizar](#como-utilizar)
    - [watch](#watch)
        - [entr](#entr)
        - [nodemon](#nodemon)
    - [teste](#teste)
- [Imagem (docker)](#imagem-docker)
- [Deploy (docker)](#deploy-docker)
- [Exemplo](#exemplo)
- [Middlewares](#middlewares)
- [License](#license)


## Instalação

Use o [degit](https://github.com/Rich-Harris/degit) para fazer o `scaffolding` do projeto.

Existem algumas dependências.

- [bin](https://github.com/lagden/boilerplate-bin)
- [envs](https://github.com/lagden/boilerplate-envs)
- [docker](https://github.com/lagden/boilerplate-docker-nodejs) (opcional)


**Exemplo:**

```shell
npx degit lagden/boilerplate-rest#main projeto
cd projeto
npx degit lagden/boilerplate-bin/files#main bin
npx degit lagden/boilerplate-envs/files#main ./ --force
npx degit lagden/boilerplate-docker-nodejs/files#main ./ --force
```


## Como utilizar

Após finalizado o `scaffolding` do projeto, instale os pacotes.

```shell
bin/zera
```

Feito isso, o projeto está pronto para rodar.

Se for rodar **local**, utilize:

```shell
bin/start_local
```

Se for rodar via **docker**, utilize:

```shell
bin/start
```

⚠️ **Ressalvas**

No **docker**, caso seja instalado um novo pacote, é necessário fazer o `build` da imagem novamente.  
Pare o container (`command+c` ou `control+c`) e rode novamente passando o parâmetro `-b`:

```shell
bin/start -b
```


### watch

O **watch** reinicia a aplicação caso ocorra alguma alteração.  
Rodando via **docker** isso ocorre por padrão, mas **local** é necessário fazer algumas instalações e configurações.


#### entr

Se estiver rodando em **BSD**, **Mac OS**, e **Linux**, basta instalar o [entr](https://github.com/eradman/entr) e executar:

```shell
bin/watch_local
```


#### nodemon

Como o [entr](https://github.com/eradman/entr) não roda no **Windows**, existe uma solução alternativa.

Instale o `nodemon` global:

```shell
npm i -g nodemon
```

Crie o arquivo `.env-local` na raiz do projeto e insira:

```
WATCH_LOCAL_CMD="nodemon -e js,json --watch server --exec npm start"
```

Então, execute o comando:

```shell
bin/watch_local
```


### teste

Para executar os testes.

**local:**

```shell
bin/test_local
```

**docker:**

```shell
bin/test -b
```


## Imagem (docker)

Crie os arquivos de usuário e senha do seu **registry**.

```shell
echo 'username' > .registry-user
echo 'password' > .registry-passwd
```

Verifique as suas variáveis de ambiente `.env-*`.  
E para fazer o `push` da imagem de sua aplicação, execute:

```shell
bin/image -e production
```

⚠️ **Ressalvas**

Se o parâmetro `-e` não for definido, o padrão é `staging`.


## Deploy (docker)

Para executar o **deploy** é necessário alguns binários instalados:

- **envsubst**
- **rsync**

O fluxo do sistema de **deploy** é simples:

1. Carrega as variáveis de ambiente (`staging` ou `production`)
2. Executa o script `bin/image` (se passado o parâmetro `-i` esse processo é ignorado)
3. Cria o arquivo `docker-compose-{staging|production}.yml` utilizando o **envsubst**
4. Envia os arquivos para o servidor via **rsync**
5. Executa o `docker stack deploy` no servidor

```shell
bin/deploy -e production
```


## Exemplo

Chamada de exemplo via **curl**.

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


## Middlewares

Sugestão de outros **middlewares** para serem utilizados no projeto:

- [koa-helmet](https://github.com/venables/koa-helmet)
- [@koa/multer](https://github.com/koajs/multer)
- [koa-ctx-cache-control](https://github.com/koajs/ctx-cache-control)
- [koa-ratelimit](https://github.com/koajs/ratelimit)
- [koa-static](https://github.com/koajs/static)


## License

MIT © [Thiago Lagden](https://github.com/lagden)
