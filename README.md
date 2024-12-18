<!-- i have changed the map repository so the name for this test is changing as well -->
<!-- from express-backend to  -->
<!-- {
  "name": "Vue-2-NodeJS",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "Vue-2-NodeJS",  -->

      PS I:\htdocs\Vue-2-NodeJS> npm audit fix
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@achrinza/node-ipc@9.2.2',
npm warn EBADENGINE   required: { node: '8 || 10 || 12 || 14 || 16 || 17' },
npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
npm warn EBADENGINE }

up to date, audited 1125 packages in 30s

132 packages are looking for funding
  run `npm fund` for details

# npm audit report

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/braces
  chokidar  1.3.0 - 2.1.8
  Depends on vulnerable versions of anymatch
  Depends on vulnerable versions of braces
  Depends on vulnerable versions of readdirp
  node_modules/watchpack-chokidar2/node_modules/chokidar
  node_modules/webpack-dev-server/node_modules/chokidar
    watchpack-chokidar2  *
    Depends on vulnerable versions of chokidar
    node_modules/watchpack-chokidar2
      watchpack  1.7.2 - 1.7.5
      Depends on vulnerable versions of watchpack-chokidar2
      node_modules/watchpack
        webpack  4.0.0-alpha.0 - 5.0.0-rc.6
        Depends on vulnerable versions of micromatch
        Depends on vulnerable versions of terser-webpack-plugin
        Depends on vulnerable versions of watchpack
        node_modules/webpack
          @intervolga/optimize-cssnano-plugin  *
          Depends on vulnerable versions of cssnano
          Depends on vulnerable versions of cssnano-preset-default
          Depends on vulnerable versions of postcss
          Depends on vulnerable versions of webpack
          node_modules/@intervolga/optimize-cssnano-plugin
          cache-loader  >=2.0.0
          Depends on vulnerable versions of webpack
          node_modules/cache-loader
            @vue/cli-service  *
            Depends on vulnerable versions of @intervolga/optimize-cssnano-plugin
            Depends on vulnerable versions of @vue/cli-plugin-router
            Depends on vulnerable versions of @vue/cli-plugin-vuex
            Depends on vulnerable versions of @vue/cli-shared-utils
            Depends on vulnerable versions of @vue/component-compiler-utils
            Depends on vulnerable versions of autoprefixer
            Depends on vulnerable versions of cache-loader
            Depends on vulnerable versions of css-loader
            Depends on vulnerable versions of cssnano
            Depends on vulnerable versions of file-loader
            Depends on vulnerable versions of globby
            Depends on vulnerable versions of html-webpack-plugin
            Depends on vulnerable versions of mini-css-extract-plugin
            Depends on vulnerable versions of postcss-loader
            Depends on vulnerable versions of terser-webpack-plugin
            Depends on vulnerable versions of url-loader
            Depends on vulnerable versions of vue-loader
            Depends on vulnerable versions of webpack
            Depends on vulnerable versions of webpack-bundle-analyzer
            Depends on vulnerable versions of webpack-dev-server
            node_modules/@vue/cli-service
              @vue/cli-plugin-vuex  <=4.5.19
              Depends on vulnerable versions of @vue/cli-service
              node_modules/@vue/cli-plugin-vuex
          file-loader  3.0.0 - 4.3.0
          Depends on vulnerable versions of webpack
          node_modules/file-loader
          mini-css-extract-plugin  <=0.9.0
          Depends on vulnerable versions of webpack
          node_modules/mini-css-extract-plugin
          terser-webpack-plugin  <=2.2.1
          Depends on vulnerable versions of webpack
          node_modules/terser-webpack-plugin
          url-loader  1.1.0 - 1.1.1 || 2.0.0 - 2.3.0
          Depends on vulnerable versions of webpack
          node_modules/url-loader
    webpack-dev-server  <=4.7.4
    Depends on vulnerable versions of bonjour
    Depends on vulnerable versions of chokidar
    Depends on vulnerable versions of http-proxy-middleware
    Depends on vulnerable versions of ip
    Depends on vulnerable versions of selfsigned
    Depends on vulnerable versions of webpack-dev-middleware
    node_modules/webpack-dev-server
  micromatch  <=4.0.7
  Depends on vulnerable versions of braces
  node_modules/micromatch
    anymatch  1.2.0 - 2.0.0
    Depends on vulnerable versions of micromatch
    node_modules/watchpack-chokidar2/node_modules/anymatch
    node_modules/webpack-dev-server/node_modules/anymatch
    fast-glob  <=2.2.7
    Depends on vulnerable versions of micromatch
    node_modules/fast-glob
      globby  8.0.0 - 9.2.0
      Depends on vulnerable versions of fast-glob
      node_modules/globby
    http-proxy-middleware  <=2.0.7-beta.1
    Depends on vulnerable versions of micromatch
    node_modules/http-proxy-middleware
    node_modules/webpack-dev-server/node_modules/http-proxy-middleware
      @types/webpack-dev-server  3.11.2 - 4.0.3
      Depends on vulnerable versions of http-proxy-middleware
      node_modules/@types/webpack-dev-server
    readdirp  2.2.0 - 2.2.1
    Depends on vulnerable versions of micromatch
    node_modules/watchpack-chokidar2/node_modules/readdirp
    node_modules/webpack-dev-server/node_modules/readdirp

ejs  <=3.1.9
Severity: critical
ejs template injection vulnerability - https://github.com/advisories/GHSA-phwq-j96m-2c2q
ejs lacks certain pollution protection - https://github.com/advisories/GHSA-ghr5-ch3p-vcr6
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/ejs
  webpack-bundle-analyzer  1.3.0 - 3.9.0
  Depends on vulnerable versions of ejs
  node_modules/webpack-bundle-analyzer

html-minifier  *
Severity: high
kangax html-minifier REDoS vulnerability - https://github.com/advisories/GHSA-pfq8-rq6v-vf5m
fix available via `npm audit fix`
node_modules/html-minifier
  html-webpack-plugin  1.4.0 - 4.0.0-beta.14
  Depends on vulnerable versions of html-minifier
  Depends on vulnerable versions of loader-utils
  node_modules/html-webpack-plugin


ip  *
Severity: high
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/ip
  dns-packet  <=5.2.4
  Depends on vulnerable versions of ip
  node_modules/dns-packet
    multicast-dns  6.0.0 - 7.2.2
    Depends on vulnerable versions of dns-packet
    node_modules/multicast-dns
      bonjour  >=3.3.1
      Depends on vulnerable versions of multicast-dns
      node_modules/bonjour

json5  <1.0.2
Severity: high
Prototype Pollution in JSON5 via Parse Method - https://github.com/advisories/GHSA-9c47-m6qq-7p4h
fix available via `npm audit fix`
node_modules/html-webpack-plugin/node_modules/json5
  loader-utils  <=1.4.0
  Depends on vulnerable versions of json5
  node_modules/html-webpack-plugin/node_modules/loader-utils



node-forge  <=1.2.1
Severity: high
Prototype Pollution in node-forge debug API. - https://github.com/advisories/GHSA-5rrq-pxf6-6jx5
URL parsing in node-forge could lead to undesired behavior. - https://github.com/advisories/GHSA-gf8q-jrpm-jvxq
Improper Verification of Cryptographic Signature in `node-forge` - https://github.com/advisories/GHSA-2r2c-g63r-vccr
Open Redirect in node-forge - https://github.com/advisories/GHSA-8fr3-hfg3-gpgp
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-cfm4-qjh2-4765
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-x4jg-mjrx-434g
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/node-forge
  selfsigned  1.1.1 - 1.10.14
  Depends on vulnerable versions of node-forge
  node_modules/selfsigned

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix`
node_modules/svgo/node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/svgo/node_modules/css-select
    svgo  1.0.0 - 1.3.2
    Depends on vulnerable versions of css-select
    node_modules/svgo
      postcss-svgo  <=5.0.0-rc.2
      Depends on vulnerable versions of postcss
      Depends on vulnerable versions of svgo
      node_modules/postcss-svgo

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/postcss
  @vue/component-compiler-utils  *
  Depends on vulnerable versions of postcss
  node_modules/@vue/component-compiler-utils
    vue-loader  15.0.0-beta.1 - 15.11.1
    Depends on vulnerable versions of @vue/component-compiler-utils
    node_modules/vue-loader
  autoprefixer  1.0.20131222 - 9.8.8
  Depends on vulnerable versions of postcss
  node_modules/autoprefixer
  css-declaration-sorter  <=5.1.2
  Depends on vulnerable versions of postcss
  node_modules/css-declaration-sorter
  css-loader  0.15.0 - 4.3.0
  Depends on vulnerable versions of icss-utils
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of postcss-modules-extract-imports
  Depends on vulnerable versions of postcss-modules-local-by-default
  Depends on vulnerable versions of postcss-modules-scope
  Depends on vulnerable versions of postcss-modules-values
  node_modules/css-loader
  cssnano  <=4.1.11
  Depends on vulnerable versions of cssnano-preset-default
  Depends on vulnerable versions of postcss
  node_modules/cssnano
  cssnano-preset-default  <=4.0.8
  Depends on vulnerable versions of css-declaration-sorter
  Depends on vulnerable versions of cssnano-util-raw-cache
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of postcss-calc
  Depends on vulnerable versions of postcss-colormin
  Depends on vulnerable versions of postcss-convert-values
  Depends on vulnerable versions of postcss-discard-comments
  Depends on vulnerable versions of postcss-discard-duplicates
  Depends on vulnerable versions of postcss-discard-empty
  Depends on vulnerable versions of postcss-discard-overridden
  Depends on vulnerable versions of postcss-merge-longhand
  Depends on vulnerable versions of postcss-merge-rules
  Depends on vulnerable versions of postcss-minify-font-values
  Depends on vulnerable versions of postcss-minify-gradients
  Depends on vulnerable versions of postcss-minify-params
  Depends on vulnerable versions of postcss-minify-selectors
  Depends on vulnerable versions of postcss-normalize-charset
  Depends on vulnerable versions of postcss-normalize-display-values
  Depends on vulnerable versions of postcss-normalize-positions
  Depends on vulnerable versions of postcss-normalize-repeat-style
  Depends on vulnerable versions of postcss-normalize-string
  Depends on vulnerable versions of postcss-normalize-timing-functions
  Depends on vulnerable versions of postcss-normalize-unicode
  Depends on vulnerable versions of postcss-normalize-url
  Depends on vulnerable versions of postcss-normalize-whitespace
  Depends on vulnerable versions of postcss-ordered-values
  Depends on vulnerable versions of postcss-reduce-initial
  Depends on vulnerable versions of postcss-reduce-transforms
  Depends on vulnerable versions of postcss-svgo
  Depends on vulnerable versions of postcss-unique-selectors
  node_modules/cssnano-preset-default
  cssnano-util-raw-cache  *
  Depends on vulnerable versions of postcss
  node_modules/cssnano-util-raw-cache
  icss-utils  <=4.1.1
  Depends on vulnerable versions of postcss
  node_modules/icss-utils
    postcss-modules-local-by-default  <=4.0.0-rc.4
    Depends on vulnerable versions of icss-utils
    Depends on vulnerable versions of postcss
    node_modules/postcss-modules-local-by-default
    postcss-modules-values  <=4.0.0-rc.5
    Depends on vulnerable versions of icss-utils
    Depends on vulnerable versions of postcss
    node_modules/postcss-modules-values
  postcss-calc  4.1.0 - 7.0.5
  Depends on vulnerable versions of postcss
  node_modules/postcss-calc
  postcss-colormin  <=4.0.3
  Depends on vulnerable versions of postcss
  node_modules/postcss-colormin
  postcss-convert-values  <=4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-convert-values
  postcss-discard-comments  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-discard-comments
  postcss-discard-duplicates  1.1.0 - 4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-discard-duplicates
  postcss-discard-empty  1.1.0 - 4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-discard-empty
  postcss-discard-overridden  <=4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-discard-overridden
  postcss-loader  <=4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-loader
  postcss-merge-longhand  <=4.0.11
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of stylehacks
  node_modules/postcss-merge-longhand
  postcss-merge-rules  <=4.0.3
  Depends on vulnerable versions of postcss
  node_modules/postcss-merge-rules
  postcss-minify-font-values  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-minify-font-values
  postcss-minify-gradients  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-minify-gradients
  postcss-minify-params  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-minify-params
  postcss-minify-selectors  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-minify-selectors
  postcss-modules-extract-imports  <=2.0.0
  Depends on vulnerable versions of postcss
  node_modules/postcss-modules-extract-imports
  postcss-modules-scope  <=2.2.0
  Depends on vulnerable versions of postcss
  node_modules/postcss-modules-scope
  postcss-normalize-charset  <=4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-charset
  postcss-normalize-display-values  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-display-values
  postcss-normalize-positions  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-positions
  postcss-normalize-repeat-style  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-repeat-style
  postcss-normalize-string  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-string
  postcss-normalize-timing-functions  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-timing-functions
  postcss-normalize-unicode  <=4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-unicode
  postcss-normalize-url  1.1.0 - 4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-url
  postcss-normalize-whitespace  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-normalize-whitespace
  postcss-ordered-values  <=4.1.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-ordered-values
  postcss-reduce-initial  <=4.0.3
  Depends on vulnerable versions of postcss
  node_modules/postcss-reduce-initial
  postcss-reduce-transforms  <=4.0.2
  Depends on vulnerable versions of postcss
  node_modules/postcss-reduce-transforms
  postcss-unique-selectors  <=4.0.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-unique-selectors
  stylehacks  <=4.0.3
  Depends on vulnerable versions of postcss
  node_modules/stylehacks

request  *
Severity: moderate
Server-Side Request Forgery in Request - https://github.com/advisories/GHSA-p8p7-x288-28g6
Depends on vulnerable versions of tough-cookie
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/request
  @vue/cli-shared-utils  <=4.5.19
  Depends on vulnerable versions of request
  node_modules/@vue/cli-shared-utils
    @vue/cli-plugin-router  <=4.5.19
    Depends on vulnerable versions of @vue/cli-service
    Depends on vulnerable versions of @vue/cli-shared-utils
    node_modules/@vue/cli-plugin-router

tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change

webpack-dev-middleware  <=5.3.3
Severity: high
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
fix available via `npm audit fix --force`
Will install @vue/cli-service@5.0.8, which is a breaking change
node_modules/webpack-dev-middleware

84 vulnerabilities (1 low, 55 moderate, 21 high, 7 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
PS I:\htdocs\Vue-2-NodeJS> npm audit fix --force
npm warn using --force Recommended protections disabled.
npm warn audit Updating @vue/cli-service to 5.0.8, which is a SemVer major change.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported

added 144 packages, removed 613 packages, changed 158 packages, and audited 656 packages in 1m

90 packages are looking for funding
  run `npm fund` for details

# npm audit report

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix --force`
Will install @vue/cli-service@3.3.1, which is a breaking change
node_modules/@vue/component-compiler-utils/node_modules/postcss
  @vue/component-compiler-utils  *
  Depends on vulnerable versions of postcss
  node_modules/@vue/component-compiler-utils
    @vue/cli-service  *
    Depends on vulnerable versions of @vue/component-compiler-utils
    Depends on vulnerable versions of vue-loader
    node_modules/@vue/cli-service
    vue-loader  15.0.0-beta.1 - 15.11.1
    Depends on vulnerable versions of @vue/component-compiler-utils
    node_modules/@vue/vue-loader-v15

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
PS I:\htdocs\Vue-2-NodeJS> 