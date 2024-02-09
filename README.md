# Learning TypeScript

## Setup

### Install Software

Install NodeJS and NPM (on Arch Linux):

    $ sudo pacman -S nodejs npm

Install the TypeScript compiler `tsc` globally:

    $ npm install --global typescript

Check the version:

    $ tsc --version
    Version 5.3.3

### Create a Project

Create a project folder and `cd` into it:

    $ mkdir hello
    $ cd hello

Create a new NPM project:

    $ npm init --yes

Create a TypeScript config file (`tsconfig.json`):

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "outDir": "./dist",
        "rootDir": "./src",
        "module": "CommonJS"
    }
}
```

Create a "Hello, World" TypeScript file (`src/index.ts`):

```typescript
console.clear();
console.log("Hello, World!");
```

Compile it:

    $ tsc

Run the resulting JavaScript code:

    $ node dist/index.js
    Hello, World!
