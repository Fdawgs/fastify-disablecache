# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0](https://github.com/Fdawgs/fastify-disablecache/compare/v2.0.8...v3.0.0) (2022-05-26)


### ⚠ BREAKING CHANGES

* * feat!: support fastify v4.x

### Features

* support fastify v4.x ([#169](https://github.com/Fdawgs/fastify-disablecache/issues/169)) ([7dfd02c](https://github.com/Fdawgs/fastify-disablecache/commit/7dfd02c2fd781329606f890b28bc54c433ac3992))

### [2.0.8](https://github.com/Fdawgs/fastify-disablecache/compare/v2.0.7...v2.0.8) (2022-05-25)


### Documentation

* **readme:** remove snyk badge ([030c25b](https://github.com/Fdawgs/fastify-disablecache/commit/030c25bcf9191e927da748285307d6a3d8754c84))


### Miscellaneous

* **.eslintrc:** enable `plugin:jest/style` rules ([#160](https://github.com/Fdawgs/fastify-disablecache/issues/160)) ([db557d3](https://github.com/Fdawgs/fastify-disablecache/commit/db557d34d9b2b381e6465a0dc405317a3fca5c28))
* **.github/codeql-config:** remove quotation marks ([80aa591](https://github.com/Fdawgs/fastify-disablecache/commit/80aa59131e60fa993837a871e592c8292ab94220))
* **.github/workflows/link-check:** use `skip` input ([17c0cd5](https://github.com/Fdawgs/fastify-disablecache/commit/17c0cd59db22ab55c467c95bf00167f5023c419b))
* **bug_report:** use node 18 as placeholder for `node-version` ([7334daa](https://github.com/Fdawgs/fastify-disablecache/commit/7334daa07498f65251f6a42c5a55564a17157bb3))
* **ci:** remove quotation marks from step name ([6707b92](https://github.com/Fdawgs/fastify-disablecache/commit/6707b9235ec488b70eb85be18615428df1f97ee3))
* use npm install alias ([a65f180](https://github.com/Fdawgs/fastify-disablecache/commit/a65f180540d9dc526a7b1fcd21bb01923cd11074))


### Continuous Integration

* add dependency-review job ([9cdc809](https://github.com/Fdawgs/fastify-disablecache/commit/9cdc809d8fbc638be0f47ff4b2459c83a0658ebe))
* **automerge:** fix context ([d993a4f](https://github.com/Fdawgs/fastify-disablecache/commit/d993a4f40634ca8de46a18518cb84264f53ac196))
* **automerge:** set correct `contents` permission level ([9d0cbb7](https://github.com/Fdawgs/fastify-disablecache/commit/9d0cbb7fd50b30d8a20df4438f984b00cae0cb2c))
* **automerge:** squash automerge prs ([#149](https://github.com/Fdawgs/fastify-disablecache/issues/149)) ([fc83968](https://github.com/Fdawgs/fastify-disablecache/commit/fc8396821e4c7c2ef9d9d7d9b4267aa4c045febe))
* **cd:** update org name for release-please-action ([e9fe464](https://github.com/Fdawgs/fastify-disablecache/commit/e9fe464bd28bc3e756545bbb35cb572b744185c5))
* **cd:** use `lts/*` for node setup in release job ([0f70685](https://github.com/Fdawgs/fastify-disablecache/commit/0f7068508d553ff99c78404ecb2515f8e0c0b96e))
* check `user.login` is dependabot instead of `actor` ([#162](https://github.com/Fdawgs/fastify-disablecache/issues/162)) ([5348042](https://github.com/Fdawgs/fastify-disablecache/commit/5348042f9f56fbb4c671558bb30f294b4052280d))
* **ci:** add node 18 to test matrix ([#161](https://github.com/Fdawgs/fastify-disablecache/issues/161)) ([a7678a2](https://github.com/Fdawgs/fastify-disablecache/commit/a7678a296e8d8d906db27085c1f2e5bebcd30038))
* **ci:** require `unit-tests` job to pass for `save-pr-number` job to run ([74d92fb](https://github.com/Fdawgs/fastify-disablecache/commit/74d92fb224663f008f7f158ba3ef98652e60e36f))
* **ci:** use `lts/*` for node setup in lint job ([958fadd](https://github.com/Fdawgs/fastify-disablecache/commit/958faddced4e3267424c2fb92936447b850012aa))
* **ci:** use `node-version` for node matrix key ([e3a2651](https://github.com/Fdawgs/fastify-disablecache/commit/e3a2651db6d10898384d0f780a4abb92bd11d7d3))
* **codeql:** only run on pr changes to `.html`, `.js`, and `.yml` files ([142d5e7](https://github.com/Fdawgs/fastify-disablecache/commit/142d5e7e4ee49f0ad740804454348a65aab35e65))
* **codeql:** resolve missing analyses ([199198e](https://github.com/Fdawgs/fastify-disablecache/commit/199198e4f2b86524aa965d83db6114db392616fc))
* **codeql:** specify which files to scan during analysis ([6b3ebc7](https://github.com/Fdawgs/fastify-disablecache/commit/6b3ebc7af617195278f356a86c499480f043ea54))
* **link-check:** replace `npx linkinator` call with github action ([16110d7](https://github.com/Fdawgs/fastify-disablecache/commit/16110d7c088779ec179ce4bd25b9d422c9a5167f))
* only trigger dependency-review on pr ([166d402](https://github.com/Fdawgs/fastify-disablecache/commit/166d402fa27263caf565e5929f3eee3c3146c3a1))
* reduce workflow permissions to minimum ([afd110d](https://github.com/Fdawgs/fastify-disablecache/commit/afd110daec0c35db54b084893e090cffab6978b9))
* remove git credentials after checkout ([#165](https://github.com/Fdawgs/fastify-disablecache/issues/165)) ([b79fc99](https://github.com/Fdawgs/fastify-disablecache/commit/b79fc99d2314d2a1da036c73410acb144ea2bd5f))
* replace workflow-run-cleanup-action with github concurrency ([97a73a9](https://github.com/Fdawgs/fastify-disablecache/commit/97a73a9c4db37a41a206d67d5cd6f82a5186058e))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 16.3.0 to 17.0.1 ([#168](https://github.com/Fdawgs/fastify-disablecache/issues/168)) ([565c3bf](https://github.com/Fdawgs/fastify-disablecache/commit/565c3bf3454cf4552e14f71e4c32942450554a70))
* **deps-dev:** bump @commitlint/config-conventional ([#167](https://github.com/Fdawgs/fastify-disablecache/issues/167)) ([44f12bf](https://github.com/Fdawgs/fastify-disablecache/commit/44f12bfc5c7051502932e777b0dad6746ef0d0fa))
* **deps-dev:** bump eslint-plugin-jsdoc from 38.1.6 to 39.2.9 ([#157](https://github.com/Fdawgs/fastify-disablecache/issues/157)) ([13aceae](https://github.com/Fdawgs/fastify-disablecache/commit/13aceae50cf9d77f2be6e5ad9e01b77b1c0032e5))
* **deps-dev:** bump husky from 7.0.4 to 8.0.1 ([#166](https://github.com/Fdawgs/fastify-disablecache/issues/166)) ([4268e75](https://github.com/Fdawgs/fastify-disablecache/commit/4268e755883e814144710d292011dc05536e77c7))
* **deps-dev:** bump jest from 27.5.1 to 28.0.3 ([#158](https://github.com/Fdawgs/fastify-disablecache/issues/158)) ([0b2fd9d](https://github.com/Fdawgs/fastify-disablecache/commit/0b2fd9df8f7c05b064b83c091e4f7756919ea3d5))
* **deps:** bump actions/upload-artifact from 2 to 3 ([#156](https://github.com/Fdawgs/fastify-disablecache/issues/156)) ([c292991](https://github.com/Fdawgs/fastify-disablecache/commit/c2929916c4d302d14aa61986ec65ca52c673d0dd))
* **deps:** bump github/codeql-action from 1 to 2 ([#155](https://github.com/Fdawgs/fastify-disablecache/issues/155)) ([04facf0](https://github.com/Fdawgs/fastify-disablecache/commit/04facf07f8af32e1e152cbde4e98426f9190eb50))

### [2.0.7](https://github.com/Fdawgs/fastify-disablecache/compare/v2.0.6...v2.0.7) (2022-03-28)


### Documentation

* improve readability ([b312864](https://github.com/Fdawgs/fastify-disablecache/commit/b312864c7961f478bd9727765c3d04e0ed770538))


### Continuous Integration

* add job step names, workflow comments, and whitespace ([2ca950a](https://github.com/Fdawgs/fastify-disablecache/commit/2ca950ae53af22e3f19c9e39637fc91338653608))
* **codeql-analysis:** remove unused autobuild step ([b507d07](https://github.com/Fdawgs/fastify-disablecache/commit/b507d07be21720b0e0e367bf6cba2521a04335c8))
* **codeql:** grant minimum permissions to run; rename file ([#145](https://github.com/Fdawgs/fastify-disablecache/issues/145)) ([980a082](https://github.com/Fdawgs/fastify-disablecache/commit/980a082df5522fba458d57a977d08a81c06bf748))
* only save pr number artifact for dependabot ([426767d](https://github.com/Fdawgs/fastify-disablecache/commit/426767db60766c678b074e754a263b7aabb170ec))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 37.9.7 to 38.0.6 ([620a0f1](https://github.com/Fdawgs/fastify-disablecache/commit/620a0f14067066e94a36b07037587682cc12c2d9))
* **deps:** bump actions/checkout from 2 to 3 ([b1e5b7d](https://github.com/Fdawgs/fastify-disablecache/commit/b1e5b7d447d6f4adb9adc1bcb36dff45f5ce3d8b))
* **deps:** bump actions/checkout from 2 to 3 ([96a9d84](https://github.com/Fdawgs/fastify-disablecache/commit/96a9d842e230a119f02fc6544d67d85aa98ca027))


### Miscellaneous

* **index:** use `res` instead of `reply` for response object ([#148](https://github.com/Fdawgs/fastify-disablecache/issues/148)) ([145c76d](https://github.com/Fdawgs/fastify-disablecache/commit/145c76d81b2b504918e68bc9a89fcba8992eff6b))
* **scripts:** remove redundant gitkraken fix from prepare script ([168740e](https://github.com/Fdawgs/fastify-disablecache/commit/168740e1309e634f81ec4bd53631250faaa7998d))
* **scripts:** use shorter arg aliases; remove debugging args from jest ([8cef653](https://github.com/Fdawgs/fastify-disablecache/commit/8cef6531aafe68a24cd2ae51b88033b94811871d))

### [2.0.6](https://github.com/Fdawgs/fastify-disablecache/compare/v2.0.5...v2.0.6) (2022-02-25)


### Documentation

* **readme:** clarify on cache-control usage ([#136](https://github.com/Fdawgs/fastify-disablecache/issues/136)) ([370b589](https://github.com/Fdawgs/fastify-disablecache/commit/370b589763997d588135f821fd79340d06e20af6))
* **readme:** fix nocache link; add header description section ([96bfe59](https://github.com/Fdawgs/fastify-disablecache/commit/96bfe5920cd5a8db535eb0d03ad94e46421289a7))
* **readme:** reorder intro section for clarity ([aada401](https://github.com/Fdawgs/fastify-disablecache/commit/aada401d8277dee5bda7ac1eb492bbc71b0210d9))


### Miscellaneous

* **.github:** remove trailing whitespace ([46f4660](https://github.com/Fdawgs/fastify-disablecache/commit/46f4660b556e950d6ce3aa875ade05b4a6ac1a45))


### Dependencies

* **dependabot:** ignore minor and patch commit-lint updates ([#133](https://github.com/Fdawgs/fastify-disablecache/issues/133)) ([3a516ab](https://github.com/Fdawgs/fastify-disablecache/commit/3a516ab43232c5a0b7bc25cfd3841c576125ff4c))
* **dependabot:** major tags no longer need ignore support ([3ede58b](https://github.com/Fdawgs/fastify-disablecache/commit/3ede58bc2b251e54281da2c4d32dfbd367cf84f9))
* **dependabot:** use default open-pull-requests-limit value ([3702d8c](https://github.com/Fdawgs/fastify-disablecache/commit/3702d8c8fbab833c30adc31be2c3a8124be0cc70))
* **deps-dev:** bump dev dependencies ([0e71bf0](https://github.com/Fdawgs/fastify-disablecache/commit/0e71bf0be01c2a85947e67516cb0c56578458198))
* **deps-dev:** bump eslint-plugin-jest from 25.7.0 to 26.0.0 ([f6d8fad](https://github.com/Fdawgs/fastify-disablecache/commit/f6d8fad9f030a13c0418922a857368a31ebc9cd6))
* **deps-dev:** unpin prettier version ([0887ec1](https://github.com/Fdawgs/fastify-disablecache/commit/0887ec1961adc0214cf26ddead40f95260ab0434))
* **deps:** bump actions/github-script from 5 to 6 ([5731aa3](https://github.com/Fdawgs/fastify-disablecache/commit/5731aa3f0de0f04625771b740bde08ae4468ab32))
* **deps:** bump actions/setup-node from 2 to 3 ([c8e7916](https://github.com/Fdawgs/fastify-disablecache/commit/c8e791634b2897e7c0becd3dc25a21ef0d34331d))

### [2.0.5](https://github.com/Fdawgs/fastify-disablecache/compare/v2.0.4...v2.0.5) (2022-01-07)


### Documentation

* **coc:** reduce verbosity ([d144c77](https://github.com/Fdawgs/fastify-disablecache/commit/d144c77376c75ac5808064ea0d8ebafb308617b8))
* **contributing:** add mention of husky pre-commit hook ([5aa3a70](https://github.com/Fdawgs/fastify-disablecache/commit/5aa3a700574882df1ab1d7f24da3f46d0e0ea1d8))
* **contributing:** add step for `lint:licenses` script ([25075f8](https://github.com/Fdawgs/fastify-disablecache/commit/25075f83460808dd7a45a5fbb112092995f3578e))


### Miscellaneous

* **.prettierrc:** only enable `bracketSameLine` for html ([#106](https://github.com/Fdawgs/fastify-disablecache/issues/106)) ([929c7ff](https://github.com/Fdawgs/fastify-disablecache/commit/929c7ff944de92f4583e5d5d534e4539513bc2fd))
* **husky/pre-commit:** add `lint:licenses` script ([#116](https://github.com/Fdawgs/fastify-disablecache/issues/116)) ([8478448](https://github.com/Fdawgs/fastify-disablecache/commit/8478448db70ca46382c9d405c74c7b1a0002fda2))
* ignore `.yarnclean` ([#117](https://github.com/Fdawgs/fastify-disablecache/issues/117)) ([173db8e](https://github.com/Fdawgs/fastify-disablecache/commit/173db8ea516213482be0fd1a40866e4cb080efd3))
* **index:** fix `server` jsdoc tag param type ([07befc1](https://github.com/Fdawgs/fastify-disablecache/commit/07befc13a6a45ad59b6ff9eb0831924df1edce3e))


### Continuous Integration

* **cd:** stop `prepare` script running ([#108](https://github.com/Fdawgs/fastify-disablecache/issues/108)) ([742e93f](https://github.com/Fdawgs/fastify-disablecache/commit/742e93f1d7404ded46a7d69bf9a752c4e393d6fe))
* **ci:** do not run clean-up on draft prs ([35aa923](https://github.com/Fdawgs/fastify-disablecache/commit/35aa923ac1492f6501d2a57f4f56312271689200))
* remove spellcheck workflow ([#128](https://github.com/Fdawgs/fastify-disablecache/issues/128)) ([cfb722f](https://github.com/Fdawgs/fastify-disablecache/commit/cfb722f70877357e120117e1ee0354ffeceea63c))
* **spell-check:** do not run on draft prs ([c2a0cb5](https://github.com/Fdawgs/fastify-disablecache/commit/c2a0cb5f5adee4c2d62159088bff8108ea9177fb))
* trigger workflows when drafts marked as "ready to review" ([#110](https://github.com/Fdawgs/fastify-disablecache/issues/110)) ([ad73015](https://github.com/Fdawgs/fastify-disablecache/commit/ad73015b6f85d10c2cb886d03df34a780b66eaf7))


### Dependencies

* **dependabot:** ignore minor and patch github-actions updates ([#111](https://github.com/Fdawgs/fastify-disablecache/issues/111)) ([a413612](https://github.com/Fdawgs/fastify-disablecache/commit/a4136123b1a8b18a1bc4a8e0a677fa6002c41595))
* **dependabot:** ignore minor and patch release-please-action updates ([#120](https://github.com/Fdawgs/fastify-disablecache/issues/120)) ([c5a783c](https://github.com/Fdawgs/fastify-disablecache/commit/c5a783c6273ab8a897ccac15ffa2be6b6ff5a1d5))
* **deps-dev:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([bb90b84](https://github.com/Fdawgs/fastify-disablecache/commit/bb90b84a16de9d3a0e7d99bcfc0f5e6cfb3475ab))
* **deps-dev:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([8f8a797](https://github.com/Fdawgs/fastify-disablecache/commit/8f8a797ec70da855e40bf995c584dd28cbb1edaf))
* **deps-dev:** bump @commitlint/cli from 15.0.0 to 16.0.1 ([d466f26](https://github.com/Fdawgs/fastify-disablecache/commit/d466f2633fc0e47dbb7f56dd694bc7d670f61e01))
* **deps-dev:** bump @commitlint/config-conventional ([a90f6fd](https://github.com/Fdawgs/fastify-disablecache/commit/a90f6fd564265f1d09a26a3d0a28d2ba008e1d78))
* **deps-dev:** bump @commitlint/config-conventional ([f72d44b](https://github.com/Fdawgs/fastify-disablecache/commit/f72d44b1bd07b21201c53acfa5ac23a4bbca4fe1))
* **deps-dev:** bump @commitlint/config-conventional ([cf4d179](https://github.com/Fdawgs/fastify-disablecache/commit/cf4d179bec86998484b6f27ba1e98f094e69ec2c))
* **deps-dev:** bump eslint from 7.32.0 to 8.6.0 ([48fa57c](https://github.com/Fdawgs/fastify-disablecache/commit/48fa57c486bfa80d06fafe164b8ca721f2bc013d))
* **deps-dev:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([4163e42](https://github.com/Fdawgs/fastify-disablecache/commit/4163e425af6e848aebeb6c338cc876f50f759e01))
* **deps-dev:** bump eslint-plugin-promise from 5.2.0 to 6.0.0 ([d3756b7](https://github.com/Fdawgs/fastify-disablecache/commit/d3756b7ade1e8fc91d4121c8ae970b951cbf96ba))
* **deps-dev:** bump prettier from 2.4.1 to 2.5.0 ([efc5dbf](https://github.com/Fdawgs/fastify-disablecache/commit/efc5dbfd3857382cfe09e6c1c2b184910ad45b9b))
* **deps-dev:** bump prettier from 2.5.0 to 2.5.1 ([370af01](https://github.com/Fdawgs/fastify-disablecache/commit/370af01513d4e807a9da3af1b4c2f6e089bcddb9))
* **deps:** bump GoogleCloudPlatform/release-please-action ([e33ed1e](https://github.com/Fdawgs/fastify-disablecache/commit/e33ed1e460a191fc41ed6bc4d3fc11987ad7f968))
* **deps:** bump GoogleCloudPlatform/release-please-action from 2 to 3 ([5955c95](https://github.com/Fdawgs/fastify-disablecache/commit/5955c955a78c1e3f20b6d7ea45f8f0a680923139))

### [2.0.4](https://www.github.com/Fdawgs/fastify-disablecache/compare/v2.0.3...v2.0.4) (2021-10-29)


### Continuous Integration

* **automerge:** update location of octokit rest methods ([c489d5a](https://www.github.com/Fdawgs/fastify-disablecache/commit/c489d5af74f704049b2cf1fbf5c855400ada8f41))
* **ci:** revert to workflow-run-clean-action from github concurrency ([370196e](https://www.github.com/Fdawgs/fastify-disablecache/commit/370196e54e17f84b4f1697e29073af1b40a8a3fd))


### Improvements

* **index:** sort headers alphabetically ascending ([3861633](https://www.github.com/Fdawgs/fastify-disablecache/commit/3861633f19e27ca6f25fcf287fb04f88a558852a))


### Miscellaneous

* **.eslintrc:** remove inaccurate sourcetype ([#93](https://www.github.com/Fdawgs/fastify-disablecache/issues/93)) ([becd14a](https://www.github.com/Fdawgs/fastify-disablecache/commit/becd14af2470ac6e5d0012ce4831ff47beaa187e))
* **.eslintrc:** remove redundant `impliedStrict` option ([#95](https://www.github.com/Fdawgs/fastify-disablecache/issues/95)) ([d0d5c17](https://www.github.com/Fdawgs/fastify-disablecache/commit/d0d5c173e5101fcd01e967e2ab04b0d6645f4618))
* **.eslintrc:** set correct ecmascript version ([#83](https://www.github.com/Fdawgs/fastify-disablecache/issues/83)) ([6041b8a](https://www.github.com/Fdawgs/fastify-disablecache/commit/6041b8af20f49011b359f0799f01a17081bc8788))
* **.husky/.gitignore:** remove now redundant file ([6de6b0f](https://www.github.com/Fdawgs/fastify-disablecache/commit/6de6b0f5f96d08aa13c0f4dc2fc8cb215f24599d))
* **.prettierrc:** enable `bracketsameline` option ([f94d54d](https://www.github.com/Fdawgs/fastify-disablecache/commit/f94d54d0d7d7f99b0abd5e04a6986b08c9f0e557))
* **.prettierrc:** override defaults for html, css, and scss files ([#84](https://www.github.com/Fdawgs/fastify-disablecache/issues/84)) ([6cbb18f](https://www.github.com/Fdawgs/fastify-disablecache/commit/6cbb18fb0bece40271213a8778153b5c488f9f33))
* **.vscode:** add `mhutchie.git-graph` extension ([ac4661e](https://www.github.com/Fdawgs/fastify-disablecache/commit/ac4661e366f8e7a7f9d3d47895cb270779036fad))
* **.vscode:** remove deprecated settings ([#94](https://www.github.com/Fdawgs/fastify-disablecache/issues/94)) ([ae36f6c](https://www.github.com/Fdawgs/fastify-disablecache/commit/ae36f6ce90ae18d163ff5aa9f6b29691dfcecc08))


### Documentation

* bump coc from v2.0.0 to v2.1.0 ([#96](https://www.github.com/Fdawgs/fastify-disablecache/issues/96)) ([10a74fc](https://www.github.com/Fdawgs/fastify-disablecache/commit/10a74fc7f5f0ca2f350f81dfb5b9906fd4b600c8))


### Dependencies

* **deps-dev:** add eslint-plugin-security-node ([#85](https://www.github.com/Fdawgs/fastify-disablecache/issues/85)) ([cb43451](https://www.github.com/Fdawgs/fastify-disablecache/commit/cb43451f29b0dc0b52413fb684d6ba8bda986391))
* **deps-dev:** bump dev dependencies ([#103](https://www.github.com/Fdawgs/fastify-disablecache/issues/103)) ([f6f03bb](https://www.github.com/Fdawgs/fastify-disablecache/commit/f6f03bbf658edb958483c7f8c7493db6cfa88163))
* **deps-dev:** bump eslint-plugin-jest from 24.7.0 to 25.2.2 ([ffdf87c](https://www.github.com/Fdawgs/fastify-disablecache/commit/ffdf87cfd843bc630a108cbfc2fdacc910cf7c06))
* **deps-dev:** bump eslint-plugin-jsdoc from 36.1.1 to 37.0.3 ([6903ce1](https://www.github.com/Fdawgs/fastify-disablecache/commit/6903ce196cd1177464b6c0894c563921f7f61bd7))
* **deps-dev:** bump prettier from 2.3.2 to 2.4.1 ([5d09425](https://www.github.com/Fdawgs/fastify-disablecache/commit/5d09425833d65b49acbc71b21bc257ae1a06f0c0))
* **deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([06e070a](https://www.github.com/Fdawgs/fastify-disablecache/commit/06e070a84735bb73f339bbd3c4d1c76573468ba4))
* **deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([aefdbb9](https://www.github.com/Fdawgs/fastify-disablecache/commit/aefdbb92b0aac1704d8ca8129d3b7b1d497368e7))
* **deps:** bump GoogleCloudPlatform/release-please-action ([9977b09](https://www.github.com/Fdawgs/fastify-disablecache/commit/9977b09f542837010a42895a37ec52dd4dd0340a))
* **deps:** bump GoogleCloudPlatform/release-please-action ([ee927de](https://www.github.com/Fdawgs/fastify-disablecache/commit/ee927de37c71971c5b378b082880c1e1dd2817cf))
* **deps:** bump wagoid/commitlint-github-action from 4.1.1 to 4.1.5 ([c6b71d9](https://www.github.com/Fdawgs/fastify-disablecache/commit/c6b71d948c84323b770437a0e4d0b1e57dde9362))
* **deps:** bump wagoid/commitlint-github-action from 4.1.5 to 4.1.9 ([429d412](https://www.github.com/Fdawgs/fastify-disablecache/commit/429d41286b8438cceb4f76d4a27ddb66ab88da4e))

### [2.0.3](https://www.github.com/Fdawgs/fastify-disablecache/compare/v2.0.2...v2.0.3) (2021-09-06)


### Miscellaneous

* **.github:** use new YAML configured GitHub issue forms ([#79](https://www.github.com/Fdawgs/fastify-disablecache/issues/79)) ([8111d0f](https://www.github.com/Fdawgs/fastify-disablecache/commit/8111d0fa35f207ef71b5fc253396c831e236b716))
* **vscode:** disable red hat telemetry ([044e7c8](https://www.github.com/Fdawgs/fastify-disablecache/commit/044e7c8e640b826744767c40b3114976bd82e028))
* **vscode:** remove user space config setting ([d654d6a](https://www.github.com/Fdawgs/fastify-disablecache/commit/d654d6a73d04a3b92ceea4cf1aa366c44366c84d))


### Continuous Integration

* **ci:** replace workflow-run-cleanup-action with github concurrency ([#80](https://www.github.com/Fdawgs/fastify-disablecache/issues/80)) ([660aeb2](https://www.github.com/Fdawgs/fastify-disablecache/commit/660aeb2db5e0a99eca45d63c99baf6bc0a01c408))
* **link-check:** reduce frequency from daily to monthly ([#64](https://www.github.com/Fdawgs/fastify-disablecache/issues/64)) ([daae963](https://www.github.com/Fdawgs/fastify-disablecache/commit/daae963b1452102b401f7c162925cd84c9fa1b8d))


### Dependencies

* add .npmignore; reduce package size from 18.9kB to 8.7kB ([#81](https://www.github.com/Fdawgs/fastify-disablecache/issues/81)) ([dd849f8](https://www.github.com/Fdawgs/fastify-disablecache/commit/dd849f88ddeb1826ef86b70018465d23f9fbc6cb))
* **deps-dev:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([986fe61](https://www.github.com/Fdawgs/fastify-disablecache/commit/986fe614f7df22de9d2041a515df73bf1515001c))
* **deps-dev:** bump @commitlint/config-conventional ([6885d7c](https://www.github.com/Fdawgs/fastify-disablecache/commit/6885d7cfdef0be72ed67f1fc4de66b169838671a))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.5.1 to 36.0.6 ([0dea4f4](https://www.github.com/Fdawgs/fastify-disablecache/commit/0dea4f474f8ec6e08417ce02eb1eec2f2f6f610e))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([e871e22](https://www.github.com/Fdawgs/fastify-disablecache/commit/e871e225a1e83d9f14db5f9b664c1a195431f267))
* **deps-dev:** bump prettier from 2.3.1 to 2.3.2 ([ce2a3ec](https://www.github.com/Fdawgs/fastify-disablecache/commit/ce2a3ec788178914676c0ae8330e62fa31272312))
* **deps:** bump actions/github-script from 4.0.2 to 4.1 ([6ddce4a](https://www.github.com/Fdawgs/fastify-disablecache/commit/6ddce4a06498771c04a8e0c3f08de6c6174e394c))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([3a8d2ab](https://www.github.com/Fdawgs/fastify-disablecache/commit/3a8d2ab24a8e6965b89b8ecafa77589ab59fc6e1))
* **deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([574c081](https://www.github.com/Fdawgs/fastify-disablecache/commit/574c081f2dc6ca08bc365e50d90df42b901b14af))
* **deps:** bump actions/setup-node from 2.3.0 to 2.4.0 ([4f16c78](https://www.github.com/Fdawgs/fastify-disablecache/commit/4f16c7888e017aa0d8b517bc7ae1646f8cdc04a8))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([83505e3](https://www.github.com/Fdawgs/fastify-disablecache/commit/83505e3670574f74e32b41fb8f09c9a3149f080d))
* **deps:** bump GoogleCloudPlatform/release-please-action ([3a62368](https://www.github.com/Fdawgs/fastify-disablecache/commit/3a623680eea7e7ff587d059de111869624b24ae7))
* **deps:** bump wagoid/commitlint-github-action from 3.1.4 to 4.1.1 ([50a5f36](https://www.github.com/Fdawgs/fastify-disablecache/commit/50a5f364af3ba22a2cac7c55fe1ed2437053652a))

### [2.0.2](https://www.github.com/Fdawgs/fastify-disablecache/compare/v2.0.1...v2.0.2) (2021-06-17)


### Bug Fixes

* **index:** re-add 'must-revalidate' to `cache-control` header ([#61](https://www.github.com/Fdawgs/fastify-disablecache/issues/61)) ([2b814aa](https://www.github.com/Fdawgs/fastify-disablecache/commit/2b814aa45720d2ea4877a9928376e80511089486)), thanks @anthony-telljohann


### Dependencies

* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([3fb08a1](https://www.github.com/Fdawgs/fastify-disablecache/commit/3fb08a14835934a6eabbbfe8bc539c4aaf427ee0))

### [2.0.1](https://www.github.com/Fdawgs/fastify-disablecache/compare/v2.0.0...v2.0.1) (2021-06-16)


### Bug Fixes

* **index:** update `Cache-Control` directives to disable cache ([#58](https://www.github.com/Fdawgs/fastify-disablecache/issues/58)) ([b8cb7dd](https://www.github.com/Fdawgs/fastify-disablecache/commit/b8cb7ddd7b8533735a6e7c69b975994958d356b9))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#50](https://www.github.com/Fdawgs/fastify-disablecache/issues/50)) ([6f1451b](https://www.github.com/Fdawgs/fastify-disablecache/commit/6f1451b033b17b6760c1874897ecf7b8393e294b))
* **workflows:** remove `stale.yml` ([052321b](https://www.github.com/Fdawgs/fastify-disablecache/commit/052321b7287abacf8e8f4f9365f1f95d370358f3))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([af8f6c9](https://www.github.com/Fdawgs/fastify-disablecache/commit/af8f6c9cfeb10bc206a5bd556801afa82e3867f5))
* fix key usage in `action/setup-node` ([76e1063](https://www.github.com/Fdawgs/fastify-disablecache/commit/76e1063b4353437447f9e50e2e1890aab9524d69))


### Documentation

* **readme:** grammar and wordiness fixes ([4897d71](https://www.github.com/Fdawgs/fastify-disablecache/commit/4897d710f6be74d3b5be280d377d86f3961973ff))
* **readme:** update contributing section ([6784210](https://www.github.com/Fdawgs/fastify-disablecache/commit/67842109b95b9ed12adb197ba9961083e1c970a7))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 33.3.0 to 35.1.2 ([ca27f43](https://www.github.com/Fdawgs/fastify-disablecache/commit/ca27f4329545a1079f706fe357dd69218d29d4e8))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([8f443d6](https://www.github.com/Fdawgs/fastify-disablecache/commit/8f443d6991e60df2c3c9a34d620a3d2ab3b2da76))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([ccb6c1b](https://www.github.com/Fdawgs/fastify-disablecache/commit/ccb6c1b4f295c61d61e4dba2491e38db73af5346))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([be6d0d8](https://www.github.com/Fdawgs/fastify-disablecache/commit/be6d0d8342b2c592b64bedc5866d23805084bd2b))
* **deps:** bump GoogleCloudPlatform/release-please-action ([7d05ec5](https://www.github.com/Fdawgs/fastify-disablecache/commit/7d05ec59242f1725e204dcca35f49c08e6b41994))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([32fd2b0](https://www.github.com/Fdawgs/fastify-disablecache/commit/32fd2b03a98ee74be123314d0f583b97393de81d))

## [2.0.0](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.6...v2.0.0) (2021-04-30)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Continuous Integration

* add cleanup-run job ([c67a547](https://www.github.com/Fdawgs/fastify-disablecache/commit/c67a5473fbc0392bca9fa50befabd8734588dbf7))
* add nodejs v16 to unit test matrix ([1edc6e6](https://www.github.com/Fdawgs/fastify-disablecache/commit/1edc6e6567e9d32015b118a43ed827924d86ea59))
* do not run coveralls steps/jobs on forks ([80b41a8](https://www.github.com/Fdawgs/fastify-disablecache/commit/80b41a8b2169340aa80cb953f6749a77a3780e8c))
* **link-check:** fix skip regex ([1e28e0e](https://www.github.com/Fdawgs/fastify-disablecache/commit/1e28e0e253e1efde49290590d7f0137ede089b94))


### Miscellaneous

* remove support for nodejs v10 ([b9d8df6](https://www.github.com/Fdawgs/fastify-disablecache/commit/b9d8df6437b6585a9ad89a8642aff457fa500a6e))
* update descriptions ([2ebb643](https://www.github.com/Fdawgs/fastify-disablecache/commit/2ebb643643ac5950fbe2d4b51be991763374cd72))


### Documentation

* grammar and readability fixes ([3b94c36](https://www.github.com/Fdawgs/fastify-disablecache/commit/3b94c36fa79b1c07917f5d9f2b5910cdd2538134))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.4 to 33.0.0 ([2b6db53](https://www.github.com/Fdawgs/fastify-disablecache/commit/2b6db53b4b2d718ee7469e62d63832bfd72655c1))
* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([2450e9f](https://www.github.com/Fdawgs/fastify-disablecache/commit/2450e9f43edd1b24c473323389a3957ae14294fd))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([6b53317](https://www.github.com/Fdawgs/fastify-disablecache/commit/6b5331738aeec0d4536c9df35638f8464cb21ab8))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([b352e90](https://www.github.com/Fdawgs/fastify-disablecache/commit/b352e9002258aa6d7e755ec91044c5d1505d8e70))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([fdd2b61](https://www.github.com/Fdawgs/fastify-disablecache/commit/fdd2b611b19036f9deffc76375aa5953b15d542d))
* **deps:** bump GoogleCloudPlatform/release-please-action ([7fc4c9c](https://www.github.com/Fdawgs/fastify-disablecache/commit/7fc4c9c2f638efe5f9a24024648beff4dd45cdb5))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.1.0 ([0ae1b92](https://www.github.com/Fdawgs/fastify-disablecache/commit/0ae1b928de8e5eb559b91ebbb2ac42ec14fe248f))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([b370d57](https://www.github.com/Fdawgs/fastify-disablecache/commit/b370d57007557ad66d6337b431576e02ad1bf395))

### [1.0.6](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.5...v1.0.6) (2021-03-30)


### Documentation

* **changelog:** add h1 header ([d9ab1ff](https://www.github.com/Fdawgs/fastify-disablecache/commit/d9ab1fffac083e2589161d9c89d8f735c6f6f30f))


### Miscellaneous

* **package:** move prettier config to separate file ([6acf338](https://www.github.com/Fdawgs/fastify-disablecache/commit/6acf338b6952cde7dd7392bd7226dedfe7e410f0))
* **prettier:** create .prettierignore ([6e7a390](https://www.github.com/Fdawgs/fastify-disablecache/commit/6e7a390a322d82213202b74b3b39c9cd0fc2ce57))
* **prettierignore:** add lock files ([d739db1](https://www.github.com/Fdawgs/fastify-disablecache/commit/d739db165e63d084dee6e07bfabf89420f4a4edc))
* **workflows:** rename ci and perf sections ([60783a0](https://www.github.com/Fdawgs/fastify-disablecache/commit/60783a0d5d95c10e4492de996f8026fd93a43f7d))


### Continuous Integration

* **automerge:** move automerge job into new workflow ([f16c26f](https://www.github.com/Fdawgs/fastify-disablecache/commit/f16c26f528c153175cf00d57d40433a0507c65b6))
* **ci:** ignore dependabot prs for commit message linting ([38fcc82](https://www.github.com/Fdawgs/fastify-disablecache/commit/38fcc82605942da4027f6a52f63c18a5f47cac16))
* **stale:** shorten workflow name ([c5d7ab5](https://www.github.com/Fdawgs/fastify-disablecache/commit/c5d7ab5a2f1a1de165ed9b810fe0b4d6fb64e6a7))
* **workflows:** fix release types to account for bots ([915459f](https://www.github.com/Fdawgs/fastify-disablecache/commit/915459f08b2ecabd3f406a006684c9a2a29f3f08))
* **workflows:** move release steps into `cd` workflow ([b8743a3](https://www.github.com/Fdawgs/fastify-disablecache/commit/b8743a393242ae2584bfe4a6fb9364711f335861))
* **workflows:** run only on push and pulls to master branch ([d4f685e](https://www.github.com/Fdawgs/fastify-disablecache/commit/d4f685ef5deb87693005efa87fc1c0b7b72ed51b))


### Dependencies

* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([b23680a](https://www.github.com/Fdawgs/fastify-disablecache/commit/b23680a954f4a1a22957a0cd41d5113e597ab1c9))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([f641b97](https://www.github.com/Fdawgs/fastify-disablecache/commit/f641b9704cf737d2ea0e03ef583c66529132dac1))
* **deps:** bump GoogleCloudPlatform/release-please-action ([5ad997a](https://www.github.com/Fdawgs/fastify-disablecache/commit/5ad997a4f5df664966ec811adb8563590bbf786d))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([0f2b264](https://www.github.com/Fdawgs/fastify-disablecache/commit/0f2b2643e4578b8640ccc70724662d6933ef94fe))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([eab4a3c](https://www.github.com/Fdawgs/fastify-disablecache/commit/eab4a3ce13c0568fa01a118b4095d3e5c990c39f))

### [1.0.5](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.4...v1.0.5) (2021-03-01)

### Documentation

-   **contributing:** add documentation style ([ea3f3c9](https://www.github.com/Fdawgs/fastify-disablecache/commit/ea3f3c918dc6f8ed04216872bd49dcf2fd1efc8b))
-   **readme:** correct spelling ([43b1fb6](https://www.github.com/Fdawgs/fastify-disablecache/commit/43b1fb6eb8d359b8d680bd1993738acb38500e13))
-   **readme:** fix broken link ([eeb49c5](https://www.github.com/Fdawgs/fastify-disablecache/commit/eeb49c5bd596c3c892b5827b0c3943a98d4cf727))
-   **readme:** shorten links ([8f0402d](https://www.github.com/Fdawgs/fastify-disablecache/commit/8f0402d0ec43ab4334eb16f5895a94cdaf2e3719))

### Miscellaneous

-   add 0bsd and unlicense to list of allowed licenses ([16e5418](https://www.github.com/Fdawgs/fastify-disablecache/commit/16e541839150f1a00f662205f2f20418accc9d73))
-   add apache-2.0 to list of allowed licenses ([355ebf0](https://www.github.com/Fdawgs/fastify-disablecache/commit/355ebf003e911e4d103b37b3615ed007202aaae8))
-   add commit-lint job ([a796f68](https://www.github.com/Fdawgs/fastify-disablecache/commit/a796f683ca40e88858122f20ed5b718514e070a4))
-   add commitlint husky `commit-msg` hook ([ea8c5b5](https://www.github.com/Fdawgs/fastify-disablecache/commit/ea8c5b52f0a7c4fe33c138d970f90b3bed18555b))
-   add link check workflow ([8361653](https://www.github.com/Fdawgs/fastify-disablecache/commit/8361653c210eb811a9cf7b8f26dcc992313d80ab))
-   automate release and changelog generation ([3c2c6bf](https://www.github.com/Fdawgs/fastify-disablecache/commit/3c2c6bfadabed52a786d9ba26e90593aa25bb8ee))
-   check direct dependency licenses only ([99d9b28](https://www.github.com/Fdawgs/fastify-disablecache/commit/99d9b28efce6e31c196ae0e0be8290dc30be8acc))
-   **codeql:** remove autobuild action ([c56a6e7](https://www.github.com/Fdawgs/fastify-disablecache/commit/c56a6e765683bebcc32edac455ae25570170fc35))
-   **dependabot:** ignore husky updates ([5b7528c](https://www.github.com/Fdawgs/fastify-disablecache/commit/5b7528c4369ba69a2a1d410b2015397b1c1b1eb6))
-   **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#20](https://www.github.com/Fdawgs/fastify-disablecache/issues/20)) ([03ffa38](https://www.github.com/Fdawgs/fastify-disablecache/commit/03ffa38bcef2fa18c6d9108b62ef0a621e193be6))
-   **deps-dev:** bump @commitlint/config-conventional ([f7e3805](https://www.github.com/Fdawgs/fastify-disablecache/commit/f7e3805b2c1518884d4f6049aeb8c45ae8118d87))
-   **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([479a47b](https://www.github.com/Fdawgs/fastify-disablecache/commit/479a47bf19ccb4fff57b23327652e0aef5ab7171))
-   **deps-dev:** bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([#16](https://www.github.com/Fdawgs/fastify-disablecache/issues/16)) ([e17488b](https://www.github.com/Fdawgs/fastify-disablecache/commit/e17488ba09dcfc974e7c4889829e8858280ffc6d))
-   **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([#15](https://www.github.com/Fdawgs/fastify-disablecache/issues/15)) ([3335bd5](https://www.github.com/Fdawgs/fastify-disablecache/commit/3335bd5114a4cdc4045a82fc89bfaffed9d03ccb))
-   **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([93422e6](https://www.github.com/Fdawgs/fastify-disablecache/commit/93422e6993bab22f5151203d673e07bc38360561))
-   license checker tweak ([9d3f824](https://www.github.com/Fdawgs/fastify-disablecache/commit/9d3f82464a4204e8a970d013ed87fec98dc7079f))
-   **linkcheck:** extend ignored urls ([3ba2af8](https://www.github.com/Fdawgs/fastify-disablecache/commit/3ba2af881dd3a9a0c87ac7b51cdbf9e1ad02e44a))
-   **lint-check:** compress patterns ([b936d36](https://www.github.com/Fdawgs/fastify-disablecache/commit/b936d367c4b506118a1efb697047c2834d164159))
-   **readme:** add linebreaks between badges ([5a7835c](https://www.github.com/Fdawgs/fastify-disablecache/commit/5a7835cc3134cf1afbacd975b3f19e5412056395))
-   replace stalebot with github action ([b8c2bf8](https://www.github.com/Fdawgs/fastify-disablecache/commit/b8c2bf87d76982e13b1b8bcd2e629095e8c254db))
-   replace typo ci app with action ([17d74b1](https://www.github.com/Fdawgs/fastify-disablecache/commit/17d74b1cf016ec4e4773c564c5ea13d25b2c152c))
-   require `commit-lint` job to pass before automerge ([d19b53e](https://www.github.com/Fdawgs/fastify-disablecache/commit/d19b53e68607ef5520f63dba3b4ad8438d825483))
-   **scripts:** rename `jest-coverage` to `jest:coverage` ([962ad6f](https://www.github.com/Fdawgs/fastify-disablecache/commit/962ad6f3f61fb9915198184ade2177eacb6a4a5b))
-   shorten husky pre-push script ([b35aa25](https://www.github.com/Fdawgs/fastify-disablecache/commit/b35aa2546fcba689f24698a3759fb52eef19eaae))
-   **tests:** use apa header style for describe name params ([dcd6651](https://www.github.com/Fdawgs/fastify-disablecache/commit/dcd6651550174f7dc283febc490a73338248198f))
-   **vscode:** add `redhat.vscode-yaml` as recommended extension ([2904f20](https://www.github.com/Fdawgs/fastify-disablecache/commit/2904f2057f300c4f2f46d5e19b2190bd9085bc05))
-   **vscode:** add `updateImportsOnFileMove` setting ([cee4b73](https://www.github.com/Fdawgs/fastify-disablecache/commit/cee4b73933755c9c222825fef1c3d91b908ced1f))
-   **vscode:** add workspace settings and extensions ([1dda7c6](https://www.github.com/Fdawgs/fastify-disablecache/commit/1dda7c6ad90ad82eecd4ae3044d0e5f796d3a7b6))
-   **vscode:** remove conflicting prettier ext setting ([d50e57b](https://www.github.com/Fdawgs/fastify-disablecache/commit/d50e57bfc214995b0cc630221b0ce7b297b3f460))
-   **workflows:** rename spellcheck workflow ([46a6b1e](https://www.github.com/Fdawgs/fastify-disablecache/commit/46a6b1e9ceeb88fee2486eb24e9b26fb2dbca945))
-   **workflows:** tidy node-version syntax ([15cf4f1](https://www.github.com/Fdawgs/fastify-disablecache/commit/15cf4f104990ec1f32c4d4f0464a4032bd5ac19b))

### Dependencies

-   **dependabot:** set commit message prefix; lower pull limit ([8e0ca65](https://www.github.com/Fdawgs/fastify-disablecache/commit/8e0ca65c4bc8b00e61312f3a4ba2164b314de961))
-   **deps-dev:** pin husky major version ([0b671ad](https://www.github.com/Fdawgs/fastify-disablecache/commit/0b671ad30dc5ec2ea74da2f4854f5f7a2b273d3b))
-   **deps:** specify minor and hotfix versions ([a9f9cee](https://www.github.com/Fdawgs/fastify-disablecache/commit/a9f9ceebe672ba556d1de0b87456f18dccd758b5))

### [1.0.4](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.3...v1.0.4) (2021-02-01)

-   ci: add production license checking ([d32c299](https://github.com/Fdawgs/fastify-disablecache/commit/d32c299))
-   ci: remove cache actions as they use lock file ([3893a36](https://github.com/Fdawgs/fastify-disablecache/commit/3893a36))
-   ci: remove cache actions as they use lock file ([333782f](https://github.com/Fdawgs/fastify-disablecache/commit/333782f))
-   ci(github-actions): set `flag-name` for parallel coverage tests ([b8f2df5](https://github.com/Fdawgs/fastify-disablecache/commit/b8f2df5))
-   ci(github-actions): set semver for coverallsapp ([cec67d4](https://github.com/Fdawgs/fastify-disablecache/commit/cec67d4))
-   docs: bump coc from v1.4.0 to v2.0.0 ([f038609](https://github.com/Fdawgs/fastify-disablecache/commit/f038609))
-   docs(readme): reorder intro paragraph ([45c1de5](https://github.com/Fdawgs/fastify-disablecache/commit/45c1de5))
-   docs(readme): sentence restructure ([2dfdcc0](https://github.com/Fdawgs/fastify-disablecache/commit/2dfdcc0))
-   chore: stop excess coverage files being generated ([f2b8925](https://github.com/Fdawgs/fastify-disablecache/commit/f2b8925))
-   build(deps-dev): add husky for git hook handling ([776cd18](https://github.com/Fdawgs/fastify-disablecache/commit/776cd18))
-   build(deps-dev): remove coveralls, replaced by github action ([170ee64](https://github.com/Fdawgs/fastify-disablecache/commit/170ee64))
-   style: capitalise headings correctly ([be8a2bf](https://github.com/Fdawgs/fastify-disablecache/commit/be8a2bf))
-   style(ci): capitalise jobs and job step names ([74b2796](https://github.com/Fdawgs/fastify-disablecache/commit/74b2796))
-   style(readme): capitalise headings correctly ([73f94aa](https://github.com/Fdawgs/fastify-disablecache/commit/73f94aa))
-   style(readme): prettier badge shape ([1379c12](https://github.com/Fdawgs/fastify-disablecache/commit/1379c12))

### [1.0.3](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.2...v1.0.3) (2021-01-18)

-   fix: remove lockfile ([956b481](https://github.com/Fdawgs/fastify-disablecache/commit/956b481))
-   ci: ignore scripts on publish ([fb7546c](https://github.com/Fdawgs/fastify-disablecache/commit/fb7546c))
-   ci(typo-ci): add `ydh` to list of excluded words ([9f17731](https://github.com/Fdawgs/fastify-disablecache/commit/9f17731))

### [1.0.2](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.1...v1.0.2) (2021-01-17)

-   build: remove `yarn` as package manager, revert to `npm` ([fcc1463](https://github.com/Fdawgs/fastify-disablecache/commit/fcc1463))
-   build(deps-dev): bump dev dependencies ([8e32b0b](https://github.com/Fdawgs/fastify-disablecache/commit/8e32b0b))
-   refactor(index): use async rather than callback ([4eca59c](https://github.com/Fdawgs/fastify-disablecache/commit/4eca59c))
-   chore(package): add homepage and bug urls ([9403163](https://github.com/Fdawgs/fastify-disablecache/commit/9403163))
-   docs: add security.md ([7a919c1](https://github.com/Fdawgs/fastify-disablecache/commit/7a919c1))
-   docs: update contact email ([6c7fedd](https://github.com/Fdawgs/fastify-disablecache/commit/6c7fedd))
-   ci: remove redundant javascript dictionary ([1dcbda2](https://github.com/Fdawgs/fastify-disablecache/commit/1dcbda2))
-   test(index): remove redundant mock reset call ([63152cc](https://github.com/Fdawgs/fastify-disablecache/commit/63152cc))

### [1.0.1](https://www.github.com/Fdawgs/fastify-disablecache/compare/v1.0.0...v1.0.1) (2021-01-12)

-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.0.2 to 31.0.3 (#3) ([f8ad694](https://github.com/Fdawgs/fastify-disablecache/commit/f8ad694)), closes [#3](https://github.com/Fdawgs/fastify-disablecache/issues/3)
-   refactor: remove `nocache` dependency; set headers directly ([858aa94](https://github.com/Fdawgs/fastify-disablecache/commit/858aa94))
-   ci(github-actions): move codeql action to correct folder ([5e6655b](https://github.com/Fdawgs/fastify-disablecache/commit/5e6655b))

## 1.0.0 (2021-01-11)

-   Initial code commit ([ee1785c](https://github.com/Fdawgs/fastify-disablecache/commit/ee1785c))
-   Initial commit ([a804bec](https://github.com/Fdawgs/fastify-disablecache/commit/a804bec))
