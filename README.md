# [Caesar](https://elte-caesar.herokuapp.com/)

[![Demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://elte-caesar.herokuapp.com/) [![Build Status](https://travis-ci.com/AlexAegis/elte-js.svg?branch=master)](https://travis-ci.com/AlexAegis/elte-js) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/8f5aec2a4d8d4c959257671ac028dcfa)](https://www.codacy.com/app/AlexAegis/elte-js?utm_source=github.com&utm_medium=referral&utm_content=AlexAegis/elte-js&utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/f1d569ea129e57b8eb48/maintainability)](https://codeclimate.com/github/AlexAegis/elte-js/maintainability) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/AlexAegis/elte-js.svg)](https://greenkeeper.io/)

http://people.inf.elte.hu/hapcy/jstech.php

Javascript technológiák beadandó
A feladat egy szerver- és egy kliensoldali alkalmazás elkészítése lesz, tetszőleges Javascriptes technológiák felhasználásával. Akár az órán látott (express + react-redux), vagy egészen más (pl.: koa + angular2) technológiák is használhatók.

## Feladat

A Caesar-kódolás megvalósítása lesz a feladat a következő módon:

- Egy kliensnek meg kell adnia egy kulcsot (tetszőleges string).
- A kulcsot elküldi a szervernek, majd a szerver válaszol, hogy az adott kulcshoz milyen eltolás tartozik.
- Az eltolás ismeretében a kliens oldali alkalmazás képes elkódolni/visszafejteni egy szöveget.
- A kódolandó/dekódolandó szövegben az angol ábécé betűi, illetve szóközök szerepelhetnek. Az ábécé betűit a kódolásnak megfelelően kódoljuk, a szóközt hagyjuk helyben.

## A megvalósítás részletei

Néhány architektúrális, illetve működési követelményt is támasztunk az alkalmazás egyes részeivel szemben.

### Kliens-oldal

- A kliens-oldali alkalmazást single page application-ként valósítsuk meg, azaz a szerverrel legfeljebb ajax útján kommunikáljon.
- Az alkalmazás két képernyőből álljon. Egy a kulcs beírásához, egy pedig a kódoláshoz.

### Szerver-oldal

- Az alkalmazás a kulcsokat csak memóriában tárolja. Az egyetlen végpontját egy JSON-t visszaadó tetszőleges végpontként valósítsuk meg.
- Minden kulcshoz tároljunk egy számot, hogy egy újabb lekéréskor ugyanazt adjuk vissza.
- Egy még nem ismert kulcs beérkezése esetén generáljunk egy eltolást, amit aztán mentsünk le.
- Az alkalmazás akár teljesen állapotmentesen is megvalósítható. Ekkor az eltolást egy "tiszta" stringből számot képező függvény segítségével tudjuk megkeresni.

### Példa

Józsi és Sanyi szeretnének titkosítva beszélgetni, ehhez ezt az alkalmazást használják. Megbeszélik, hogy a kulcsuk az 'almafa' szöveg lesz. Mindketten beírják az alkalmazás felületének első oldalán, hogy 'almafa', majd továbbnavigálnak a következő képernyőre. Ott Józsi beírja az elküldendő üzenetet, majd megkapja az elkódolt üzenetet. Az elkódolt üzenetet elküldi Sanyinak, amit Sanyi bemásol, és megkapja a dekódolt üzenetet. Majd ezt fordítva, ameddig így szeretnének beszélgetni. (A megkapja rész történhet automatikusan, kattintással, vagy tetszőleges módon.)

## Building

Compiling and running this is straightforward and only needs Java to be installed, however if you want to jump straight to running the server head over to [releases](https://github.com/AlexAegis/elte-js/releases) and grab the newest one. It's a background process so I recommend you starting it in a console if you want to shut it down easily.

```cmd
java -jar caesar.jar
```

## Security

The backend security solution is based on this [article](https://octoperf.com/blog/2018/03/08/securing-rest-api-spring-security/) and a few tweaks here and there to support my use case.

The frontend uses the JWTModule to inject the bearer token into the headers of each call heading towards the API.

An interceptor refreshes the token on each http request so it never expires while in the application is in use.

### User Groups

- Admin
- User

If you're not running this project from a recommended environment (IntelliJ or VS Code) You can still run it using the
command line:

```cmd
./mvnw spring-boot:run
```

If you want to use hot reload (and your JVM is capable) just pass the _-P dev_ profile parameter and it will use the
necessary JVM arguments.

```cmd
./mvnw -P dev spring-boot:run
```

## Technologies

### [Angular 7](https://angular.io/)

> **Frontend** framework

### [Spring Boot](https://spring.io/projects/spring-boot)

> **Backend** framework

### [JWT](https://jwt.io/)

> **Token** based authentication and authorization

### [H2](http://www.h2database.com/html/main.html)

> **In-memory database** for development

### [NPM](https://www.npmjs.com/)

> **Package manager** for JS projects

### [Node 10](https://nodejs.org/en/)

> **JS Runtime** featuring V8 from chromium

### [Maven](https://maven.apache.org/)

> **Build tool** for the whole project. Can build and package the frontend too for static hosting

### [Sass](https://sass-lang.com/)

> **CSS** extension

### [Dragula](https://github.com/valor-software/ng2-dragula)

> **Drag and drop** made really easy

### [Ag-Grid](https://www.ag-grid.com)

> **Datatable**, the best

### [FontAwesome](https://fontawesome.com/)

> **Icons**, awesome ones

## Recommendations

### [IntelliJ IDEA](https://www.jetbrains.com/idea/)

> **Java IDE** for the backend of this project

### [Visual Studio Code](https://code.visualstudio.com/)

> **IDE** for mainly the frontend but can be used for both. [Settings](./.vscode/)

### [SonarLint](https://www.sonarlint.org/intellij/)

> **Linting** in IDEA for java
> Install [this plugin](https://plugins.jetbrains.com/plugin/7973-sonarlint) if you're using IntelliJ

### [DCENV](https://dcevm.github.io/)

> **Hot Reload** capable alternative JVM

Download the latest release of [DCENV](https://dcevm.github.io/) Light binary, run it with administrator
privileges and install it as an alternative JVM

```bash
java -jar DCEVM-8u181-installer.jar
```

This also needs a [Hot Swap Agent](https://github.com/HotswapProjects/HotswapAgent/releases). Download the latest and
place it somewhere in your computer. I already provided one in the .hotswap folder of this repository.

To be able to use the newly installed alternative VM you have to provide the necessary VM arguments.
You also need to provide the newly downloaded agent aswell. If you use IntelliJ to start the Spring-Boot application
you can do this by opening up the 'Environment' panel and putting this in the VM Options field.

```bash
-XXaltjvm=dcevm -javaagent:./.hotswap/hotswap-agent-1.3.0.jar=autoHotswap=true
```

### [Postman](https://www.getpostman.com/)

> **REST** endpoint testing

### [Fira Code](https://github.com/tonsky/FiraCode)

> **Font** with ligatures

### [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

> **Reload the Page** for Chrome when the server changes

### [JWT Debugger](https://chrome.google.com/webstore/detail/jwt-debugger/ppmmlchacdbknfphdeafcbmklcghghmd?hl=en)

> **Inspect tokens** in chrome to check the payload of your token stored in the local storage

### [Lombok](https://projectlombok.org/)

> **Compile time magic** before compile time
> Install [this plugin](https://plugins.jetbrains.com/plugin/6317-lombok-plugin) if you're using IntelliJ

### [Chocolately](https://chocolatey.org/)

> **Package Manager** for Windows

### [Travis CLI](https://github.com/travis-ci/travis.rb#installation)

> **Command Line Tools** for Travis

You need ruby to use the Travis CLI

Windows:

```cmd
choco install ruby
```

then follow the instructions on the link given

### [BFG Repo Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

> **Clean big files** from the git history

## Services

### [GitHub](https://github.com/)

> **Git** repository

### [Travis](https://travis-ci.com/)

> **Continuous Integration** solution

To setup automatic deployment to Heroku through travis
you either enable the Travis app on Github and then enable CI on Heroku or you tell
Travis to deploy to Heroku in the configuration file of Travis.
The Travis CLI has a wizard for setting up this entry.
You need both Travis and Heroku CLI's installed.

```bash
travis setup heroku
```

### [Heroku](https://heroku.com/)

> **Deployment Platform**

### [Codacy](https://app.codacy.com/)

> **Code review** tool

### [Code Climate](https://codeclimate.com/dashboard)

> **Code review** tool for maintainability

### [Shields](https://shields.io/#/)

> **Badges** to look cool
