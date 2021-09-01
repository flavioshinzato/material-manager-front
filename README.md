## Dependências

 - Node v14.16.1
    - Caso não tenha o Node instalado em sua máquina, recomendamos o uso do [NVM](https://github.com/creationix/nvm) para a instalação do mesmo.
 - Git e Git Flow
 - Vue >= 2.5.21
 - NPM >= 5.6.0
## Configurações

Dentro da pasta do projeto, crie o arquivo `.nvmrc` e atualize a versão utilizada do Node.
```bash
$ echo "v14.16.1" > .nvmrc
$ nvm use
```
### Instalação das dependências
> Obs: caso ainda não possua o Vue instalado, rode o comando `npm install -g vue`.
> Caso queria instalar o CLI oficial do Vue, rode o comando `npm install -g @vue/cli`.

Utilize a ferramenta `npm` para instalar os pacotes necessários no projeto.
```bash
$ npm install
```
## Comandos

**Start do Servidor**
```bash
$ npm run serve
```
